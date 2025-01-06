import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import globalStyles from '../../../Utils/globalStyle';
import { ic_back, ic_comp_logo, ic_google_logo } from '../../../assets';
import styles from './style';
import STRINGS from '../../../Constants/string';
import TextField from '../../../Component/TextField';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from '../../../Component/CustomButton';
import Routename from '../../../routes/Routename';
import { THEME } from '../../../Utils/theme';
import { useSignUpUserByMailOrPhnMutation } from '../../../redux/auth-api-slice';

const SignUpScreen = ({ navigation }: any) => {
  const [signUpUserByMailOrPhn, { isLoading: signupLoading }] = useSignUpUserByMailOrPhnMutation();

  // Handlers
  const onPressTermCondition = () => {
    Alert.alert('Terms and Conditions pressed');
  };

  const onPressSignIn = () => {
    navigation.navigate(Routename.LOGIN_SCREEN);
  };

  const onPressGoogleLogin = () => {
    Alert.alert('Google Login Pressed');
  };

  const onPressSignup = () => {
    if (signupLoading) return; // Prevent multiple calls during loading

    const params:object = {
      FullName: 'Raushan Kumar',
      Mobile: '123456',
      Email: 'raushanTest11@yopmail.com',
      District: 'Noida',
      State: 'UP',
    };

    signUpUserByMailOrPhn(params)
      .unwrap()
      .then((res) => {
        console.log('createUser', res);
        navigation.navigate(Routename.OTP_SCREEN, { res });
      })
      .catch((err) => {
        console.log('createUserError', err);
        Alert.alert('Error', 'Something went wrong while signing up. Please try again.');
      });
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      {/* Header Section */}
      <View style={globalStyles.row}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={ic_back} style={styles.icon} />
        </TouchableOpacity>
        <Image source={ic_comp_logo} style={styles.logoIcon} />
      </View>

      {/* Input Form */}
      <KeyboardAwareScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={styles.inputContainer}>
        <Text style={[globalStyles.headerText, { textAlign: 'center' }]}>{STRINGS.CREATE_ACCOUNT}</Text>

        {/* Form Fields */}
        <Text style={styles.nameText}>{STRINGS.NAME}</Text>
        <TextField 
        placeholder={STRINGS.PLACHEHOLDER_PHN} 
        containerStyle={styles.inputView} 
        value={""}
        onChangeText={()=>{}}
        errMsg=''
        />

        <Text style={styles.nameText}>{STRINGS.PHONE}</Text>
        <TextField 
        placeholder={STRINGS.PLACHEHOLDER_PHN} 
        keyboardType={'number-pad'}
        containerStyle={styles.inputView}
        value={""}
        onChangeText={()=>{}}
        errMsg=''
         />

        <Text style={styles.nameText}>{STRINGS.EMAIL}</Text>
        <TextField 
        placeholder={STRINGS.PLACHEHOLDER_PHN} 
        keyboardType={'email'}
        containerStyle={styles.inputView}
        value={""}
        onChangeText={()=>{}}
        errMsg=''
         />

        <Text style={styles.nameText}>{STRINGS.CITY}</Text>
        <TextField 
        placeholder={STRINGS.PLACHEHOLDER_PHN} 
        containerStyle={styles.inputView}
        value={""}
        onChangeText={()=>{}}
        errMsg=''
         />

        <Text style={styles.nameText}>{STRINGS.STATE}</Text>
        <TextField 
        placeholder={STRINGS.PLACHEHOLDER_PHN} 
        containerStyle={styles.inputView}
        value={""}
        onChangeText={()=>{}}
        errMsg=''
         />

        {/* Terms and Conditions */}
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            {STRINGS.I_UNDERSTAND}{' '}
            <Text onPress={onPressTermCondition} style={styles.conditionText}>
              {STRINGS.TERMS_POLICY}
            </Text>
          </Text>
        </View>

        {/* Signup Button */}
        <Button
          btnText={STRINGS.SIGNUP}
          onPressButton={onPressSignup}
          disabled={signupLoading} // Disable button during API call
        />

        {/* Alternative Signup Options */}
        <View style={styles.bottomContainer}>
          <Text style={[styles.nameText, { textAlign: 'center' }]}>{STRINGS.OR__SIGNUP_WITH}</Text>
          <TouchableOpacity onPress={onPressGoogleLogin}>
            <Image source={ic_google_logo} style={styles.googleLogo} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressSignIn} activeOpacity={0.9}>
            <Text style={styles.acntText}>
              {STRINGS.HAVE_AN_ACCOUNT}{' '}
              <Text style={{ color: THEME.PRIMARY }}>{STRINGS.SIGN_IN}</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
