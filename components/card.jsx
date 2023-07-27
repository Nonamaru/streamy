import { TextInput, Image, StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native';
import { Icon } from '@iconify/react';
import { useState } from 'react';

const getStyle = (isActive) => {
    return isActive ? { color: 'gray' } : { color: 'black' };
};
const getStyleDelete = (isActive) => {
    return isActive ? { color: 'darkred' } : { color: 'red' };
};



export default function Card() {
    const [hovered, setHovered] = useState(false);
    const [hset, setHset] = useState({
        edit: false,
        trash: false,
        secondTrash: false,
        closeIcon: false,
        send: false,
    });
    const [settings, setSettings] = useState({
        opened: false,
        edit: false,
        delete: false,
    });
    
    const showSettings = (field, action) => {
        if (action){
            if (field == 'opened'){
                setSettings((settings) => ({
                    ...settings,
                    opened: !settings.opened
                }))
            } else if (field == 'edit'){
                setSettings((settings) => ({
                    ...settings,
                    edit: action
                }))
            } else if (field == 'delete') {
                setSettings((settings) => ({
                    ...settings,
                    delete: action
                }))
            }
        } else if (!action){
            if (field == 'opened'){
                setSettings((settings) => ({
                    ...settings,
                    opened: !settings.opened
                }))
            } else if (field == 'edit'){
                setSettings((settings) => ({
                    ...settings,
                    edit: action
                }))
            } else if (field == 'delete') {
                setSettings((settings) => ({
                    ...settings,
                    delete: action
                }))
            }
        }
    }
    return (
        <View style={styles.mainCard}>
            <View style={styles.topCard}>
                <View style={styles.cardView}>
                    <View style={styles.imageShadow}></View>
                    <Image 
                        style={styles.img} 
                        source={{
                            uri: 'https://p4.wallpaperbetter.com/wallpaper/418/131/757/anime-picture-in-picture-anime-girls-himiko-toga-wallpaper-preview.jpg',
                        }} 
                    />
                </View>
            </View>
            <View style={styles.bottomCard}>
                <View style={styles.userInfo}>
                    <View style={styles.userProfile}></View>
                    <Text style={styles.cardText}>username</Text>
                </View>
                <View style={styles.cardText}><Text>card name</Text></View>
                
                {/* ИКОНКА ТРОЕТОЧИЯ */}
                <View 
                    style={[styles.menu, getStyle(hovered)]}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <TouchableWithoutFeedback
                        onPress={() => {
                            showSettings('opened', true)
                        }}
                    >
                        <Icon style={styles.menuDots} icon="entypo:dots-three-horizontal" />
                    </TouchableWithoutFeedback>
                </View>

                <View style={[setting.main, setting.open, !settings.opened && {display:'none'}]}>
                    
                    {/* ИКОНКА РЕДАКТИРОВАНИЯ */}
                    <View
                        style={[setting.icons, getStyle(hset.edit)]}
                        onMouseEnter={() => setHset((hset) => ({...hset, edit: true}))}
                        onMouseLeave={() => setHset((hset) => ({...hset, edit: false}))}
                    >
                        <TouchableWithoutFeedback
                            onPress={() => {
                                showSettings('edit', true)
                            }}
                        >
                            <Icon style={{width: '24px', height: '24px'}} icon="iconamoon:edit-bold" />
                        </TouchableWithoutFeedback>
                    </View>

                    {/* ИКОНКА УДАЛЕНИЯ */}
                    <View
                        style={[setting.icons, getStyle(hset.trash)]}
                        onMouseEnter={() => setHset((hset) => ({...hset, trash: true}))}
                        onMouseLeave={() => setHset((hset) => ({...hset, trash: false}))}
                    >
                        <TouchableWithoutFeedback
                            onPress={() => {
                                showSettings('delete', true)
                            }}
                        >
                            <Icon style={{width: '24px', height: '24px'}} icon="octicon:trash-16" />
                        </TouchableWithoutFeedback>
                    </View>
                </View>

                {/* ПОЛЕ ДЛЯ РЕДАКТИРОВАНИЯ */}
                <View style={[setting.main, setting.edit, !settings.edit && {display:'none'}]}>
                    <TextInput
                        style={setting.input}
                        // onChangeText={onChangeNumber}
                        // value={number}
                        placeholder="card name"
                        // keyboardType="numeric"
                    />
                    <TouchableWithoutFeedback>
                        <Icon style={{width: '20px', height: '20px'}} icon="ic:round-send" />
                    </TouchableWithoutFeedback>
                    
                    <TouchableWithoutFeedback
                        onPress={() => {
                            showSettings('edit', false)
                        }}
                    >
                        <Icon style={{width: '24px', height: '24px'}} icon="ic:round-close" />
                    </TouchableWithoutFeedback>
                </View>

                {/* ПОЛЕ ДЛЯ УДАЛЕНИЯ */}
                <View style={[setting.main, setting.delete, !settings.delete && {display:'none'}]}>
                    <View
                        style={getStyleDelete(hset.secondTrash)}
                        onMouseEnter={() => setHset((hset) => ({...hset, secondTrash: true}))}
                        onMouseLeave={() => setHset((hset) => ({...hset, secondTrash: false}))}
                    >
                        <TouchableWithoutFeedback>
                            <Icon 
                                icon="octicon:trash-16" 
                                style={{width: '24px', height: '24px'}} 
                            />
                        </TouchableWithoutFeedback>
                    </View>

                    <TouchableWithoutFeedback
                        onPress={() => {
                            showSettings('delete', false)
                        }}
                    >
                        <Icon style={{width: '28px', height: '28px'}} icon="ic:round-close" />

                    </TouchableWithoutFeedback>
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
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: 'inherit',
        filter: 'blur(25px)',
        backgroundImage: "url('https://p4.wallpaperbetter.com/wallpaper/418/131/757/anime-picture-in-picture-anime-girls-himiko-toga-wallpaper-preview.jpg')",
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
        alignItems: 'center',
        position: 'relative',
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
});
const setting = StyleSheet.create({
    main: {
        position: 'absolute',
        bottom: '-15px',
        right: '15px',
        borderRadius: '6px',
        backgroundColor: '#d9d9d9',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '5px',
        alignItems: 'center'
    },
    open: {
        width: '60px',
        height: '35px',
    },
    edit: {
        width: '168px',
        height: '35px', 
    },
    input: {
        width: '111px',
        height: '23px',
        backgroundColor: 'white',
        borderRadius: '6px',
        padding: '5px'
    },
    delete: {
        width: '60px',
        height: '35px',
    },
    icons: {
        cursor: 'pointer',
    },
})