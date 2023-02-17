import { useNavigation } from '@react-navigation/native';
import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import {View, Text, Touchable, TouchableOpacity, TextInput, Input} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './Constants';
import Field from './Field';

const Signup = props => {
  // const navigate = useNavigation();

  const [User, setUser] = useState({
    name:"",email:"",phone:"",password:"",cpassword:""
  })

  async function submitform(){
    try {
      const data = await axios.post("http://192.168.1.16:5000/signup/", {
          name: User.name,
          email: User.email,
          phone: User.phone,
          password: User.password,
      });
      console.log(data.data);
      props.navigation.navigate("Login")
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
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 50,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginTop: 10,
            marginBottom: 20,
          }}>
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <Field onChangeText={e => setUser({...User, name : e })} name="name" placeholder={"First Name"} value={User.name}/>

          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
            onChangeText={e => setUser({...User, email : e })}
            name="email"
            value={User.email}
          />
          <Field placeholder="Contact Number" keyboardType={'number'} onChangeText={e => setUser({...User, phone : e })} name="phone" value={User.phone}/>
          <Field placeholder="Password" secureTextEntry={true} onChangeText={e => setUser({...User, password : e })} name="password" value={User.password}/>
          <Field placeholder="Confirm Password" secureTextEntry={true} onChangeText={e => setUser({...User, cpassword : e })} name="cpassword" value={User.cpassword}/>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16
            }}>
            
          </View>

         
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            Press={submitform}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity>
              <Text
              onPress={() => props.navigation.navigate("Login")}
                style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;