import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { Amplify, Auth, DataStore } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react-native';
import config from './src/aws-exports';

Amplify.configure(config);

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Authenticator.Provider>
        <Authenticator>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </Authenticator>
      </Authenticator.Provider>

    );
  }
}

export default App;