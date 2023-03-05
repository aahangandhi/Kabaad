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
import { Header, Icon } from 'react-native-elements';

const SignUp1 = ({navigation}) => { 
  const [isDisabled, setIsDisabled] = useState(false);
  const [currentUser, setCurrentUser] = useState("");


  const [isLoading, setIsLoading] = useState(true); 
  
  var initialValues = {
    fName: '',
    sName: '',
    email: '',
    phoneNo1: '',
    age: '',
    dobDate: '',
    dobMonth: '',
    dobYear: '',
  };

  const validators = {
    fName: yup
      .string()
      .required('1st Name is required')
      .min(2, 'Name must be at least 2 characters')
      .matches(/^[aA-zZ\s]+$/, 'Name cannot contain special characters'),
    sName: yup.string().min(0, 'Name must be at least 2 characters'),
    email: yup
      .string()
      .required('Email is required')
      .email('Invalid email format'),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches('(?=.*[a-z])', 'At least 1 lowercase letter required')
      .matches('(?=.*[A-Z])', 'At least 1 uppercase letter required')
      .matches('(?=.*\\d)', 'At least one digit required'),
    phoneNo1: yup
      .string()
      .required('Phone No. is required')
      .typeError('Enter numeric data'),
    dobDate: yup
      .number()
      .required('DOB Date is required')
      .min(1, 'Please enter a valid date')
      .max(31, 'Please enter a valid date')
      .typeError('Enter numeric data'),
    dobMonth: yup
      .number()
      .required('DOB Month is required')
      .min(1, 'Please enter a valid date')
      .max(12, 'Please enter a valid date')
      .typeError('Enter numeric data'),
    dobYear: yup
      .number()
      .required('DOB Year is required')
      .min(1900, 'You are too old!')
      .max(2004, 'You need to be at least 18 years old!')
      .typeError('Enter numeric data'),
  };

  const handleSubmit = (initialValues) => {

      setIsDisabled(true);

      auth.createUserWithEmailAndPassword(initialValues.email, initialValues.password)
      .then((userCredentials) => {

      
         const user = userCredentials.user;
          console.log('Signed up with:', user.uid);
          navigation.navigate('SignUp2', {
            name: initialValues.fName,
            sName:initialValues.sName,
            email:initialValues.email,
            password:initialValues.password,
            phoneNo1:initialValues.phoneNo1,
            dobDate:initialValues.dobDate, 
            dobMonth:initialValues.dobMonth, 
            dobYear:initialValues.dobYear,
            currentUser:user
          })
      })
      .catch((error) => {
        setIsDisabled(false);
        alert(error.message);
      });




      };

  return (
    <SafeAreaView>
      <ScrollView>

      <Header
        containerStyle={{
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: Constants.statusBarHeight,
    marginBottom: 0,
  }}
            centerComponent={{
              text: 'Sign Up',
              style: { color:"#3d00e4", fontWeight:"bold", alignSelf: 'center', fontSize:25, textDecorationLine: 'underline', },
            }}
          />


        <View style={styles.container}>
          <Card style={styles.card}>
            <Form initialState={initialValues} validator={validators}>
              <View style={styles.nameGroup}>
                <View style={styles.nameBox}>
                  <Field id="fName">
                    {({ value, error, changeValue }) => (
                      <TextInput0
                        style={{ backgroundColor: 'white' }}
                        error={error}
                        value={value}
                        onChangeText={changeValue}
                        label="1st Name"
                        iconName="person"
                      />
                    )}
                  </Field>
                </View>

                <View style={styles.nameBox}>
                  <Field id="sName">
                    {({ value, error, changeValue }) => (
                      <TextInput0
                        style={{ backgroundColor: 'white' }}
                        error={error}
                        value={value}
                        onChangeText={changeValue}
                        label="2nd Name"
                        iconName="person"
                      />
                    )}
                  </Field>
                </View>
              </View>

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

              <Field id="phoneNo1">
                {({ value, error, changeValue }) => (
                  <TextInput0
                    error={error}
                    value={'+91 ' + value.slice(4).replace(/[^0-9]/g, "")}
                    onChangeText={changeValue}
                    keyboardType="numeric"
                    label="Phone Number"
                    placeholder="+91 ##########"
                    iconName="call"
                  />
                )}
              </Field>

              {/*
                            <Field id="dob">
                {({ value, error, changeValue }) => (
                  <TextInput0
                    editable={true}
                    error={error}
                    value={value}
                    onChangeText={changeValue}
                    keyboardType="numeric"
                    placeholder="Format - DDMMYYYY"
                    label="Date of Birth"
                    iconName="calendar"
                  />
                )}
              </Field>
              */}

<View style={styles.dateGroup}> 
<View style={styles.dateBox}>
              <Field id="dobDate">
                {({ value, error, changeValue }) => (
                  <TextInput0
                    editable={true}
                    error={error}
                    value={value.replace(/[^0-9]/g, '')}
                    onChangeText={changeValue}
                    keyboardType="numeric"
                    placeholder="Date"
                    label="DOB"
                    iconName="calendar"
                  />
                )}
              </Field>
              </View>

              <View style={styles.dateBox}>
              <Field id="dobMonth">
                {({ value, error, changeValue }) => (
                  <TextInput0
                    editable={true}
                    error={error}
                    value={value.replace(/[^0-9]/g, '')}
                    onChangeText={changeValue}
                    keyboardType="numeric"
                    placeholder="Month"
                    label="DOB"
                    iconName="calendar"
                  />
                )}
              </Field>
              </View>

              <View style={styles.dateBox}>
              <Field id="dobYear">
                {({ value, error, changeValue }) => (
                  <TextInput0
                    editable={true}
                    error={error}
                    value={value.replace(/[^0-9]/g, '')}
                    onChangeText={changeValue}
                    keyboardType="numeric"
                    placeholder="Year"
                    label="DOB"
                    iconName="calendar"
                  />
                )}
              </Field>
              </View>
              </View>

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
              Already have an account?{' '}
              <Text
                style={styles.hyperlinkStyle}
                onPress={() => 
                  navigation.navigate('Login')
                }>
                Sign In
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
    padding: 8,
  },
  card: {
    padding: 12,
  },
  changeScreenCard: {
    padding: 12,
  },
  nameGroup: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-evenly',
  },
  nameBox: {
    marginHorizontal: '1%',
    width: '49%',
  },
    dateGroup: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-evenly',
  },
  dateBox: {
    marginHorizontal: '0.5%',
    width: '33%',
  },
  hyperlinkStyle: {
    color: 'blue',
  },
});

export default SignUp1;
