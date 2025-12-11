import Button from '../components/Button/Button';
import Title from '../components/Title/Title';
import Section from '../components/Section/Section';
import ShowcaseSection from '../components/ShowcaseSection/ShowcaseSection';
import Hero from '../components/Hero/Hero';

import Image from 'next/image';

import styles from './index.module.css';

import { useRouter } from 'next/router';

import { SupabaseAdmin } from '../lib/supabase-admin';

import juxtImage from '../public/assets/images/showcase/juxt.png';
import chatsImage from '../public/assets/images/showcase/chats.png';
import pcmouseImage from '../public/assets/images/showcase/pcmouse.png';
import wiiuchatImage from '../public/assets/images/showcase/wiiuchat.png';
import natureorsmthImage from '../public/assets/images/showcase/natureorsmth.jpg';
import Caption from '../components/Caption/Caption';
import Head from 'next/head';

const showcase = [{
	"title": "Discord channels!",
	"caption": "Get access to exclusive Discord chats, where you'll get to experience the unparalleled professionality, determination, and brilliance of our world-renowned team.",
	"image": chatsImage
},
{
	"title": "Juxt 4.",
	"caption": "Juxt 4 is our reimagining of Juxtaposition for the modern era. With a refreshingly modern design and in-game posting support, it's better than, like, anything Nintendo has ever made!",
	"image": juxtImage
},
{
	"title": "Earth.",
	"caption": "We made it ourselves.",
	"image": natureorsmthImage
}]

export async function getServerSideProps() {
	const {
		data: {
			[0]: { view_count: rickrolledUsers },
		},
	} = await SupabaseAdmin.from('pages')
		.select('view_count')
		.filter('slug', 'eq', 'pretendo-rickroll');

	return {
		props: {
			rickrolledUsers
		},
	};
}

export default function Home({ rickrolledUsers }) {
	const router = useRouter();
	return (
		<main>
			<Head>
				<title>Tester+ | Pretendo Network</title>
			</Head>
			<Section>
				<Hero />
			</Section>
			<div id="showcase">
				<Section className={styles.showcaseSection}>
					<Title>What does Tester+ offer me?</Title>
					<Caption>
						Here are some of the amazing features you&apos;ll get by joining Tester+ for <b>free</b>
					</Caption>
				</Section>
				{showcase.map((element, i) => {
					return (
						<ShowcaseSection
							title={element.title}
							caption={element.caption}
							image={element.image}
							isOdd={i % 2 !== 0}
							key={i}
						/>
					);
				})}
				<Section className={styles.showcaseTail} contentClassName={styles.content}>
					<Image
						src={wiiuchatImage}
						className={styles.image}
						alt=""
						sizes="(max-width: 840px) 80vw, 700px"
					/>
					<div className={styles.text}>
						<Title>And much more!</Title>
						<p className={styles.caption}>
							Click the button below to join {rickrolledUsers} other Testers+ and get access to many other cool features!
						</p>
						<Button
							isPrimary={true}
							onClick={(e) => {
								e.preventDefault();
								router.push('/auth');
							}}
						>
							Join Tester+
						</Button>
					</div>
				</Section>
			</div>
		</main>
	);
}
