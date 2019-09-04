import React from 'react'
import {View, Text} from 'react-native'
import WatchFace from './WatchFace';
import WatchControl from './WatchControl';
import Record from './Record';

export default class StopWatch extends React.Component{
    static navigationOptions = {
        title: 'Stop Watch',
        headerStyle:{
            backgroundColor: '#eee'
        }
      };
    constructor(props){
        super(props);
        this.state={
            sectionTime:1234567,
            totalTime: "00:00.00",
            stopWatch: false,
            resetWatch: true,
            initialTime:0,
            recordCount: 0,
            currentTime:0,
            recordTime:0,
            timeAccumulation:0,
            records:[
                {
                    order: "",
                    time:"" ,
                },
                {
                    order: "",
                    time: "",
                },
                {
                    order: "",
                    time: "",
                },
                {
                    order: "",
                    time: "",
                },
                {
                    order: "",
                    time: "",
                },
                {
                    order: "",
                    time: "",
                },
            ],
        };
    }
    componentWillUnmount(){
        this.onStop();
        this.onClear();
    }
    render(){
        return(
            <View style={{flex:1}}>
                <WatchFace sectionTime={this.state.sectionTime} totalTime={this.state.totalTime} />
                <WatchControl onStart={()=>{this.onStart()}} onEnd={this.onStop} addRecord={()=>{this.addRecord()}} onClear={()=>{this.onClear()}} />
                <Record records={this.state.records}/>
            </View>
        );
    }
    onStart(){
        if(this.state.resetWatch){
            this.setState({
                stopWatch:false,
                resetWatch: false,
                timeAccumulation:0,
                initialTime: (new Date()).getTime(),
            });
        }
        else{
            this.setState({
                stopWatch:false,
                initialTime:(new Date()).getTime(),
            })
        }
        let milisec,second,minute,secmilisec,secsecond,secminute, coutingtime, seccountingtime;
        let interval= setInterval(()=>{
            this.setState({
                currentTime : (new Date()).getTime(),
            });
            coutingtime= this.state.timeAccumulation+this.state.currentTime - this.state.initialTime;
            minute= Math.floor( coutingtime/(60*1000));
            second=Math.floor((coutingtime- minute*(60*1000))/1000);
            milisec=Math.floor((coutingtime%1000)/10);

            seccountingtime=coutingtime- this.state.recordTime;
            secminute= Math.floor(seccountingtime/(60*1000));
            secsecond= Math.floor((seccountingtime- secminute*60*1000)/1000);
            secmilisec=Math.floor((seccountingtime%1000)/10);

            this.setState({
                totalTime: (minute<10?"0"+ minute:minute)+":"+(second<10?"0"+second: second)+"."+(milisec<10? "0"+milisec:milisec),
                sectionTime: (secminute<10?"0"+ secminute:secminute)+":"+(secsecond<10?"0"+secsecond: secsecond)+"."+(secmilisec<10? "0"+secmilisec:secmilisec),
            });
            if(this.state.stopWatch){
                this.setState({
                    timeAccumulation: coutingtime,
                });
                clearInterval(interval);
            }
        },100);
    }
    onStop=()=>{
        this.setState({
            stopWatch: true,
        });
    }
    addRecord(){  
        let {records, recordCount, timeAccumulation, currentTime, initialTime,sectionTime , totalTime} = this.state;
        records.unshift({
            order: recordCount++,
            time: totalTime,
        });
        this.setState({
            recordCount: recordCount,
            recordTime: timeAccumulation+ currentTime- initialTime,
            records: records,
        });
    }
    onClear(){
        this.setState({
            sectionTime:"00:00.00",
            totalTime: "00:00.00",
            stopWatch: false,
            resetWatch: true,
            initialTime:0,
            recordCount: 0,
            currentTime:0,
            recordTime:0,
            timeAccumulation:0,
            records:[
                {
                    order: "",
                    time:"" ,
                },
                {
                    order: "",
                    time: "",
                },
                {
                    order: "",
                    time: "",
                },
                {
                    order: "",
                    time: "",
                },
                {
                    order: "",
                    time: "",
                },
                {
                    order: "",
                    time: "",
                },
            ],
        });
    }
}