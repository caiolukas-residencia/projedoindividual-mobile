import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';

interface SocialButtonProps {
    title: string;
    icon: React.ReactNode;
    onPress: () => void;
}

export const SocialButton = ({ title, icon, onPress }: SocialButtonProps) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            {icon}
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.buttonWhite,
        paddingVertical: 12,
        marginHorizontal: 5,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8
    },
    icon: {
        fontSize: 16,
        marginRight: 8,
        fontWeight: 'bold',
        color: Colors.textDark
    },
    title: {
        color: Colors.textDark,
        fontWeight: '600',
        fontSize: 14
    }
})