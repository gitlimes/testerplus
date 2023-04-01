const { Client, Events, GatewayIntentBits } = require('discord.js');

import { SupabaseAdmin } from '../lib/supabase-admin';

export async function getServerSideProps(ctx) {
	await SupabaseAdmin.rpc('increment_page_view', {
		page_slug: 'pretendo-rickroll',
	});

	const code = ctx.query.code;

	const token = await fetch('https://discord.com/api/oauth2/token', {
		method: 'POST',
		body: new URLSearchParams({
			client_id: process.env.DC_CLIENTID,
			client_secret: process.env.DC_CLIENTSECRET,
			code,
			grant_type: 'authorization_code',
			redirect_uri: 'http://localhost:3000/auth',
			scope: 'identify',
		}).toString(),
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	}).then(res => res.json()).then(e => e.access_token);

	const userID = await fetch('https://discord.com/api/users/@me', {
		headers: {
			'Authorization': `Bearer ${token}`,
		},
	}).then(res => res.json()).then(e => e.id);

	console.log(userID);

	const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

	client.once(Events.ClientReady, async c => {
		try {
			const guild = await client.guilds.fetch('408718485913468928');
			const member = await guild.members.fetch(userID);
			const role = guild.roles.fetch('1091398279998230668');
			member.roles.add(role);
		} catch (e) {
			console.log(e);
		}
	});

	client.login(process.env.DC_BOTTOKEN);

	return {
		redirect: {
			destination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
			permanent: false,
		},
	};
}

export default function Auth() {
	return null;
}

