import { StyleSheet} from 'react-native';

export default StyleSheet.create({
   icone:{
    width: 50, 
    height: 50,
   },
   container:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    width: '90%',
    marginBottom:'3%',
   },
   titulo:{
    fontSize: 25,
    width: "65%",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignitems: 'center',
   },
   loginInputSaldo:{
      display: "flex",
      alignItems: "center",
      color: "gray",
      backgroundColor: "white",
      border: "coral 5px solid",
      borderRadius: 3,
      padding: 3,
      margin: 5,
      width:"40%",
      height: 70,
      borderRadius: 5,
  },
  cifrao:{
      fontSize: 20,
      color: '#e97a47',
   },
   

});