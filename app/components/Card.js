import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  CheckBox,
} from "react-native";
import { Formik } from "formik";
import AppButton from "./AppButton";
import AppText from "./AppText";
import * as Yup from "yup";
import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("* Username"),
  email: Yup.string().required().email().label("* Email"),
  password: Yup.string().required().min(4).label("* Passowrd"),
  confirmPassword: Yup.string().required().min(4).label("* ConfirmPassowrd"),
});
function Card() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <TouchableWithoutFeedback style={styles.container}>
      <View style={styles.card}>
        <AppText style={styles.label}>Register</AppText>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              confirmPassword: "",
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
                  iconName="account"
                  onBlur={() => setFieldTouched("username")}
                  placeholder="UserName"
                  onChangeText={handleChange("username")}
                />
                {touched.username && <ErrorMessage error={errors.username} />}
                <AppTextInput
                  iconName="email"
                  placeholder="Email"
                  onBlur={() => setFieldTouched("email")}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={handleChange("email")}
                  autoCorrect={false}
                />
                {touched.email && <ErrorMessage error={errors.email} />}
                <AppTextInput
                  iconName="lock"
                  placeholder="Password"
                  autoCapitalize="none"
                  onBlur={() => setFieldTouched("password")}
                  onChangeText={handleChange("password")}
                  secureTextEntry={true}
                />
                {touched.password && <ErrorMessage error={errors.password} />}
                <AppTextInput
                  iconName="onepassword"
                  placeholder="Confirm Password"
                  onBlur={() => setFieldTouched("confirmPassword")}
                  autoCapitalize="none"
                  onChangeText={handleChange("confirmPassword")}
                  secureTextEntry={true}
                />
                {touched.confirmPassword && (
                  <ErrorMessage error={errors.confirmPassword} />
                )}

                <View style={styles.termsContainer}>
                  <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                  />

                  <AppText style={styles.terms}>
                    I agree to terms and conditions
                  </AppText>
                </View>
                <AppButton title="Sign up" onPress={handleSubmit} />
              </>
            )}
          </Formik>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Card;

const styles = StyleSheet.create({
  termsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // flex: 1,
    marginTop: 9,
  },
  terms: {
    fontSize: 13,
  },
  card: {
    width: "90%",
    height: 530,
    marginTop: 10,
    backgroundColor: "#6D4C41",
    borderRadius: 8,
    alignSelf: "center",
    position: "relative",
    elevation: 5,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  label: {
    textShadowColor: "black",
    fontSize: 30,
    padding: 10,
  },
});
