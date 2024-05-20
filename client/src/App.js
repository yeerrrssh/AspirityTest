import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import PersonalAccount from "./pages/PersonalAccount";
import {useContext, useEffect} from "react";
import {Context} from "./index";


function App() {
  return (
      <Wrapper>
          <Header/>
          <PersonalAccount/>
      </Wrapper>
  );
}

export default App;
