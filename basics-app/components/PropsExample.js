import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PropsExample(props) {
  return (
    <View>
      <Text>PropsExample</Text>
    <Text>props value : { props.name }</Text>
    <Text>props value : { props.age }</Text>

    </View>
  )
}

const styles = StyleSheet.create({})