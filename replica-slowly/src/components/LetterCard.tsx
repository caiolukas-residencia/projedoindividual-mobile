import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../theme/colors";

interface LetterCardProps {
    title: string;
    preview: string;
    username: string;
    date: string;
    stampCode: string;
}

export const LetterCard = ({ title, preview, username, date, stampCode }: LetterCardProps) => {
    return (
        <View>
            <View style={styles.cardContainer}>
                <Text style={styles.checkIcon}>✓✓</Text>
                <View style={styles.stampPlaceholder}>
                    <Text style={styles.stampPlaceholder}>{stampCode}</Text>
                </View>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                <Text style={styles.preview} numberOfLines={3}>{preview}</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.username}>{username}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: Colors.card,
        width: 200,
        height: 240,
        borderRadius: 8,
        padding: 16,
        marginRight: 16,
        justifyContent: 'space-between'
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    checkIcon: {
        color: Colors.accentYellow,
        fontSize: 16
    },
    stampPlaceholder: {
        width: 40,
        height: 50,
        borderWidth: 2,
        borderColor: '#FFF',
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center'
    },
    stampText: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: 'bold'
    },
    textContainer: {
        flex: 1,
        marginTop: 15
    },
    title: {
        color: Colors.textPrimary,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5
    },
    preview: {
        color: Colors.textPrimary,
        fontSize: 14,
        lineHeight: 20
    },
    footer: {
        marginTop: 10
    },
    username: {
        color: Colors.textPrimary,
        fontSize: 14,
        fontWeight: '500'
    },
    date: {
        color: Colors.textSecondary,
        fontSize: 12,
        marginTop: 2
    }
});