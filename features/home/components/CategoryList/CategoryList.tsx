import { Category } from "@/types/Category";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CategoryBox from "../CategoryBox/CategoryBox";

const CategoryList = ({ categories }: { categories: Category[] }) => {
  return (
    <View>
      <FlatList
        data={categories}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <CategoryBox image={item.image} title={item.title} />
        )}
        numColumns={2}
        columnWrapperStyle={styles.row}
        scrollEnabled={false}
      />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  row: {
    justifyContent: "space-between",
    marginBottom: 16,
    marginHorizontal: 24,
  },
  card: {
    backgroundColor: "#ddd",
    height: 100,
    flex: 1,
    marginRight: 10,
    borderRadius: 8,
  },
});
