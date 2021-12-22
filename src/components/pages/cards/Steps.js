import React from 'react'
import styles from './Steps.module.css';
import logo1 from '../images/logo1.svg';
import logo2 from '../images/logo2.svg';
import logo3 from '../images/logo3.svg';
import logo4 from '../images/logo4svg.svg';
function Steps() {
    return (
        <div className={styles.body}>
            <h1>How It Works</h1>
            <div className={styles.container}>
                <div className={styles.element}>
                <img src={logo1} alt='logo1'></img>
                    <h3>Step 1</h3>
                    <p>Send us Your details on abc@gmail.com</p>
                </div>
                <div className={styles.element}>
                <img src={logo2} alt='logo1'></img>
                    <h3>Step 2</h3>
                    <p>We will reach back to you within 48 hours</p>
                </div>
                <div className={styles.element}>
                <img src={logo3} alt='logo1'></img>
                    <h3>Step 3</h3>
                    <p>Get received by us in India and </p>
                    <p>get medical assistance there</p>
                </div>
                <div className={styles.element}>
                <img src={logo4} alt='logo1'></img>
                    <h3>Step 4</h3>
                    <p>Get Treated and fly back home</p>
                </div>
            </div>
        </div>
    )
}

export default Steps
