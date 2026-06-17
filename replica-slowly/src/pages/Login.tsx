import React, { useState } from "react"
import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../types/navigation"
import { SocialButton } from "../components/SocialButton"
import { Colors } from "../theme/colors"
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useSafeAreaInsets } from "react-native-safe-area-context";

type LoginNavProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export const LoginScreen = () => {
    const navigation = useNavigation<LoginNavProp>();
    const [email, setEmail] = useState('');

    const handleLogin = () => {
        navigation.navigate('Home');
    };

    const insets = useSafeAreaInsets();

    return(
        <View style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.content}>

                <TouchableOpacity style={[styles.backButton, {paddingTop: insets.top}]}>
                    <Ionicons name="arrow-back" size={28} color={Colors.textPrimary} />
                </TouchableOpacity>

                <View style={styles.logoContainer}>
                    <Image 
                        source={require('../../assets/slowly-logo.png')} 
                        style={styles.logoImage} 
                    />
                </View>

                <Text style={styles.title}>Bem-vindo de volta</Text>
                
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType='email-address'
                        autoCapitalize="none"
                        selectionColor={Colors.accentYellow} 
                    />
                </View>

                <TouchableOpacity style={styles.mainButton} onPress={handleLogin}>
                    <Ionicons name="mail-outline" size={20} color={Colors.textDark} />
                    <Text style={styles.mainButtonText}>Entrar com e-mail</Text>
                </TouchableOpacity>

                <Text style={styles.socialLabel}>Entrar com:</Text>

                <View style={styles.socialRow}>
                    <SocialButton 
                      title="SMS" 
                      icon={<FontAwesome name="hashtag" size={18} color={Colors.accentYellow} />}
                      onPress={() => {}} />
                    <SocialButton 
                      title="Facebook" 
                      icon={<Ionicons name="logo-facebook" size={20} color="#3b5998" />} 
                      onPress={() => {}} />
                    <SocialButton 
                      title="Google" 
                      icon={<Ionicons name="logo-google" size={20} color="#DB4437" />}
                      onPress={() => {}} />
                </View>
            </KeyboardAvoidingView>
        </View>
    )    
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  backButton: {
    marginBottom: 40,
  },
  backIcon: {
    color: Colors.textPrimary,
    fontSize: 24,
  },
  logoContainer: {
    width: 85,
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 5,
    marginLeft: -12

  },
  logoImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  title: {
    color: Colors.textPrimary,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  inputContainer: {
    marginBottom: 30,
  },
  inputLabel: {
    color: Colors.textSecondary,
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    color: Colors.textPrimary,
    fontSize: 18,
    paddingVertical: 8,
  },
  mainButton: {
    flexDirection: 'row',
    backgroundColor: Colors.buttonWhite,
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 40,
    justifyContent: 'center',
    gap: 10
  },
  mainButtonText: {
    color: Colors.textDark,
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialLabel: {
    color: Colors.textPrimary,
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 14,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});