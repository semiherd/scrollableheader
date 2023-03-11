import React from "react";
import { View,Text } from "react-native";
import styles from './style/CategoryCardStyles';
import capFirstCh from '../function/CapFirstCh';

export default function CategoryCard({data})  {
    return (
        <View style={[styles.mainContainer]}  >     
            <View styles={styles.container}>
                <Text style={styles.text}>{data.value}</Text>
            </View>
        </View>
    )
}
    

    


