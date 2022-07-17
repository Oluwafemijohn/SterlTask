import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';
import SplashScreen from 'react-native-splash-screen';
import SafeAreaScreen from './src/components/SafeAreaScreen';
import Home from './src/screens/Home';


const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaScreen>
      <RecoilRoot>
        <NavigationContainer>
          <Home />
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
