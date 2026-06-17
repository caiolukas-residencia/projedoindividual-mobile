import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../theme/colors";
import { Ionicons } from "@expo/vector-icons";

interface LetterCardProps {
    preview: string;
    username: string;
    date: string;
    stampCode: string;
}

export const LetterCard = ({ preview, username, date, stampCode }: LetterCardProps) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.headerRow}>
                <Ionicons name="checkmark-done" size={20} color={Colors.accentYellow} />
                <View style={styles.stampPlaceholder}>
                    <Text style={styles.stampText}>{stampCode}</Text>
                </View>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.preview} numberOfLines={4}>
                {preview}
                </Text>
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
    preview: {
        color: Colors.textPrimary,
        fontSize: 16,
        lineHeight: 22
    },
    footer: {
        marginTop: 10
    },
    username: {
        color: Colors.textPrimary,
        fontSize: 14,
        fontWeight: 'bold'
    },
    date: {
        color: Colors.textSecondary,
        fontSize: 12,
        marginTop: 2
    }
});