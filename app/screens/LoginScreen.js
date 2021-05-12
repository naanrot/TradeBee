// import React, from "react";
// import {
//   View,
//   StyleSheet,
//   TouchableWithoutFeedback,

// } from "react-native";
// import { Formik } from "formik";
// import AppButton from "./AppButton";
// import AppText from "./AppText";
// import * as Yup from "yup";
// import AppTextInput from "./AppTextInput";
// import ErrorMessage from "./ErrorMessage";

// const validationSchema = Yup.object().shape({
 
//   email: Yup.string().required().email().label("Email"),
//   password: Yup.string().required().min(4).label("Passowrd"),
 
// });
// function Card() {


//   return (
//     <TouchableWithoutFeedback style={styles.container}>
//       <View style={styles.card}>
//         <AppText style={styles.label}>Login</AppText>
//         <View style={{ justifyContent: "center", alignItems: "center" }}>
//           <Formik
//             initialValues={{

//               email: "",
//               password: "",
          
//             }}
//             onSubmit={(values) => console.log(values)}
//             validationSchema={validationSchema}
//           >
//             {({
//               handleChange,
//               handleSubmit,
//               errors,
//               setFieldTouched,
//               touched,
//             }) => (
//               <>
                
                
//                 <AppTextInput
//                   iconName="email"
//                   placeholder="Email"
//                   onBlur={() => setFieldTouched("email")}
//                   keyboardType="email-address"
//                   autoCapitalize="none"
//                   onChangeText={handleChange("email")}
//                   autoCorrect={false}
//                 />
//                 {touched.email && <ErrorMessage error={errors.email} />}
//                 <AppTextInput
//                   iconName="lock"
//                   placeholder="Password"
//                   autoCapitalize="none"
//                   onBlur={() => setFieldTouched("password")}
//                   onChangeText={handleChange("password")}
//                   secureTextEntry={true}
//                 />
//                 {touched.password && <ErrorMessage error={errors.password} />}
               
//                 <AppButton title="Sign up" onPress={handleSubmit} />
//               </>
//             )}
//           </Formik>
//         </View>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// }

// export default Card;

// const styles = StyleSheet.create({

 
//   card: {
//     width: "90%",
//     height: 530,
//     marginTop: 10,
//     backgroundColor: "#6D4C41",
//     borderRadius: 8,
//     alignSelf: "center",
//     position: "relative",
//     elevation: 5,
//   },
//   container: {
//     justifyContent: "center",
//     alignItems: "center",
//     flex: 1,
//   },
//   label: {
//     textShadowColor: "black",
//     fontSize: 30,
//     padding: 10,
//   },
// });
