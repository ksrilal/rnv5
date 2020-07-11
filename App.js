/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button 
        title="Go to details screen"
        onPress={() => navigation.navigate("Details")}
      />
    </View>    
  );
};

const DetailsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button 
        title="Go to details screen...again"
        onPress={() => navigation.push("Details")}
      />
      <Button 
        title="Go to home screen"
        onPress={() => navigation.navigate("Home")}
      />
      <Button 
        title="Go back"
        onPress={() => navigation.goBack()}
      />
      <Button 
        title="Go to first screen"
        onPress={() => navigation.popToTop("Details")}
      />
    </View>    
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#8A2BE2',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}
      >
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          // options={{
          //   headerStyle: {
          //     backgroundColor: '#8A2BE2',
          //   },
          //   headerTintColor: '#fff',
          //   headerTitleStyle: {
          //     fontWeight: 'bold',
          //   }
          // }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{title: 'Overview'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
