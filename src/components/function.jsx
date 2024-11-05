import * as SecureStore from 'expo-secure-store'; //Usa para armazenar informação seguras (login) localmente

import { Linking, Dimensions } from 'react-native'; //Usado para criar função rem e link


/*  ------------------------ // Solução para usar rem \\ ------------------------  */
export const rem=(value)=>{
  let baseFont =16
  const { width, height } = Dimensions.get('window');
  if(height<700){
    baseFont =14
  }
  return baseFont*value
}

/*  ------------------------ // Ligação \\ ------------------------  */
export const handleCall = () => {
  Linking.openURL("tel:193");
  };

  /*  ------------------------ // Funções de gravação e recuperação de Login \\ ------------------------  */

  //Sets

 async function createLoginInSecureStoreTest () {
    await SecureStore.setItemAsync('appCbmUser','admin')
    await SecureStore.setItemAsync('appCbmPassword','123456789Az!')
    await SecureStore.setItemAsync('appCbmExpirationDate','2024-08-29T01:52:09.302Z')
    await SecureStore.setItemAsync('appCbmName','Humberto Caio Françade Queiroz')
    await SecureStore.setItemAsync('appCbmCPF','00000000000')
    await SecureStore.setItemAsync('appCbmTelefon','5566999999999')
    await SecureStore.setItemAsync('appCbmAddress','Avenida ulisses gumaraes, 1121, bairro bela vista, campo verde matro grosso brazil zzzzzzzzzzzzz')
    console.log('Create data teste')
  }
  export {createLoginInSecureStoreTest}

  async function salveLocalLogin(user, password) {
    await SecureStore.setItemAsync('appCbmUser',user)
    await SecureStore.setItemAsync('appCbmPassword',password)
    await SecureStore.setItemAsync('appCbmExpirationDate',date)
    console.log('Login salve, user, password and expiration date')
  }
  export {salveLocalLogin}

  async function salveLocalUser(user) {
    await SecureStore.setItemAsync('appCbmUser',user)
    console.log('User salve')
  }
  export{salveLocalUser}

  async function salveLocalPassword(password) {
    await SecureStore.setItemAsync('appCbmPassword',password)
    console.log('Password salve')
  }
  export{salveLocalPassword}

  async function salveLocalExpirationDate(date){
    await SecureStore.setItemAsync('appCbmExpirationDate',date)
    console.log('ExpirationDate salve')
  }  
  export {salveLocalExpirationDate}

  async function salveLocalName(name){
    await SecureStore.setItemAsync('appCbmName',name)
    console.log('Name salve')
  }
  export {salveLocalName}

  async function salveLocalCPF(cpf) {
    await SegureStorage.setItemAsync('appCbmCPF',cpf)
    console.log('CPF salve')
  }
  export{salveLocalCPF}

  async function salveLocalTelefon(telefon){
    await SecureStore.setItemAsync('appCbmTelefon',telefon)
    console.log('Telefon salve')
  }
  export{salveLocalTelefon}

  async function salveLocalAdress(adress) {
    await SecureStore.setItemAsync('appCbmAddress',adress)
    console.log('Adress salve')
  }
  export {salveLocalAdress}


  //Gets

  async function getLocalLogin() {
    const result1 = await SecureStore.getItemAsync('appCbmUser')
    const result2 = await SecureStore.getItemAsync('appCbmPassword')
    const result3 = await SecureStore.getItemAsync('appCbmExpirationDate')
    if(result1 && result2 && result3){
      console.log('Login get user, password and expiration date')
    } else{
      console.log('Error get Login')
    }
    return [result1,result2, result3]
  }
  export {getLocalLogin}

  async function getLocalUser() {
    const result = await SecureStore.getItemAsync('appCbmUser')
    if(result){
      console.log('User get:',result)
    } else{
      console.log('Error get User')
    }
    return result
  }
  export{getLocalUser}

  async function getLocalPassword() {
    const result = await SecureStore.getItemAsync('appCbmPassword')
    if(result){
      console.log('Password get')
    } else{
      console.log('Error get Password')
    }
    return result
  }
  export{getLocalPassword}

  async function getLocalExpirationDate(){
    const result = await SecureStore.getItemAsync('appCbmExpirationDate')
    if(result){
      console.log('ExpirationDate get')
    } else{
      console.log('Error get Expiration Date')
    }
    return result
  }  
  export {getLocalExpirationDate}

  async function getLocalName(){
    const result = await SecureStore.getItemAsync('appCbmName')
   if(result){
     console.log('Name get')
    } else{
      console.log('Error get Name')
    }
    return result
  }
  export {getLocalName}

  async function getLocalCPF() {
    const result = await SegureStorage.getItemAsync('appCbmCPF')
    if(result){
      console.log('CPF get')
    } else{
      console.log('Error get CPF')
    }
    return result
  }
  export{getLocalCPF}

  async function getLocalTelefon(){
    const result = await SecureStore.getItemAsync('appCbmTelefon')
    if(result){
      console.log('Telefon get')
    } else{
      console.log('Error get Telefon')
    }
    return result
  }
  export{getLocalTelefon}

  async function getLocalAdress() {
    const result = await SecureStore.getItemAsync('appCbmAddress')
    if(result){
      console.log('Adress get')
    } else{
      console.log('Error get Adress')
    }
    return result
  }
  export {getLocalAdress}


  async function name(params) {
    
  }

//Não iremos utilizar delet por hora
  async function removeLogin(params) {
    await SecureStore.deleteItemAsync('appCbmUser')
    console.log('Apagado','Apagado o Login' )
  }
  
  