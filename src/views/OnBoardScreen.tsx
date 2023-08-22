import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
// import COLORS from '../../consts/colors';
const OnBoardScreen = ({navigation}:any) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={{flex: 1}}
        source={require('../../src/assets/onboardImage.jpg')}>
        <View style={style.details}>
          <Text style={{color: Colors.white, fontSize: 35, fontWeight: 'bold'}}>
            Descubre
          </Text>
          <Text style={{color: Colors.white, fontSize: 35, fontWeight: 'bold'}}>             
          {'el pais con \nnosotros'} 
          </Text>
          <Text style={{color: Colors.white, lineHeight: 25, marginTop: 15}}>
{            'Encuentra nuevos destinos, alojamiento y \neventos locales en un solo lugar.\n\n¡Vamos a explorar juntos!'}
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('HomeScreen')}>
            <View style={style.btn}>
              <Text style={{fontWeight: 'bold'}}>Empezar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  details: {
    height: '50%',
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: 40,
  },
  btn: {
    height: 50,
    width: 120,
    backgroundColor: Colors.white,
    marginTop: 20,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default OnBoardScreen;
