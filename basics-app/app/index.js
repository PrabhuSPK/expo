import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function index() {
  return (
    <ScrollView>
      <Text style={{ fontSize:10 }}>index page</Text>
      <Text style={{ fontSize:20, fontWeight:'bold' }}>index page</Text>
      <Text style={ styles.newtext }>bold text page</Text>
      <Text style={ styles.newtext }>bold text page</Text>
      <Text style={ styles.newtext }>bold text page</Text>
      <Text style={ styles.newtext }>bold text page</Text>
      <Text style={ styles.newtext }>bold text page</Text>
      <Text style={ styles.newtext }>bold text page</Text>
      <Text style={ styles.newtext }>bold text page</Text>
      <Text style={ styles.newtext }>bold text page</Text>
      <Text style={ styles.newtext }>bold text page</Text>
      <Text style={ styles.newtext }>bold text page</Text>
      <Text style={ styles.newtext }>bold text page</Text>
      <Text style={ styles.newtext }>bold text page</Text>
      <Text style={ styles.newtext }>bold text page</Text>
      <Text style={ styles.newtext }>bold text page</Text>
      <Text style={ styles.newtext }>bold text page</Text>
      <Text style={ styles.newtext }>bold text page</Text>
      <Text style={ styles.newtext }>bold text page</Text>
      <Text style={ styles.newtext }>bold text page</Text>
      <Text style={ styles.newtext }>bold text page</Text>
      <Text style={ styles.newtext }>bold text page</Text>
      <Text style={ styles.newtext }>bold text page</Text>
      <Text style={ styles.newtext }>bold text page</Text>
      <Text style={ styles.newtext }>bold text page</Text>


      <Text style={[ styles.newtext, styles.boldText ]}>bold & fontsize text page</Text>
      <TextInput style={{ borderColor: 'green',borderWidth:1 }} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    newtext:{
        fontSize:30,
    },
    boldText:{
        fontWeight:'bold'
    }

})