import { StyleSheet, View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'

export default function HomeScreen ({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.groupbutton1}>
      <TouchableOpacity 
      style={styles.button}
      onPress={()=>navigation.navigate('TrangChu')}
      >
        <Text>Lịch</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.groupbutton1}>
      <TouchableOpacity 
      style={styles.button}
      onPress={()=>navigation.navigate('Login')}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.groupbutton1}>
      <TouchableOpacity 
      style={styles.button}
      onPress={()=>navigation.navigate('Register')}
      >
        <Text>Reg</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    flex : 1,
    alignItems:'center'
   },
   button: {
    width: '50%',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop : 50,
    marginLeft: 5,
    
   },
    groupbutton1:{
      flexDirection: 'row',
    }

   
  });