import { FlatList, Image, StyleSheet, View } from "react-native";

const icons = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MTioC32z-ZDQ8VhXVHYmeEzM2OpcY0UcD6JJwDYvrw&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPYwMeE_26hYE5KTMTIt3yknAYwLGkeekFCOwHjwtoXWRKcDLCkX_y4U&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS36-i1Z0NjpCTDNLci5OZppYnPlNtUY-VNWMMldDDdQw&s=10",
  "https://cdn-icons-png.flaticon.com/512/711/711895.png",
  "https://img.magnific.com/premium-vector/instagram-profile-icon_772860-1198.jpg",
];

const BottomNav = () => {
  return (
    <View style={styles.navbar}>
      <FlatList
        data={icons}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.icon} />
        )}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.iconContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 55,
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
  },
  iconContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  icon: {
    width: 25,
    height: 25,
  },
});

export default BottomNav;
