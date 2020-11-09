import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';
import mapMarker from './src/images/map-marker.png';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map} initialRegion={{
          latitude: -3.7268249,
          longitude: -38.5163695,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }} />
      <Marker
        icon={mapMarker}
        coordinate={{
          latitude: -3.7268249,
          longitude: -38.5163695,
        }}
      >
        <Callout>
          <Text>
            Lar das criancinhas
          </Text>
        </Callout>
      </Marker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height

  }
});
