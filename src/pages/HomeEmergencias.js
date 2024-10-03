import { Text, View, TouchableOpacity} from 'react-native';
import { styles } from '../../App';

export default function HomeEmergencias({navigation}){
  return(
    <View>
      <TouchableOpacity onPress={()=>{navigation.push('Registrar-se',{
              TesteDeParametros:1,
              TesteDeParametrosText:'texto'}
            )}} 
            style={[styles.buttonSemiRounded,styles.backgroundRed, styles.withFull,styles.marginTop20]}>
        <Text style={styles.textoButtonWith}>
          Registrar-se
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.goBack('Login')}} style={[styles.buttonSemiRounded,styles.backgroundRed, styles.withFull,styles.marginTop20]}>
        <Text style={styles.textoButtonWith}>
          Voltar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('Login')}} style={[styles.buttonSemiRounded,styles.backgroundRed, styles.withFull,styles.marginTop20]}>
        <Text style={styles.textoButtonWith}>
          Home
        </Text>
      </TouchableOpacity>
    </View>
  )
}