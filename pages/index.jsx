import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Icon } from '@iconify/react';
import { TextInput } from 'react-native-web';

const width = Dimensions.get('window').width;
let searchValue;

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
                <TextInput value={searchValue} />
                {searchValue}
              </View>
            </View>
            <View>Folder name</View>
            <View style={headerStyles.userProfile}></View>
          </View>
        </View>
        <View style={styles.content}>
          Content
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
    border: '1px solid blue',
  },
  content: {
    width: '1200px',
    marginRight: 'auto',
    marginLeft: 'auto',
    border: '1px solid black',
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
