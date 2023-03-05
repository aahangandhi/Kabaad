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

export async function logout() {
  try {
    await auth.signOut();
  } catch (err) {
    alert('Not able to logout! - Custom made error by you!', err.message);
  }
}
