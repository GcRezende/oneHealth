import React, {useState} from "react";
import { View, Text, TextInput, Button} from "react-native";
import ResultIMC from "./resultIMC";


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
        <View>
            <View>
                <Text>Altura:</Text>
                <TextInput 
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Exemplo = 1.80"
                    keyboardType="numeric"
                />

                <Text>Peso:</Text>
                <TextInput 
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Exemplo = 75.5"
                    keyboardType="numeric"
                />
            </View>
            <View>
                <Button 
                title={textButton}
                onPress={()=> ValidaIMC()}/>
            </View>
            <View>
                <ResultIMC messageResultIMC = {messageIMC} resultIMC={imc}/>
            </View>
        </View>

    );
}