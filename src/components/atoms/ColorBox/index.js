import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

import styles from './index.module.scss';

const ColorBox = ({ background, name }) => (
    <CopyToClipboard text={background}>
        <div 
            style={{ background }}
            className={styles.colorBox}
        >
            <div className={styles.boxContainer}>
                <div className={styles.boxContent}>
                    <span>{name}</span>
                </div>
                <button className={styles.copyButton}>Copy</button>
            </div>
            <span className={styles.seeMore}>More</span>
        </div>
    </CopyToClipboard>
)


export default ColorBox;
