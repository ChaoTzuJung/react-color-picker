import React from 'react';
import styles from './index.module.scss';

export default function Dropdown({ name, value, checked }) {
    return (
        <div className={styles.dropdown}>
            <select>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        </div>
    );
} 