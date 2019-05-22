import React from 'react'

import styles from './index.module.scss';

const ColorBox = ({ background, name }) => (
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
)


export default ColorBox;
