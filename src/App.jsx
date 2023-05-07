import { Provider } from "react-redux";
import store from "./Redux/store";
import Videos from "./components/Videos";

//  components

const App = () => {
  return (
    <Provider store={store}>
      <h1>React App</h1>

      <Videos />
    </Provider>
  );
};

export default App;
