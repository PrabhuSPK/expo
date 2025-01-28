import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import PropsExample from '../components/PropsExample'

export default function about() {
  return (
    <View>
        <Header />
      <Text>about page</Text>
      <PropsExample name="prabhu" age="30" />

    </View>
  )
}

const styles = StyleSheet.create({})