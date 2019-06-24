import React from "react";
import styles from './index.module.scss';

const PageWrapper = ({ children }) => <section className={styles.page}>{children}</section>;

export default PageWrapper;