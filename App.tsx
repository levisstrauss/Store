import React from 'react';

import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import {useDeviceOrientation, useImageDimensions } from "@react-native-community/hooks";

function App(): JSX.Element {

  // @ts-ignore
  const {landscape}  = useDeviceOrientation();

  return (
      <SafeAreaView style={styles.container}>
        <View  style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? '100%' : '30%',
        }}>

        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1
  },
});

export default App;
