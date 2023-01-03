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
      horizontal={false}
      data={ movies }
      renderItem = {(itemData)=>{
        return(
          <View style={{flex: 1,
            flexDirection: 'row',
            paddingVertical: 13,}}>
            <View style={styles.avatarContainer}> 
              <Image style={styles.imagestyle} source={{uri:itemData.item.image}}></Image>
            </View>
           <View style={styles.textstyle}> 
          <Text style={{marginTop:15}}><Text style={{color:'red'}}>Movie Name:</Text>{itemData.item.title}</Text>
          <Text style={{marginTop:15}}><Text style={{color:'red'}}>Rating:</Text>{itemData.item.rating}</Text>
          <Text style={{marginTop:15}}><Text style={{color:'red'}}>Year:</Text>{itemData.item.year}</Text>
          <Text style={{marginTop:15}}><Text style={{color:'red'}}>Genre:</Text>{itemData.item.genre[0]}</Text>
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
    flex:1,
    width:'100%',
    height:'100%',
    resizeMode:'stretch'
  },
  avatarContainer: {        
    height: 150,
    width: '28%',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',    
  },
  textstyle:{
    borderWidth:3,
    width:'70%',
    height:'100%',
    justifyContent:'flex-start',
    marginTop:0,
    marginLeft:5,
    flexDirection:'column'
  }
});
