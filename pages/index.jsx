import { Dimensions, StyleSheet, Text, View } from 'react-native';

const width = Dimensions.get('window').width;

export default function Componet() {
  return (
    <View style={styles.web}>
      <View style={styles.viewContainer}>
        <Text>suka {width}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  web: {
    border: '1px solid black;',
    flex: 1,
  },
  viewContainer: {
    border: width <= 1800 ? '1px solid black' : '2px solid red',

  }

});
