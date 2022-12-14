import React,{Component} from 'react';
import {Header} from 'react-native-elements';

const MyHeader=props=>{
    return(
        <Header
            centerComponent = {{text:props.title,style:{color:'#000000',fontSize:20,fontWeight:'bold'}}}
            backgroundColor='#eaf9ef'
        />
    )
}

export default MyHeader;