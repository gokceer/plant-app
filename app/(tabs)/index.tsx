import HomeScreen from "@/features/home/HomeScreen";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

export default function Index() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}
