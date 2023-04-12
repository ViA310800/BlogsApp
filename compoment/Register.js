import React, { useEffect, useState ,useReducer} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Switch, Alert } from 'react-native';
// import {CheckBox} from 'react-native-elements';

const Register = () => {
    const [tennguoidung, showfname] = useState("");
    const [tendangnhap,cusername] = useState(""); 
    const [email, showemail] = useState("");
    const [matkhau, showpword] = useState("");
    const [cpword, showcpword] = useState("");

    const registeruser= async () =>{
        if(matkhau!=cpword){
            alert("Mật khẩu không trùng khớp!!");
        }
        try {
            var lh={
                tennguoidung,
                tendangnhap,
                email,
                matkhau
            };
            if(matkhau==cpword){
                console.log(lh);
                console.log(JSON.stringify(lh));
                const response= await fetch('http://192.168.1.9:3000/nguoidung/',{
                    method: 'post',
                    headers:{
                        Accept: 'application/json',
                        'Content-Type' :'application/json',
                    },
                    body: JSON.stringify(lh),
                });
                alert("Đăng ký thành công");
                    
            }
        }catch(error){
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>

            <View style={styles.Body}>
                <Text style={styles.titletext}>Họ Vả Tên</Text>
                <TextInput style={styles.Input} value={tennguoidung} onChangeText={showfname}></TextInput>
                <Text style={styles.titletext}>Tài Khoản</Text>
                <TextInput style={styles.Input} value={tendangnhap} onChangeText={cusername}></TextInput>
                <Text style={styles.titletext}>Email Address</Text>
                <TextInput style={styles.Input} value={email} onChangeText={showemail}></TextInput>
                <Text style={styles.titletext}>Password</Text>
                <TextInput style={styles.Input} value={matkhau} onChangeText={showpword} secureTextEntry={true}></TextInput>
                <Text style={styles.titletext}>Confirm Password</Text>
                <TextInput style={styles.Input} value={cpword} onChangeText={showcpword} secureTextEntry={true}></TextInput>
            </View>
            <TouchableOpacity style={styles.button} onPress={registeruser}>
                <Text>Đăng Ký</Text>
            </TouchableOpacity>
        </View>
  )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    Header: {
        justifyContent: 'center',
        height: 100,
        backgroundColor: '#00FFFF',
    },
    TextHeader: {
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    Body: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 20,
    },
    Input: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        paddingLeft: 20,
        backgroundColor: '#fff',
        height: 50,
        marginBottom: 10,
    },
    button:
    {
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginBottom : 60,
        
    },
    GenSwitch:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    gendertext:
    {
        marginTop: 13,
    }
});
export default Register;