import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const PaletteFooter = ({ paletteName, emoji }) => (
    <footer className={styles.paletteFooter}>
        {paletteName}
        <span className={styles.emoji}>{emoji}</span>
    </footer>
);

PaletteFooter.propTypes = {
    paletteName: PropTypes.string,
    emoji: PropTypes.string,
};

export default PaletteFooter;
