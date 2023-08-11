import { TextInput, Image, StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native';
import { Icon } from '@iconify/react';
import { useState, useRef } from 'react';
import { TouchableOpacity } from 'react-native-web';
import { Video, ResizeMode } from 'expo-av'

const getStyle = (isActive) => {
    return isActive ? { color: 'gray', cursor: 'pointer' } : { color: 'black' };
};
const getStyleDelete = (isActive) => {
    return isActive ? { color: 'darkred', cursor: 'pointer' } : { color: 'red' };
};
// const getStyleImg = (isActive) => {
//     return isActive ? { filter: 'blur(30px)' } : { filter: 'blur(25px)' }
// }
const host = "http://localhost:1337";


export default function Card({
    // setOpened, cardOpen, 
    cardName, cardImage, userName, cardId, updatePage
}) {
    const [hovered, setHovered] = useState(false);
    const [fullNameHover, setFullNameHover] = useState(false);
    // const [imgHovered, setImgHovered] = useState({
    //     hover: false,
    //     card: false,
    // });
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
    const [newCardName, setNewCardName] = useState('');
    const [onVideoHover, setOnVideoHover] = useState(false);

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
            <View style={styles.topCard}
                onMouseEnter={() => {setOnVideoHover(true)}}
                onMouseLeave={() => {setOnVideoHover(false)}}
            >
                {/* <TouchableOpacity
                    onPress={() => {
                        setOpened(true);
                        cardOpen((cardIsOpen) => ({
                            ...cardIsOpen,
                            id: cardId,
                            name: `${cardName}`,
                            author: `${userName}`,
                            link: `http://localhost:1337${cardImage}`,
                        }))
                    }}
                > */}
                    <View style={styles.cardView}>
                        {/* <View 
                            style={
                                [
                                    styles.imageShadow, 
                                    // {backgroundImage: `url('http://localhost:1337${cardImage}')`}, 
                                    // getStyleImg(imgHovered.hover)
                                ]}
                        ></View> */}
                        <Video
                            style={styles.img}
                            source={{
                                uri: `${host}${cardImage}`,
                            }}
                            useNativeControls={onVideoHover}
                            resizeMode={ResizeMode.CONTAIN}
                            onReadyForDisplay={videoData => {
                                videoData.srcElement.style.position = "relative"
                            }}
                            videoStyle={styles.img.video}
                            isLooping={false}
                            isMuted={true}
                        />
                    </View>
                {/* </TouchableOpacity> */}
            </View>
            
            <View style={styles.bottomCard}>
                <View style={styles.userInfo}>
                    <View style={styles.userProfile}></View>
                    <Text style={styles.cardText}>{userName}</Text>
                </View>
                <View 
                    style={[styles.cardText, styles.styleNameCard]}
                    onMouseEnter={() => {setFullNameHover(true)}}
                >
                    <Text 
                        style={styles.styleNameCard.nameCard}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                    >
                        {cardName}
                    </Text>
                    <View 
                        style={[styles.fullName, !fullNameHover && {display: 'none'}]}

                        onMouseLeave={() => {setFullNameHover(false)}}
                    >
                        <Text>{cardName}</Text>
                    </View>
                </View>
                
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
                            onPress={() => {showSettings('edit', true)}}
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
                        placeholderTextColor={'gray'}
                        onChangeText={(newname) => setNewCardName(newname)}
                        // value={number}
                        placeholder={cardName}
                        // keyboardType="numeric"
                    />
                    <View
                        style={getStyle(hset.send)}
                        onMouseEnter={() => setHset((hset) => ({...hset, send: true}))}
                        onMouseLeave={() => setHset((hset) => ({...hset, send: false}))}
                    >
                        <TouchableWithoutFeedback
                            onPress={() => {fetch(`http://localhost:1337/api/libraries/${cardId}`, {
                                method: 'PUT',
                                headers: { 
                                    'Content-Type': 'application/json',
                                    Authorization: `Bearer ${localStorage.getItem('jwt')}`
                                },
                                body: JSON.stringify({
                                    "data": {"title": `${newCardName}`}
                                })
                            }).then(() => {
                                updatePage();
                                showSettings('opened', false);
                                showSettings('edit', false);
                            })
                            }}
                        >
                            <Icon style={{width: '20px', height: '20px'}} icon="ic:round-send" />
                        </TouchableWithoutFeedback>
                    </View>
                    
                    <View
                        style={getStyle(hset.closeIcon)}
                        onMouseEnter={() => setHset((hset) => ({...hset, closeIcon: true}))}
                        onMouseLeave={() => setHset((hset) => ({...hset, closeIcon: false}))}
                    >
                        <TouchableWithoutFeedback
                            onPress={() => {
                                showSettings('edit', false);
                            }}
                        >
                            <Icon style={{width: '24px', height: '24px'}} icon="ic:round-close" />
                        </TouchableWithoutFeedback>
                    </View>
                </View>

                {/* ПОЛЕ ДЛЯ УДАЛЕНИЯ */}
                <View style={[setting.main, setting.delete, !settings.delete && {display:'none'}]}>
                    <View
                        style={getStyleDelete(hset.secondTrash)}
                        onMouseEnter={() => setHset((hset) => ({...hset, secondTrash: true}))}
                        onMouseLeave={() => setHset((hset) => ({...hset, secondTrash: false}))}
                    >
                        <TouchableWithoutFeedback
                            onPress={() => {
                                fetch(`http://localhost:1337/api/libraries/${cardId}`, {
                                    method:'DELETE',
                                    headers: {
                                        Authorization: `Bearer ${localStorage.getItem('jwt')}`
                                    },
                                })
                                .then(() => {
                                    updatePage();
                                    showSettings('delete', false);
                                    showSettings('opened', false);
                                })
                            }}
                        >
                            <Icon 
                                icon="octicon:trash-16" 
                                style={{width: '24px', height: '24px'}} 
                            />
                        </TouchableWithoutFeedback>
                    </View>

                    <View
                        style={getStyle(hset.closeIcon)}
                        onMouseEnter={() => setHset((hset) => ({...hset, closeIcon: true}))}
                        onMouseLeave={() => setHset((hset) => ({...hset, closeIcon: false}))}
                    >
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
        // width: '273px',
        // height: '318px',
        width: '335px',
        height: '380px',
        borderRadius: '6px',
        backgroundColor: '#F9F5D4',
        position: 'relative',
        textAlign: 'center',
    },
    // imageShadow: {
    //     position: 'absolute',
    //     top: '15%',
    //     left: '5%',
    //     right: '5%',
    //     height: '90%',
    //     backgroundSize: 'auto',
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat',
    //     borderRadius: 'inherit',
    //     filter: 'blur(25px)',
    // },
    img: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        video:{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
        }
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
    styleNameCard:{
        width: 200,
        // height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        nameCard: {
            // whiteSpace: 'nowrap',
            // overflow: 'hide',
            // textOverflow: 'ellipsis',
        }
    },
    fullName:{
        position: 'absolute',
        top: -1,
        left: -1,
        width: '100%',
        padding: 6,
        borderRadius: 6,
        backgroundColor: 'lightgray',
        textAlign: 'center'
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
        padding: '5px',
        color: 'black'
    },
    delete: {
        width: '60px',
        height: '35px',
    },
    icons: {
        cursor: 'pointer',
    },
})