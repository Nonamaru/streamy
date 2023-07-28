import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Icon } from '@iconify/react';

const {height} = Dimensions.get('window');
export default function Opened({isOpened}) {
    return(
        <View style={[cardStyle.opened, isOpened && {display: 'none'}]}>
            <View style={cardStyle.viewStyle}>
                <View style={cardStyle.header}>
                    <View style={cardStyle.leftHeader}>
                        <View style={cardStyle.leftHeader.close}>
                            <Icon style={{width: 48, height: 48}} icon="solar:close-square-bold" />
                        </View>
                        <Text style={cardStyle.leftHeader.videoName}>videoname</Text>
                    </View>
                    <View style={cardStyle.rightHeader}>
                        <View style={cardStyle.rightHeader.edit}>
                            <Icon style={{width: 30, height: 30}} icon="iconamoon:edit-bold" />
                        </View>
                        <View style={cardStyle.rightHeader.trash}>
                            <Icon style={{width: 30, height: 30}} icon="octicon:trash-16" />
                        </View>
                    </View>
                </View>

                <View>
                    <Text>VIDEO</Text>
                </View>

                <View>
                    <View>owner</View>
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
        border: '1px solid black',
        position: 'fixed',
        backgroundColor: '#ECECEC',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewStyle:{
        border: '1px solid black',
        width: 1210-68,
        height: height-334,
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
    }
})