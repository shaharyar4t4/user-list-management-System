import UserForm from "@/components/userinput";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  

  return (
     <View>
      <ScrollView contentContainerStyle={{paddingBottom:150}}>
         <View style={style.mainbox}>
            <Text style={style.subtext}>User List Management Sysem</Text>
         </View>
         <View>
          <UserForm/>
         </View>
         </ScrollView>
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
      height: "30%",
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