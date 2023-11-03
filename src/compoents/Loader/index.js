import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';
import { BlurView } from '@react-native-community/blur';

const Loader = ({ visible = true }) => {
  return (
    visible && (
      <View style={styles.absolute1}>
        <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        >
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="skyblue" />
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        </BlurView>
      </View>
    )
  );
};
export default Loader;

const styles = StyleSheet.create({
  absolute: {
    height: '100%',
    width: '100%',
  },
  absolute1: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    zIndex: 10,
  },
  loaderContainer: {
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
    flex: 1,
  },
  loadingText: {
    marginTop: 10, // Add some spacing between the ActivityIndicator and the text
  },
});
