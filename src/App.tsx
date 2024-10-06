import styled from "@emotion/styled";
import { NavBar } from "./components";
import { MainPage } from "./pages";

const App = () => {
  return (
    <StyledApp>
      <NavBar />
      <MainPage />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export default App;
