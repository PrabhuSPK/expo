import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-web'

export default function wallet() {
  const [balance, setBalance] = useState(0)  
//   const [variable, update(variable)] = useState(default)  
  const handleBalance = () =>{
    setBalance(100);
    // setBalance(balance+1);
    // setBalance(0+1);
    // setBalance(1+1);
    // setBalance(2+1);
    
  }
  return (
    <View>
      <Text style={{ fontSize:40 }}>wallet</Text>
      <Text>Balance : {balance}</Text>
      <Button title='Submit' onPress={handleBalance} />
    </View>
  )
}

const styles = StyleSheet.create({})