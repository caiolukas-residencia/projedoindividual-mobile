import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../types/navigation"
import { SocialButton } from "../components/SocialButton"
import { Colors } from "../theme/colors"

type LoginNavProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export const LoginScreen = () => {
    const navigation = useNavigation<LoginNavProp>();
    const [email, setEmail] = useState('');

    const handleLogin = () => {
        navigation.navigate('Home');
    };

    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.content}>

                <TouchableOpacity style={styles.backButton}>
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>

                <View style={styles.logoContainer}>
                    <Text style={styles.logoText}>S</Text>
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
                    <Text style={styles.mainButtonText}>✉ Entrar com e-mail</Text>
                </TouchableOpacity>

                <Text style={styles.socialLabel}>Entrar com:</Text>

                <View style={styles.socialRow}>
                    <SocialButton title="SMS" icon="#" iconColor={Colors.accentYellow} onPress={() => {}} />
                    <SocialButton title="Facebook" icon="f" iconColor="#3b5998" onPress={() => {}} />
                    <SocialButton title="Google" icon="G" iconColor="#DB4437" onPress={() => {}} />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
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
    marginBottom: 20,
  },
  backIcon: {
    color: Colors.textPrimary,
    fontSize: 24,
  },
  logoContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Colors.textPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  logoText: {
    color: Colors.textPrimary,
    fontSize: 24,
    fontWeight: 'bold',
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
    backgroundColor: Colors.buttonWhite,
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 40,
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