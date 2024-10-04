import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dimensions } from 'react-native';

import HomeEmergencias from './src/pages/HomeEmergencias';
import Registrarse from './src/pages/Registrarse';

/*  _______// Solução para usar rem \\________  */
const { width, height } = Dimensions.get('window');
const baseFont =16
if(height<700){
  const baseFont =10
}
export const rem=(value)=>{
  return baseFont*value
}


export default function App() {
  const [logado,setLogado]=useState(false)
  const [pageLogin,setPageLogin]=useState(false)
  const [pageCadastro,setpageCadastro]=useState(false)
  const [userEmail, setUserEmail]=useState('')
  const [userPassWord, setUserPassWord]=useState('')
  const [errorEmail,seterrorEmail]=useState(true)
  const [errorPasseord,seterrorPasseord]=useState(false)

  //Cria navegação
  const Stack = createNativeStackNavigator();

  //Pagina de login
  function Login({ navigation }) {
    return (
      <View style={styles.containerMain}>
          <View style={[styles.flexRow]}>
            <Image 
              source={require("./src/assets/Logo400x400.png")} 
              style={styles.logoMain} 
              alt='Logo do Corpo de bombeiros Militar de Mato Grosso' 
            />
            <Text style={styles.textMain}>
              Emergências
            </Text>
            <Text style={styles.textMain}>
              193
            </Text>
          </View>
          <Text style={styles.textBase}>
            Efetue seu Login
          </Text>
          <View style={styles.flexRow}>
            <TouchableOpacity onPress={()=>{}} style={styles.buttonSemiRounded}>
              <View style={styles.containerIcon}>
                <Image source={require('./src/assets/iconFacebook.png')}  style={styles.icon}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}} style={styles.buttonSemiRounded}>
              <View style={styles.containerIcon}>
                <Image source={require('./src/assets/iconGoogle.png')}  style={styles.icon}/>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.with80}>
            <View style={[styles.containerTextTopInput]}>
              <Text style={styles.textTopInput}>
                E-mail:
              </Text>
            </View>
            <TextInput
            style={[styles.input,styles.withFull]}
              onChangeText={setUserEmail}
              value={userEmail}
              placeholder="Inseira seu e-mail"
              keyboardType="e
              mail-address"
            />
            <Text style={[{display:errorEmail?'flex':'none'},styles.textTopInput]}>
              E-mail deve ser no formato: exemplo@gmail.com
            </Text>
            <View style={styles.containerTextTopInput}>
              <Text style={styles.textTopInput}>
                Senha:
              </Text>
            </View>
            <TextInput
            style={[styles.input,styles.withFull]}
              onChangeText={setUserPassWord}
              value={userPassWord}
              placeholder="Inseira seu e-mail"
              keyboardType="e
              mail-address"
            />
            <Text style={[{display:errorPasseord?'flex':'none'},styles.textTopInput]}>
              Senha deve ao menos ter 8 digitos, uma letra maiúscula, uma minúscula e um caractere especial
            </Text>
          </View>
          <TouchableOpacity 
            onPress={()=>{navigation.navigate('Emergências')}} 
            style={[styles.buttonSemiRounded,styles.backgroundRed, styles.withFull,styles.with80]}
          >
            <Text style={styles.textoButtonWith}>
              Acessar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate('Registrar-se')}}>
            <Text style={[styles.textTopInput]}>
              Esqueceu a senha?
            </Text>
          </TouchableOpacity>
          <Text style={[styles.textTopInput]}>
            ou
          </Text>
          <TouchableOpacity onPress={()=>{navigation.navigate('Registrar-se',{
            TesteDeParametros:1,
            TesteDeParametrosText:'texto',
            
          })}} >
            <Text style={[styles.textRed]}>
              Registrar-se
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{}} style={styles.buttonCall}>
            <Image 
              source={require('./src/assets/call.png')} 
              style={styles.iconSmall}
            />
            <Text style={[styles.textRed,styles.textBold]}>193</Text>
          </TouchableOpacity>
        </View>
      
    );
  }
  return (
    //Inicialização padrão para usar nagevação no aplicativo
    //Cria as páginas dentro Stack.Navigator
    //Cada Screen é uma página
    //initialTouteName é a propriedade que define a página inicial
    //Se deixar vazio sem a propriedade, renderiza o primeiro Screen
    <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='Login'
          screenOptions={styles.styleTitlePagesColorRedBgWhite} //Estilo para todas as páginas
          >
        <Stack.Screen 
          name="Login" 
          component={Login}
          options={styles.styleTitlePagesColorRedBgWhite} //define estilo para pagina atual
        />
        <Stack.Screen 
          name="Emergências" 
          component={HomeEmergencias} 
          options={{headerBackVisible:false}}//Esconde no botão de voltar
          />
        <Stack.Screen 
          name="Registrar-se" 
          component={Registrarse} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export const styles = StyleSheet.create({
  styleTitlePagesColorRedBgWhite:{
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: '#ff0000',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  },
  containerMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding:rem(1),
    backgroundColor:'#fff'
  },
  flexRow:{
    width:'100%',
    height:rem(5),
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logoMain:{
    width:rem(3.75),
    objectFit: "contain"
  },
  textMain:{
    fontSize:rem(1.9),
    fontWeight: 'bold',
    color:'#ff0000'
  },
  backgroundRed:{
    backgroundColor:'#ff0000'
  },
  marginTop20:{
    marginTop:rem(1.25)
  },
  textBase:{
    fontSize:rem(1.25),
    color:'#64748b',
    fontWeight:'bold',
  },
  buttonSemiRounded:{
    width:rem(0.75),
    height:rem(3),
    borderRadius:rem(3),
    alignItems:'center',
    justifyContent:'center',
    shadowColor: "#000",
    shadowOffset:{
      width: 0,
      height: 0
    },
    shadowOpacity:0.3,
    shadowRadius:5
  },
  containerTextTopInput:{
    marginLeft:rem(0.75), 
    padding:rem(0.25), 
    transform: [{ translateY: 13 }],
    backgroundColor:'#fff', 
    zIndex:999, 
    width:rem(5), 
    alignItems:'center',
    color: '#94a3b8',
  },
 textTopInput:{
  color:'#64748b'
 },
 textBold:{
  fontWeight:'bold'
 },
 textRed:{
  color: '#ff0000'
 },
 withFull:{
  width:'100%'
 },
 with80:{
  width:'80%'
 },
  input:{
    borderWidth:1,
    borderColor:'#94a3b8',
    borderRadius:4,
    padding:rem(.75),
  },
  textoButtonWith:{
    fontSize:rem(1),
    fontWeight:'bold',
    color:'#fff'
  },
  buttonCall:{
    backgroundColor: '#fff',
    borderWidth:1,
    padding:rem(.25),
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    width:rem(7.75)
  },
  containerIcon:{
    padding:rem(1.25),
    backgroundColor:'#fff',
    borderRadius:100,
    width:rem(5),
    alignItems:'center',
    justifyContent:'center'
  },
  icon:{
    width:rem(2.5),
    height:rem(2.5),
  },
  iconSmall:{
    width:rem(1.5),
    height:rem(1.5),
  },
  textLg:{
    fontSize:rem(1.75),
  }
});
