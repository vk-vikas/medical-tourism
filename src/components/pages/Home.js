import React from 'react'
import Form from './cards/Form';
import Hero from './cards/Hero';
import Steps from './cards/Steps';
import styles from './Home.module.css';

function Home() {
    return (
        <div >
        <Hero />
        <Form />
        <Steps />
        </div>
    )
}

export default Home
