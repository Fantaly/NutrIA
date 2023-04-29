import React from "react";
import styles from "./title.module.scss"

function Title(props){
    return(
        <div className={styles.title}>
            <h1>{props.title}</h1>
        </div>
    );
}

export default Title;