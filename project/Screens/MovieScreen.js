import { StatusBar } from 'expo-status-bar';
import { useEffect,useState } from 'react';
import { StyleSheet, Text, View,FlatList,Image } from 'react-native';
import Axios from "axios";
import { SafeAreaView } from 'react-native-safe-area-context';
export default function TranslateScreen() {
    const [movies,setMovies] = useState([]); 
    const beforeLoad = ()=>{
        let config = {
            headers: {
                'X-RapidAPI-Key': '33901fe7bcmshb9e046b270046cdp1b85c3jsne35ce718b18f',
                'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
            }
          }
        const options = {
            method: 'GET',
            url: 'https://imdb-top-100-movies.p.rapidapi.com/',
            headers: {
              'X-RapidAPI-Key': '33901fe7bcmshb9e046b270046cdp1b85c3jsne35ce718b18f',
              'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
            }
          };

          Axios.get('https://imdb-top-100-movies.p.rapidapi.com/',{headers:{
            'X-RapidAPI-Key': '33901fe7bcmshb9e046b270046cdp1b85c3jsne35ce718b18f',
              'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
          }}).then(function (response) {
            for(let i = 0;i<response.data.length;i++){
               setMovies( (oldArray)=>[...oldArray,{
                id:i,
                title:response.data[i].title,
                rating:response.data[i].rating,
                genre:response.data[i].genre,
                image:response.data[i].image,
                year:response.data[i].year
              }]);
            }
        }).catch(function (error) {
            console.error(error);
        });
    }

    useEffect(()=>{
        beforeLoad();
    },[]);
    itemSeperator = ()=>{
      return <View style={styles.seperator}></View>
    }
  return (
    <View style={styles.container}>
      <FlatList
      data={ movies }
      renderItem = {(itemData)=>{
        return(
          <View style={{flexDirection:'column'}}>
            <View style={styles.avatarContainer}> 
              <Image style={styles.imagestyle} source={{uri:itemData.item.image}}></Image>
            </View>
           <View style={styles.textstyle}> 
          <Text>{itemData.item.title}</Text>
          <Text>{itemData.item.rating}</Text>
          <Text>{itemData.item.year}</Text>
          <Text>{itemData.item.genre[0]}</Text>
          </View>
          </View>
        );
      }}
      ItemSeparatorComponent = {itemSeperator}
      />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  seperator:{
    height:1,
    width:'100%',
    backgroundColor:'#CCC'
  },
  imagestyle:{
    height:75,
    width:75
  },
  avatarContainer: {        
    height: 100,
    width: 100,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',    
  },
  textstyle:{
    justifyContent:'space-around',
    marginLeft:100,
    marginTop:-70,
    flexDirection:'column'
  }
});
