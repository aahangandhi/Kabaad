import React, { useState, useEffect, Component } from 'react';
import {View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, Image, ScrollView, TextInput, Button, TouchableOpacity, Dimensions
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import * as ImagePicker from 'expo-image-picker';
import { Card } from 'react-native-paper';










const windowWidth = Dimensions.get('window').width;








  

export default class SellerNew extends Component {


/*
_renderImages() {
    let images = null;
    //let remainder = 4 - (this.state.devices % 4);
    this.state.image.map((item) => {
      images.push(
        <Image
          source={{ uri: item }}
          style={{ width: windowWidth/2.3, height: windowWidth/2}}
        />
      );
    });

    return images;
  }
*/


  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri })
      
      let base64Img = `data:image/jpg;base64,${result.base64}`
      
      //Add your cloud name
      let apiUrl = 'https://api.cloudinary.com/v1_1/technource/image/upload';
  
      let data = {
        "file": base64Img,
        "upload_preset": "rbyqqbqn",
      }

      fetch(apiUrl, {
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST',
      }).then(async r => {
          let data = await r.json()
          console.log(data.secure_url)
          return data.secure_url
    }).catch(err=>console.log(err))
  }

  };









  
  constructor(props) {

    super(props);
    this.state = {
      image: null,
      fontsLoaded: false,
      previewImage: "image_1",
    };
  }



  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>Place Your Order</Text>
            </View>
          </View>



          
          <ScrollView>
<View style={styles.fieldsContainer}>





<View style = {{alignItems:'center'}}>
      <View style={styles.uploadContainer}>

                    <View style = {{flexDirection:"column", marginTop:1, align:'center', justifyContent:'space-evenly'}}>
            
              <TouchableOpacity
                style={styles.uploadButton}
          onPress={()=>this.pickImage()}
              >
              <Ionicons
              name="cloud-upload-outline"
              size={RFValue(35)}
              color="#15193c"
              style={styles.submitIcons}
            />
            <Text style={styles.uploadText}>Upload Image of Waste</Text>

              </TouchableOpacity>
                          <Text style={styles.bottomUploadText}>Only 1 photo</Text>
              </View>
      
   {/*     <View style={{flexDirection:"row", width:'100%', flex:0.7}}>
        {this._renderImages()}
        </View> */}






        <View onPress={()=>this.pickImage()} style={{alignSelf: 'center'}}>
          <View style={{backgroundColor:'transparent'}}>
            {this.state.image?
              <Image source={{uri: this.state.image}} style={{width: 200, height: 200, borderRadius: RFValue(10), alignSelf:'center'}}/>
              :
              <View style={{ backgroundColor: 'transparent',width: 200, height: 200, borderRadius: RFValue(10)}}/>
            }
      </View>
      </View>








      </View>
     </View>   









 










            <View style={{ height: RFValue(this.state.dropdownHeight) }}>
            
              
            </View>

<View style = {{flexDirection:"row", marginTop:3}}>
            <Ionicons
              name="trash"
              size={RFValue(35)}
              color="#3d00e4"
              style={styles.icons}
            />
              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(title) => this.setState({ title })}
                placeholder={"Waste Name"}
                placeholderTextColor="#3d00e4"
              />
              </View>

<View style = {{flexDirection:"row", marginTop:10}}>
            <Ionicons
              name="document-text"
              size={RFValue(35)}
              color="#3d00e4"
              style={styles.icons}
            />
              <TextInput
                style={[
                  styles.inputDesFont,
                  styles.inputFontExtra,
                  styles.inputDesTextBig,
                ]}
                onChangeText={(description) => this.setState({ description })}
                placeholder={"Description"}
                multiline={false}
                numberOfLines={4}
                placeholderTextColor="#3d00e4"
              />
              </View>

<View style = {{flexDirection:"row", marginTop:10}}>
            <Ionicons
              name="cash"
              size={RFValue(35)}
              color="#3d00e4"
              style={styles.icons}
            />
              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(story) => this.setState({ story })}
                placeholder={"Price"}
                multiline={true}
                numberOfLines={20}
                placeholderTextColor="#3d00e4"
              />
              </View>

<View style = {{flexDirection:"row", marginTop:10}}>
            <Ionicons
              name="barbell"
              size={RFValue(35)}
              color="#3d00e4"
              style={styles.icons}
            />
              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(moral) => this.setState({ moral })}
                placeholder={"Expected/Minimum Weight"}
                multiline={true}
                numberOfLines={4}
                placeholderTextColor="#3d00e4"
              />
              </View>

              <View style = {{flexDirection:"row", marginTop:10}}>
            <Ionicons
              name="call"
              size={RFValue(35)}
              color="#3d00e4"
              style={styles.icons}
            />
              <Text
                style={[
                  styles.textFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
              >dsfa</Text>
              </View>

              <View style = {{flexDirection:"row", marginTop:10}}>
            <Ionicons
              name="call"
              size={RFValue(35)}
              color="#3d00e4"
              style={styles.icons}
            />
              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(moral) => this.setState({ moral })}
                placeholder={"Contact number 2"}
                multiline={true}
                numberOfLines={4}
                placeholderTextColor="#3d00e4"
              />
              </View>
              
               <View style = {{flexDirection:"row", marginTop:10}}>
            <Ionicons
              name="home"
              size={RFValue(35)}
              color="white"
              style={styles.icons}
            />
              <Text
                style={[
                  styles.textFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
              >House, sStreet</Text>
              </View>
              

              <View style = {{flexDirection:"row", marginTop:10, align:'center', justifyContent:'space-evenly'}}>

              <TouchableOpacity
                style={styles.submitButton}
                onChangeText={(moral) => this.setState({ moral })}
                placeholder={"Expected/Minimum Weight"}
                multiline={true}
                numberOfLines={4}
                placeholderTextColor="white"
              >
              <Ionicons
              name="document-outline"
              size={RFValue(35)}
              color="#15193c"
              style={styles.submitIcons}
            />
            <Text style={styles.submitText}>Save as Draft</Text>
            
              </TouchableOpacity>
            
              <TouchableOpacity
                style={styles.submitButton}
                onChangeText={(moral) => this.setState({ moral })}
                placeholder={"Expected/Minimum Weight"}
                multiline={true}
                numberOfLines={4}
                placeholderTextColor="white"
              >
            <Text style={styles.submitText}>Next</Text>
            <Ionicons
              name="arrow-forward-circle-outline"
              size={RFValue(35)}
              color="#15193c"
              style={styles.submitIcons}
            />
              </TouchableOpacity>
              </View>
          </View>
            </ScrollView>

        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex:1,
    flexDirection: "row",
    justifyContent:'center',
    marginBottom:'5%',
        position: '',
  },
  appIcon: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  iconImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  appTitleTextContainer: {
    justifyContent: "center",
  },
  appTitleText: {
    color: "#3d00e4",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans",
  },
  fieldsContainer: {
    flex: 0.85,
  },
  inputFont: {
    height: RFValue(40),
    width:"89%",
    marginTop: RFValue(0),
    borderColor: "#3d00e4",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "#3d00e4",
    fontFamily: "Bubblegum-Sans",
  },
   textFont: {
    height: RFValue(40),
    marginTop: RFValue(0),
    paddingLeft: RFValue(10),
    color: "#3d00e4",
    fontFamily: "Bubblegum-Sans",
  },
  inputDesFont: {
    height: RFValue(200),
    width:"89%",
    marginTop: RFValue(0),
    borderColor: "#3d00e4",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "#3d00e4",
    fontFamily: "Bubblegum-Sans",
    textAlignVertical: "top",
  },
  submitButton: {
    height: RFValue(40),
    width:"40%",
    marginTop: RFValue(0),
    borderColor: "#3d00e4",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    backgroundColor: "#3d00e4",
    fontFamily: "Bubblegum-Sans",
    textAlign:'center',
    justifyContent:'center',
    flexDirection:"row"
  },
  submitText: {
    color: "#15193c",
    fontFamily: "Bubblegum-Sans",
    textAlign:'center',
    justifyContent:'center',
    padding: RFValue(5),
  },
  uploadText: {
    color: "#15193c",
    fontFamily: "Bubblegum-Sans",
    textAlign:'center',
    justifyContent:'center',
    padding: RFValue(5),
  },
  bottomUploadText: {
    color: "#3d00e4",
    fontFamily: "Bubblegum-Sans",
    textAlign:'center',
    justifyContent:'center',
    padding: RFValue(5),
    fontSize: RFValue(20),
    
  },
  inputTextBig: {
    textAlignVertical: "top",
    padding: RFValue(5),
  },
  inputDesTextBig: {
    textAlignVertical: "top",
    paddingBottom: "29.5%",
  },
  icons: {
    paddingLeft:3,
    paddingRight:3,
    textAlignVertical: "center",
    textAlign:'center',
    justifyContent:'center',
  },
  submitIcons: {
    paddingLeft:3,
    paddingRight:3,
    textAlignVertical: "center",
    textAlign:'center',
    justifyContent:'center',
  },
   uploadContainer: {
    flex: 1, alignItems: 'center', justifyContent: 'center' ,
    height: "200%",
    width:"95%",
    borderColor: "#3d00e4",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "#3d00e4",
    fontFamily: "Bubblegum-Sans",
    textAlignVertical: "top",
    padding: RFValue(5),
  },
  uploadButton: {
    height: RFValue(40),
    width:"100%",
    marginTop: RFValue(0),
    borderColor: "#3d00e4",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    backgroundColor: "#3d00e4",
    fontFamily: "Bubblegum-Sans",
    textAlign:'center',
    justifyContent:'center',
    flexDirection:"row"
  },
});
