import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
  } from "react-native";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation})=> {
const [tendangnhap, settendangnhap] = useState("");
  const [matkhau, setmatkhau] = useState("");
  const DangNhap = async ()=>{
    axios({
        url: 'http://192.168.1.9:3000/nguoidung/login',
        method : 'POST',
        data: {
            tendangnhap : tendangnhap,
            matkhau : matkhau,
        },
    }).then(result=>{
        console.log(result.data);
        const UserData = result.data;
        AsyncStorage.setItem("UserID",UserData._id);
        AsyncStorage.setItem("Username",UserData.tendangnhap);
        AsyncStorage.setItem("UserNameShow",UserData.tennguoidung);
        console.log('Login Successful');
        navigation.navigate('TrangChu');
    }).catch(error => console.log('error', error));
    // try {
    //     var lh={
    //         tendangnhap,
    //         matkhau
    //     };
    //     console.log(lh);
    //     console.log(JSON.stringify(lh));
    //     const response= await fetch('http://192.168.1.9:3000/nguoidung/login',{
    //         method: 'post',
    //         headers:{
    //             Accept: 'application/json',
    //             'Content-Type' :'application/json',
    //         },
    //         body: JSON.stringify(lh),
    //     });
    // }catch(error){
    //     console.error(error);
    // }finally{
    //     alert("Đăng nhập thành công");
    // }
  }
  removeValue = async () => {
    try {
        await AsyncStorage.removeItem('UserID')
        await AsyncStorage.removeItem('Username')
      await AsyncStorage.removeItem('UserNameShow')
    } catch(e) {
      // remove error
    }
  
    console.log('Done.')
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/Logo.jpg")} /> 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          value={tendangnhap}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={settendangnhap}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          value={matkhau}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={setmatkhau}
        /> 
      </View> 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity>
        <Text style={styles.register_btn} onPress={()=>navigation.navigate('Register')}>Register</Text> 
      </TouchableOpacity> 
      <TouchableOpacity>
        <Text style={styles.register_btn} onPress={removeValue}>RemoveItem</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn} onPress={DangNhap}>
        <Text style={styles.loginText} >LOGIN</Text> 
      </TouchableOpacity> 
    </View>
  
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
      image: {
        marginBottom: 40,
        height:100,
        width:100,
        borderRadius: 150/2,
        overflow:'hidden',
        borderColor:'red',
        borderWidth: 3,
      },
      inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
      forgot_button: {
        height: 30,
        marginBottom: 30,
      },
      register_btn: {
        height: 30,

        marginBottom: 30,
      },
      loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",
      },
});
export default Login