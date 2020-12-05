import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Rides = () => {
    return (
        <View style={styles.container} level='1'>
            <Text style={styles.header} category="h3">Where are you going ?</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
  },
  header: {
    marginBottom:40,
    marginTop:16,
    fontWeight:'bold'
  }
});

export default Rides

