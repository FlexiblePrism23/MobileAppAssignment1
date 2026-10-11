import { Alert, Button, StyleSheet, View } from "react-native";
import BottomNav from "../components/BottomNav";
import FollowingTypeButton from "../components/FollowingTypeButton";
import PhotoGrid from "../components/PhotoGrid";
import ProfileBio from "../components/ProfileBio";
import ProfileStats from "../components/ProfileStats";
import TopNavBar from "../components/TopNavBar";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TopNavBar />

      <View style={styles.content}>
        <ProfileStats />
        <ProfileBio />
        <FollowingTypeButton />
        <PhotoGrid />
      </View>
      <Button
        title="Alert"
        onPress={() => Alert.alert("Alert Button pressed")}
      />

      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    flex: 1,
  },
});

export default HomeScreen;
