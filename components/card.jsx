import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Icon } from '@iconify/react';

export default function Card() {
    return (
        <View style={styles.mainCard}>
            <View style={styles.topCard}>
                <View style={styles.cardView}>
                    <View style={styles.imageShadow}></View>
                    <Image 
                        style={styles.img} 
                        source={{
                            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flower_poster_2.jpg/640px-Flower_poster_2.jpg',
                        }} 
                    />
                </View>
            </View>
            <View style={styles.bottomCard}>
                <View style={styles.userInfo}>
                    <View style={styles.userProfile}></View>
                    <Text style={styles.cardText}>username</Text>
                </View>
                <View style={styles.cardText}>card name</View>
                <View style={styles.menu}>
                    <Icon style={styles.menuDots} icon="entypo:dots-three-horizontal" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainCard: {
        width: '369px',
        height: '517px',
        marginBottom: '47px',
    },
    topCard: {
        width: '369px',
        height: '457px',
        borderTopLeftRadius: '9px',
        borderTopRightRadius: '9px',
        backgroundColor: '#E3E1E2',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardView: {
        width: '273px',
        height: '318px',
        borderRadius: '6px',
        backgroundColor: '#F9F5D4',
        position: 'relative',
        textAlign: 'center',
    },
    imageShadow: {
        position: 'absolute',
        top: '15%',
        left: '5%',
        right: '5%',
        height: '90%',
        backgroundSize: 'auto',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
        borderRadius: 'inherit',
        filter: 'blur(25px)',
        backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flower_poster_2.jpg/640px-Flower_poster_2.jpg')",
    },
    img: {
        position: 'relative',
        width: 'auto',
        width: '100%',
        height: '100%',
    },

    bottomCard: {
        width: '369px',
        height: '60px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    userInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    userProfile: {
        width: '28px',
        height: '28px',
        backgroundColor: 'blue',
        borderRadius: '9px',
        marginRight: '5px'
    },
    cardText: {
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: '400',
    },
    menu: {
        width: '30px',
        height: '30px',
    },
    menuDots: {
        fontSize: '30px',
        width: '100%',
        height: '100%',
        cursor: 'pointer'
    },
    menuDots_hover: {
        border: '1px solid black'
    }
})