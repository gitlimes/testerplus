import styles from './ShowcaseSection.module.css';

import classNames from 'classnames';
import Image from 'next/image';

import Section from '../Section/Section';
import Title from '../Title/Title';

export default function ShowcaseSection(ctx) {
	const { title, caption, image, isOdd } = ctx;
	return (
		<Section
			className={classNames(styles.sectionWrapper, { [styles.odd]: isOdd })}
			contentClassName={styles.content}
		>
			<div className={styles.text}>
				<Title>{title}</Title>
				<p className={styles.caption}>{caption}</p>
			</div>
			<Image src={image} alt="" className={styles.image} quality={100} style={{ borderRadius: '24px', maxHeight: '600px', width: 'auto', boxShadow : [isOdd ? '': '8px 8px 0px 0px rgba(157, 111, 243, 0.5)' ]}} sizes="(max-width: 840px) 100vw, 700px" />
		</Section>
	);
}
