import { Dimensions, TextInput, Image, StyleSheet, Text, View } from 'react-native';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-web';
import Dropzone from 'react-dropzone'

const host = 'http://localhost:1337'

const iconStyle = (isActive) => {
    return isActive ? {color: 'gray', cursor: 'pointer'} : {color: 'black'}
}

export default function LeftDoor({visible}) {
    const [iconHover, setIconHover] = useState({
        selectImg: false,
        upload: false,
        dragDrop: false,
    });
    const [files, setFiles] = useState({
        file: null,
        selected: false,
    });
    const uploadFile = async () => {
        let jwt = localStorage.getItem('jwt');
        let upload = files.file.path;
        // console.log(upload);
        const formData = new FormData();
        files.file.forEach((file, index)=>{
            formData.append(`${files.file[index].path}`, file)
        })
        try {
            const response = await fetch(`${host}/upload`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
                body: formData
            })
        } catch (error) {
            console.log(error);
        }
    }

    function removeFileFromList(path){
        const newFiles = files.file.filter(item => item.path !== path);
        setFiles({file: newFiles, selected: newFiles.length ? true : false})
    }
    return (
        <View style={[door.main, !visible && {display: 'none'}]}>
            {/* ВЕРХНИЕ ИКОНКИ */}
            <View style={door.topButtons}>
                
                {/* ИКОНКА УДАЛЕНИЯ ВСЕХ ФАЙЛОВ */}
                <TouchableOpacity
                    onPress={()=>{setFiles(()=>({...files, file: [], selected: false}))}}
                >
                    <View
                        style={[iconStyle(iconHover.selectImg), !files.selected && {display: 'none'}]}
                        onMouseEnter={() => setIconHover((iconHover) => ({...iconHover, selectImg: true}))}
                        onMouseLeave={() => setIconHover((iconHover) => ({...iconHover, selectImg: false}))}
                        >
                        <Icon style={{width: 36, height: 36}} icon="gg:play-list-remove" />
                    </View>
                </TouchableOpacity>
                {/* ИКОНКА ЗАГРУЗКИ ФАЙЛОВ */}
                <View
                    style={[iconStyle(iconHover.upload), !files.selected && {display: 'none'}]}
                    onMouseEnter={() => setIconHover((iconHover) => ({...iconHover, upload: true}))}
                    onMouseLeave={() => setIconHover((iconHover) => ({...iconHover, upload: false}))}
                >
                    <TouchableOpacity
                        onPress={() => {uploadFile()}}
                    >
                        <Icon style={{width: 35, height: 35}} icon="solar:upload-bold" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* ЗАГРУЖАЕМЫЕ ФАЙЛЫ */}
            <View 
                style={[door.bottomState, files.selected && {display: 'none'}, iconHover.dragDrop && {borderColor: 'gray', color: 'gray'}]}
                onMouseEnter={()=>{setIconHover(()=>({...iconHover, dragDrop: true}))}}
                onMouseLeave={()=>{setIconHover(()=>({...iconHover, dragDrop: false}))}}
                dragenter={()=>alert(123)}
            >
                <Dropzone 
                    onDrop={acceptedFiles => {
                        console.log(acceptedFiles);
                        acceptedFiles.filter(item => item.type === 'video/mp4')
                        setFiles(() => ({...files, file: acceptedFiles.filter(item => item.type === 'video/mp4'), selected: true}));
                    }}
                >
                  {({getRootProps, getInputProps}) => (
                    <section>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop some files here, or click to select files</p>
                      </div>
                    </section>
                  )}
                </Dropzone>
            </View>
            {/* <Text>{JSON.stringify(files)}</Text> */}
            <View>
                {/* <Text>{JSON.stringify(files && files.file)}</Text> */}
                {files && files.file && files.file.map((fi) => (
                    <View key={fi} style={door.fileStyle}>
                        <Text
                            style={{width: '40%'}}
                            numberOfLines={1}
                            ellipsizeMode="tail"
                        >
                            {fi.path}
                        </Text>
                        <TextInput
                            style={{backgroundColor: 'lightgray', padding: 4, width: '55%', borderRadius: 3}}
                            placeholderTextColor={'gray'}
                            placeholder={'Имя файла'}
                            inputMode={'text'}
                        />
                        <TouchableOpacity
                            onPress={() => {removeFileFromList(fi.path)}}
                        >
                            <Icon icon="ci:list-remove" />
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View>
    );
}

const door = StyleSheet.create({
    main:{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '330px',
        height: '1024px',
        backgroundColor: 'rgba(255, 255, 255, 0.50)',
        backdropFilter: 'blur(20px)',
        zIndex: 10,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 15,
        paddingRight: 15
    }, 
    topButtons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#D9D9D9',
        borderBottomWidth: '4px',

    },
    bottomState: {
        marginTop: 10,
        textAlign: 'center',
        border: '2px dashed black',
        cursor: 'pointer',
        text: {
            fontSize: 18
        }
    },
    fileStyle:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})