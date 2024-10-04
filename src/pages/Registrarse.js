import {Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../../App';

export default function Registrarse({route, navigation}){
  const teste = route.params;
  return(
    <View>
      <Text>teste: {JSON.stringify(teste.TesteDeParametros)}</Text>
     
    </View>
  )
}
