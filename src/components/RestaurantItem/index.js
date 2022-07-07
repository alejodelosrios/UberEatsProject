import React from "react";
import { Image, Pressable, StyleSheet, Text } from "react-native";

const RestaurantItem = ({ restaurant }) => {
  return (
    <Pressable style={styles.imageContainer}>
      <Image
        source={{
          url: restaurant.image,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subtitle}>
        {`$${restaurant.deliveryFee}  |  ${restaurant.minDeliveryTime} ~ ${restaurant.maxDeliveryTime} minutes`}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 5,
  },
  subtitle: {
    color: "grey",
  },
});

export default RestaurantItem;
