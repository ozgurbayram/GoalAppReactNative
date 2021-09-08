import * as React from 'react';
import { StyleSheet } from 'react-native';
import { DarkTheme, DefaultTheme, FAB } from 'react-native-paper';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
    <FAB
      style={styles.fab}
      small={false}
      label="Create"
      color="#fff"
      icon="plus"
      onPress={() => console.log('Pressed')}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display:'flex',
    flexDirection:'column'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  Header:{
    width:"100%",
    padding:15,
    marginTop:20,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor:'#2D9CDB'
  },
});
