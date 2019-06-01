import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import styles from './index.module.scss';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: 'hex'
        }
    }

    // 把子元件的state傳給父元件 / setSate非同步，要立即取到正確的state用callback
    handleChange = e => {
        this.setState({ format: e.target.value }, () => {
            this.props.selectFormat(this.state.format);
        })
    }

    render() {
        const { level, changeLevel } = this.props;
        const { format } = this.state;
        return (
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
                <div className={styles.sliderContainer}>
                    <Select value={format} onChange={this.handleChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0)</MenuItem>
                    </Select>
                </div>
            </header>
        )
    }
}

Navbar.propTypes = {
    level: PropTypes.number,
    changeLevel: PropTypes.func,
    selectFormat: PropTypes.func,
};

Navbar.defaultProps = {
	level: 500,
};

export default Navbar
