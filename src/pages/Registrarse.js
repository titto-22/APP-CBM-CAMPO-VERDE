import {Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../../App';

export default function Registrarse({route, navigation}){
  const teste = route.params;
  return(
    <View>
      <Text>teste: {JSON.stringify(teste.TesteDeParametros)}</Text>
      <TouchableOpacity onPress={()=>{navigation.push('Login')}} style={[styles.buttonSemiRounded,styles.backgroundRed, styles.withFull,styles.marginTop20]}>
        <Text style={styles.textoButtonWith}>
          Voltar
        </Text>
      </TouchableOpacity>
    </View>
  )
}
