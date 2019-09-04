import React from 'react'
import {View,FlatList, Text} from 'react-native'

export default class Record extends React.Component{
    render(){
        const {records} = this.props;
        return(
            <FlatList
                data={records}
                style={{ backgroundColor:'#eeeeee'}}
                renderItem={this._renderItem}
                keyExtractor={(item,index)=> index.toString()}
            />
        );
    };
    _renderItem=({item})=>(
        <View style={{ width:'100%',flexDirection:'row' ,backgroundColor:'#eee', borderBottomWidth:2, borderBottomColor:'#cccccc', margin:4}}>
            <View style={{flex:1,alignItems:'flex-end', justifyContent:'center', padding:4}}>
                <Text style={{fontSize:20}}>{item.order}</Text>
            </View>
            <View style={{flex:2,alignItems:'center', justifyContent:'center', padding:4 }}>
                <Text style={{fontSize:20, }}>{item.time}</Text>
            </View>
        </View>
    );
}