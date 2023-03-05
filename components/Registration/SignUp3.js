import React, { useState, useEffect } from 'react';
import Constants from 'expo-constants';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Pressable
} from 'react-native';
import '../../app.css';
import 'firebase/firestore';
import { Card } from 'react-native-paper';
import TextInput0 from '../Ref/TextInput';
import TextInput1 from '../Ref/TextInputNoEdit';
import PasswordTextInput from '../Ref/PasswordTextInput';
import { Form, Field, Submit } from 'react-swift-form';
import * as yup from 'yup';
import { RFValue } from "react-native-responsive-fontsize";
import { Button } from 'react-native-paper';
import { db, auth} from "../../firebase";
import { useHover } from "@react-native-aria/interactions";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Location from 'expo-location';

const SignUp3 = ({navigation, route}) => {

  var initialValues = {
DShdhskdjhaDA:"This is a not required value"
  };

  const handleSubmit = () => {

     navigation.navigate('Home', {
        name: route.params.name,
        sName:route.params.sName,
        email:route.params.email,
        password:route.params.password,
        phoneNo1:route.params.phoneNo1,
        coordinates:route.params.coordinates,
        address:route.params.address,
        currentUser:route.params.currentUser
            })

  }

const [isDisabled, setIsDisabled] = useState(false);
const [passwordVisible, setPasswordVisible] = useState(true);

  return (
    <SafeAreaView>
        <View style={styles.changeScreenContainer}>
          <View style={styles.changeScreenCard}>
            <Text style={{ color:"#3d00e4", fontWeight:"bold", alignSelf: 'center', fontSize:25, textDecorationLine: 'underline', }}>
              Confirmation
            </Text>
          </View>
        </View>

      <ScrollView scrollEnabled={false} enabled={false}>
        <View style={styles.container}>
          <Card style={styles.card}>
            <Text>Congrats! Your account has been registered with the following credentials:</Text>
          </Card>
          <Card style={styles.card2}>
            <View style={{flexDirection:'row'}}><Text style={{fontWeight:'bold'}}>Name: </Text><Text>{route.params.name} {route.params.sName}</Text></View>

            <View style={{flexDirection:'row'}}><Text style={{fontWeight:'bold'}}>Email: </Text><Text>{route.params.email}</Text></View> 

            <View style={{flexDirection:'row'}}><View style = {{flexDirection:'row', flex:0}}><Text style={{fontWeight:'bold'}}>Password: </Text><Text>{passwordVisible? "********":route.params.password}</Text></View>
            <View style = {{ marginLeft:"90%"}}><Ionicons size={RFValue(15)} name={passwordVisible ? "eye-off" : "eye"} style = {{}}color="#000000" onPress={() => setPasswordVisible(!passwordVisible)} /></View></View>

            <View style={{flexDirection:'row'}}><Text style={{fontWeight:'bold'}}>Phone no: </Text><Text>{route.params.phoneNo1}</Text></View>

            <View style={{flexDirection:'row'}}><Text style={{fontWeight:'bold'}}>Address: </Text><Text>{route.params.address}</Text></View>
          </Card>

          <Card style={styles.card2}>
          <Form initialState={initialValues}>
            
                  
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
                    <Text style={{ color: '#3d00e4' }}>Go to home</Text>
                  </Button>
                )}
              </Submit>
            </Form>
              
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
    
    
  },
  card: {
    padding: 12,
  },
    card2: {
    padding: 12,
    marginTop:10
  },
  changeScreenCard: {
    padding: 12,
    //backgroundColor:"#3d00e4"
    backgroundColor: '#ecf0f1',
  },
});

export default SignUp3;
