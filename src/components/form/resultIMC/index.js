import React from "react";
import { View, Text } from "react-native";

import styles from "./style";

export default function ResultIMC(props)
{
    return(
        <View style={styles.resultIMC}>
            <Text style={styles.info}>{props.messageResultIMC}</Text>
            <Text style={styles.num}>{props.resultIMC}</Text>
        </View>

    );
}