/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button
} from 'react-native';
import JitsiMeetView from 'jitsi-meet-react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [text, onChangeText] = useState("");
  [flagprops, setFlagprops] = useState({});
  [showJitsi, setShowJitsi] = useState(false);

  function onLeave(){
    setShowJitsi(true)
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        {!showJitsi ? 
        <>
        <TextInput style={{color: 'black'}} onChangeText={onChangeText} value={text} placeholder="Enter Room here"/>
        <Button title = 'JOIN' onPress={() => 
          {
            setFlagprops({"url" : "https://meet.jit.si/" + text, "onLeave": onLeave});
            setShowJitsi(true);
          }
        }
          />
        </> 
        :
        <JitsiMeetView url={flagprops.url} onLeave={() => {setShowJitsi(false)}} />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
