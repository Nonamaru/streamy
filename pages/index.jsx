import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { Icon } from '@iconify/react';
import Card from '../components/card.jsx';

// const width = Dimensions.get('window').width;
// const {width, height} = useWindowDimensions();
export default function Componet() {
  return (
    <View style={styles.web}>
      <View style={styles.viewContainer}>
        <View style={headerStyles.header}>
          <View style={headerStyles.headerContent}>
            <View style={headerStyles.upload}>
              <Icon icon="icon-park-solid:upload-three" />
              <View style={headerStyles.search}>
                <Icon icon="material-symbols:search" />
              </View>
            </View>
            <View>Folder name</View>
            <View style={headerStyles.userProfile}></View>
          </View>
        </View>
        <View style={styles.content}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  web: {
    // flex: 1,
    width: '100vw',
    height: '100vh',
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
    justifyContent: 'space-between'
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
  upload: {
    display: 'flex',
    flexDirection: 'row',
  },  
  userProfile: {
    width: '50px',
    height: '50px',
    backgroundColor: 'blue',
    borderRadius: '18px',
  }
});
