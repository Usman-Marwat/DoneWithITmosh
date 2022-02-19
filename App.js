import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableHighlight,
  Dimensions,
  Button,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import * as ImagePicker from "expo-image-picker";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";
import Icon from "./app/components/Icon";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListItemDeleteAction from "./app/components/ListItemDeleteAction";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import AuthNavigator from "./app/navigation/AuthNavigator";

// export default function App() {
//   // console.log(Dimensions.get("window"));
//   const handlePress = () => {
//     Alert.alert("Title", "Message", [{ text: "UnderStood" }]);
//     Alert.prompt("Title", "Message", (text) => console.log(text));
//   };
//   // console.log(useDimensions());
//   // const screen = useDimensions().screen;
//   console.log(useDeviceOrientation());

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text numberOfLines={1}>
//         Hello World! I want to make this text really really long, so that it
//         does not fir in one line on my screeen
//       </Text>
//       {/* <Image
//         blurRadius={4}
//         source={{
//           width: 200,
//           height: 300,
//           uri: "https://picsum.photos/seed/picsum/200/300",
//         }}
//       ></Image> */}
//       <View>
//         <TouchableHighlight onPress={handlePress}>
//           <Text> CLick ME</Text>
//         </TouchableHighlight>
//       </View>
//       <StatusBar style="auto" />
//     </SafeAreaView>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "dodgerblue",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

//------------------------------------Orientation------------------------------------------------

// export default function App() {
//   const { landscape } = useDeviceOrientation();

//   return (
//     <SafeAreaView style={styles.container}>
//       <View
//         style={{
//           backgroundColor: "dodgerblue",
//           width: "100%",
//           height: landscape ? "100%" : "30%",
//         }}
//       ></View>
//       <StatusBar style="auto" />
//     </SafeAreaView>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     // alignItems: "center",
//     // justifyContent: "center",
//   },
// });

//------------------------------------------FLEX BOX ------------------------------------

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View
//         style={{
//           backgroundColor: "dodgerblue",
//           width: 100,
//           height: 200,
//         }}
//       ></View>
//       <View
//         style={{
//           backgroundColor: "coral",
//           width: 100,
//           height: 100,
//         }}
//       ></View>
//       <View
//         style={{
//           backgroundColor: "greenyellow",
//           width: 100,
//           height: 100,
//         }}
//       ></View>
//       <View
//         style={{
//           backgroundColor: "pink",
//           width: 100,
//           height: 100,
//           // alignSelf: "flex-end",
//         }}
//       ></View>
//       <View
//         style={{
//           backgroundColor: "purple",
//           width: 100,
//           height: 100,
//           flexGrow: 1,
//         }}
//       ></View>
//       <StatusBar style="auto" />
//     </SafeAreaView>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 0.7,
//     borderWidth: 1,
//     backgroundColor: "#fff",
//     flexDirection: "row",
//     flexWrap: "wrap",
//     alignItems: "center",
//     justifyContent: "center",
//     alignContent: "center",
//   },
// });

//-------------------------------Styling <AppText> & <AppButton>-------------------------------------------

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <AppText> I Love React Native</AppText>
//       <AppButton title="Login"></AppButton>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// ------------------------------ Button on Welcome Screen -------------------------------

// export default function App() {
//   return (
//     <>
//       <WelcomeScreen></WelcomeScreen>
//       <StatusBar style="auto" />
//     </>
//   );
// }

//------------------------------- Listing Details Screen -------------------------------------

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Card
//         title="Red jacket For Sale"
//         subTitle="$100"
//         image={require("./app/assets/jacket.jpg")}
//       ></Card>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f8f4f4",
//     padding: 20,
//     paddingTop: 100,
//   },
// });

//----------------------------------- <ListingDetailsScreen> ---------------------------------

// export default function App() {
//   return <ListingDetailsScreen></ListingDetailsScreen>;
// }

//----------------------- Improving the <ViewImageScreen> -------------------------------------
// export default function App() {
//   return <ViewImageScreen></ViewImageScreen>;
// }

//----------------------- Listing Details Screen ---------------------------------------------

// export default function App() {
//   return <ListingDetailsScreen></ListingDetailsScreen>;
// }

// ---------------------------- Messages Screen --------------------------------------------

// export default function App() {
//   return <MessagesScreen></MessagesScreen>;
// }

//----------------------------- ListItem with Icon ----------------------------------------

// export default function App() {
//   return (
//     <Screen>
//       <ListItem
//         title="Usman"
//         subTitle="Lead Designer"
//         IconComponent={
//           <Icon name="email" backgroundColor="powderblue" size={74} />
//         }
//       ></ListItem>
//     </Screen>
//   );
// }

// ---------------------------- Account Screen ----------------------------------------------

// export default function App() {
//   return <AccountScreen />;
// }

// ----------------------------ListingsScreen ---------------------------------------------

// export default function App() {
//   return <ListingsScreen />;
// }

// ---------------------------- Text Input -------------------------------------------------

// export default function App() {
//   return (
//     <Screen>
//       <AppTextInput placeholder="Usman" icon="email" />
//     </Screen>
//   );
// }

//------------------------------ Custom Picker ------------------------------------------------
// const categories = [
//   { label: "Furniture", value: 1 },
//   { label: "CLothing", value: 2 },
//   { label: "Camera", value: 3 },
// ];
// export default function App() {
//   const [category, setCategory] = useState("");
//   return (
//     <Screen>
//       <AppPicker
//         icon="email"
//         items={categories}
//         onSelectItem={(item) => setCategory(item)}
//         placeholder="Categories"
//         selectedItem={category}
//       ></AppPicker>
//     </Screen>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f8f4f4",
//     padding: 20,
//     paddingTop: 100,
//   },
// });

//----------------------------------LOgin Screen -------------------------------------------

// export default function App() {
//   return <LoginScreen />;
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f8f4f4",
//     padding: 20,
//     paddingTop: 100,
//   },
// });

// -----------------------------Listing Edit Screen---------------------------------------------

// export default function App() {
//   return <ListingEditScreen />;
// }

// ---------------------------------------------------- PART - 2 --------------------------------
// ---------------------------------------------Asking User Permission --------------------------
// export default function App() {
//   const [imageUri, setImageUri] = useState(null);
//   const requestPermission = async () => {
//     const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (!result.granted)
//       alert("You need to enable permission to access the library");
//   };

//   const selectImage = async () => {
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync();
//       if (!result.cancelled) setImageUri(result.uri);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   useEffect(() => {
//     requestPermission();
//   }, []);
//   return (
//     <Screen>
//       <Button title="Select Image" onPress={selectImage} />
//       <Image source={{ uri: imageUri }} style={{ width: 300, height: 300 }} />
//     </Screen>
//   );
// }

//-------------------------------ImageInput Component -------------------

// export default function App() {
//   const [imageUri, setImageUri] = useState(null);

//   return (
//     <Screen>
//       <ImageInput
//         imageUri={imageUri}
//         onChangeImage={(uri) => setImageUri(uri)}
//       />
//     </Screen>
//   );
// }

//-------------------------------ImageInputList Component -------------------
// export default function App() {
//   const [imageUris, setImageUris] = useState([]);

//   const handleAdd = (uri) => {
//     setImageUris([...imageUris, uri]);
//   };
//   const handleRemove = (uri) => {
//     setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
//   };

//   return (
//     <Screen>
//       <ImageInputList
//         imageUris={imageUris}
//         onAddImage={(uri) => handleAdd(uri)}
//         onRemoveImage={handleRemove}
//       />
//     </Screen>
//   );
// }
//------------------------------ Form Image Picker -----------------------
// export default function App() {
//   return <ListingEditScreen />;
// }
//------------------------- Getting the Users Location --------------------

// export default function App() {
//   return <ListingEditScreen />;
// }

//------------------------- Navigation --------------------
export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
//this is just a check comment for github
