import React from 'react';
import { StatusBar, View } from 'react-native';

// import Splash from './pages/Splash';
import Presentation from './pages/Presentation';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#6548a3" translucent />
    <View style={{ flex: 1, backgroundColor: '#6548a3' }}>
      <Presentation />
    </View>
  </>
);

export default App;
