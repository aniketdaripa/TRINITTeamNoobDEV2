import "./App.css";
import AppRouter from "./Components/AppRouter";
import AuthContextProvider from "./Context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
