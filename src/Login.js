import axios from 'axios';
import React from 'react';
// import * as React from 'react';
// import * as React from 'react';
// import * as Google from 'expo-auth-session/providers/google';
import { useEffect,useState } from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './Constants';
import Field from './Field';

const Login = (props) => {

  const [user,setUser] = useState({
    email:"", pass:"",
  })

  async function checkLogin(){
    try {
      const data = await axios.post("http://192.168.120.152:5000/login/", {
          email: user.email,
          password: user.pass
      });
      alert(data.data.message);

      props.navigation.navigate("Desktop", data);
    } catch (error) {
        console.log(error);
    }
  }


  return (
    <Background>
      <View style={{alignItems: 'center', width: 350}}>
        <Text
          style={{
            color: 'white',
            fontSize: 58,
            fontWeight: 'bold',
            marginVertical: 50,
          }}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 900,
            width: 460,
            
            paddingTop: 100,
            alignItems: 'center',
          }}>
          
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
            onChangeText={e => setUser({...user, email : e })}
          />
          <Field 
            placeholder="Password" secureTextEntry={true}
            onChangeText={e => setUser({...user, pass : e })}
          />
          <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 200}}>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
          </View>
          <Btn Press={checkLogin} textColor='white' bgColor={darkGreen} btnLabel="Login" />
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight:"bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;