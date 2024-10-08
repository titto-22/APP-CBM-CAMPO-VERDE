import { Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import { stylesMain } from './Login';
import Icon from '../components/icons';

export default function HomeEmergencias({navigation}){
  return(
    <View style={stylesMain.containerMain}>
      <Text style={stylesMain.textLg}>
        SELECIONE A EMERGÊNICA
      </Text>

      <TouchableOpacity onPress={()=>{navigation.push('Registrar-se',{
              TesteDeParametros:1,
              TesteDeParametrosText:'texto'}
            )}} 
            style={[stylesMain.buttonSemiRounded,stylesMain.backgroundRed, stylesMain.withFull,stylesMain.marginTop20]}>
        <Text style={stylesMain.textoButtonWith}>
          Registrar-se
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.goBack('Login')}} style={[stylesMain.buttonSemiRounded,stylesMain.backgroundRed, stylesMain.withFull,stylesMain.marginTop20]}>
        <Text style={stylesMain.textoButtonWith}>
          Voltar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('Login')}} style={[stylesMain.buttonSemiRounded,stylesMain.backgroundRed, stylesMain.withFull,stylesMain.marginTop20]}>
        <Text style={stylesMain.textoButtonWith}>
          Home
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export const stylesHoome = StyleSheet.create({

})