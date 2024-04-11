import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity} from "react-native";
import ResultIMC from "./resultIMC";

import styles from "./style";

export default function Form()
{
    const[height, setHeight]= useState(null)
    const[weight, setWeight]= useState(null)
    const[messageIMC, setMessageIMC]= useState("Preencha o peso e altura")
    const[imc, setIMC]= useState(null)
    const[textButton, setTextButton]= useState("Calcular")

    function imcCalculator()
    {
        return setIMC((weight/(height*height)).toFixed(2))
    }

    function ValidaIMC(){
        if(weight!=null && height!=null){
            imcCalculator()
            setMessageIMC("seu IMC é:")
            setTextButton("Calcular novamente")
            setHeight(null)
            setWeight(null)
            return
        }
        setIMC(null)
        setTextButton("Calcular")
        setMessageIMC("Preencha o peso e altura")

    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura:</Text>
                
                <TextInput
                    style={styles.input} 
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Exemplo = 1.80"
                    keyboardType="numeric"
                />

                <Text style={styles.formLabel}>Peso:</Text>
                <TextInput
                    style={styles.input} 
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Exemplo = 75.5"
                    keyboardType="numeric"
                />
            
            
                <TouchableOpacity 
                style={styles.buttonCalculator}
                onPress={()=> ValidaIMC()}
                >
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <View>
                <ResultIMC messageResultIMC = {messageIMC} resultIMC={imc}/>
            </View>
        </View>

    );
}