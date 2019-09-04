import React from 'react'
import {View,Text} from 'react-native'

type Props={
    sectionTime: Boolean,
    totalTime : string, 
}

export default class WatchFace extends React.Component<Props>{
    render(){
        const {sectionTime, totalTime} = this.props;
        return(
            <View style={{ width:'100%', alignItems:'center', marginTop:24, marginBottom:32}}>
                <View style={{ alignItems:'flex-end',}}>
                    <Text style={{fontSize:20, color:'#cccccc'}}>{sectionTime}</Text>
                    <Text style={{fontSize:56}}>{totalTime}</Text>
                </View>
            </View>
        );
    }
}