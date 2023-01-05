import { useState } from 'react';
import { StyleSheet, Text, View,Keyboard,TouchableWithoutFeedback} from 'react-native';
import { TextInput} from 'react-native-gesture-handler';
import CustomButton from '../Components/CustomButton';
import * as Speech from 'expo-speech';
export default function HomeScreen() {
     const [speak,setSpeak] = useState("");

   const textToSpeech = ()=>{
      Speech.speak(speak,{
        language:'en',
        pitch:1,
        rate:1
      })
     }

     function updateText(enteredText){
       setSpeak(enteredText);
       console.log("deneme");
       }
  function updateText(enteredText){
  setSpeak(enteredText);
  }
const [translate,setTranslate] = useState("");
const [result,setResult] = useState([]); 
  return (
<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
     <View style={styles.container}>
       <TextInput onChangeText={updateText} placeholder='Enter English Word' style={{width:"90%",height:50,borderWidth:3,borderRadius:15,textAlign:'center'}}/>
     <CustomButton top={35} self={'center'} func = {textToSpeech} title={"Speak"}/>
     </View>
     </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
input:{
  width:'65%',
  borderWidth:2,
  height:35,
  borderRadius:15,
  textAlignVertical:'center'
},
});
