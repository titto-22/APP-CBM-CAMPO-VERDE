import {Text, View, TouchableOpacity } from 'react-native';

export default function dadosEmergencia({route, navigation}){
  const dadosEmergencia = route.params;
  return(
    <View>
      <Text>teste: {JSON.stringify(dadosEmergencia.latitude)}</Text>
      <Text>teste: {JSON.stringify(dadosEmergencia.longitude)}</Text>
      <Text>teste: {JSON.stringify(dadosEmergencia.tipoEmergencia)}</Text>
    </View>
  )
}
