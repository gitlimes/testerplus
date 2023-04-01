import { SupabaseAdmin } from '../lib/supabase-admin';

export async function getServerSideProps(ctx) {
	await SupabaseAdmin.rpc('increment_page_view', {
		page_slug: 'pretendo-rickroll',
	});

	const code = ctx.query.code;

	const token = 'bEbFiHMDvsWsxbdNYv4jQSlbXeXZlt' || await fetch('https://discord.com/api/oauth2/token', {
		method: 'POST',
		body: new URLSearchParams({
			client_id: process.env.DC_CLIENTID,
			client_secret: process.env.DC_CLIENTSECRET,
			code,
			grant_type: 'authorization_code',
			redirect_uri: 'https://testerplus.pretendo.network/auth',
			scope: 'identify',
		}).toString(),
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	}).then(res => res.json()).then(e => e.access_token);

	console.log('token', token);

	try {
		const userID = await fetch('https://discord.com/api/users/@me', {
			headers: {
				'Authorization': `Bearer ${token}`,
			},
		}).then(res => res.json()).then(e => e.id);

		console.log('uid', userID);

		const giveRole = await fetch(`https://discord.com/api/guilds/408718485913468928/members/${userID}/roles/1091398279998230668`, {
			method: 'PUT',
			headers: {
				'Authorization': `Bot ${process.env.DC_BOTTOKEN}`,
			},
		}).then(res => {
			console.log(res.status);
			return res.status;
		});
	} catch (e) {
		console.log(e);
	}

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

