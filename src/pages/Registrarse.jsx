import {Text, View, TouchableOpacity } from 'react-native';
import { stylesMain } from '../pages/Login';
import { rem, handleCall } from '../components/function';
import IconFacebook from '../assets/iconFacebook.svg';
import IconGoogle from '../assets/iconGoogle.svg';

export default function Registrarse({ navigation}){

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

  return(
    <View>
      <Text>
        Criar conta
      </Text>
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
     
    </View>
  )
}
