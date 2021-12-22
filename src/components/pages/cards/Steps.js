import React from 'react'
import styles from './Steps.module.css';
import logo1 from '../images/logo1.svg';
function Steps() {
    return (
        <div className={styles.body}>
            <h1>How It Works</h1>
            <div className={styles.container}>
                <div className={styles.element}>
                <img src={logo1} alt='logo1'></img>
                    <h3>Title</h3>
                    <p>description</p>
                </div>
                <div className={styles.element}>
                <img src={logo1} alt='logo1'></img>
                    <h3>Title</h3>
                    <p>description</p>
                </div>
                <div className={styles.element}>
                <img src={logo1} alt='logo1'></img>
                    <h3>Title</h3>
                    <p>description</p>
                </div>
                <div className={styles.element}>
                <img src={logo1} alt='logo1'></img>
                    <h3>Title</h3>
                    <p>description </p>
                </div>
            </div>
        </div>
    )
}

export default Steps
