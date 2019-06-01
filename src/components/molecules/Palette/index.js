import React, { Component } from 'react';
import ColorBox from 'components/atoms/ColorBox';
import Navbar from 'components/molecules/Navbar';
import styles from './index.module.scss';

class Palette extends Component {
    constructor(props) {
        super(props)
        this.state = {
            level: 500
        }
    }

    changeLevel = level => {
        this.setState({ level })
    }

    render() {
        const { palette } = this.props;
        const { level } = this.state;
        console.log(palette);
        return (
            <div className={styles.palette}>
                {/* Navbar goes here */}
                <Navbar level={level} changeLevel={this.changeLevel} />
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
