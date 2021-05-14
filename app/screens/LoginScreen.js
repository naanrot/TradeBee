import React, { Component } from "react";
import * as Font from 'expo-font';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  StatusBar,
} from "react-native";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().label("* Email"),
  password: Yup.string().required().min(4).label("* Password")
})

class LaunchScreen extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async loadFonts() {
    await Font.loadAsync({
      Aladin: require('../assets/fonts/Aladin-Regular.ttf')
    });
    this.setState({fontsLoaded: true});
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    // Use the font with the fontFamily property after loading
    if (this.state.fontsLoaded) {
      return (
        <ImageBackground 
          style={mainStyleSheet.imageBackground}
          resizeMode="stretch"
          source={require("../assets/backGround.png")}
        >
          <Text style={mainStyleSheet.appNameTextView}>
            TradeBee
          </Text>

          <Card style={mainStyleSheet.loginCard}>
            <View style={mainStyleSheet.loginLabelContainer}>
              <AppText
                style={mainStyleSheet.loginLabel}
              >
                Login
              </AppText>
            </View>

            <Formik
              initialValues={{
                email: "",
                password: ""
              }}
              onSubmit={(values) => console.log(values)}
              validationSchema={validationSchema}
            >{({
              handleChange,
              handleSubmit,
              errors,
              setFieldTouched,
              touched,
            }) => (
              <>
                <AppTextInput
                  placeholder="Email"
                  width="100%"
                />
                {touched.email && (
                  <ErrorMessage error={errors.email} />
                )}
                <AppTextInput
                  placeholder="Password"
                  width="100%"
                />
                {touched.password && (
                  <ErrorMessage error={errors.password} />
                )}
                <AppButton
                  style={mainStyleSheet.loginButton}
                  title="LOGIN"
                  onPress={handleSubmit}
                />
              </>
            )}
            </Formik>

          </Card>

          <StatusBar style="auto" />
        </ImageBackground>
      );
    } else {
      return null;
    }
  }
}

class Card extends Component {

  render() {
    return (
      <View style={[cardStyle.card, {...this.props.style}]}>
        {this.props.children}
      </View>
    );
  }
}

const cardStyle = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: "#6D4C41",
    borderRadius: 8,
    elevation: 5,
  }
})


const mainStyleSheet = StyleSheet.create({
  loginLabelContainer:{
    width: "100%",
    margin: 10
  },

  loginCard: {
    position: "absolute",
    bottom: 30,
    padding: 15,
    alignItems: "center"
  },

  loginLabel: {
    textShadowColor: "black",
    fontSize: 30,
  },

  loginButton: {
    
  },

  imageBackground: {
    flex: 1,
    alignItems: 'center'
  },

  appNameTextView: {
    fontFamily: 'Aladin',
    fontSize: 60,
    top: 90
  }
})

export default LaunchScreen