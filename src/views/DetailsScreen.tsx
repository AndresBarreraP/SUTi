import React, {useState} from 'react';
import {
ImageBackground,
SafeAreaView,
StatusBar,
StyleSheet,
ScrollView,
TouchableOpacity,
Button,
Image,
Modal,
View,
Text,
} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const DetailsScreen = ({navigation, route}:any) => {
const {place,changeEnglish} = route.params;
const [modalVisible, setModalVisible] = useState(false);
const [isVideoPaused, setIsVideoPaused] = useState(true);

const handlePlayPress = () => {
  setIsVideoPaused(false);
};
return (
<SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
<StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
<ImageBackground style={{flex: 0.7}} source={place.image}>
<View style={style.header}>
<Icon
name="arrow-back-ios"
size={28}
color={Colors.white}
onPress={navigation.goBack}
/>
<Icon name="more-vert" size={28} color={Colors.white} />
</View>
<View style={style.imageDetails}>
<Text
style={{
width: '70%',
fontSize: 30,
fontWeight: 'bold',
color: Colors.white,
marginBottom: 20,
}}>
{place.name}
</Text>
{/* <View style={{flexDirection: 'row'}}>
<Icon name="star" size={30} color={Colors.orange} />
<Text
style={{color: Colors.white, fontWeight: 'bold', fontSize: 20}}>
5.0
</Text>
</View> */}
</View>
</ImageBackground>
<ScrollView style={style.detailsContainer}>
{/* <View style={style.iconContainer}>
<Icon name="favorite" color={Colors.red} size={30} />
</View> */}
<View style={{flexDirection: 'row', marginTop: 10}}>
<Icon name="place" size={28} color={Colors.primary} />
<Text
style={{
marginLeft: 5,
fontSize: 20,
fontWeight: 'bold',
color: Colors.primary,
}}>
{place.location}
</Text>
</View>
<Text style={{marginTop: 20, fontWeight: 'bold', fontSize: 20}}>
{changeEnglish ? 'Reseña':'Review'}
</Text>
<Text style={{marginTop: 20, lineHeight: 22}}>{place.details}</Text>
<Text style={{fontWeight: "bold"}}> {changeEnglish ? '\nDatos Clave:':'\nKey Facts'}</Text>
<Text style={{marginTop: 20, lineHeight: 22}}>{place.details1}</Text>
<Text></Text>
<Video
    controls={false} // Show video controls
    source= {place.video} // Replace with your video path
    style={{ width: '100%', height: 200 }} // Adjust width and height as needed
    paused={isVideoPaused}
  />
<Button title="Play Video" onPress={handlePlayPress} />

<Text></Text> 
</ScrollView>
<View style={style.footer}>
<Modal
animationType="slide"
transparent={true}
visible={modalVisible}
onRequestClose={() => {
setModalVisible(!modalVisible);
}}>
<View style={style.centeredView}>
<View style={style.modalView}>
<Image style={style.modalImage} source={place.qr}/>
<TouchableOpacity
style={[style.button1, style.buttonQR]}>
<Text style={style.textStyle}>{changeEnglish ? 'Escanea el codigo QR':'Scan QR Code'}</Text>
</TouchableOpacity> 
<View style={style.footerButtonContainer}>
<TouchableOpacity
style={[style.button, style.buttonClose]}
onPress={() => setModalVisible(!modalVisible)}>
<Text style={style.textStyle}>{changeEnglish ? 'Cerrar':'Close'}</Text>
</TouchableOpacity> 
</View> 
</View> 
</View>
</Modal> 
{/* <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
<Text
style={{
fontSize: 18,
fontWeight: 'bold',
color: Colors.white,
}}>
$100
</Text>
<Text
style={{
fontSize: 12,
fontWeight: 'bold',
color: Colors.grey,
marginLeft: 2,
}}>
/PER DAY
</Text>
</View> */}
<TouchableOpacity
activeOpacity={0.8}
onPress={() => setModalVisible(true)}>
<View style={style.bookNowBtn}>
<Text
style={{color: Colors.primary, fontSize: 16, fontWeight: 'bold'}}>
{changeEnglish ? 'Obtener Ubicación':'Get Location'}
</Text>
</View>
</TouchableOpacity>
</View>
</SafeAreaView>
);
};
const style = StyleSheet.create({
bookNowBtn: {
height: 50,
width: 150,
backgroundColor: Colors.white,
borderRadius: 10,
justifyContent: 'center',
alignItems: 'center',
},

iconContainer: {
height: 60,
width: 60,
position: 'absolute',
top: -30,
backgroundColor: Colors.white,
borderRadius: 30,
right: 20,
elevation: 10,
justifyContent: 'center',
alignItems: 'center',
},
detailsContainer: {
top: -30,
borderTopLeftRadius: 30,
borderTopRightRadius: 30,
paddingVertical: 10,
paddingHorizontal: 20,
backgroundColor: Colors.white,
flex: 0.3,
},
header: {
marginTop: 60,
flexDirection: 'row',
justifyContent: 'space-between',
paddingHorizontal: 20,
},
imageDetails: {
padding: 20,
flexDirection: 'row',
justifyContent: 'space-between',
width: '100%',
position: 'absolute',
bottom: 30,
},
footer: {
flexDirection: 'row',
backgroundColor: Colors.primary,
height: 70,
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 20,
borderTopLeftRadius: 15,
borderTopRightRadius: 15,
},

centeredView: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
marginTop: 10,
},
modalView: {
margin: 20,
backgroundColor: 'rgba(52, 52, 52, 0.8)',
borderRadius: 20,
padding: 120,
alignItems: 'center',
shadowColor: '#000',
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4,
elevation: 5,
},
button: {
borderRadius: 20,
padding: 10,
elevation: 2,
},
buttonOpen: {
backgroundColor: Colors.primary,
},
buttonClose: {
backgroundColor: Colors.primary,
},
button1: {
borderRadius: 20,
padding: 10,
elevation: 2,
width: 200,
},
buttonQR: {
backgroundColor: Colors.primary,
}, textStyle: {
color: 'white',
fontWeight: 'bold',
textAlign: 'center',
},
modalText: {
marginBottom: 15,
textAlign: 'center',
},
footerButtonContainer: {
position: 'absolute',
bottom: 5, // Ajusta este valor para lograr el espaciado deseado desde abajo
left: 0,
right: 0,
alignItems: 'center',
},
modalImage: {
flex: 1,
margin: 20,
padding: 120, 
width: 200, // Ajusta el ancho de la imagen según tus necesidades
height: 200, // Ajusta la altura de la imagen según tus necesidades 
resizeMode: 'contain', // Ajusta el modo de escalado según tus necesidades
},
});

export default DetailsScreen;


