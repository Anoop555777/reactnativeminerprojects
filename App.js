import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [enterList, setEnterList] = useState("");
  const [listContainer, setListContainer] = useState([]);

  const enterInputHandler = (enterName) => {
    setEnterList(enterName);
  };

  const addListHandler = () => {
    setListContainer((prevState) => [
      ...prevState,
      { value: enterList, id: Math.random() },
    ]);
    setEnterList("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.textField}>
        <TextInput
          placeholder="Enter value"
          style={styles.InputText}
          onChangeText={enterInputHandler}
          value={enterList}
        />
        <Button title="AddToList" color="purple" onPress={addListHandler} />
      </View>
      <View style={styles.Lists}>
        <FlatList
          data={listContainer}
          renderItem={(itemData) => (
            <View style={styles.listItem}>
              <Text style={styles.listText}>{itemData.item.value}</Text>
            </View>
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
    padding: 24,
  },
  textField: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
  },
  InputText: {
    borderWidth: 1,
    width: "70%",
    marginRight: 12,
    padding: 3,
    paddingLeft: 5,
  },
  Lists: {
    flex: 5,
    width: "100%",
    marginTop: 16,
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
    color: "#fff",
  },
});
