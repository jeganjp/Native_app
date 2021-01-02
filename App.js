import React,{Component} from 'react';
import {View,Text,StyleSheet,
  Button,TouchableOpacity} from 'react-native';
//import example from './jp/example';
class App extends Component{
  state={
    count:0
  }
onpress=()=>
{
  this.setState({
    count:this.state.count + 1
  })
  if(this.state.count>20)
  {
    alert("You have pressed more than 20 times and current count is"+" "+this.state.count)
  }

}
 render()
 {
  return(
  <View style={styles.container}>
    <Button
    style={styles.button} 
    onPress={this.onpress}
    title='Click Me!'
    color='green'
    />
    <View>
    <Text style={{fontSize:15,color:'white'}}>
      You clicked {this.state.count} times
      </Text>
    </View>
  </View>
  )
}
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'green'
  },
  button:{
  alignItems:'center',
  backgroundColor:'orange',
  padding:10,
  borderWidth:2,
  }
})

export default App;