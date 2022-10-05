import React, {Component} from 'react';
import {View,Text,StyleSheet,Button,Alert} from 'react-native';
import {ImagePicker} from 'expo';
import * as firebase from 'firebase';

export default class Documents extends Component{

  onChooseImagePress=async()=>{
    let result = await ImagePicker.launchCameraAsync();
    //let result = await ImagePicker.launchLibraryAsync();

    if(!result.cancelled){
      this.uploadImage(result.uri,"test-image")
      .then(()=>{
        Alert.alert("Successfully Uploaded")
      })
      .catch((error)=>{
        Alert.alert(error)
      });
    }
  }

  uploadImage=async(uri,imageName)=>{
    const response = await fetch(uri);
    const blob = await response.blob();

    var ref = firebase.storage().ref().child("images/" + imageName);
    return ref.put(blob);
  }

   render(){
       return(
        <View style={styles.container}>
            <Button title="Choose Image...." onPress={this.onChooseImagePress}/>
        </View>
       )
   }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:50,
    alignItems:"center"
  }
  /*button:{
    width:190,
    height:85,
    backgroundColor:"red",
    marginLeft:100,
    justifyContent:"center"
  },
  buttonText:{
    fontFamily:'Cochin',
    fontWeight:20,
    fontSize:25,
    color:'#ffffff'
  }*/
})