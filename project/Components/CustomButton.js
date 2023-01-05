import { StyleSheet, Text, View,Keyboard } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
export default function CustomButton(props){
return(
    <View style={[styles.button,{marginTop:props.top,alignSelf:props.self}]}>
      <Pressable style={({pressed}) =>pressed ? [styles.buttoninner,styles.pressed]: styles.buttoninner } android_ripple={{color:'blue'}}onPress={props.func}>
     <Text>
      Translate
     </Text>
     </Pressable>
     </View>
)
}
const styles = StyleSheet.create({
    button:{
        overflow:'hidden',
        borderWidth:2,
        justifyContent:'center',
        width:'30%',
        height:35,
        borderRadius:15,
        marginRight:5,
      },
      buttoninner:{
        backgroundColor:'#4285f4',
        alignItems:'center',
        justifyContent:'center',
        height:'100%',
        width:'100%',
      },
      pressed:{
      opacity:0.75
      }
  });