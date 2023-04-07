import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { Button, FlatList, StyleSheet, View } from "react-native";
import { useState } from "react";
export default function App() {
  const [listContainer, setListContainer] = useState([]);
  const [modelVisibility, setModelVisibility] = useState(false);

  const addListHandler = (enterList) => {
    setListContainer((prevState) => [
      ...prevState,
      { value: enterList, id: Math.random() },
    ]);
    setModelVisibility(false);
  };

  const onDeleteHandler = (id) => {
    setListContainer((prevState) => prevState.filter((item) => item.id !== id));
  };
  const modelViewChangeHandler = () => {
    setModelVisibility(true);
  };
  const cancelModelHandler = () => {
    setModelVisibility(false);
  };

  return (
    <View style={styles.container}>
      <Button
        title="Open Model And Add To List"
        onPress={modelViewChangeHandler}
        color="purple"
      />
      <GoalInput
        onClick={addListHandler}
        visible={modelVisibility}
        onCancel={cancelModelHandler}
      />
      <View style={styles.Lists}>
        <FlatList
          data={listContainer}
          renderItem={(itemData) => (
            <GoalItem
              items={itemData}
              onDelete={onDeleteHandler}
              id={itemData.item.id}
            />
          )}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 64,
  },

  Lists: {
    flex: 5,
    width: "100%",
    marginTop: 16,
  },
});
