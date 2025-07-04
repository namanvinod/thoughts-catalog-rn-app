import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dashboard } from "./src/screens/Dashboard";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.appContainer}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("./assets/bg-image.jpg")}
        >
          <View style={styles.contentContainer}>
            <Dashboard />
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  contentContainer: {
    marginTop: 10,
  },
  backgroundImage: {
    flex: 1,
  },
});
