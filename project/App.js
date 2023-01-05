import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import TranslateScreen from './Screens/TranslateScreen';
import MovieScreen from './Screens/MovieScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const homeName = 'Home';
const translateName = 'Translate';
const movieName = "Film";
const tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <tab.Navigator
      initialRouteName='home'
      screenOptions={({route})=>({
        tabBarIcon:({focused, color, size})=>{
          let iconName;
          let rn = route.name;
          if(rn === homeName){
            iconName = focused ? 'home' : 'home-outline'
          }
          else if( rn === translateName){
            iconName = focused ? 'language' : 'language-outline'
          }
          else if (rn === movieName){
            iconName = focused ? 'film' : 'film-outline'
          }
          return <Ionicons name={iconName} size={size} color={color}/>
        },
      })}
      >
        <tab.Screen name={homeName} component={HomeScreen}/>
        <tab.Screen name={translateName} component={TranslateScreen}/>
        <tab.Screen name={movieName} component = {MovieScreen}/>
      </tab.Navigator>
    </NavigationContainer>
  );
}


