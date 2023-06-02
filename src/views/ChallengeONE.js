import React from "react";
import styles from '../css/style.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ChallengeONE() {
    var textToE = "";
    var outTxt = "";

    const handleChange = (event) => { //recibimos los cambios del área de texto y los asignamos a la variable textToE
        const { value } = event.target;
        textToE = value;
        //console.log(textToE);
    }

    function encrip() {
        var textarray = textToE.split(" "); //se efectua un array de palabras
        var outTxt = "";

        for (var i = 0; i < textarray.length; i++) { //se hace un for de 0 hasta la cantidad de palabras
            var tempword = textarray[i]; //tempword va a almacenar la palabra que se encuentra en el indice i
            for (var j = 0; j < tempword.length; j++) {
                var arraytemp = tempword.split(''); //a un array temporal le pondremos la palabra dividia por letras
                if (arraytemp[j] == "a") {
                    arraytemp[j] = "ai";
                } else {
                    if (arraytemp[j] == "e") {
                        arraytemp[j] = "enter";
                    } else {
                        if (arraytemp[j] == "i") {
                            arraytemp[j] = "imes";
                        } else {
                            if (arraytemp[j] == "o") {
                                arraytemp[j] = "ober";
                            } else {
                                if (arraytemp[j] == "u") {
                                    arraytemp[j] = "ufat";
                                }
                            }
                        }
                    }
                } //end if else   
                
                outTxt = outTxt + arraytemp[j];
            } //end for 2
            outTxt = outTxt + " ";
        }
        console.log(outTxt);
    }
    return (
        <div className={styles.bcgradient} >
            <div className={styles.headerP}>
                <h1>Challenge ONE: Enciptador de texto</h1>
            </div>
            <div className={styles.txtArea}>
                <label>
                    <textarea rows={6} cols={56}
                        style={{ width: "155%" }}
                        onChange={handleChange} />
                </label>
            </div>
            <div className={styles.txtResult}>
                <label>
                    <textarea rows={6} cols={56}
                        style={{ width: "155%", height: "60vh" }}
                        onChange={handleChange} />
                </label>
            </div>
            <div className={styles.footerP}>
                <Form>
                    <Form.Group>
                        <Button variant="success" onClick={encrip}>
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