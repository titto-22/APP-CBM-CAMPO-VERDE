import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { rem } from '../components/function';
import CbmLogo from '../assets/LogoCBM.svg'


export default function HomeEmergencias({navigation}){
  return(
    <View style={stylesHome.containerMain}>
      <Text style={stylesHome.textTitle}>
        SELECIONE A EMERGÊNICA
      </Text>
      <View style={stylesHome.containerFlexRow}>
        <TouchableOpacity 
          onPress={
            ()=>{
              navigation.navigate(
                'Dados da Emergência',{
                  tipoEmergencia:'Incêndio'
                }
              )
            }
          }
          style={stylesHome.containerTouchableOpacity}
        >
            <Image 
              source={require('../assets/iconFacebook.png')}
              style={stylesHome.image}
            />
            <Text style={stylesHome.textIcon}>
              Incêndio
            </Text>
          </TouchableOpacity>
        <TouchableOpacity onPress={()=>{}} style={[]}></TouchableOpacity>
        <View>
          
          <CbmLogo height={60} width={60}/>
          <Text>
            
          </Text>
        </View>
        <TouchableOpacity onPress={()=>{}} style={[]}></TouchableOpacity>
        <View>
          <Image 
            source={require('../assets/iconFacebook.png')}
            style={stylesHome.image}
          />
          <Text>
            
          </Text>
        </View>
        <TouchableOpacity onPress={()=>{}} style={[]}></TouchableOpacity>
        <View>
          <Image 
            source={require('../assets/iconFacebook.png')}
            style={stylesHome.image}

          />
          <Text>
            
          </Text>
        </View>
        <TouchableOpacity onPress={()=>{}} style={[]}></TouchableOpacity>
        <View>
          <Image 
            source={require('../assets/iconFacebook.png')}
            style={stylesHome.image}
          />
          <Text>
            
          </Text>
        </View>
        <TouchableOpacity onPress={()=>{}} style={[]}></TouchableOpacity>
        <View>
          <Image 
            source={require('../assets/iconFacebook.png')}
            style={stylesHome.image}
          />
          <Text>
            
          </Text>
        </View>

      </View>
      <TouchableOpacity onPress={()=>{navigation.push('Registrar-se',{
              TesteDeParametros:1,
              TesteDeParametrosText      :'texto'}
            )}} 
            style={[]}>
        <Text style={[]}>
          Registrar-se
        </Text>
      </TouchableOpacity>
      
    </View>
  )
}

export const stylesHome = StyleSheet.create({
  containerMain:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding:rem(1),
    backgroundColor:'#fff'
  },
  textTitle:{
    fontSize: rem(1.65),
    color:'#5e6165',
    borderWidth: 1,
    borderColor:'#5e6165',
    borderRadius:8,
    paddingHorizontal:10,
    paddingVertical:5,
  },
  containerFlexRow:{
    flexDirection: 'row',
    gap:15,
    flexWrap:'wrap'
  },
  image:{
    width:rem(7),
    height:rem(7),
    objectFit:'contain',
    padding:5,
    borderWidth:.5,
    borderColor:'#ff0000',
    borderRadius:12
  },
  containerTouchableOpacity:{
    borderWidth:1,
    borderColor:'#5e6165',
    borderRadius:12,
    paddingHorizontal:15,
    paddingVertical:5,
    flexDirection: 'column',
    alignItems:'center',
    justifyContent: 'center',
  },
  textIcon:{
    fontSize: rem(1.25),
    color:'#5e6165',
  }
})