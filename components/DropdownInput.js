import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";
import { color } from "../utilities/Colors";

const { width } = Dimensions.get("window");
const DropdownInput = ({
  options,
  onSelect,
  label,
  selectedOption,
  setSelectedOption,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelect = (option) => {
    console.log(option);
    setSelectedOption(option);
    setModalVisible(false);
    onSelect(option);
  };

  return (
    <View>
      <Text
        style={{ color: color.white, fontWeight: "bold", paddingHorizontal: 8 }}
      >
        {label}
      </Text>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.textInput}
      >
        <Text style={styles.labelStyle}>
          {selectedOption ? selectedOption : "Select an option"}
        </Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              width: width * 0.9,
            }}
          >
            <FlatList
              data={options}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSelect(item)}>
                  <Text
                    style={{
                      marginVertical: 8,
                      fontSize: 15,
                      fontWeight: "bold",
                      color: color.statusbar,
                    }}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.value.toString()}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
  },
  labelStyle: {
    paddingVertical: 4,
  },
  textInput: {
    marginHorizontal: 5,
    marginVertical: 2,
    borderRadius: 2,
    backgroundColor: color.white,
    padding: 8,
  },
});

export default DropdownInput;
