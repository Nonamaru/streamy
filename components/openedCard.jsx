import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Icon } from '@iconify/react';
import { TouchableOpacity } from 'react-native-web';
import { useState } from 'react';

const {height} = Dimensions.get('window');

const getStyle = (isActive) => {
    return isActive ? {color: 'gray'} : {color: 'black'}
}

export default function Opened({isOpened, setOpened}) {
    const [hovered, setHovered] = useState({
        edit: false,
        trash: false,
    })
    return (
        <View style={[cardStyle.opened, !isOpened && {display: 'none'}]}>
            <View style={cardStyle.viewStyle}>
                <View style={cardStyle.header}>
                    <View style={cardStyle.leftHeader}>
                        <TouchableOpacity
                            onPress={() => {setOpened(false)}}
                        >
                            <View style={cardStyle.leftHeader.close}>
                                <Icon style={{width: 48, height: 48}} icon="solar:close-square-bold" />
                            </View>
                        </TouchableOpacity>
                        <Text style={cardStyle.leftHeader.videoName}>videoname</Text>
                    </View>
                    <View style={cardStyle.rightHeader}>
                        <View 
                            style={[cardStyle.rightHeader.edit, getStyle(hovered.edit)]}
                            onMouseEnter = {() => setHovered((hovered) => ({...hovered, edit: true}))}
                            onMouseLeave = {() => setHovered((hovered) => ({...hovered, edit: false}))}
                        >
                            <Icon style={{width: 30, height: 30}} icon="iconamoon:edit-bold" />
                        </View>
                        <View 
                            style={[cardStyle.rightHeader.trash, getStyle(hovered.trash)]}
                            onMouseEnter = {() => setHovered((hovered) => ({...hovered, trash: true}))}
                            onMouseLeave = {() => setHovered((hovered) => ({...hovered, trash: false}))}

                        >
                            <Icon style={{width: 30, height: 30}} icon="octicon:trash-16" />
                        </View>
                    </View>
                </View>

                <View style={cardStyle.videoView}></View>

                <View style={cardStyle.videoOwner}>
                    <View style={cardStyle.videoOwner.text}>Создал: </View>
                    <View style={cardStyle.videoOwner.profile}>
                        <View style={cardStyle.videoOwner.userPic}></View>
                        <View style={cardStyle.videoOwner.name}>username</View>

                    </View>
                </View>
            </View>
        </View>
    )
}

const cardStyle = StyleSheet.create({
    opened: {
        width: 1210,
        height: height,
        top: 0,
        zIndex: 10,
        transform: 'translate(-50%)',
        left: '50%',
        position: 'fixed',
        backgroundColor: '#ECECEC',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewStyle:{
        width: 1210-68,
        // height: height-334,
    },
    header:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftHeader:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        close:{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 20,
        },
        videoName:{
            fontSize: 18
        }
    },
    rightHeader:{
        display: 'flex',
        flexDirection: 'row',
        edit:{
            cursor: 'pointer',
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 9,
            paddingRight: 9,
            borderRadius: 22,
            backgroundColor: 'white',
        },
        trash:{
            cursor: 'pointer',
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 9,
            paddingRight: 9,
            borderRadius: 22,
            backgroundColor: 'white',
            marginLeft: 9,
        }
    },
    videoView:{
        marginTop: 50,
        marginBottom: 83,
        width: 380,
        height: 470,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#9C6C57',
    },
    videoOwner:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 195,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'rgba(255, 255, 255, 0.50)',
        paddingLeft: 16,
        paddingRight: 16,
        text:{
            fontSize: 12,
        },
        profile:{
            display: 'flex',
            flexDirection: 'row',
            marginLeft: 8,
            alignItems: 'center',
        },
        userPic:{
            width: 21,
            height: 21,
            borderRadius: 8,
            backgroundColor: '#4B88C0',
        },
        name:{
            border: '1px solid balck',
            fontSize: 12,
            marginLeft: 11,
        }
    }
})