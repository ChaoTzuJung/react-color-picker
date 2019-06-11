import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from "chroma-js";

import { withStyles } from '@material-ui/styles';
import styles from './index.module.scss';

const inlineStyles = {
    copyText: {
        color: props => chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white"
    },
    seeMoreButton: {
        color: props => chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
    },
    colorName: {
        color: props => chroma(props.background).luminance() <= 0.08 ? "white" : "black"
    },
    copyButton: {
        color: props => chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white"
    }
};

class ColorBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            copied: false
        }
    }

    onChangeCopy = () => {
        this.setState({ copied: true }, () => {
            // 1.5秒後關掉 copyOverlay
            setTimeout(() => this.setState({ copied: false }), 1500);
        });
    }

    render() {
        const { background, name, moreUrl, showLink, classes } = this.props;
        const { copied } = this.state;

        return (
            <CopyToClipboard text={background} onCopy={this.onChangeCopy}>
                <div 
                    style={{ background }}
                    className={styles.colorBox}
                >
                    <div style={{ background }} className={classnames(styles.copyOverlay, {
                        [styles.showOverlay]: copied,
                    })} />
                    <div className={classnames(styles.colorMsg, {
                        [styles.showMsg]: copied,
                    })}>
                        <h1>copied!</h1>
                        <p className={classes.colorName}>{background}</p>
                    </div>
                    <div className={styles.boxContainer}>
                        <div className={styles.boxContent}>
                            <span className={classes.colorName}>{name}</span>
                        </div>
                        <button className={classnames(styles.copyButton, classes.copyButton)}>Copy</button>
                    </div>
                    {
                        showLink && (
                            <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                                <span className={classnames(styles.seeMore, classes.seeMoreButton)}>MORE</span>
                            </Link>
                        )
                    }
                </div>
            </CopyToClipboard>
        )
    }
}

ColorBox.propTypes = {
    background: PropTypes.string,
    name: PropTypes.string,
    moreUrl: PropTypes.string,
    showLink: PropTypes.bool,
    classes: PropTypes.object,
};

ColorBox.defaultProps = {
    showLink: true,
};

export default withStyles(inlineStyles)(ColorBox);
