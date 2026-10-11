import { StyleSheet, Text, View } from "react-native";

const ProfileStats = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileCircle}>
        <Text style={styles.profilePicText}>OO{"\n"}TD</Text>
      </View>

      <View style={styles.stat}>
        <Text style={styles.number}>53</Text>
        <Text>Posts</Text>
      </View>

      <View style={styles.stat}>
        <Text style={styles.number}>12</Text>
        <Text>Members</Text>
      </View>

      <View style={styles.stat}>
        <Text style={styles.number}>1</Text>
        <Text>Admins</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 15,
    marginBottom: 15,
  },
  profileCircle: {
    width: 77,
    height: 77,
    borderRadius: 50,
    backgroundColor: "#2196C9",
    alignItems: "center",
    justifyContent: "center",
  },
  profilePicText: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
    lineHeight: 24,
  },
  stat: {
    alignItems: "center",
  },
  number: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileStats;
