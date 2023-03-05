import React, { useState, useEffect } from 'react';
import Constants from 'expo-constants';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import '../../app.css';
import 'firebase/firestore';
import { Card } from 'react-native-paper';
import TextInput0 from '../Ref/TextInput';
import PasswordTextInput from '../Ref/PasswordTextInput';
import { Form, Field, Submit } from 'react-swift-form';
import * as yup from 'yup';
import { Button } from 'react-native-paper';
import { db, auth} from "../../firebase";
import Loading from "../../LoadingScreen"
import Loading2 from "../../LoadingScreen2"

const Login = ({navigation}) => {
  var initialValues = {
    fName: '',
    sName: '',
    email: '',
    phoneNo1: '',
    age: '',
    dob: '',
  };

    const [isLoading, setIsLoading] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
  
useEffect(() => {
    demoAsyncCall().then(() => setIsLoading(false))
})

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

      if(isLoading) { // if your component doesn't have to wait for an async action, remove this block 
      return <Loading/>; // render null when app is not ready
    }

  const validators = {
    email: yup
      .string()
      .required('Email is required')
      .email('Invalid email format'),
    password: yup
      .string()
      .required('Password is required')
  };

  const handleSubmit = (initialValues) => {
      setIsDisabled(true);

      auth.signInWithEmailAndPassword(initialValues.email, initialValues.password)
      .then(
        
        (userCredentials) => {
          const user = userCredentials.user; 
          console.log('Signed in with with:', user.uid);

          navigation.navigate('Login2', {
        currentUser:user
            })

      })
      .catch((error) => {
        setIsDisabled(false);
        alert(error.message);
      });
  };

  const FormatDate = (date) => {
    let tempDate = date.toString().split(' '); 
    let dateTimeString = `${tempDate[2]} ${tempDate[1]} ${tempDate[3]}`;

    return dateTimeString;
  };

  return (
    <SafeAreaView>
            <ScrollView>
        <View style={styles.changeScreenContainer}>
          <View style={styles.changeScreenCard}>
            <Text style={{ color:"#3d00e4", fontWeight:"bold", alignSelf: 'center', fontSize:25, textDecorationLine: 'underline', }}>
              Sign In
            </Text>
          </View>
        </View>

      
        <View style={styles.container}>
          <Card style={styles.card}>
            <Form initialState={initialValues} validator={validators}>
              <Field id="email">
                {({ value, error, changeValue }) => (
                  <TextInput0
                    style={{ backgroundColor: 'white' }}
                    error={error}
                    value={value}
                    onChangeText={changeValue}
                    label="Email"
                    iconName="mail"
                  />
                )}
              </Field>

              <Field id="password">
                {({ value, error, changeValue }) => (
                  <PasswordTextInput
                    style={{ backgroundColor: 'white' }}
                    error={error}
                    value={value}
                    onChangeText={changeValue}
                    label="Password"
                  />
                )}
              </Field>

              <Submit onSubmit={handleSubmit}>
                {({ submit }) => (
                  <Button
                    style={{
                      borderColor: '#3d00e4',
                      borderWidth: 1,
                      textColor: 'grey',
                    }}
                    title="Submit"
                    disabled={isDisabled}
                    onPress={submit}>
                    <Text style={{ color: '#3d00e4' }}>Next</Text>
                  </Button>
                )}
              </Submit>
            </Form>
          </Card>
        </View> 

        <View style={styles.changeScreenContainer}>
          <Card style={styles.changeScreenCard}>
            <Text style={{ alignSelf: 'center' }}>
              Don't have an account?{' '}
              <Text
                style={styles.hyperlinkStyle}
                onPress={() => 
                  navigation.navigate('SignUp1')
                }>
                Sign Up
              </Text>
            </Text>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  changeScreenContainer: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: Constants.statusBarHeight,
    marginBottom: 0,
    padding:8
  },
  card: {
    padding: 12,
  },
  changeScreenCard: {
    padding: 12,
  },
  hyperlinkStyle: {
    color: 'blue',
  },
});

export default Login;
