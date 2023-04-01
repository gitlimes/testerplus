import Image from 'next/image';
import n2ds from '/public/assets/images/n2ds.png';

import Title from '../Title/Title';
import Caption from '../Caption/Caption';
import Button from '../Button/Button';

import styles from './Hero.module.css';



export default function Hero() {
	return (
		<div className={styles.hero}>
			<div className={styles.info}>
				<h3 className={styles.subtitle}>Pretendo Network</h3>
				<Title element={'h1'}>Tester+</Title>
				<Caption>Tester+ is the <b>new</b> Pretendo Network supporter tier. And on this special day, we&apos;re giving it away for free! </Caption>
				<div className={styles.buttons}>
					<a href='#showcase'>
						<Button isPrimary={true}>Read more</Button>
					</a>{/*}
					<a href='https://discord.gg/pretendo' aria-label='A link to our Discord server'>
						<Button isIcon={true}><DiscordLogo size={32} weight="fill" /></Button>
					</a>
					<a href='https://github.com/pretendonetwork' aria-label='A link to our GitHub organization'>
						<Button isIcon={true}><GithubLogo size={32} weight="fill" /></Button>
					</a>
					<a href='/account/upgrade' aria-label='A link to our account upgrade page'>
						<Button isIcon={true}><Heart size={32} weight="fill" /></Button>
	</a>{*/}

				</div>
			</div>
			<div className={styles.images}>
				<div className={styles.lightCircle}>
					<svg alt="" xmlns="http://www.w3.org/2000/svg" width="839.371" height="893.406" viewBox="0 0 839.371 893.406">
						<g id="deco" transform="translate(-1064.958 -142.958)">
							<g id="Ellipse_12" data-name="Ellipse 12" transform="translate(1314 265)" fill="none" stroke="#9d6ff3" strokeWidth="26">
								<circle cx="56" cy="56" r="56" stroke="none"></circle>
								<circle cx="56" cy="56" r="69" fill="none"></circle>
							</g>
							<g id="Ellipse_22" data-name="Ellipse 22" transform="translate(1361 771)" fill="none" stroke="#59c9a5" strokeWidth="26">
								<circle cx="77" cy="77" r="77" stroke="none"></circle>
								<circle cx="77" cy="77" r="90" fill="none"></circle>
							</g>
							<g id="Ellipse_13" data-name="Ellipse 13" transform="translate(1801.405 273.601) rotate(1)" fill="none" stroke="#9d6ff3" strokeWidth="26">
								<circle cx="23" cy="23" r="23" stroke="none"></circle>
								<circle cx="23" cy="23" r="36" fill="none"></circle>
							</g>
							<g id="Ellipse_23" data-name="Ellipse 23" transform="matrix(0.839, -0.545, 0.545, 0.839, 1651.184, 609.237)" fill="none" stroke="#25224f" strokeWidth="26">
								<circle cx="78.5" cy="78.5" r="78.5" stroke="none"></circle>
								<circle cx="78.5" cy="78.5" r="91.5" fill="none"></circle>
							</g>
							<circle className={styles.animateDot} id="Ellipse_15" data-name="Ellipse 15" cx="23" cy="23" r="23" transform="translate(1586.473 353) rotate(-45)" fill="#9d6ff3"></circle>
							<ellipse className={styles.animateDot} id="Ellipse_21" data-name="Ellipse 21" cx="11" cy="10.5" rx="11" ry="10.5" transform="translate(1588.958 188.514) rotate(-45)" fill="#9d6ff3"></ellipse>
							<ellipse id="Ellipse_25" data-name="Ellipse 25" cx="11" cy="10.5" rx="11" ry="10.5" transform="translate(1143.958 1021.514) rotate(-45)" fill="#9d6ff3"></ellipse>
							<ellipse id="Ellipse_26" data-name="Ellipse 26" cx="11" cy="10.5" rx="11" ry="10.5" transform="translate(1064.958 158.514) rotate(-45)" fill="#9d6ff3"></ellipse>
							<circle className={styles.animateDot} id="Ellipse_16" data-name="Ellipse 16" cx="23" cy="23" r="23" transform="translate(1169.473 524) rotate(-45)" fill="#59c9a5"></circle>
						</g>
					</svg>

					<Image className={styles.n2ds} src={n2ds} alt="" />
				</div>
			</div>
		</div>
	);
}
