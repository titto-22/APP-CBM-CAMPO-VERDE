import {Text, View, TouchableOpacity } from 'react-native';

export default function dadosEmergencia({route, navigation}){
  const teste = route.params;
  return(
    <View>
      <Text>teste: {JSON.stringify(teste.latitude)}</Text>
      <Text>teste: {JSON.stringify(teste.longitude)}</Text>
    </View>
  )
}
