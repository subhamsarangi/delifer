import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'

const HomeScreen = () => {
  return (
    <View>
        <Text className="text-red-500">Home sweet home</Text>
        <StatusBar style="auto" />
    </View>
  )
}

export default HomeScreen