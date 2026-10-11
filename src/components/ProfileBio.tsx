import { StyleSheet, Text, View } from "react-native";

const ProfileBio = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>OOTD Everyday</Text>
      <Text>Fit check!</Text>
      <Text>You know we'll hype you up.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  title: {
    fontWeight: "bold",
  },
});

export default ProfileBio;
