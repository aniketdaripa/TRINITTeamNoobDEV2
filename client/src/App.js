import logo from './logo.svg';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import TutorForm from './components/TutorForm';

function App() {
  const { user, isAuthenticated, isLoading, logout, loginWithRedirect } =
    useAuth0();
  return (
   <h1>
    {/* Helloworld */}
    {/* <button onClick={loginWithRedirect}>Login</button> */}
    <TutorForm></TutorForm>
   </h1>
  );
}

export default App;
