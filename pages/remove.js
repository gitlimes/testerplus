import Title from '../components/Title/Title';
import Section from '../components/Section/Section';
import Caption from '../components/Caption/Caption';

import Link from 'next/link';

const authURL = 'https://discord.com/api/oauth2/authorize?client_id=1091492121774665778&redirect_uri=https%3A%2F%2Ftesterplus.pretendo.network%2Fremove&response_type=code&scope=identify';

export async function getServerSideProps(ctx) {
	const code = ctx.query.code;

	if (code) {
		const token = await fetch('https://discord.com/api/oauth2/token', {
			method: 'POST',
			body: new URLSearchParams({
				client_id: process.env.DC_CLIENTID,
				client_secret: process.env.DC_CLIENTSECRET,
				code,
				grant_type: 'authorization_code',
				redirect_uri: 'https://testerplus.pretendo.network/remove',
				scope: 'identify',
			}).toString(),
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		}).then(res => res.json()).then(e => e.access_token);

		console.log('token', token);

		let user;
		let takeRole;

		try {
			user = await fetch('https://discord.com/api/users/@me', {
				headers: {
					'Authorization': `Bearer ${token}`,
				},
			}).then(res => res.json()).then(e => e);

			console.log('uid', user);

			await fetch(`https://discord.com/api/guilds/408718485913468928/members/${user.id}/roles/1091398279998230668`, {
				method: 'DELETE',
				headers: {
					'Authorization': `Bot ${process.env.DC_BOTTOKEN}`,
				},
			}).then(res => {
				console.log(res.status);
				takeRole = res.status;
			});
		} catch (e) {
			console.log(e);
		}

		console.log(takeRole);

		return {
			props: {
				takeRole,
				user
			}
		};
	} else {
		return {
			redirect: {
				destination: authURL,
				permanent: false,
			}
		};
	}
}

export default function Auth({ takeRole, user }) {
	return (
		<Section>
			{takeRole === 204 ?
				<>
					<Title>Role removed successfully!</Title>
					<Caption>You may now close this window.</Caption>
				</>
				:
				<>
					<Title>Failed to remove role.</Title>
					<Caption>If <b>{user.username}#{user.discriminator}</b> is the correct account, <Link href="/remove">try again</Link>.</Caption>
				</>
			}
		</Section>
	);
}

