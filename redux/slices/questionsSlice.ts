import { Question } from "@/types/Question";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface QuestionsState {
  data: Question[];
  loading: boolean;
  error: string | null;
}

const initialState: QuestionsState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchQuestions = createAsyncThunk<Question[]>(
  "questions/fetchQuestions",
  async (): Promise<Question[]> => {
    const response = await fetch(
      "https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch questions");
    }

    const json = await response.json();
    return json;
  }
);

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load questions";
      });
  },
});

export default questionsSlice.reducer;
