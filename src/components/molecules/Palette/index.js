import React from 'react';
import ColorBox from 'components/atoms/ColorBox';

import styles from './index.module.scss';

const Palette = ({ colors }) => (
    <div className={styles.palette}>
        {/* Navbar goes here */}
        <div className={styles.paletteColors}>
            {/* Bunch of color box */}
            {colors.map(color => (
                <ColorBox background={color.color} name={color.name}/>
            ))}
        </div>
            {/* footer eventually */}
    </div>
)

export default Palette;
