import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ColorBox from 'components/atoms/ColorBox';
import Navbar from 'components/molecules/Navbar';
import PaletteFooter from 'components/organisms/PaletteFooter';
import styles from './index.module.scss';
class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        this.state = {
            format: 'hex'
        }
    };

    gatherShades = (palette, colorId) => {
        let shades = [];
        let allColors = palette.colors;
        for(let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorId)
            )
        }
        // 把 scale 50 #fff 拿掉 只留9個顏色 
        return shades.slice(1);
    };

    changeFormat = val => {
        this.setState({ format: val })
    }

    render() {
        const { palette: { paletteName, emoji } } = this.props;
        const { format } = this.state;
        const colorBoxes = this._shades.map(color => (
            <ColorBox
                key={color.id}
                name={color.name}
                background={color[format]}
                showLink={false}
            />
        ))
        return (
            <div className={styles.palette}>
                <Navbar selectFormat={this.changeFormat} showAllColors={false} />
                <div className={styles.paletteColors}>{colorBoxes}</div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default SingleColorPalette;


SingleColorPalette.propTypes = {
    palette: PropTypes.object,
    colorId: PropTypes.string,
};