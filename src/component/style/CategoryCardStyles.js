import {StyleSheet,Dimensions} from 'react-native';
const {width,height} = Dimensions.get('window');

const styles= StyleSheet.create({
  mainContainer: {
    borderWidth: 0.5,
    borderColor: 'teal',
    borderRadius: 5,
    width: width * 0.3,
    height: height * 0.1,
    justifyContent: 'center',
    marginHorizontal: width * 0.01,
  },
  text:{
  
    textAlign: 'center',
    color: 'teal',
    fontWeight: '700',
  },
});
export default styles;


  