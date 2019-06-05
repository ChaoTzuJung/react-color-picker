import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from "chroma-js";

import styles from './index.module.scss';

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
        const { background, name, moreUrl, showLink } = this.props;
        const { copied } = this.state;
        const isDarkColor = chroma(background).luminance() <= 0.08;
        const isLightColor = chroma(background).luminance() >= 0.7;

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
                        <p className={isLightColor ? styles.darkText : undefined}>{background}</p>
                    </div>
                    <div className={styles.boxContainer}>
                        <div className={styles.boxContent}>
                            <span className={isDarkColor ? styles.lightText : undefined}>{name}</span>
                        </div>
                        <button className={classnames(styles.copyButton, {
                            [styles.darkText]: isLightColor
                        })}>Copy</button>
                    </div>
                    {
                        showLink && (
                            <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                                <span className={classnames(styles.seeMore, {
                                    [styles.darkText]: isLightColor
                                })}>MORE</span>
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
};

ColorBox.defaultProps = {
    showLink: true,
};

export default ColorBox;
