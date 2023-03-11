import {StyleSheet,Dimensions} from 'react-native';

const {width,height}= Dimensions.get('window');

const styles= (imgWid,imgHei) => StyleSheet.create({
  container:{
    marginHorizontal: '1%',
    marginVertical: '2%',
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'teal',
    alignSelf:'flex-start',
  },
  infoContainer:{
    marginHorizontal: '0%',
    paddingHorizontal: '3%',
    backgroundColor: 'ghostwhite',
  }, 
  imageContainer: {
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: 'teal',
  },
  image:{
    height: imgHei? height * imgHei : height * 0.15 ,
    width: imgWid? width * imgWid : width * 0.4 ,
    borderRadius: 10,
    overflow: 'hidden',
    alignSelf: 'flex-start'
  },
  row:{
    flexDirection: 'column',
  },
  price:{
    alignSelf:'flex-start',
    fontWeight: '700',
    fontSize: 18,
    marginVertical:'1%',
    color: 'black',
    padding: '1%'
  },
  title:{
      alignSelf:'flex-start',
      fontWeight: '700',
      fontSize: 18,
      marginVertical:'1%',
      color: 'teal',
      padding: '1%'
  },
  location:{
      alignSelf:'flex-start',
      fontWeight: '700',
      fontSize: 18,
      color: 'teal',
      padding: '1%'
  },
  likeIcon:{
    position: 'absolute',
    bottom: 20,
  }
});
export default styles;


  