import React, {Component,useState} from 'react';
import {View,Text,StyleSheet,ScrollView,KeyboardAvoidingView,TextInput,Button,TouchableOpacity,Picker,Alert} from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import db from '../config';
import firebase from 'firebase';

export default class AddPolicy extends Component{

  constructor(){
    super();
    this.state={
      userId: firebase.auth().currentUser.email,
      policy_no:"",
      plan:"",
      doc:"",
      premium_amt:"",
      premium_type:"",
      next_premium_due_date:"",
      isDateTimePickerVisible: false,
      pickedDate: "",
    }
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
  };

  /*_next_premium_due_date=()=>{
    if(Picker.Item === 'Yearly'){
      nextDueDate = addYears(date,1)
      console.log(date);
    } else if(Picker.Item === 'Half-Yearly'){
      nextDueDate = addMonths(date,6)
      console.log(date);
    } else if(Picker.Item === 'Quaterly'){
      nextDueDate = addMonths(date,4)
      console.log(date);
    }
  }

  showPremiumType=(option)=>{
    if(option!=='disabled'){
      this.setState({
        premium_type:option
    })
    }
  }

  createUniqueId(){
      return Math.random().toString(36).substring(7);
  }

  add_details=(policy_no,plan,doc,premium_amt,premium_type,next_premium_due_date)=>{
    var userId = this.state.userId
    db.collection('policy_details').add({
      "user_id":userId,
      "policy_no":policy_no,
      "plan":plan,
      "doc":doc,
      "premium_amt":premium_amt,
      "premium_type":premium_type,
      "next_premium_due_date":next_premium_due_date
    })

    this.setState({
      policy_no:'',
      plan:'',
      doc:'',
      premium_amt:'',
      premium_type:'',
      next_premium_due_date:''
    })

    return Alert.alert("Details Added!!")
  }*/

  render(){
    return(
      <View>
        <Text style={styles.heading1}>ADD POLICY</Text>
        <Text style={styles.heading2}>DETAILS</Text>

        <View>
          <ScrollView style={{width:'100%'}}>
            <KeyboardAvoidingView style={styles.keyboardAvoidingViewStyle}>
              
              <TextInput style={styles.formTextInput}
              placeholder={"POLICY NUMBER"}
              maxLength={10}
              onChangeText={(text)=>{
                this.setState({
                  policy_no:text
                })
              }}/>

              <TextInput style={styles.formTextInput}
              placeholder={"PLAN"}
              onChangeText={(text)=>{
                this.setState({
                  plan:text
                })
              }}/>

              <TouchableOpacity style={styles.formTextInput} onPress={this._showDateTimePicker}>
                <Text style={{color:'#7d7d7d',marginTop:5}}>PICK  DATE OF COMMENCEMENT</Text>
              </TouchableOpacity>
              <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this._handleDatePicked}
                onCancel={this._hideDateTimePicker}
              />

              <TextInput style={styles.formTextInput}
              placeholder={"PREMIUM AMOUNT"}
              onChangeText={(text)=>{
                this.setState({
                  premium_amt:text
                })
              }}/>

              <TouchableOpacity style={styles.formTextInput}>
                <Text style={{color:'#7d7d7d',marginTop:5}}>NEXT PREMIUM DUE DATE</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>

                  <Text>SAVE</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  heading1:{
    fontFamily:'Georgia-Bold',
    fontSize:40,
    justifyContent:"center",
    marginLeft:80,
    marginTop:25
  },
  heading2:{
    fontFamily:'Georgia-Bold',
    fontSize:40,
    justifyContent:"center",
    marginLeft:110
  },
  keyboardAvoidingViewStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  formTextInput:{
    width:'75%',
    height:50,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10
  },
  button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
  },
})