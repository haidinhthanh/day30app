import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

export default class WatchControl extends React.Component{
    static navigationOptions = {
        title: 'Stop Watch',
    };
    constructor(props){
        super(props);
        this.state={
            isWatchOn: false,
            buttonText: "Start",
            recordText: "Reset",
        };
    }
    render(){
        const { recordText, buttonText} = this.state;
        const { addRecord} = this.props;
        return(
            <View style={{width:'100%',flexDirection:'row', justifyContent:'center', alignItems:'center', backgroundColor:'#eee',}}>
                <TouchableOpacity 
                    style={{ width:80, height:80, borderRadius:40,backgroundColor:'#fff',justifyContent:'center', alignItems:'center', margin:20}}
                    onPress={()=>{this.onAdd()}}
                >
                    <Text>{recordText}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{ width:80, height:80, borderRadius:40, backgroundColor:'#fff',justifyContent:'center', alignItems:'center', margin:20}}
                    onPress={()=>{this.onStart()}}
                >
                    <Text>{buttonText}</Text>
                </TouchableOpacity>
            </View>
        );
    }
    onStart(){
        if(this.state.isWatchOn){
            this.props.onEnd();
            this.setState({
                isWatchOn:false,
                buttonText: "Start",
                recordText: "Reset",
            });
        }
        else{
            this.props.onStart();
            this.setState({
                isWatchOn: true,
                buttonText:'End',
                recordText: "Record",
            });
        }
    }
    onAdd(){
        if(this.state.isWatchOn){
            this.props.addRecord();
        }
        else{
            this.props.onClear();
        }
    }
}