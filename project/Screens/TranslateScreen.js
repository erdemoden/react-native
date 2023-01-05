import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Keyboard,TouchableWithoutFeedback} from 'react-native';
import { TextInput} from 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Axios from "axios";
export default function TranslateScreen() {
  const encodedParams = new URLSearchParams();
encodedParams.append("target", "en");
encodedParams.append("source", "tr");

const options = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
  data: encodedParams
};
  function pressHandler(){
    encodedParams.append("q",translate);
    Axios.post(options.url,{"target":"en","source":"tr","q":translate},{
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'Accept-Encoding': 'application/gzip',
          'X-RapidAPI-Key': '33901fe7bcmshb9e046b270046cdp1b85c3jsne35ce718b18f',
          'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        }
      
    }).then(function (response) {
      setResult([response.data]);
    }).catch(function (error) {
      console.error(error);
    });
  }
  
  function updateText(enteredText){
  setTranslate(enteredText);
  }
const [translate,setTranslate] = useState("");
const [result,setResult] = useState([]); 
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={{height:'100%'}}>
      <Text style={{alignSelf:'center',marginTop:100}}>English To Turkish Translator</Text>
     <TextInput placeholder='Enter English Word'
     style={[styles.input,{marginTop:10,textAlign:'center',alignSelf:'flex-start'}]}
     onChangeText={updateText}
     onSubmitEditing={pressHandler}
     returnKeyType="done"
     />
     <View style={styles.button}>
      <Pressable style={({pressed}) =>pressed ? [styles.buttoninner,styles.pressed]: styles.buttoninner } android_ripple={{color:'blue'}}onPress={pressHandler}>
     <Text>
      Translate
     </Text>
     </Pressable>
     </View>
     <Text style={{alignSelf:'center',marginTop:30,fontSize:20,fontWeight:'bold'}}>
      {result.length >0 ? result[0].data.translations[0].translatedText : ""}
     </Text>
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
button:{
  overflow:'hidden',
  borderWidth:2,
  alignSelf:'flex-end',
  justifyContent:'center',
  width:'30%',
  height:35,
  marginTop:-35,
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
