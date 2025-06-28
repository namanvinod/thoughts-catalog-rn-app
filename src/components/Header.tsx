import { StyleSheet, Text, View } from "react-native";

export const Header = () => {
  return (
    <>
      <Text style={style.headerLogo}>Thought Catalog</Text>
    </>
  );
};

const style = StyleSheet.create({
  headerLogo: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 10,
    // color: "grey",
  },
});
