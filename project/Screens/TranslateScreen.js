import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Keyboard,TouchableWithoutFeedback} from 'react-native';
import { TextInput} from 'react-native-gesture-handler';

export default function TranslateScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
     <TextInput placeholder='Enter English Word'
     style={styles.input}
     />
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
  width:'80%',
  borderWidth:2,
  height:35,
  borderRadius:15
}
});
