import React, { useState, KeyboardAvoidingView } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons";

const PasswordTextInput = React.memo(({error, ...props}) => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  return (
    <View style={styles.input}>
      <TextInput secureTextEntry={passwordVisible} 
         left={<TextInput.Icon name={() => <Ionicons name={'lock-closed'} size={25} color="#3d00e4" />} style = {{marginRight:'70%', marginTop:'40%'}} />}
      right={<TextInput.Icon name={passwordVisible ? "eye-off" : "eye"} color="#757575" onPress={() => setPasswordVisible(!passwordVisible)} />}  mode="flat" {...props} error={!!error} style = {{backgroundColor:'white', }}/>

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  )
});

const styles = StyleSheet.create({
  input: {
    marginVertical: 6,
    
  },
  error: {
    color: '#DB2A30',
  }
});

export default PasswordTextInput;