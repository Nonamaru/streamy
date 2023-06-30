import { Dimensions, StyleSheet, Text, View } from 'react-native';

const width = Dimensions.get('window').width;

export default function Componet() {
  return (
    <View style={styles.web}>
      <View style={styles.viewContainer}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View>Upload</View>
            <View>Folder name</View>
            <View>User</View>
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
    border: '1px solid black;',
    // flex: 1,
    width: '100vw',
    height: '100vh',
    border: '1px solid blue',
  },
  viewContainer: {
    // border: width <= 1800 ? '1px solid black' : '2px solid red',
    width: '1440px',
    height: '120px',
    border: '1px solid red',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  header: {
    border: '1px solid black',
    width: '100%',
    height: '120px',
  },
  headerContent: {
    border: '1px solid black',
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
  content: {
    border: '1px solid black',
    width: '1200px',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
});
