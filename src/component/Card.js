import React, {useState,useEffect} from "react";
import { Image,View,Text,Pressable } from "react-native";
import styles from './style/CardStyles';
import NoImage from '../asset/image/background/NoImage.jpeg';
import capitalizeFirstCh from '../function/CapFirstCh';

export default function AdCard({data})  {
    const{id,uri,price,title}= data;
    const [priceIcon,setPriceIcon]= useState()

    return (
        <View style={[styles().row,styles().container]} >
            <View style={styles().textContainer}>
                {title && <Text style={styles().title}>{capitalizeFirstCh(title)}</Text>}
            </View> 
            
            <View style={styles().imageContainer}>
                {uri?  (    
                    <Image resizeMode= "contain" style={styles(0.45,0.15).image} source={uri} />     
                ):
                    <Image resizeMode= "contain" style={styles(0.45,0.15).image} source={NoImage} />     
                }
            </View>   
        </View>
      
    )
}
    

    


