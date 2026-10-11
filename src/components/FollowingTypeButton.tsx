import { StyleSheet, Text, View } from "react-native";

const FollowingTypeButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Member ⌄</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 35,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 5,
    marginHorizontal: 15,
    marginBottom: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default FollowingTypeButton;
