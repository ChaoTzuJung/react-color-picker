import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; // 要放在自己的style前
import styles from './index.module.scss';

const Navbar = ({ level, changeLevel }) => (
    <header className={styles.navbar}>
        <div className={styles.logo}>
            <a href="#">React Color Picker</a>
        </div>
        <div className={styles.sliderContainer}>
            <span>Level: {level}</span>
            <div className={styles.slider}>
                <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
            </div>
        </div>
    </header>
);

Navbar.propTypes = {
    level: PropTypes.number,
	changeLevel: PropTypes.func,
};

Navbar.defaultProps = {
	level: 500,
};

export default Navbar
