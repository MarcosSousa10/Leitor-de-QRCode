import {View, Text, TouchableOpacity, Linking} from 'react-native';
import React, {useState, useRef} from 'react';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
const App = () => {
  const qrCcodeRef = useRef(null);
  const [link, setLink] = useState('');
  const handleLink = () => {
    Linking.openURL(link).catch(() => {
      console.log('ERROR');
    });
    qrCcodeRef.current.reactivate();
  };
  return (
    <QRCodeScanner
      ref={qrCcodeRef}
      onRead={({data}) => setLink(data)}
      flashMode={RNCamera.Constants.FlashMode.off}
      topContent={
        <View>
          <Text>{link}</Text>
        </View>
      }
      bottomContent={
        <View>
          <TouchableOpacity
            onPress={handleLink}
            style={{padding: 12, backgroundColor: '#0277BD', marginTop: 20}}>
            <Text style={{color: '#FFFFFF'}}>Ir Para link</Text>
          </TouchableOpacity>
        </View>
      }
    />
  );
};
export default App;
