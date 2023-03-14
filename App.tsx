import React from 'react';

import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

function App(): JSX.Element {
  return (
      <SafeAreaView style={styles.container}>
        <Text>Hello React native</Text>
        <Image source={{
          uri: "https://picsum.photos/200/300",
          width: 200,
          height: 300,

        }}/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
