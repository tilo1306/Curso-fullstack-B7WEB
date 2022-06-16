import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

export default () => {
  return (
    <SafeAreaView style={styles.page}>
      <Text style={{color: 'white', fontSize: 25}}>Ola mundo</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {width: 200, height: 200, backgroundColor: 'red'},
});
