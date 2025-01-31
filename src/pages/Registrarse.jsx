import { useState, useRef  } from "react";
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { stylesMain } from "../pages/Login";
import { rem, handleCall } from "../components/function";
import IconFacebook from "../assets/iconFacebook.svg";
import IconGoogle from "../assets/iconGoogle.svg";
import EyeOf from "../assets/eye-slash.svg";
import EyeOn from "../assets/eye.svg";

export default function Registrarse({ navigation }) {
	const [userEmail, setUserEmail] = useState("");
	const [userPassWord, setUserPassWord] = useState("");
	const [hiddenPassword, setHiddenPassword] = useState(true);
	const [hiddenConfirm, setHiddenConfirm] = useState(true);
	const [confirmPassWord, setConfirmPassWord] = useState("");
	const [cpf, setCpf] = useState("");
	const [errorEmail, setErrorEmail] = useState(false);
	const [errorPassword, setErrorPassword] = useState(false);
	const [isFocused,setIsFocused] = useState(false);
	const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
	const thirdInputRef = useRef(null);
  const fourthInputRef = useRef(null);
  const fifthInputRef = useRef(null);


	const formatarCpf = (text) => {
    const numeros = text.replace(/\D/g, ''); // Remove caracteres não numéricos
    let formatted = '';

    if (numeros.length > 0) {
      formatted = numeros.substring(0, 3);
      if (numeros.length > 3) formatted += '.';
    }

    if (numeros.length > 3) {
      formatted += numeros.substring(3, 6);
      if (numeros.length > 6) formatted += '.';
    }

    if (numeros.length > 6) {
      formatted += numeros.substring(6, 9);
      if (numeros.length > 9) formatted += '-';
    }

    if (numeros.length > 9) {
      formatted += numeros.substring(9, 11);
    }

    setCpf(formatted);
  };
	
	//Valida formato do email
	/*
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
  }*/

	return (
		<View style={[stylesRegistrarse.containerMain,{ justifyContent: isFocused ? 'flex-start' : 'space-around' }]}>
			<Text style={stylesMain.textBase}>Criar conta</Text>
			<View style={stylesMain.with80}>
				<View style={[stylesMain.containerTextTopInput]}>
					<Text style={stylesMain.textTopInput}>E-mail:</Text>
				</View>
				<TextInput
					style={[stylesMain.input, stylesMain.withFull]}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					returnKeyType="next" //define botão no teclado de proximo
					ref={firstInputRef} //define a referencia
					onSubmitEditing={() => {
						secondInputRef.current.focus(); // Move o foco para o segundo input
					}}
					onChangeText={(text) => {
						setUserEmail(text);
						
						//validateUserEmail(text)
					}}
					value={userEmail}
					placeholder="Insira seu e-mail"
					keyboardType="email-address"
				/>
				<Text
					style={[
						{ display: errorEmail ? "flex" : "none" },
						stylesMain.textTopInput,
					]}
				>
					E-mail deve ser no formato: exemplo@gmail.com
				</Text>
				<View style={stylesMain.containerTextTopInput}>
					<Text style={stylesMain.textTopInput}>Senha:</Text>
				</View>
				<View
					style={[
						stylesMain.input,
						stylesMain.withFull,
						{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
						},
					]}
				>
					<TextInput
						style={{ width: "90%" }}
						onFocus={() => setIsFocused(true)}
						onBlur={() => setIsFocused(false)}
						returnKeyType="next" //define botão no teclado de proximo
						ref={secondInputRef} //define a referencia
						onSubmitEditing={() => {
							thirdInputRef.current.focus();  // Move o foco para o segundo input
						}}
						onChangeText={(text) => {
							setUserPassWord(text);
							//validateUserPassword(text)
						}}
						value={userPassWord}
						placeholder="Insira sua senha"
						secureTextEntry={hiddenPassword}
					/>
					<TouchableOpacity
						onPress={() => {
							setHiddenPassword(!hiddenPassword);
						}}
					>
						{hiddenPassword ? (
							<EyeOn name="onPassword" width={rem(1.5)} height={rem(1.5)} />
						) : (
							<EyeOf name="onPassword" width={rem(1.5)} height={rem(1.5)} />
						)}
					</TouchableOpacity>
				</View>
				<View style={stylesMain.containerTextTopInput}>
					<Text style={stylesMain.textTopInput}>Confirme:</Text>
				</View>
				<View
					style={[
						stylesMain.input,
						stylesMain.withFull,
						{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
						},
					]}
				>
					<TextInput
						style={{ width: "90%" }}
						onFocus={() => setIsFocused(true)}
						onBlur={() => setIsFocused(false)}
						returnKeyType="next" //define botão no teclado de proximo
						ref={thirdInputRef} //define a referencia
						onSubmitEditing={() => {
							fourthInputRef.current.focus();  // Move o foco para o segundo input
						}}
						onChangeText={(text) => {
							setConfirmPassWord(text);
							//validateUserPassword(text)
						}}
						value={confirmPassWord}
						placeholder="Insira sua senha"
						secureTextEntry={hiddenConfirm}
					/>
					<TouchableOpacity
						onPress={() => {
							setHiddenConfirm(!hiddenConfirm);
						}}
					>
						{hiddenConfirm ? (
							<EyeOn name="onPassword" width={rem(1.5)} height={rem(1.5)} />
						) : (
							<EyeOf name="onPassword" width={rem(1.5)} height={rem(1.5)} />
						)}
					</TouchableOpacity>
				</View>
				<View style={[stylesMain.containerTextTopInput]}>
					<Text style={stylesMain.textTopInput}>CPF:</Text>
				</View>
				<TextInput
					style={[stylesMain.input, stylesMain.withFull]}
					type={"cpf"}
					value={cpf}
					maxLength={14}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					ref={fourthInputRef} //define a referencia
					returnKeyType="next" //define botão no teclado de proximo
					onSubmitEditing={() => {
						fifthInputRef.current.focus();  // Move o foco para o segundo input
					}}
					onChangeText={(text) => formatarCpf(text)}
					placeholder="Digite seu CPF"
				
				/>
				<View style={[stylesMain.containerTextTopInput]}>
					<Text style={stylesMain.textTopInput}>Endereço:</Text>
				</View>
				<TextInput
					style={[stylesMain.input, stylesMain.withFull]}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					ref={fifthInputRef} //define a referencia
					returnKeyType="next" //define botão no teclado de proximo
					onChangeText={(text) => {
						setUserEmail(text);
						//validateUserEmail(text)
					}}
					value={userEmail}
					placeholder="Insira seu endereço"
				/>
			</View>
			<TouchableOpacity
			nPress={() => {}}>
				<Text>Cadastrar</Text>
			</TouchableOpacity>
			<Text>
				ou
			</Text>
			<View style={[stylesMain.flexRow, { marginTop: 15 }]}>
				<TouchableOpacity
					onPress={() => {}}
					style={stylesMain.buttonSemiRounded}
				>
					<View style={stylesMain.containerIcon}>
						<IconFacebook width={rem(2.5)} height={rem(2.5)} />
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {}}
					style={stylesMain.buttonSemiRounded}
				>
					<View style={stylesMain.containerIcon}>
						<IconGoogle width={rem(2.25)} height={rem(2.25)} />
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}
export const stylesRegistrarse = StyleSheet.create({
	containerMain: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#fff",
		gap:14,
	}
});
