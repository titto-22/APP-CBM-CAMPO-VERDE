import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import {requestForegroundPermissionsAsync, getCurrentPositionAsync, watchPositionAsync, LocationAccuracy} from 'expo-location'
import MapView, {Marker} from 'react-native-maps'
import { rem } from '../components/function';



export default function Localizacao({navigation}) {
  //variável onde será armazenado a localização
  const [location, setLocation]=useState(null)

  //
  const mapRef = useRef(null)
  
  //função para solicitar permissão de acesso a localizaçao do usuário
  async function requestLocationPermissions(){
    //Armazena a permisão, true or false
    const {granted} = await requestForegroundPermissionsAsync()
    //Valida se teve permissão
    if(granted){
      //Com permissão, recupera a possição e armazena em uma variável
      const currentPossition  = await getCurrentPositionAsync()
      setLocation(currentPossition)
      console.log(currentPossition)
    }
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(()=>{
    requestLocationPermissions()
  },[])

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(()=>{
    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval:1000,
      distanceInterval:1
    },(response)=>{
      setLocation(response)
      mapRef.current?.animateCamera({
        pitch:70,
        center:response.coords
      })
    })
  },[])
 
  return (
    <View style={styleLocation.containerMain}>
      {
        //Verifica se location existe primeiro, caso sim, renderiza o MapsView
        location &&
        //Renderiza o mapa com os valores de longitude e latitude salvos anteriormente
        <MapView 
        ref={mapRef}
        style={styleLocation.maps}
        initialRegion={{
          latitude:location.coords.latitude,
          longitude:location.coords.longitude,
          latitudeDelta:0.005,
          longitudeDelta:0.005
        }}
        > 
          {//Depois cria um marcador no mapa com o Maker, na latitude e longitude
          }
          <Marker
            coordinate={{
              latitude:location.coords.latitude,
              longitude:location.coords.longitude
            }}
          />
        </MapView>
      }
      <View style={styleLocation.flexAround}>
        <TouchableOpacity style={styleLocation.Button} onPress={
          ()=>{
            navigation.navigate(
              'Dados da Emergência',{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
              }
            )
          }
        }>
          <Text style={styleLocation.textButton}>
            CONFIRMAR
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styleLocation= StyleSheet.create({
  containerMain:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor:'#fff'
  },
  maps:{
    height:'85%',
    width:'100%'
  },
  Button:{
    width:'70%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#5fa4f8",
    padding:rem(1),
    borderRadius:12,
    marginTop:rem(.75),
    marginBottom:rem(1)
  },
  flexAround:{
    alignItems:'center',
    justifyContent:'space-around',
    height:'15%',
    width:'100%'
  },
  textButton:{
    color:'#fff'
  }
})