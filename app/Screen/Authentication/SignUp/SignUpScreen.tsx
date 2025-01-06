import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
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
import { setLocalValue } from '../../../Utils/asyncStorage';

const SignUpScreen = ({ navigation }: any) => {
  const [signUpUserByMailOrPhn, { isLoading: signupLoading }] = useSignUpUserByMailOrPhnMutation();

  // State for input fields and validation
  const [form, setForm] = useState({
    fullName: '',
    mobile: '',
    email: '',
    city: '',
    state: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    mobile: '',
    email: '',
    city: '',
    state: '',
  });

  // Validation function
  const validateField = (field: string, value: string) => {
    switch (field) {
      case 'fullName':
        return /^[a-zA-Z.]{2,}(\s[a-zA-Z.]{2,})?$/.test(value)
          ? ''
          : 'Name must be at least 2 characters long, not contain numbers or special characters except ".", and only allow a space after 2 characters.';
      case 'mobile':
        return /^\d{6,12}$/.test(value)
          ? ''
          : 'PIN must be 6-12 digits and contain only numbers.';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && !/test|yopmail|fake/i.test(value)
          ? ''
          : 'Enter a valid email address (no fake domains like "yopmail").';
      case 'city':
        return /^[a-zA-Z]{3,}$/.test(value)
          ? ''
          : 'City must be at least 3 characters long and not contain numbers.';
      case 'state':
        return /^[a-zA-Z]{4,}$/.test(value)
          ? ''
          : 'State must be at least 4 characters long and not contain numbers.';
      default:
        return '';
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
  };

  const isFormValid = () => {
    const newErrors = Object.keys(form).reduce((acc, key) => {
      const error = validateField(key, form[key as keyof typeof form]);
      return { ...acc, [key]: error };
    }, {});
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== '');
  };

  const onPressSignup = () => {
    if (signupLoading) return; // Prevent multiple calls during loading
    if (!isFormValid()) {
      // Alert.alert('Validation Error', 'Please fix the highlighted errors.');
      return;
    }

    const params:any = {
      FullName: form.fullName,
      Mobile: form.mobile,
      Email: form.email,
      District: form.city,
      State: form.state,
    };

    signUpUserByMailOrPhn(params)
      .unwrap()
      .then((res) => {
        console.log('createUser', res);
        if(res?.status==false){
          Alert.alert(res?.msg)
        }
        else{
   
          if (typeof res === "string") {
            setLocalValue("UserData", JSON.parse(res)); // Parse if string
          } else {
            setLocalValue("UserData", res); // Directly save if object
          }
      
      
          navigation.navigate(Routename.OTP_SCREEN, { res });
        }
   
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
          placeholder={STRINGS.PLACHEHOLDER_NAME}
          containerStyle={styles.inputView}
          value={form.fullName}
          onChangeText={(value) => handleInputChange('fullName', value)}
          errorText={errors.fullName}
        />

        <Text style={styles.nameText}>{STRINGS.PHONE}</Text>
        <TextField
          placeholder={STRINGS.PLACHEHOLDER_PHN}
          keyboardType={'number-pad'}
          containerStyle={styles.inputView}
          value={form.mobile}
          onChangeText={(value) => handleInputChange('mobile', value)}
          errorText={errors.mobile}
        />

        <Text style={styles.nameText}>{STRINGS.EMAIL}</Text>
        <TextField
          placeholder={STRINGS.PLACHEHOLDER_EMAIL}
          keyboardType={'email-address'}
          containerStyle={styles.inputView}
          value={form.email}
          onChangeText={(value) => handleInputChange('email', value)}
          errorText={errors.email}
        />

        <Text style={styles.nameText}>{STRINGS.CITY}</Text>
        <TextField
          placeholder={STRINGS.PLACHEHOLDER_CITY}
          containerStyle={styles.inputView}
          value={form.city}
          onChangeText={(value) => handleInputChange('city', value)}
          errorText={errors.city}
        />

        <Text style={styles.nameText}>{STRINGS.STATE}</Text>
        <TextField
          placeholder={STRINGS.PLACHEHOLDER_STATE}
          containerStyle={styles.inputView}
          value={form.state}
          onChangeText={(value) => handleInputChange('state', value)}
          errorText={errors.state}
        />

        {/* Terms and Conditions */}
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            {STRINGS.I_UNDERSTAND}{' '}
            <Text onPress={() => Alert.alert('Terms and Conditions')} style={styles.conditionText}>
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
          <TouchableOpacity onPress={() => Alert.alert('Google Login Pressed')}>
            <Image source={ic_google_logo} style={styles.googleLogo} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(Routename.LOGIN_SCREEN)} activeOpacity={0.9}>
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
