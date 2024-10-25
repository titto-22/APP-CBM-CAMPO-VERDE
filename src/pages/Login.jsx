import { useState } from 'react';
import { StyleSheet, Text, View,  TouchableOpacity, TextInput, Alert } from 'react-native';
import { rem, handleCall } from '../components/function';
import CbmLogo from '../assets/LogoCBM.svg'
import IconFacebook from '../assets/iconFacebook.svg';
import IconGoogle from '../assets/iconGoogle.svg';
import IconCall from '../assets/call.svg';

import * as SecureStore from 'expo-secure-store'; //Usa para armazenar informação seguras (login) localmente

async function salveUserLogin(){
  await SecureStore.setItemAsync('appCBMUser','admin')
  Alert.alert('Salvo','Salvo login com sucesso!')
}

async function getUserLogin() {
  const result = await SecureStore.getItemAsync('appCBMUser')
  if(result){
    Alert.alert('Recuperado', `O valor armazenado no login é:\n ${result}` )

  } else{
    Alert.alert('Erro ao recuperar', 'Sem valor armazenado')
  }
}

async function removeUserLogin(params) {
  await SecureStore.deleteItemAsync('appCBMUser')
    Alert.alert('Apagado','Apagado o Login' )
}

export default function Login({ navigation }) {


  const [userEmail, setUserEmail]=useState('')
  const [userPassWord, setUserPassWord]=useState('')
  const [errorEmail,setErrorEmail]=useState(false)
  const [errorPassword,setErrorPassword]=useState(false)


//Valida formato do email
  function validateUserEmail(email){
    //Regex para validar email
    const emailRegex =/^[^\s@]+@[^\s@]+\.(com|com\.br)$/

    // Verifica se o email corresponde à expressão regular
    const isValid = emailRegex.test(email);

    // Seta o estado de acordo com a validação
    setErrorEmail(!isValid);
  }

  //Valida formato da senha
  function validateUserPassword(password){
    const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    // Verifica se o password corresponde à expressão regular
    const isValid = passwordRegex.test(password);

    // Seta o estado de acordo com a validação
    setErrorPassword(!isValid);
  }

  function handleLogin(){

    setIsSignedIn(true)
  }



  return (
    <View style={stylesMain.containerMain}>
        <View style={[stylesMain.flexRow]}>
          <CbmLogo width={rem(4)} height={rem(4)}/>
          <Text style={stylesMain.textMain}>
            Emergências
          </Text>
          <Text style={stylesMain.textMain}>
            193
          </Text>
        </View>
        <Text style={stylesMain.textBase}>
          Efetue seu Login
        </Text>
        <View style={stylesMain.flexRow}>
          <TouchableOpacity onPress={()=>{}} style={stylesMain.buttonSemiRounded}>
            <View style={stylesMain.containerIcon}>
              <IconFacebook width={rem(2.5)} height={rem(2.5)}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{}} style={stylesMain.buttonSemiRounded}>
            <View style={stylesMain.containerIcon}>
              <IconGoogle width={rem(2.25)} height={rem(2.25)}/>
            </View>
          </TouchableOpacity>
        </View>
        <View style={stylesMain.with80}>
          <View style={[stylesMain.containerTextTopInput]}>
            <Text style={stylesMain.textTopInput}>
              E-mail:
            </Text>
          </View>
          <TextInput
          style={[stylesMain.input,stylesMain.withFull]}
            onChangeText={
              (text)=>{
                setUserEmail(text)
                validateUserEmail(text)
              }
            }
            value={userEmail}
            placeholder="Inseira seu e-mail"
            keyboardType="e
            mail-address"

          />
          <Text style={[{display:errorEmail?'flex':'none'},stylesMain.textTopInput]}>
            E-mail deve ser no formato: exemplo@gmail.com
          </Text>
          <View style={stylesMain.containerTextTopInput}>
            <Text style={stylesMain.textTopInput}>
              Senha:
            </Text>
          </View>
          <TextInput
          style={[stylesMain.input,stylesMain.withFull]}
            onChangeText={
              (text)=>{
                setUserPassWord(text)
                validateUserPassword(text)
              }
            }
            value={userPassWord}
            placeholder="Inseira sua senha"
          />
          <Text style={[{display:errorPassword?'flex':'none'},stylesMain.textTopInput]}>
            Senha deve ao menos ter 8 digitos, uma letra maiúscula, uma minúscula e um caractere especial
          </Text>
        </View>
        <TouchableOpacity 
          onPress={()=>{salveUserLogin()}} 
          style={[stylesMain.buttonSemiRounded,stylesMain.backgroundRed, stylesMain.withFull,stylesMain.with80]}
        >
          <Text style={stylesMain.textoButtonWith}>
            Acessar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{getUserLogin()}}>
          <Text style={[stylesMain.textTopInput]}>
            Esqueceu a senha?
          </Text>
        </TouchableOpacity>
        <Text style={[stylesMain.textTopInput]}>
          ou
        </Text>
        <TouchableOpacity 
          accessibilityLabel="Ir para a tela de registro"
          onPress={()=>{
            removeUserLogin()
          }
        }>
          <Text style={[stylesMain.textRed]}>
            Registrar-se
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCall} style={stylesMain.buttonCall}>
          <IconCall width={rem(2.25)} height={rem(2.25)}/>
          <Text 
            style={[stylesMain.textRed,stylesMain.textBold]}
          >
            193
          </Text>
        </TouchableOpacity>
      </View>
    
  );
}

export const stylesMain = StyleSheet.create({
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
    fontSize:rem(1.5),
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
    justifyContent:'center',
    elevation: 5,
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
