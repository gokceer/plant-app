import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

const SearchBar = ({ placeholder }: { placeholder?: string }) => {
  return (
    <View style={styles.searchContainer}>
      <Image
        source={require("../../assets/icons/searchIcon.png")}
        style={styles.searchIcon}
      />
      <TextInput
        placeholder={placeholder || "Search for plants"}
        placeholderTextColor="#AFAFAF"
        style={styles.searchInput}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
    backgroundColor: "#FFFFFFE0",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 45,
  },
  searchIcon: {
    marginRight: 8,
    width: 20,
    height: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
});
