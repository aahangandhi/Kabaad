import React, { useState, useEffect } from 'react';
import Constants from 'expo-constants';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Pressable,
  PermissionsAndroid,
  Platform
} from 'react-native';
import '../../app.css';
import 'firebase/firestore';
import * as firebase from 'firebase'
import { Card } from 'react-native-paper';
import TextInput0 from '../Ref/TextInput';
import TextInput1 from '../Ref/TextInputNoEdit';
import { Form, Field, Submit } from 'react-swift-form';
import * as yup from 'yup';
import { Button } from 'react-native-paper';
import { db, auth} from "../../firebase";
import * as Location from 'expo-location';
import Loading from "../../LoadingScreen"
import { useHover } from "@react-native-aria/interactions";
 //import Geolocation from '@react-native-community/geolocation';

const SignUp2 = ({navigation, route}) => {

  const [isDisabled, setIsDisabled] = useState(false);
  const [yesTheme, setYesTheme] = useState(false);
  const [noTheme, setNoTheme] = useState(false);
  const [coordinates, setCoordinates] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [state, setState] = useState(null);
  


  



    
const ref = React.useRef()
  const {isHovered, hoverProps} = useHover({},ref);


    

  var initialValues = {
coordinates:"",
address:""
  };

  const validators = {
    // coordinates: yup
    //   .string()
    //   .required('Answer question above ☝'),
    address: yup
      .string()
      .required('Address is required'),
  };

  

  const [currentLongitude, setCurrentLongitude] = useState('...');
  const [currentLatitude, setCurrentLatitude] = useState('...');
  const [locationStatus, setLocationStatus] = useState('');

    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };

  useEffect(() => {
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const getOneTimeLocation = () => {
        setYesTheme(true)
    setNoTheme(false)
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        setLocationStatus('You are Here');
        const currentLongitude = JSON.stringify(position.coords.longitude);
        //getting the Longitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);
        //getting the Latitude from the location json
        setCurrentLongitude(currentLongitude);
        //Setting state Longitude to re re-render the Longitude Text
        setCurrentLatitude(currentLatitude);
        //Setting state Latitude to re re-render the Longitude Text
        setCoordinates(currentLatitude + ", " + currentLongitude)
      },
      (error) => {
        setLocationStatus(error.message);
      },
      { enableHighAccuracy: true, timeout: 30000, maximumAge: 1000 }
    );
  };

  const subscribeLocationLocation = () => {
    
    watchID = Geolocation.watchPosition(
      (position) => {
        setLocationStatus('You are Here');
        //Will give you the location on location change
        console.log(position);
        const currentLongitude = JSON.stringify(position.coords.longitude);
        //getting the Longitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);
        //getting the Latitude from the location json
        setCurrentLongitude(currentLongitude);
        //Setting state Longitude to re re-render the Longitude Text
        setCurrentLatitude(currentLatitude);
        //Setting state Latitude to re re-render the Longitude Text
        setCoordinates(currentLatitude + ", " + currentLongitude)
      },
      (error) => {
        setLocationStatus(error.message);
      },
      { enableHighAccuracy: false, maximumAge: 1000 }
    );
  };

  

   const permissionAlert = () => {
    alert(
      'Location permissions are blocked! Please go to settings and allow permissions to get your location.',
      [
      ],
      { 
        cancelable: true 
      }
    );
  }

  

  const yesHome = () => {
getOneTimeLocation

      
  }

  const noHome = () => {
    setNoTheme(true)
    setYesTheme(false)
    setCoordinates("")
    setCurrentLatitude("")
    setCurrentLongitude("")
  }

  

  const handleSubmit = async (initialValues) => {

    
if(coordinates===""){
    
      alert("To place an order, you should first provide us your coordinates for proper delivery location. This can be done by going to Settings > Location > Coordinates > Add coordinates")
}
    

    setIsDisabled(true);

    

  
    

    const db = firebase.firestore();

    db
    .collection("users").doc(route.params.currentUser.uid)
    // .add({name"Aahan",...}).        this is only for when you don't want to add doc() and only collection
    // .doc("anything").set({name"Aahan",...}).        this is only for when you want to give the doc() a specific name
      .set({
        name: route.params.name,
        sName:route.params.sName,
        email:route.params.email,
        password:route.params.password,
        phoneNo1:route.params.phoneNo1,
        dobDate:route.params.dobDate,
        dobMonth:route.params.dobMonth,
        dobYear:route.params.dobYear,
        latitude:currentLatitude,
        longitude:currentLongitude,
        coordinates:coordinates,
        address:initialValues.address
      })
      .then(() => {
        console.log("Your message has been submitted👍");

          navigation.navigate('SignUp3', {
              name: route.params.name,
        sName:route.params.sName,
        email:route.params.email,
        password:route.params.password,
        phoneNo1:route.params.phoneNo1,
        coordinates:coordinates,
        address:initialValues.address,
        currentUser:route.params.currentUser
            })

      })
      .catch((error) => {
        alert(error.message);
        setIsDisabled(false);
      });

db
    .collection("users").doc(route.params.currentUser.uid).collection("Info").doc(route.params.currentUser.uid)
    // .add({name"Aahan",...}).        this is only for when you don't want to add doc() and only collection
    // .doc("anything").set({name"Aahan",...}).        this is only for when you want to give the doc() a specific name
      .set({
        name: route.params.name,
        sName:route.params.sName,
        email:route.params.email,
        password:route.params.password,
        phoneNo1:route.params.phoneNo1,
        dobDate:route.params.dobDate,
        dobMonth:route.params.dobMonth,
        dobYear:route.params.dobYear,
        latitude:latitude,
        longitude:longitude,
        coordinates:coordinates,
        address:initialValues.address
      })
      .then(() => {
        console.log("Your message has been submitted👍");

          navigation.navigate('SignUp3', {
              name: route.params.name,
        sName:route.params.sName,
        email:route.params.email,
        password:route.params.password,
        phoneNo1:route.params.phoneNo1,
        coordinates:coordinates,
        address:initialValues.address,
        currentUser:route.params.currentUser
            })

      })
      .catch((error) => {
        alert(error.message);
        setIsDisabled(false);
      });








      };


      

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.changeScreenContainer}>
          <View style={styles.changeScreenCard}>
            <Text style={{ color:"#3d00e4", fontWeight:"bold", alignSelf: 'center', fontSize:25, textDecorationLine: 'underline', }}>
              Location
            </Text>
          </View>
        </View>

      
        <View style={styles.container}>
          <Card style={styles.card}>
            <Form initialState={initialValues} validator={validators}>
<View style = {{borderWidth:2, borderColor: '#3d00e4', borderRadius:5, padding:10}}>
            <Text style={{color:"#3d00e4", fontWeight:"bold", textAlign:'center', marginBottom:10}}>Are you currently at your house/place for delivery?</Text>
              






              <View style={styles.nameGroup}>
                <View style={styles.nameBox}>
              
                
                  <Button
                    style={yesTheme ? {borderColor: '#3d00e4', borderWidth: 1, textColor: '#3d00e4', backgroundColor: '#3d00e4'} : {borderColor: '#3d00e4', borderWidth: 1, textColor: '#3d00e4'}}
                    title="Yes"
                    disabled={isDisabled}
                    onPress={getOneTimeLocation}>
<Text style={yesTheme ? {color:'white'} : {color:'#3d00e4'}}>Yes</Text>
                  </Button>
                
              
                </View>
 
                

                <View style={styles.nameBox}>
                  

                  <Button
                    style={noTheme ? {borderColor: '#3d00e4', borderWidth: 1, textColor: '#3d00e4', backgroundColor: '#3d00e4'} : {borderColor: '#3d00e4', borderWidth: 1, textColor: '#3d00e4'}}
                    title="No"
                    disabled={isDisabled}
                    onPress={noHome}>
                    <Text style={noTheme ? {color:'white'} : {color:'#3d00e4'}}>No</Text>
                  </Button>
                </View>
              </View>
</View>





{/*
              <View style={styles.nameGroup}>
                <View style={styles.nameBox}>
                  <Field id="lat">
                    {({ value, error, changeValue }) => (
                      <TextInput1
                        style={{ backgroundColor: 'white' }}
                        error={error}
                        value={value}
                        onChangeText={changeValue}
                        label="Latitude"
                        iconName="compass"
                      />
                    )}
                  </Field>
                </View>

                

                <View style={styles.nameBox}>
                  <Field id="long">
                    {({ value, error, changeValue }) => (
                      <TextInput1
                        style={{ backgroundColor: 'white' }}
                        error={error}
                        value={value}
                        onChangeText={changeValue}
                        label="Longitude"
                        iconName="compass"
                      />
                    )}
                  </Field>
                </View>
              </View>

              */}

              
<Text>{locationStatus}</Text>
          
                  <Field id="coordinates">
                    {({value, error, changeValue}) => (
                      <Pressable ref={ref} {...hoverProps}>
                      <TextInput1
                      error={error}
                        style={{ backgroundColor: 'white' }}
                        value={noTheme
                                ? "NaN"
                                :yesTheme
                                  ? currentLatitude + ", " + currentLongitude
                                  : ""}
                        onChangeText={changeValue}
                        changeValue={changeValue}
                        label={isHovered ? "Answer question above" : "Coordinates"}
                        iconName="compass"
                      />
                      </Pressable>
                    )}
                  </Field>
                  
               {coordinates===null && state==="checking" ? <Text style={{marginTop:-6, color: '#DB2A30'}}>Answer question above ☝</Text> : null}

               

      {/*         {yesTheme?<Text  style={{color:"#3d00e4", fontWeight:"bold", textAlign:'center', marginTop:10, marginBottom:'-2.5%'}}>Coordinates for place of delivery: {latitude}, {longitude}</Text>:""}
      */}

              

              <Field id="address">
                {({ value, error, changeValue }) => (
                  <TextInput0
                    style={{ backgroundColor: 'white', marginTop:'-100%' }}
                    error={error}
                    value={value}
                    onChangeText={changeValue}
                    placeholder="House, Street, Block, Area, City"
                    label="Address"
                    iconName="home"
                  />
                )}
              </Field>

      {/*      <Text>Uid: {route.params.currentUser.uid}</Text> */}

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
  changeScreenCard: {
    padding: 12,
    //backgroundColor:"#3d00e4"
    backgroundColor: '#ecf0f1',
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
});

export default SignUp2;
