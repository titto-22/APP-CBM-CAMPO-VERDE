import { useState } from 'react';
import { StyleSheet, Text, View,  TouchableOpacity, TextInput, Alert } from 'react-native';
import { rem, handleCall } from '../components/function';
import CbmLogo from '../assets/LogoCBM.svg'
import IconFacebook from '../assets/iconFacebook.svg';
import IconGoogle from '../assets/iconGoogle.svg';
import IconCall from '../assets/call.svg';

import React, { useContext } from '../../node_modules/react';
import { AuthContext } from '../../App';

import { getLocalUser, getLocalLogin, getLocalPassword, salveLocalExpirationDate } from '../components/function'


export default function Login({ navigation }) {
  const { isSignedIn, setIsSignedIn } = useContext(AuthContext);
  const handleLogin = () => {
    setIsSignedIn(true); // Atualiza o estado de login
  };


  const [userEmail, setUserEmail]=useState('')
  const [userPassWord, setUserPassWord]=useState('')
  const [errorLogin,setErrorLogin]=useState(false)

  async function verificaLogin(){
    const user = await getLocalUser()
    const password = await getLocalPassword()
    //Verificase usuário admin
    if(user===userEmail.trim() && password===userPassWord.trim()){
      newDate=new Date().toISOString
      salveLocalExpirationDate(newDate)
      handleLogin()
      setErrorLogin(false)
    }
    else{
      setErrorLogin(true)
    }
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
              }
            }
            value={userEmail}
            placeholder="Inseira seu e-mail"
            keyboardType="email-address"

          />
          
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
              }
            }
            value={userPassWord}
            placeholder="Inseira sua senha"
          />
          <Text style={[{display:errorLogin?'flex':'none'},stylesMain.textRed, stylesMain.opacity]}>
            Usuário ou senha incorretos, verifique o e-mail e senha.
          </Text>
        </View>
        <TouchableOpacity 
          onPress={()=>{verificaLogin()}} 
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
  opacity:{
    opacity:0.4,
    fontWeight: 'bold',
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
