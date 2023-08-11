import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
// import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { ContainerStyles, TextStyles, ButtonStyles } from './Styles';
import LogoImage from '../assets/logo_adobe_express.svg';
import { useTheme } from 'react-native-paper';


export default HomeScreen = () => {
  const [data, setData] = useState('Temp');
  const navigation = useNavigation();
  const theme = useTheme();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await axios.get('https://nomadic-oarlock-392318.uw.r.appspot.com/edge');
//         setData(result.data.url); // Assuming result.data contains the data you want to display
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

  const navigateToLogin = () => {
    navigation.navigate('Login', { url: data });
  };

//   const navigateToProviderLogin = () => {
//     navigation.navigate('ProviderLogin', { url: data });
//   };

  return (
    <View style={{ backgroundColor: theme.colors.primary }} >

    <View style={[ContainerStyles.container, style.background]}>
      {data ? (
        <View style={style.content}>
            <Image source={LogoImage} style={style.logo} resizeMode="contain" />
          {/* <Text style={TextStyles.heading}>{data}</Text> */}
          <TouchableOpacity style={[ButtonStyles.primaryButton, style.button, style.button1]} onPress={navigateToLogin}>
            <Text style={ButtonStyles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={TextStyles.body}>Loading...</Text>
      )}
    </View>
    </View>
  );
};

const style = StyleSheet.create({
  // background: {
  //   backgroundColor: '#FFFFFF', // Set your desired background color here
  // },
  content: {
    alignItems: 'center', 
  },
  logo: {
    width: 400,
    height: 400,
    marginBottom: 40,
  },
  button: {
    marginBottom: 10,
  }

});
