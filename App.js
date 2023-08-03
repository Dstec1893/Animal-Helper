import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import Parse from "parse/react-native.js";
import keys from './constants/Keys';
import AsyncStorage from '@react-native-async-storage/async-storage';
import "react-native-gesture-handler";

//import * as firebase from 'firebase'

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(keys.applicationId, keys.javascriptKey);
Parse.serverURL = keys.serverURL;


export default function App() {
    const createInstallation = async () => {
      const Installation = Parse.Object.extend(Parse.Installation);
      const installation = new Installation();
  
      installation.set("deviceType", Platform.OS);
  
      await installation.save();
    }
    createInstallation();

    
  return (
    <MainContainer/>
  );
}