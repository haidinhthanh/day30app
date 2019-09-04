import React from 'react'
import {View,Text, Button} from 'react-native'

export default class MainApp extends React.Component{
   render(){
       return(
           <View style={{flex:1,}}>
               <Button
                    title={'Stop Watch'}
                    onPress={()=>{this.props.navigation.navigate("StopWatch")}}
               />
           </View>
       );
   } 
}