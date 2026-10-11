import { StyleSheet, Text, View } from "react-native";

const TopNavBar = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.back}>‹</Text>

      <View style={styles.headerText}>
        <Text style={styles.title}>Group Profile</Text>
        <Text style={styles.username}>ootd_everyday</Text>
      </View>

      <View style={styles.plusBox}>
        <Text style={styles.plus}>+</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 40,
  },
  headerText: {
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  username: {
    fontSize: 12,
    color: "gray",
  },
  back: {
    fontSize: 35,
    width: 26,
  },
  plusBox: {
    width: 26,
    height: 26,
    borderWidth: 2,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  plus: {
    fontSize: 21,
    lineHeight: 23,
  },
});

export default TopNavBar;
