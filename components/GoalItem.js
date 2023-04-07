import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
const GoalItem = (props) => {
  return (
    <View style={styles.listView}>
      <Pressable
        android_ripple={{ color: "#ffffff " }}
        onPress={props.onDelete.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressItem}
      >
        <View style={styles.listItem}>
          <Text style={styles.listText}>{props.items.item.value}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listView: {
    width: "100%",
  },
  listItem: {
    backgroundColor: "purple",
    width: "100%",
    alignItems: "center",
    borderRadius: 11,
    marginBottom: 12,
    paddingVertical: 8,
  },
  listText: {
    color: "white",
  },
  pressItem: {
    opacity: 0.5,
  },
});
