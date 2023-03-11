
import {StyleSheet,Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles= StyleSheet.create({
    row:{
        flexDirection: 'row',   
    },
    searchbar:{
        flex: 1,
        flexDirection: 'row',
        justifyContent:'flex-start',
        marginHorizontal:'3%',
        height: 50,
        borderWidth: 3,
        borderColor:'teal',
        borderRadius: 10,
        backgroundColor:'white',
    },
    searchText:{
        justifyContent:'flex-start',
        paddingHorizontal: '2%',
        paddingVertical: '2%',  
        fontWeight: '600',
        width: '100%',
    },
    searchIcon:{
        paddingHorizontal: 5,
        alignSelf: 'center'
    },
    sightText:{
        fontSize: 15,
        fontWeight: '700',
        marginHorizontal: 10,
        alignSelf: 'center',
        color: 'white',
    },
    sightCont:{
        textAlign: 'flex-start',
        borderWidth: 0.5,
        borderColor: 'teal',
        borderRadius: 15,
        paddingHorizontal: '3%',
        paddingVertical: '1%',
        marginHorizontal:'15%',
        marginVertical: '3%',
        backgroundColor: 'tomato',
        
    },
    customAddCont: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginHorizontal: '5%',
        marginVertical: '5%',
    },
    customAddText:{
        fontWeight: '700',
        color: 'navy',
        fontSize: 15,
        marginHorizontal: '1%',
    },
    customAddIcon:{
        alignSelf: 'center',
        color: 'navy',
        marginHorizontal: '1%',
    },
});
export default styles;


  