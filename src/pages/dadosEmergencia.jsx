import {Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../../App';

export default function DadosEmergencia({route, navigation}){
  const teste = route.params;
  return(
    <View>
      <Text>teste: {JSON.stringify(teste.tipoEmergencia)}</Text>
     
    </View>
  )
}
