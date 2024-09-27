import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';

export default function App() {
  const [pageLogin,setPageLogin]=useState(false)
  const [pageCadastro,setpageCadastro]=useState(false)

  return (
    <View style={styles.containerMain}>
      <View style={styles.flexRow}>
        <Image source={require("./src/assets/Logo400x400.png")} style={styles.logoMain} alt='Logo do Corpo de bombeiros Militar de Mato Grosso' />
        <Text style={styles.textMain}>Emergências</Text>
        <Text style={styles.textMain}>193</Text>
      </View>
      <Text style={styles.textBase}>Efetue seu Login</Text>
      <View style={styles.flexRow}>
        <TouchableOpacity onPress={()=>{}} style={styles.buttonSemiRounded}>
          <Image source={require('./src/assets/iconFacebook.png')}  style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{}} style={styles.buttonSemiRounded}>
          <Image source={require('./src/assets/iconGoogle.png')}  style={styles.icon}/>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={()=>{}} style={styles.button}>
        <Text style={styles.textoButton}>ENTRAR</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{}} style={styles.button}>
        <Text style={styles.textoButton}>CADASTRAR</Text>
      </TouchableOpacity>
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
    justifyContent: 'space-around',
    padding:20,
  },
  flexRow:{
    width:'100%',
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
    color:'#64748b'
  },
  buttonSemiRounded:{
    width:80,
    height:50,
    borderRadius:'50%',
    alignItems:'center',
    justifyContent:'center',
    shadowColor: "#000",
    shadowOffset:{
      width: 0,
      height: 0
    },
    shadowOpacity:0.6,
    shadowRadius:10
  },
  andoridElevatoin:{
    elevation:10
  },
  button:{
    backgroundColor: '#fff',
    borderWidth:1,
    width:'40%',
    margin:12,
    padding:14,
    borderRadius:8,
    color: '#ff0000',
    justifyContent: 'center',
    alignItems:'center',
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
  icon:{
    width:40,
    height:40,
    margin:5,
  },
});
