import { Button, Dimensions, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View, useWindowDimensions } from 'react-native';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import Card from '../components/card.jsx';
import RightDoor from '../components/rightDoor.jsx';
import LeftDoor from '../components/leftDoor.jsx';
// import Opened from '../components/openedCard.jsx';

const {width, height} = Dimensions.get('window');
const host = "http://localhost:1337";
export default function Componet() {

  const [info, setInfo] = useState({});
  const [hovered, setHovered] = useState({
    upload: false, 
    search: false,
    user: false
  });
  const [door, setDoor] = useState({
    left: false, 
    right: false,
  });
  const [isOpened, setIsOpened] = useState(false);
  // const [cardIsOpen, setCardIsOpen] = useState({
  //   id: 0,
  //   name: '',
  //   author: '',
  //   link: '',
  // })

  useEffect(()=> {
    getUserData(`${localStorage.getItem('folder')}`);
  }, [])

  const getUserData = async (folder) => {
    let jwt = localStorage.getItem('jwt');
    // console.log(jwt);
    try {
      const response = await fetch(`${host}/api/users/me?populate[libraries][populate]=*&populate[libraries][filters][folder][$eq]=${folder}`, {
        headers: {
          Authorization: `Bearer ${jwt}`
        },
      });
      const json = await response.json();
      console.log(json);
      setInfo(json);

    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <View style={styles.web}>
      {/* <Opened 
        isOpened={isOpened} 
        setOpened={setIsOpened}
        openId={cardIsOpen.id}
        openName={cardIsOpen.name}
        openAuthor={cardIsOpen.author}
        openLink={cardIsOpen.link}
      /> */}
      <LeftDoor visible={door.left} />
      <RightDoor 
        visible={door.right} 
        doorVisible={setDoor} 
        userName={info.username} 
        updateFolder={getUserData}
      />
      <View style={[openCard.background, !isOpened && {display: 'none'}]}></View>

      <TouchableWithoutFeedback
        onPress={() => {setDoor((door) => ({...door, right: false, left: false}))}}
      >
        <View style={[doors.shadow, (!door.right && !door.left) && {display: 'none'}]}></View>
      </TouchableWithoutFeedback>
      <View style={styles.viewContainer}>
        <View style={headerStyles.header}>
          <View style={headerStyles.headerContent}>
            <View style={headerStyles.upload_search}>
              <TouchableOpacity
                onPress={() => {setDoor((door) => ({...door, left: true}))}}
              >
                <View
                  style={[headerStyles.upload, hovered.upload && {color: 'gray'}]}
                  onMouseEnter={() => setHovered((hovered) => ({...hovered, upload: true}))}
                  onMouseLeave={() => setHovered((hovered) => ({...hovered, upload: false}))}
                >
                  <Icon icon="ri:video-upload-fill" />
                </View>
              </TouchableOpacity>
              <View 
                style={[headerStyles.search, hovered.search && {color: 'gray'}]}
                onMouseEnter={() => setHovered((hovered) => ({...hovered, search: true}))}
                onMouseLeave={()=> setHovered((hovered) => ({...hovered,  search: false}))}
              >
                <Icon icon="material-symbols:search" />
              </View>
            </View>
            <View>
              <Text style={headerStyles.foldername}>
                {/* {JSON.stringify(info && info.libraries && info.libraries[0].folder)} */}
                {localStorage.getItem('folder')}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {setDoor((door) => ({...door, right: true}))}}
            >
              <View 
                style={[headerStyles.userProfile, hovered.user && {backgroundColor: 'gray'}]}
                onMouseEnter={() => setHovered((hovered) => ({
                  ...hovered,
                  user: true,
                }))}
                onMouseLeave={()=> setHovered((hovered) => ({
                  ...hovered, 
                  user: false,
                }))}
                
              ></View>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* КАРТОЧКИ */}
        <View 
          style={styles.content}
        >
          {/* <Text>{JSON.stringify(info, null, 2)}</Text> */}
          {info && info.libraries && info.libraries.map((item) => (
            <Card 
              setOpened={setIsOpened}
              // cardOpen={setCardIsOpen}
              cardName={item.title} 
              cardImage={item.videos[0].url}
              userName={info.username}
              cardId={item.id}
              updatePage={getUserData}
            />
          ))}
          {/* <Text>
            {info && info.libraries && JSON.stringify(info.libraries[0].videos[0], null, 2)}
          </Text> */}
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  web: {
    // flex: 1,
    width: width,
    height: height,
  },
  viewContainer: {
    // border: width <= 1800 ? '1px solid black' : '2px solid red',
    width: '1440px',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  content: {
    width: '1200px',
    marginRight: 'auto',
    marginLeft: 'auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'space-between'
    gap: 46,
  },
});

const headerStyles = StyleSheet.create({
  header: {
    width: '100%',
    height: '120px',
  },
  headerContent: {
    width: '1200px',
    height: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    // flex: 1,
    fontSize:'45px',
  },
  upload_search: {
    display: 'flex',
    flexDirection: 'row',
  },
  upload: {
    cursor: 'pointer'
  },
  search: {
    cursor: 'pointer',
  },
  foldername: {
    fontSize: '45px',
    fontStyle: 'normal',
    fontWeight: '400',
  },
  userProfile: {
    width: '50px',
    height: '50px',
    backgroundColor: 'blue',
    borderRadius: '18px',
    cursor: 'pointer',
  }
});

const doors = StyleSheet.create({
  shadow: {
    position: 'fixed',
    zIndex: 9,
    width: width,
    height: height,
    backgroundColor: 'rgba(159, 159, 159, 0.20)',
    backdropFilter: 'blur(3px)',
  }
})

const openCard = StyleSheet.create({
  background:{
    width: width,
    height: height,
    backgroundColor: '#DBDBDB',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 9,
  }
})