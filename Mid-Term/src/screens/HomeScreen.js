import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello Alparslan</Text>
      <Button
   onPress={() => navigation.navigate("Components")}
  title="Go to Components Demo"
/>
<Button
  onPress={() => navigation.navigate("Listobj")}
  title="Go to List obj Demo"
/> <Button
  onPress={() => navigation.navigate("Image")}
  title="Go to Imagelist Demo"
/>
<Button
  onPress={() => navigation.navigate("Counter")}
  title="Go to Counter Demo"
/> <Button
  onPress={() => navigation.navigate("Color")}
   title="Go to Color Boxes Demo"
/>
<Button
  onPress={() => navigation.navigate("Square")}
  title="Go to Square Screen Demo"

/> <Button
        onPress={() => navigation.navigate("MyText")}
        title="Go to Text Input Demo"
      />
</View> );
};
const styles = StyleSheet.create({
text: {
    fontSize: 30,
}, });
export default HomeScreen;