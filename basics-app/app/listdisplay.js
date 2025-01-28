import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function listdisplay() {

    const DATA = [
        {
          id: '1',
          title: 'First Item',
        },
        {
          id: '2',
          title: 'Second Item',
        },
        {
          id: '3',
          title: 'Third Item',
        },
      ];

    function Items(test){
        return <Text>ID : {test.id} ::: {test.title}</Text>
   }   
  return (
    <View>
      <Text>listdisplay</Text>
      <FlatList
      data={DATA}
      renderItem={({item}) => <Text>{item.id}:{item.title}</Text>}
        keyExtractor={item => item.id}
      />

    <FlatList
      data={DATA}
      renderItem={({item}) => <Items id={item.id} title={item.title}/> }
        keyExtractor={item => item.id}
      />
      
    </View>
  )
}

const styles = StyleSheet.create({})