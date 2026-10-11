import { Image, StyleSheet, View } from "react-native";

const PhotoGrid = () => {
  return (
    <View style={styles.grid}>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-rTdT2WX-YerT0ldO_FyTb_NKUhhniDuZrrD5FNJlHA&s=10",
        }}
        style={styles.photo}
      />
      <Image
        source={{
          uri: "https://cdn.britannica.com/92/212692-050-D53981F5/labradoodle-dog-stick-running-grass.jpg",
        }}
        style={styles.photo}
      />
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3lTPJnz16vw95oRP7mPPIBWBmi4Ln3n67-SeeIdascQ&s",
        }}
        style={styles.photo}
      />
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI9qUHSbW28wDG6Mhxsk6_ztnj1rM2KZ1ZvfVHwdkWqw&s=10",
        }}
        style={styles.photo}
      />
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2EyhVObCY6_SrPP2VXf-H_D0V64cF5T0DDc0BqMmU5Q&s=10",
        }}
        style={styles.photo}
      />
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa3V2PwL6QaThlLOgHmccV1g1C_tkjJ1fIjUu9LAkxLQ&s=10",
        }}
        style={styles.photo}
      />
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh_yF4EcGfs0Ck-kD0I2wsvBJSXtZ55zDbGjjP-yl3WA&s=10",
        }}
        style={styles.photo}
      />
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzpH2TGg8jXiyjuz-I4q32FziZQ9iozRN4LVIYZw-hfQ&s=10",
        }}
        style={styles.photo}
      />
      <Image
        source={{
          uri: "https://www.cdc.gov/healthy-pets/media/images/2024/04/GettyImages-598175960-cute-dog-headshot.jpg",
        }}
        style={styles.photo}
      />
      <Image
        source={{
          uri: "https://cdn.britannica.com/92/212692-050-D53981F5/labradoodle-dog-stick-running-grass.jpg",
        }}
        style={styles.photo}
      />
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI9qUHSbW28wDG6Mhxsk6_ztnj1rM2KZ1ZvfVHwdkWqw&s=10",
        }}
        style={styles.photo}
      />
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa3V2PwL6QaThlLOgHmccV1g1C_tkjJ1fIjUu9LAkxLQ&s=10",
        }}
        style={styles.photo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  photo: {
    width: "33.33%",
    height: 125,
    borderWidth: 1,
    borderColor: "white",
  },
});

export default PhotoGrid;
