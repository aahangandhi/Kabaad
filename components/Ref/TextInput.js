import React, {KeyboardAvoidingView } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons";

const TextInput0 = React.memo(({error, ...props}) => {
  return (
    <View style={styles.input}>
      <TextInput  left={<TextInput.Icon name={() => <Ionicons name={props.iconName} size={25} color="#3d00e4" />} style = {{marginRight:'70%', marginTop:'40%'}} />} mode="flat" {...props} error={!!error} style = {{backgroundColor:'white', }} />

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

export default TextInput0;