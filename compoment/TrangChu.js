import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet,  View } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const TrangChu = ({navigation})=> {
  const [UserID,setUserID]=useState('');
  const [Username,SetUsername]=useState('');
  const [UserNameShow,setUsernameshow]=useState('');
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  useEffect(()=>{
    AsyncStorage.getAllKeys().then(UserData=>{
      console.log(UserData);
    })
  },[])
  return (
    <View>
      <View style={{paddingBottom:20}}>
    <Card>

    <Card.Title title={UserID} subtitle="Card Subtitle" left={LeftContent} />
   
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={{height:230}}/>
    <Card.Content>
      <Text style={{paddingTop:10, textAlign:'center'}} variant="bodyMedium">Đây là 1 bài Post gì đó nó tệ vcl nhưng ít nhất nó hay là được , click vào và Donate t tiền đi mấy bẹn </Text>
    </Card.Content>
    
  </Card>
  </View>
      <Card>

    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
   
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }}  />
    <Card.Content>
      <Text  variant="bodyMedium">Đây là 1 bài Post gì đó nó tệ vcl nhưng ít nhất nó hay là được , click vào và Donate t tiền đi mấy bẹn </Text>
    </Card.Content>
    
  </Card>
  </View>
  
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // boxPost:{
  //   width : "100%",
  //   height : 400,
  //   backgroundColor: 'red',
  // },
  // BannerImg:{
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   width : "90%",
  //   height : 100,
  //   backgroundColor: "gray",
  // }
});
export default TrangChu