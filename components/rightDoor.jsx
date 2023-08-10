import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native-web';
import {useNavigation} from '@react-navigation/native'

const getBackgroundStyle = (isActive) => {return isActive ? {backgroundColor: 'darkgray'} : {backgroundColor: '#D9D9D9'}}
const host = "http://localhost:1337";

export default function RightDoor({visible, doorVisible, userName, updateFolder}) {
    const navigation = useNavigation();

    const [hoverElem, sethoverElem] = useState(false);

    useEffect(()=> {getFolders()}, [])
    const [folders, setFolders] = useState([])
    const getFolders = async () => {
        let jwt = localStorage.getItem('jwt');
        try {
            const response = await fetch(`${host}/api/users/me?populate[libraries][fields]=folder`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                },
            });
            const folder_json = await response.json();
            setFolders(folder_json.libraries);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={[door.main, !visible && {display: 'none'}]}>
            
            {/* ВЕРХНИЕ ИКОНКИ */}
            <View style={door.topButtons}>
                {/* ПОЛЬЗОВАТЕЛЬ */}
                <View style={door.user}>
                    <View style={door.user.uIcon}></View>
                    <Text style={door.user.uText}>{userName}</Text>
                </View>

                {/* ВЫХОД */}
                <TouchableOpacity
                    onPress={() => {
                            localStorage.clear();
                            // navigation.push('Auth');
                            window.location.reload();
                            doorVisible(false);
                        }
                    }
                >
                    <View 
                        style={[door.leave, getBackgroundStyle(hoverElem)]}
                        onMouseEnter={() => sethoverElem(true)}
                        onMouseLeave={() => sethoverElem(false)}
                    >
                        <Text style={door.leave.lText}>Выйти</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* РАЗДЕЛ С ПАПКАМИ */}
            {folders.map((f) => (
                <TouchableOpacity
                    onPress={() => {
                        localStorage.setItem('folder', `${f.folder}`);
                        updateFolder(`${f.folder}`);
                    }}
                >
                    <View style={door.folders}>
                        <Icon style={{width: 40, height: 40, marginRight: 10}} icon="material-symbols:folder" />
                        <Text style={door.folders.name}>{f.folder}</Text>
                    </View>
                </TouchableOpacity>
            ))}
            {/* <Text>{JSON.stringify(folders)}</Text> */}

        </View>
    );
}

const door = StyleSheet.create({
    main:{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '330px',
        height: '1024px',
        backgroundColor: 'rgba(255, 255, 255, 0.50)',
        backdropFilter: 'blur(20px)',
        zIndex: 10,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 15,
        paddingRight: 15,
        borderLeft: 3,
        borderLeftColor: 'black'

    },
    topButtons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    user: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        uIcon:{
            backgroundColor: 'blue',
            width: 40,
            height: 40,
            borderRadius: 16,
            marginRight: 5
        },
        uText: {fontSize: 14}
    },
    leave:{
        width: 82,
        height: 29,
        borderRadius: 9,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D9D9D9',
        cursor: 'pointer',
        lText:{
            fontSize: 12,
            fontWeight: 'bold',
        }
    },
    folders:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        name:{
            fontSize: 18
        }
    }
})