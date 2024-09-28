import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  const [pageLogin,setPageLogin]=useState(false)
  const [pageCadastro,setpageCadastro]=useState(false)
  const [userEmail, setUserEmail]=useState('')
  const [errorEmail,seterrorEmail]=useState(false)
  const [errorPasseord,seterrorPasseord]=useState(false)

  function onChangeEmail(){

  }

  return (
    <View style={styles.containerMain}>
      <View style={[styles.flexRow,{marginBottom:75}]}>
        <Image source={require("./src/assets/Logo400x400.png")} style={styles.logoMain} alt='Logo do Corpo de bombeiros Militar de Mato Grosso' />
        <Text style={styles.textMain}>
          Emergências
        </Text>
        <Text style={styles.textMain}>
          193
        </Text>
      </View>
      <Text style={[styles.textBase,{marginBottom:32}]}>
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
      <View style={{width:'80%'}}>
        <View style={styles.containerTextTopInput}>
          <Text style={styles.textTopInput}>
            E-mail:
          </Text>
        </View>
        <TextInput
        style={styles.input}
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
        style={styles.input}
          onChangeText={setUserEmail}
          value={userEmail}
          placeholder="Inseira seu e-mail"
          keyboardType="e
          mail-address"
        />
        <Text style={[{display:errorPasseord?'flex':'none'},styles.textTopInput]}>
          Senha deve ao menos ter 8 digitos, uma letra maiúscula, uma minúscula e um caractere especial
        </Text>
      </View>
      
      <TouchableOpacity onPress={()=>{}} style={styles.buttonCall}>
        <Image source={require('./src/assets/call.png')} style={styles.icon} />
        <Text style={styles.textoButton}>193</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
  },
  flexRow:{
    width:'100%',
    height:80,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logoMain:{
    width:60,
    objectFit: "contain"
  },
  textMain:{
    fontSize:36,
    fontWeight: 'bold',
    color:'#ff0000'
  },
  textBase:{
    fontSize:20,
    color:'#64748b',
    fontWeight:'bold',
  },
  buttonSemiRounded:{
    width:10,
    height:50,
    borderRadius:'50%',
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
    marginLeft:10, 
    padding:5, 
    transform: [{ translateY: 13 }],
    backgroundColor:'#fff', 
    zIndex:999, 
    width:60, 
    alignItems:'center',
    color: '#94a3b8',
  },
 textTopInput:{
  color:'#94a3b8'
 },
  input:{
    borderWidth:1,
    borderColor:'#94a3b8',
    borderRadius:4,
    padding:10,
    width:'100%',
  },
  textoButton:{
    fontSize:20,
    fontWeight:'bold',
    color:'#ff0000'
  },
  buttonCall:{
    backgroundColor: '#fff',
    borderWidth:1,
    margin:12,
    padding:5,
    borderRadius:'50%',
    alignItems:'center',
    justifyContent:'center',
    width:150
  },
  containerIcon:{
    padding:10,
    backgroundColor:'#fff',
    borderRadius:'100%',
    width:80,
    alignItems:'center',
    justifyContent:'center'
  },
  icon:{
    width:40,
    height:40,
    
  },
});
