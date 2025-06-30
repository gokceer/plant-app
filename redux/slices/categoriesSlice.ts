import { Category } from "@/types/Category";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CategoriesState {
  data: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoriesState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchCategories = createAsyncThunk<Category[]>(
  "categories/fetchCategories",
  async (): Promise<Category[]> => {
    const response = await fetch(
      "https://dummy-api-jtg6bessta-ey.a.run.app/getCategories"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    const json = await response.json();
    return json.data;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load categories";
      });
  },
});

export default categoriesSlice.reducer;
