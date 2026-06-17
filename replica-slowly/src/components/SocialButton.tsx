import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';

interface SocialButtonProps {
    title: string;
    icon: string;
    iconColor?: string;
    onPress: () => void;
}

export const SocialButton = ({ title, icon, iconColor, onPress }: SocialButtonProps) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={[styles.icon, iconColor ? { color: iconColor } : {}]}>{icon}</Text>
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
        alignItems: 'center'
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