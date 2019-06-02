import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

class PaletteList extends Component {

    render() {
        const { palettes } = this.props;
        return (
            <div className={styles.paletteList}>
                <h1>React Color</h1>
                {palettes.map(palette => (
                    <p>
                        <Link to={`/palette/${palette.id}`}>
                            {palette.paletteName}
                        </Link>
                    </p>
                ))}
            </div>
        )
    }
}

PaletteList.propTypes = {
    palettes: PropTypes.array,
};

export default PaletteList;
