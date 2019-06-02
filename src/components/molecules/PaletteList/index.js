import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import MiniPalette from 'components/atoms/MiniPalette';

const styles = {
    paletteList: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100vh',
        backgroundColor: 'blue',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '50%',
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        color: 'white',
    },
    palettes: {
        display: 'grid',
        width: '100%',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%' 
    },
};

class PaletteList extends Component {
    goToPalette = id => {
        this.props.history.push(`/palette/${id}`)
    }

    render() {
        const { palettes, classes } = this.props;
        return (
            <div className={classes.paletteList}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map(palette => (
                            <MiniPalette {...palette} goToPalette={() => this.goToPalette(palette.id)}/>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

PaletteList.propTypes = {
    palettes: PropTypes.array,
    classes:  PropTypes.object,
};

export default withStyles(styles)(PaletteList);
