import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enterList, setEnterList] = useState("");
  const enterInputHandler = (enterName) => {
    setEnterList(enterName);
  };

  const addListHandler = () => {
    props.onClick(enterList);
    setEnterList("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.textField}>
        <TextInput
          placeholder="Enter value"
          style={styles.InputText}
          onChangeText={enterInputHandler}
          value={enterList}
        />
        <View style={styles.ButtonFields}>
          <Button title="AddToList" color="purple" onPress={addListHandler} />
          <Button title="Cancel" color="purple" onPress={props.onCancel} />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  textField: {
    flex: 1,

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  InputText: {
    borderWidth: 1,
    width: "90%",
    marginRight: 12,
    padding: 3,
    paddingLeft: 5,
    marginBottom: 12,
  },
  ButtonFields: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
