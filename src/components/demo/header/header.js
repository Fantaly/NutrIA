import React from "react";
import styles from './header.module.scss'

function Header(){
    return (
        <header className={styles.header}>
            <h3>NutrIA</h3>
            <h5>Username here</h5>
        </header>
    );
}

export default Header;