import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
        const { background, name } = this.props;
        const { copied} = this.state;
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
                        <p>{background}</p>
                    </div>
                    <div className={styles.boxContainer}>
                        <div className={styles.boxContent}>
                            <span>{name}</span>
                        </div>
                        <button className={styles.copyButton}>Copy</button>
                    </div>
                    <Link to="/" onClick={e => e.stopPropagation()}>
                        <span className={styles.seeMore}>More</span>
                    </Link>
                </div>
            </CopyToClipboard>
        )
    }
}




export default ColorBox;
