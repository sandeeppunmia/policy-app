import React, {Component} from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet, Alert, Modal, KeyboardAvoidingView,ScrollView} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class Documents extends Component{
   render(){
       return(
        <View>
             <Text style={{justifyContent:'center',fontSize:25}}>Clock</Text>
        </View>
       )
   }
}