import React, { Component } from 'react';
import LottieView from 'lottie-react-native';
import animationData from './Sources/Shapes.json'
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';

class Loading extends Component {
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            renderer: 'svg',
        }
        return (
          <SafeAreaView style={styles.container}>
            <View style={styles.container}>
               <LottieView
                options={defaultOptions}
                height={550}
                width={500}
               />
               <Text style={{marginTop:'-40%', fontWeight:'bold', fontSize:16, color:'#3d00e4', fontFamily:"Verdana"}}>Loading...</Text>
            </View>
            </SafeAreaView>
        )
    };  
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex:1,
    alignItems:'center',
    
  },
  });

export default Loading;