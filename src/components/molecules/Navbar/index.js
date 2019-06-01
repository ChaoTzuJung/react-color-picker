import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Select
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// Snackbar
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

// Slider
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './index.module.scss';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: 'hex',
            open: false,
        }
    }

    // 把子元件的state傳給父元件 / setSate非同步，要立即取到正確的state用callback
    handleFormatChange = e => {
        this.setState({ format: e.target.value, open: true }, () => {
            this.props.selectFormat(this.state.format);
        })
    }

    closeSnackbar = () => {
        this.setState({ open: false })
    }

    render() {
        const { level, changeLevel } = this.props;
        const { format, open } = this.state;
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
                <div className={styles.selectContainer}>
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar 
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={open}
                    autoHideDuration={3000}
                    message={<span id="message-id">Format Changed To {format.toUpperCase()}</span>}
                    // 無障礙網頁
                    contentPorps={{
                        "aria-describedby": "message-id"
                    }}
                    // 按下 Snackbar以外的地方 關閉
                    onClose={this.closeSnackbar}
                    action={[
                        // 按下 X 關閉
                        <IconButton key="close" aria-label="Close" color="inherit" onClick={this.closeSnackbar}>
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
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
