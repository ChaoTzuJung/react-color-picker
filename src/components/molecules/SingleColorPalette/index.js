import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ColorBox from 'components/atoms/ColorBox';
import styles from './index.module.scss';
class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        console.log(this._shades);
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

    render() {
        const colorBoxes = this._shades.map(color => (
            <ColorBox key={color.id} name={color.name} background={color.hex} showLink={false} />
        ))
        return (
            <div className={styles.palette}>
                <h1>Single Color Palette</h1>
                <div className={styles.paletteColors}>{colorBoxes}</div>
            </div>
        );
    }
}

export default SingleColorPalette;


SingleColorPalette.propTypes = {
    palette: PropTypes.object,
    colorId: PropTypes.string,
};