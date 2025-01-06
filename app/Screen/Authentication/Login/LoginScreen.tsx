import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import globalStyles from '../../../Utils/globalStyle'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ic_comp_logo, ic_google_logo } from '../../../assets'
import STRINGS from '../../../Constants/string'
import TextField from '../../../Component/TextField'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Button from '../../../Component/CustomButton'
import { THEME } from '../../../Utils/theme'
import Routename from '../../../routes/Routename'
import { useLoginUserByPhnoMailMutation } from '../../../redux/auth-api-slice'
import { setLocalValue } from '../../../Utils/asyncStorage'
import { useDispatch } from 'react-redux'
import { handleLoginData } from '../../../redux/auth-data-slice'
import Toast from 'react-native-toast-message'



const LoginScreen = ({ navigation }: any) => {

  const [LoginUserByPhnoMail, { isLoading }] = useLoginUserByPhnoMailMutation();
  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [phnNumber, setPhnNumber] = useState('')

  // google login
  const onPressGoogleLogin = () => {
    Alert.alert("working on")
  }

  // OnPressSignIn
  const OnPressSignIn = () => {

    const params: any = {
      // "RegId": "30000034",
      "FullName": "Rop",
      "Mobile": "9999999999",
      "Email": email,
      // "otp":2595
    }
    LoginUserByPhnoMail(params)
      .unwrap()
      .then((result: any) => {
        console.log("loginChecking", result)
        if (result?.status == false) {
          Alert.alert(result.msg)
        }
        else {
          dispatch(handleLoginData(result));
          setLocalValue(STRINGS.STORAGE.LOGIN_DATA, result);
          setLocalValue(STRINGS.STORAGE.IS_USER_LOGGED_IN, "true");
          navigation.navigate(Routename.OTP_SCREEN, { email, phnNumber })
        }

      })
      .catch((error) => {
        console.log("errrLogin", error);
        Toast.show({
          type: "error",
          text1: "Error",
          text2: error?.data?.data?.error || "Something went wrong",
        });
      });

  }
  // onPressSignUp
  const onPressSignUp = () => {
    navigation.navigate(Routename.SIGNUP_SCREEN)
  }

  return (
    <SafeAreaView style={[globalStyles.container]}>
      <Image source={ic_comp_logo} style={styles.compLogoIconStyle} />
      <Text style={[globalStyles.headerText, { alignSelf: 'center' }]}>{STRINGS.SIGN_IN_YOUR_ACCOUNT}</Text>
      <KeyboardAwareScrollView style={styles.subContainer}>
        <Text style={styles.nameText}>{STRINGS.PHN_NUMBER}</Text>
        <TextField value={phnNumber} onChangeText={(text: any) => setPhnNumber(text)} keyboardType={"phone-pad"} placeholder={STRINGS.PLACHEHOLDER_PHN} />
        <Text style={styles.orText}>{STRINGS.OR}</Text>
        <Text style={styles.nameText}>{STRINGS.EMAIL}</Text>
        <TextField value={email} onChangeText={(text: any) => setEmail(text)} placeholder={STRINGS.PLACHEHOLDER_EMAIL} />
        <Button btnStyles={styles.mainButton} btnText={STRINGS.SIGN_IN} onPressButton={OnPressSignIn} />
        <View style={styles.bottomContainer}>
          <Text style={[styles.nameText, { textAlign: 'center' }]}>{STRINGS.SIGN_IN_WITH}</Text>
          <TouchableOpacity onPress={onPressGoogleLogin}>
            <Image source={ic_google_logo} style={styles.googleLogo} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressSignUp} activeOpacity={0.9}>
            <Text style={styles.acntText}>{STRINGS.DONT_HAVE_ACCOUNT}<Text style={{ color: THEME.PRIMARY }}>{STRINGS.SIGNUP}</Text></Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default LoginScreen