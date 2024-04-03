import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ style }: any) => {

	return (
		<div className={`${styles.footer}`} style={{ color: '#fff' }}>
			<div className={styles.infoWrap}>
				<div className={styles.logo}>
					{/* <img src={skLogoGray} /> */}
					GAOGAI 챗
				</div>
				<div className={styles.copyright}>
					Copyright © 2023 by GN Holdings, C&C. All rights reserved.
				</div>
			</div>
		</div>
	);
};

export default Footer;
