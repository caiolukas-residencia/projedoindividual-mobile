import React from "react"
import { Image, View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from "react-native"
import { LetterCard } from "../components/LetterCard"
import { Colors } from "../theme/colors"
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MOCK_LETTERS = [
    {
        id: '1',
        preview: "Hello there!\nI'm Mail.\nIf you don't mind, let's be friends~",
        username: 'mini_malita',
        date: '6 de abr de 2026',
        stampCode: 'TH',
    },
    {
        id: '2',
        preview: 'What is your favorite football team and what is their What is your favorite football team',
        username: 'VictorBR-00',
        date: '27 de mar de 2026',
        stampCode: 'BR',
    },
    {
        id: '3',
        preview: 'Olá.\n\nSão jogos de história interativos (mas tem que cumprir as coisas para finalizar), você tem que desvendar as coisas do jogo.',
        username: '21. Lia',
        date: '17 de mar de 2026',
        stampCode: 'BR',
    },
    {
        id: '4',
        preview: 'Já ouvi falar desse jogo porém nunca fui atrás!! Mas vai ficar na minha lista de jogar que gostaria de jogar.\n\nEstou gosto bastante de jogos RPG e terror.',
        username: 'kakaau03',
        date: '17 de mar de 2026',
        stampCode: 'BR',
    },
    {
        id: '5',
        preview: 'Hey there :3\nJust to be on the same page: I\'m new to Slowly and using the auto-matching feature for the first time now, so a bit of unsure how it works and turns out.',
        username: 'Rafael_Rafufu_hehe',
        date: '17 de mar de 2026',
        stampCode: 'DE',
    },
]

export const HomeScreen = () => {
    const insets = useSafeAreaInsets();
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={[styles.header, {paddingTop: insets.top}]}>
                    <View style={styles.headerIcons}>
                        <Ionicons name="sync" size={24} color={Colors.textPrimary} />
                        <Ionicons name="qr-code-outline" size={24} color={Colors.textPrimary} />
                    </View>

                    <View style={styles.logoContainer}>
                        <Image 
                            source={require('../../assets/slowly-logo.png')} 
                            style={styles.logoImage} 
                        />
                    </View>
                </View>
                
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Recebidas recentemente</Text>
                    <View style={styles.titleUnderline} />
                </View>

                <FlatList
                    horizontal
                    data={MOCK_LETTERS}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.listContainer}
                    renderItem={({item}) => (
                        <LetterCard 
                            preview = {item.preview}
                            username = {item.username}
                            date = {item.date}
                            stampCode = {item.stampCode} 
                        />
                    )}
                />

                <TouchableOpacity style={styles.statusRow}>
                    <Ionicons name="mail-open-outline" size={24} color={Colors.textSecondary} style={styles.statusIcon} />
                    <Text style={styles.statusText}>Nenhuma carta a caminho por enquanto.</Text>
                </TouchableOpacity>
                <View style={styles.statusRowLine} />
                <TouchableOpacity style={styles.statusRow}>
                    <Ionicons name="people-outline" size={24} color={Colors.textSecondary} style={styles.statusIcon} />
                    <Text style={styles.statusText}>Solicitações de amizade</Text>
                </TouchableOpacity>
                    
                <View style={styles.actionButtonsRow}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="bicycle-outline" size={18} color={Colors.accentYellow} />
                        <Text style={styles.actionButtonText}>Conheça novos amigos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="chatbubble-ellipses-outline" size={18} color={Colors.accentYellow} />
                        <Text style={styles.actionButtonText}>Atualizar bio</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.sectionHeader, {marginTop: 30}]}>
                    <Text style={styles.sectionTitle}>Explorador Mundial</Text>
                    <View style={[styles.titleUnderline, {width: 220}]} />
                </View>

                <TouchableOpacity style={styles.explorerCard}>
                    <View style={styles.explorerStampBox}>
                        <Text style={styles.explorerStampText}>IR</Text>
                    </View>
                    <View style={styles.explorerContent}>
                        <Text style={styles.explorerTitle}>Shabe Yalda</Text>
                        <Text style={styles.explorerSubtitle}>🇮🇷 Irã</Text>
                        <Text style={styles.explorerDesc} numberOfLines={3}>
                            Shabe Yalda (ou Noite de Yalda) é um antigo festival...
                        </Text>
                    </View>
                </TouchableOpacity>

                <View style={[styles.sectionHeader, { marginTop: 30 }]}>
                    <Text style={styles.sectionTitle}>História Slowly</Text>
                    <View style={[styles.titleUnderline, { width: 170 }]} />
                </View>
                <TouchableOpacity style={styles.storyContainer}>
                    <Text style={styles.storyText}>
                        Procurei um ouvinte, encontrei uma amiga e depois a perdi......
                        <Text style={styles.readMoreText}>Ler mais</Text>
                    </Text>
                    <View style={styles.storyAuthorRow}>
                        <View style={styles.storyAvatar}>
                            <Text>🥸</Text>
                        </View>
                        <View>
                            <Text style={styles.storyAuthorName}>Tunafish</Text>
                            <Text style={styles.storyAuthorCountry}>🇧🇩 Bangladesh</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>

            <View style={[styles.bottomNav, {paddingBottom: insets.bottom}]}>
                <Image 
                    source={require('../../assets/slowly-logo.png')} 
                    style={styles.navLogoImage} 
                />
                <Ionicons name="mail-outline" size={26} color={Colors.textSecondary} />
                <View>
                    <Ionicons name="person-outline" size={26} color={Colors.textSecondary} />
                    <View style={styles.badge}><Text style={styles.badgeText}>6</Text></View>
                </View>
                <Ionicons name="pencil-outline" size={26} color={Colors.textSecondary} />
                <View>
                    <Ionicons name="menu-outline" size={30} color={Colors.textSecondary} />
                    <View style={styles.badge}><Text style={styles.badgeText}>1</Text></View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  logoContainer: {
    width: 95,
    height: 95,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  logoImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  navLogoImage: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    tintColor: Colors.textSecondary
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 15,
    gap: 20,
  },
  iconText: {
    fontSize: 20,
    color: Colors.textPrimary,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  sectionHeader: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    color: Colors.textPrimary,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  titleUnderline: {
    height: 3,
    backgroundColor: Colors.accentYellow,
    width: '100%',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  statusRowLine: {
    height: 1,
    backgroundColor: Colors.border,
    marginHorizontal: 20,
  },
  statusIcon: {
    fontSize: 20,
    marginRight: 15,
  },
  statusText: {
    color: Colors.textPrimary,
    fontSize: 16,
  },
  actionButtonsRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 10,
    marginTop: 10,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.card,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },
  actionButtonText: {
    color: Colors.textPrimary,
    fontSize: 13,
    fontWeight: '500',
    flexShrink: 1,
    textAlign: 'center'
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.navDark,
    paddingVertical: 15,
  },
  navIcon: {
    fontSize: 24,
    color: Colors.textSecondary,
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -10,
    backgroundColor: 'red',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  explorerCard: {
    flexDirection: 'row',
    marginHorizontal: 20,
    backgroundColor: Colors.background, // Fundo transparente
    alignItems: 'center',
  },
  explorerStampBox: {
    width: 100,
    height: 100,
    backgroundColor: Colors.card,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  explorerStampText: {
    color: Colors.textPrimary,
    fontWeight: 'bold',
    fontSize: 18,
  },
  explorerContent: {
    flex: 1,
  },
  explorerTitle: {
    color: Colors.textPrimary,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  explorerSubtitle: {
    color: Colors.textPrimary,
    fontSize: 14,
    marginBottom: 8,
  },
  explorerDesc: {
    color: Colors.textPrimary,
    fontSize: 14,
    lineHeight: 20,
  },
  storyContainer: {
    paddingHorizontal: 20,
  },
  storyText: {
    color: Colors.textPrimary,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },
  readMoreText: {
    color: Colors.textSecondary,
    fontSize: 16,
  },
  storyAuthorRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  storyAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.accentYellow,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  storyAuthorName: {
    color: Colors.textPrimary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  storyAuthorCountry: {
    color: Colors.textSecondary,
    fontSize: 14,
  },
});