import Geolocation from '@react-native-community/geolocation';
import { View, Text } from 'react-native';
import { useState } from 'react';

Geolocation.getCurrentPosition(info => {
  console.log(info)
  setLocalization(info)
});

export default function Localizacao() {
  const[localization, setLocalization]=useState({})
  return (
    <View>
      <Text>Localizacao</Text>
      <Text>{}</Text>
    </View>
  )
}