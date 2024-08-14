import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Button } from 'react-native';


console.log("Status: Running");


export default function App() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log("Button was Clicked");
  };

  const reset = () => {
    setCount(0);
    console.log("Button was Clicked");
  };

  const decrement = () => {
    setCount(count - 1);
    console.log("Button was Clicked");

    if (count < 0) {
      setCount(0);
    }
  };
  
  return (
    <View>
      <View style={styles.container}>
        <StatusBar style="auto" />
      </View>

      <View>
         <Text style={styles.title}>Welcome To The Counter App</Text>
      </View>

      <View>
          <Text style={styles.number}>{count}</Text>
      </View>

    {/*<View>
         <ImageBackground source={require('./assets/calculatorbackground.png')} 
        resizeMode="cover" 
        style={styles.backgroundImage}></ImageBackground>
        </View> */}

      <View>
          <Button title="Increase" color="green"  onPress={increment} />
          <Button title="Reset" color="grey" onPress={reset}/>
          <Button title="Decrease" color="red" onPress={decrement}/>
      </View>  
        
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    
  },

  title: {
      color: 'black',
      backgroundColor: 'none',
      fontSize: 40,
      //lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
  },

  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  number: {
    color: 'black',
    fontSize: 40,
    //lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    /*position: 'absolute',
    top: 100,
    left: 100,
    */
  },
});
