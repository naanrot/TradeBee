import React, { Component } from "react";
import * as Font from "expo-font";
import {
  Image,
  View,
  StyleSheet,
  Text,
  ImageBackground,
  StatusBar,
} from "react-native";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import ErrorMessage from "../components/ErrorMessage";
import * as Yup from "yup";
import StatusBarScreen from "../components/StatusBarScreen";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().label("* Email"),
  password: Yup.string().required().min(4).label("* Password"),
});

class LoginScreen extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async loadFonts() {
    await Font.loadAsync({
      Aladin: require("../assets/fonts/Aladin-Regular.ttf"),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
    //This is demo code
  }

  render() {
    // Use the font with the fontFamily property after loading
    if (this.state.fontsLoaded) {
      return (
        <StatusBarScreen>
          <ImageBackground
            style={mainStyleSheet.imageBackground}
            resizeMode="stretch"
            source={require("../assets/backGround.png")}
          >
            <View style={mainStyleSheet.appLogoContainer}>
              <Image
                style={mainStyleSheet.appLogoStyle}
                source={require("../assets/appLogo.png")}
              />
              <Text style={mainStyleSheet.appNameTextView}>TradeBee</Text>
            </View>

            <Card style={mainStyleSheet.loginCard}>
              <View style={mainStyleSheet.loginLabelContainer}>
                <AppText style={mainStyleSheet.loginLabel}>Login</AppText>
              </View>

              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
              >
                {({
                  handleChange,
                  handleSubmit,
                  errors,
                  setFieldTouched,
                  touched,
                }) => (
                  <>
                    <AppTextInput
                      iconName="email"
                      placeholder="Email"
                      width="100%"
                      onChangeText={handleChange("email")}
                    />
                    {touched.email && <ErrorMessage error={errors.email} />}
                    <AppTextInput
                      iconName="lock"
                      placeholder="Password"
                      width="100%"
                      onChangeText={handleChange("password")}
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
        </StatusBarScreen>
      );
    } else {
      return null;
    }
  }
}

class Card extends Component {
  render() {
    return (
      <View style={[cardStyle.card, { ...this.props.style }]}>
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
  },
});

const mainStyleSheet = StyleSheet.create({
  appLogoContainer: {
    top: 50,
    alignItems: "center",
  },

  appLogoStyle: {
    width: 80,
    height: 80,
  },

  loginLabelContainer: {
    width: "100%",
    margin: 10,
  },

  loginCard: {
    position: "absolute",
    bottom: 30,
    padding: 15,
    alignItems: "center",
  },

  loginLabel: {
    textShadowColor: "black",
    fontSize: 30,
  },

  imageBackground: {
    flex: 1,
    alignItems: "center",
  },

  appNameTextView: {
    fontFamily: "Aladin",
    fontSize: 60,
  },
});

export default LoginScreen;
