import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import MainApp from './src';
import StopWatch from './src/Day1';

const AppStack= createStackNavigator({
  MainApp:{
    screen: MainApp,
  },
  StopWatch:{
    screen: StopWatch,
  }
});
export default createAppContainer(AppStack);
