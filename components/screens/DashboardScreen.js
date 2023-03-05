import React, { useState, useEffect } from 'react';
import Constants from 'expo-constants';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Pressable,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import '../../app.css';
import 'firebase/firestore';
import * as firebase from 'firebase'
import { Header} from 'react-native-elements';
import {Divider } from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

const DashboardScreen = ({navigation, route}) => {

//  const docRef = doc(db, "users", route.params.currentUser, "Sold");

const location = firebase.firestore().collection("users").doc(route.params.currentUser.uid).collection("Sold")
const location2 = firebase.firestore().collection("FakeOrders")

const [users, setUsers] = useState([])
const [users2, setUsers2] = useState([])


  const ListView = ({ item }) => {
return (
            
        
          <Pressable style={styles.cardContainer}>
            <Image
              source={{ uri: item.imageUri }}
              style={styles.storyImage}
            ></Image>

            <View style={styles.titleContainer}>
              <Text style={styles.storyTitleText}>
                {item.wasteName}
              </Text>
              <Text style={styles.storyAuthorText}>
                {item.weight}
              </Text>
              <Text style={styles.storyAuthorText}>
                {item.price}
              </Text>
              <Text style={styles.descriptionText}>
                {item.address}
              </Text>
            
          </View>
        </Pressable>
        
            
        )
    }

  const ListView2 = ({ item }) => {
return (
            
        
          <Pressable style={styles.cardContainer2}>
            <Image
              source={{ uri: item.imageUri }}
              style={styles.storyImage2}
            ></Image>

            <View style={styles.titleContainer}>
              <Text style={styles.storyTitleText2}>
                {item.wasteName}
              </Text>
              <Text style={styles.storyAuthorText2}>
                {item.weight}
              </Text>
              <Text style={styles.storyAuthorText2}>
                {item.price}
              </Text>
              <Text style={styles.descriptionText2}>
                {item.address}
              </Text>
            
          </View>
        </Pressable>
        
            
        )
    }

    useEffect(() => {
      location
      .onSnapshot(
        querySnapshot => {
          const users = []
          querySnapshot.forEach((doc) => {
            const { imageUri, wasteName, weight, price, address } = doc.data()
            users.push({
              id: doc.id,
              imageUri,
              wasteName,
              weight,
              price,
              address
              // addess
            })
          })
          setUsers(users)
        }
      )

      location2
      .onSnapshot(
        querySnapshot => {
          const users2 = []
          querySnapshot.forEach((doc) => {
            const { imageUri, wasteName, weight, price, address } = doc.data()
            users2.push({
              id: doc.id,
              imageUri,
              wasteName,
              weight,
              price,
              address
              // addess
            })
          })
          setUsers2(users2)
        }
      )

    });

  const sellScreen = () => {

navigation.navigate('Sell', { 
        phoneNo1:route.params.phoneNo1,
        address:route.params.address,
        currentUser:route.params.currentUser
            })

  }

      

  return (
    <SafeAreaView>
      <ScrollView>
                          <Header
      containerStyle={{
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1'
  }}
            centerComponent={{
              text: 'Home',
              style: { color:"#3d00e4", fontWeight:"bold", alignSelf: 'center', fontSize:25, textDecorationLine: 'underline', },
            }}
            leftComponent={
                    <TouchableOpacity  style = {{flex:1}}>
          <Ionicons size={RFValue(40)} name={"arrow-back-outline"}color="#3d00e4" style = {{borderStyle: 'dashed', flex:1}} /></TouchableOpacity>
            }
          />
    
        
          
        
          <View style={styles.card}>
          
          <ScrollView horizontal>
          <TouchableOpacity onPress={sellScreen} style = {{borderStyle: 'dashed', borderWidth:1, borderRadius:RFValue(12), borderColor:'white', padding:10, alignItems:'center', alignContent:'center', alignSelf:'center', justifyContent:'center'}}>
          <Text style={{ color:"#FFFFFF", fontSize:17, fontWeight:"bold", textDecorationLine: 'underline', alignContent:'center', alignItems:'center', alignSelf:'center'}}>Place Order</Text>
          <Ionicons size={RFValue(60)} name={"add"}color="#FFFFFF" style = {{alignContent:'center', alignItems:'center', alignSelf:'center'}} /></TouchableOpacity>



<View style = {{flex:1}}>
        <FlatList
        horizontal
				ItemSeparatorComponent={() => <View style={{margin: 13}}/>}
          data={users}
renderItem={({ item }) => <ListView item={item} />}
        />
        </View>
        </ScrollView>
          <Text style={{ color:"#FFFFFF", fontSize:10, fontWeight:"bold", paddingTop:10 }}>Note - This app is just a prototype, so your order won't be published publically</Text>
          </View>
        
















        
        
          
        
          <View style={styles.card2}>
          <View style = {{flexDirection:'row'}}>
          <Text style = {{color:'#3d00e4', fontSize:15, fontWeight:'bold', paddingTop:3}}>Fake Orders</Text>
        <Text style = {{ color:'#3d00e4', fontSize:10, alignSelf:'center', alignItems:'center', alignContent:'center', paddingTop:7, paddingLeft:7}}>
        These are fake orders just for testing
        </Text>
        </View>
    <ScrollView horizontal style = {{flex:1}}>


<View style = {{flex:1}}>
        <FlatList
        horizontal
				ItemSeparatorComponent={() => <View style={{margin: 13}}/>}
          data={users2}

          //ItemSeparatorComponent={SellCardView}
          //Item Separator View
renderItem={({ item }) => <ListView2 item={item} />}
        />
        </View>
        </ScrollView>


          <Divider style = {{borderWidth:1, borderColor:'#3d00e4', marginTop:10}} />


          <Text style = {{color:'#3d00e4', fontSize:15, fontWeight:'bold', paddingTop:10}}>Closest to you</Text>
        <Text style = {{ color:'#3d00e4', fontSize:10, alignSelf:'center', alignItems:'center', alignContent:'center', paddingTop:7}}>
        This app is just a prototype, so you can't see others orders
        </Text>
        <Divider style = {{borderWidth:1, borderColor:'#3d00e4', marginTop:10}} />
        
        <Text style = {{color:'#3d00e4', fontSize:15, fontWeight:'bold', paddingTop:10}}>Highest Offers</Text>
          <Text style = {{color:'#3d00e4', fontSize:10, alignSelf:'center', alignItems:'center', alignContent:'center', paddingTop:7}}>
        This app is just a prototype, so you can't see others orders
        </Text>
        <Divider style = {{borderWidth:1, borderColor:'#3d00e4', marginTop:10}} />

        <Text style = {{color:'#3d00e4', fontSize:15, fontWeight:'bold', paddingTop:10}}>Highest weight</Text>
          <Text style = {{color:'#3d00e4', fontSize:10, alignSelf:'center', alignItems:'center', alignContent:'center', paddingTop:7}}>
        This app is just a prototype, so you can't see others orders
        </Text>
        <Divider style = {{borderWidth:1, borderColor:'#3d00e4', marginTop:10}} />

        <Text style = {{color:'#3d00e4', fontSize:15, fontWeight:'bold', paddingTop:10}}>Top picks for you</Text>
          <Text style = {{color:'#3d00e4', fontSize:10, alignSelf:'center', alignItems:'center', alignContent:'center', paddingTop:7}}>
        This app is just a prototype, so you can't see others orders
        </Text>
        <Divider style = {{borderWidth:1, borderColor:'#3d00e4', marginTop:10}} />

        <Text style = {{color:'#3d00e4', fontSize:15, fontWeight:'bold', paddingTop:10}}>Based on previous purchases</Text>
          <Text style = {{color:'#3d00e4', fontSize:10, alignSelf:'center', alignItems:'center', alignContent:'center', paddingTop:7}}>
        This app is just a prototype, so you can't see others orders
        </Text>

          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  card: {
    padding: 12,
    paddingBottom:25,
     backgroundColor: '#3d00e4',
     borderTopRightRadius:RFValue(12),
     borderTopLeftRadius:RFValue(12)
  },
   card2: {
    padding: 12,
     backgroundColor: '#ffffff',
     marginTop:-10,
     flex:1,
     borderRadius:RFValue(12),  
     
  },

  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "white",
        borderTopLeftRadius: RFValue(12),
    borderTopRightRadius: RFValue(32),
    borderBottomLeftRadius: RFValue(32),
    borderBottomRightRadius: RFValue(12),
    
  },
    cardContainer2: {
      
    margin: RFValue(7),
    backgroundColor: "#3d00e4",
        borderTopLeftRadius: RFValue(12),
    borderTopRightRadius: RFValue(32),
    borderBottomLeftRadius: RFValue(32),
    borderBottomRightRadius: RFValue(12),
    
  },
  storyImage: {
    resizeMode: "contain",
    width: RFValue(343),
    alignSelf: "center",
    height: RFValue(260),
  },
    storyImage2: {
    resizeMode: "contain",
    width: RFValue(155),
    alignSelf: "center",
    height: RFValue(140),
  },
  titleContainer: {
    paddingLeft: RFValue(15),
    textAlign:'center',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  },
  storyTitleText: {
    paddingTop:5,
    fontSize: RFValue(25),
    fontFamily: "",
    color: "#3d00e4"
  },
    storyTitleText2: {
    paddingTop:5,
    fontSize: RFValue(13.5),
    fontFamily: "",
    color: "white"
  },
  storyAuthorText: {
    fontSize: RFValue(18),
    color: "#3d00e4"
  },
    storyAuthorText2: {
    fontSize: RFValue(9.7),
    color: "white"
  },
  descriptionText: {
    fontFamily: "Cabin-Regular",
    fontSize: 13,
    color: "#3d00e4",
    paddingTop: RFValue(10),
    paddingBottom: RFValue(13)
  },
    descriptionText2: {
    fontFamily: "Cabin-Regular",
    fontSize: 7,
    color: "white",
    paddingTop: RFValue(10),
    paddingBottom: RFValue(13)
  }
});


export default DashboardScreen;
