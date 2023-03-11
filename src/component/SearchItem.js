import React,{useState,useEffect,useRef} from "react";
import { TextInput,View } from "react-native";
import styles from './style/SearchItemStyles';
import Icon from './VectorIcons';
import capitalizeFirstCh from '../function/CapFirstCh';

const SearchItem= (props,ref) => {
    const {onChangeHandler,placeholder}= props
    
    function handleChange(param){
        ref.current.value=param
        //onChangeHandler()
    }

    return (
        <View style={styles.searchbar}>
            <Icon style={styles.searchIcon} type="ionicons" name="search" size={20} color="teal" /> 
            <TextInput
                ref={ref}
                style={styles.searchText}
                onChangeText={(v) => handleChange(v)}
                placeholder={capitalizeFirstCh(placeholder)}
                placeholderTextColor="steelblue"
                autoCapitalize='none'
            />
        </View>
    );
}

export default React.forwardRef(SearchItem);
