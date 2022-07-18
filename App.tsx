import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';
import SplashScreen from 'react-native-splash-screen';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import SafeAreaScreen from './src/components/SafeAreaScreen';
import Home from './src/screens/Home';


const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const client = new ApolloClient({
    uri: 'https://flyby-gateway.herokuapp.com/',
    cache: new InMemoryCache(),
  });

  return (
    <SafeAreaScreen>
      <RecoilRoot>
        <NavigationContainer>
          <ApolloProvider client={client}>
            <Home />
          </ApolloProvider>
        </NavigationContainer>
      </RecoilRoot>
    </SafeAreaScreen>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

export default App;
