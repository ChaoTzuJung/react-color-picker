import React, { Component } from 'react';
import ColorBox from 'components/atoms/ColorBox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; // 要放在自己的style前
import styles from './index.module.scss';

class Palette extends Component {
    constructor(props) {
        super(props)
        this.state = {
            level: 500
        }
    }

    changeLevel = level => {
        console.log(level);
        this.setState({ level })
    }

    render() {
        const { palette } = this.props;
        const { level } = this.state;
        return (
            <div className={styles.palette}>
                {/* Navbar goes here */}
                <div className={styles.slider}>
                    <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={this.changeLevel} />
                </div>
                <div className={styles.paletteColors}>
                    {/* Bunch of color box */}
                    {palette.colors[level].map(color => (
                        <ColorBox background={color.hex} name={color.name} key={color.name} />
                    ))}
                </div>
                    {/* footer eventually */}
            </div>
        )
    }
}

export default Palette;
