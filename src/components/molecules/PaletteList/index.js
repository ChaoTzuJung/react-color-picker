import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { withStyles } from '@material-ui/styles';
import MiniPalette from 'components/atoms/MiniPalette';

import sizes from 'utils/media';
import BgImage  from 'images/background.svg';

const styles = {
    "@global": {
        ".fade-exit": {
            opacity: 1
        },
        ".fade-exit-active": {
            opacity: 0,
            transition: "opacity 500ms ease-out",
        }
    },
    paletteList: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100vh',
        backgroundColor: '#000000',
        backgroundImage: `url(${BgImage})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        overflow: 'scroll',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '50%',
        [sizes.down("lg")]: {
            width: '80%',
        },
        [sizes.down("xs")]: {
            width: '75%',
        },
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        color: 'white',
        "& a": {
            color: 'white',
            textDecoration: 'underline',
        }
    },
    heading: {
        fontSize: '32px',
        [sizes.down("md")]: {
            fontSize: '24px',
        },
    },
    palettes: {
        display: 'grid',
        width: '100%',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '40px',
        [sizes.down("md")]: {
            gridTemplateColumns: 'repeat(2, 50%)',
        },
        [sizes.down("xs")]: {
            gridTemplateColumns: 'repeat(1, 100%)',
            gridGap: '25px',
        }
    },
};

class PaletteList extends Component {
    goToPalette = id => {
        this.props.history.push(`/palette/${id}`)
    }

    render() {
        const { palettes, classes, deletePalette } = this.props;
        return (
            <div className={classes.paletteList}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1 className={classes.heading}>React Colors</h1>
                        <Link to="/palette/new">Create Palette</Link>
                    </nav>
                    <TransitionGroup className={classes.palettes}>
                        {palettes.map(palette => (
                            <CSSTransition classNames='fade' key={palette.id} timeout={500} >
                                <MiniPalette
                                    key={palette.id}
                                    id={palette.id}
                                    {...palette}
                                    goToPalette={() => this.goToPalette(palette.id)}
                                    handleDelete={deletePalette}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
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
