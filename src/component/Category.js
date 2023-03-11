import React, {useState, useEffect} from "react";
import { View,FlatList,Dimensions } from "react-native";
import styles from './style/CategoryStyles';
import CategoryCard from './CategoryCard';

export default function Category({data})  {
    const[category,setCategory]=useState([]);

    const [icon,setIcon]= useState({
        size: 30,
        color: 'steelblue'
    });

    useEffect(() => { 
        arrangeCategory(data)     
    },[data])

    async function arrangeCategory(param){
        try{
            let arr=[];
            await Promise.all(param?.map((item,index) => {                
                if ( arr.filter(e => e.id == item.id).length == 0){                     
                    arr.push(item)
                }        
            }))
            setCategory(arr)
        }catch(e){
            console.log(e)
        }
    }

    const renderItem = ({ item }) => <CategoryCard key={item.id} icon={icon} data={item} />;
    const keyExtractor = (_,index) => index.toString(); 
    
    return (
        <View style={[styles.container]}>           
            {category?.length >= 1 && (
                <FlatList
                    horizontal
                    data={category}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    snapToAlignment="end"
                    decelerationRate={"normal"}
                    snapToInterval={Dimensions.get("window").height}
                    scrollEventThrottle={32}     
                />
            )}
        </View>
    )
}
    

    


