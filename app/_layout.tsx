import { StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  

  return (
     <View>
         <View style={style.mainbox}>
            <Text style={style.subtext}>Expo React Native Class 01</Text>
         </View>
     </View>  
  );
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
   },
   mainbox: {
      backgroundColor: "#1D2671",
      width: "100%",
      height: "20%",
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
      justifyContent: "center",
      padding: 20,
   },
    subtext: {
      color: "#fff",
      fontSize: 20,
      textAlign: "center",
      fontWeight: "bold",
      fontFamily: "Poppins"
   },
});