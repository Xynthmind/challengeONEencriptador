import React from "react";
import styles from '../css/style.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ChallengeONE() {
    var textToE = "";
    const outTxt = "";
    const handleChange = (event) => {
        const { value } = event.target;
        textToE = value;
        console.log(textToE);
    }
    return (
        <div className={styles.bcgradient} >
            <div className={styles.headerP}>
                <h1>Challenge ONE: Enciptador de texto</h1>
            </div>
            <div className={styles.txtArea}>
                <label>
                    <textarea rows={6} cols= {56} style={{width: "100%", height: "59vh"}} onChange={handleChange}/>
                </label>
            </div>
            <div className={styles.txtResult}>

            </div>
            <div className={styles.footerP}>
                <Form>
                    <Form.Group>
                        <Button variant="success">
                            Encriptar
                        </Button>
                        <Button variant="danger">
                            Desencriptar
                        </Button>
                    </Form.Group>
                </Form>

            </div>
        </div>
    )
}