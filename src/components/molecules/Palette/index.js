import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ColorBox from 'components/atoms/ColorBox';
import Navbar from 'components/molecules/Navbar';
import styles from './index.module.scss';

class Palette extends Component {
    constructor(props) {
        super(props)
        this.state = {
            level: 500,
            format: 'hex'
        }
    }

    changeLevel = level => {
        this.setState({ level })
    }

    changeFormat = val => {
        // 把子元件state放到父原件的state
        this.setState({ format: val })
    }

    render() {
        const { palette: { colors, paletteName, emoji } } = this.props;
        const { level, format } = this.state;
        return (
            <div className={styles.palette}>
                <Navbar level={level} changeLevel={this.changeLevel} selectFormat={this.changeFormat} />
                <div className={styles.paletteColors}>
                    {colors[level].map(color => (
                        <ColorBox background={color[format]} name={color.name} key={color.id} />
                    ))}
                </div>
                <footer  className={styles.paletteFooter}>
                    {paletteName}
                    <span  className={styles.emoji}>{emoji}</span>
                </footer>
            </div>
        )
    }
}

Navbar.propTypes = {
    palette: PropTypes.object,
};

export default Palette;
