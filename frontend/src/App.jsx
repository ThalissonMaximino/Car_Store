import {  CarProvider, ModalProvider } from "./Providers";
import { UserProvider } from "./Providers/UserContext";
import GlobalStyles from "./Styles/GlobalStyles";
import { RoutesMain } from "./routes";

function App() {
  return (
    <>
      <GlobalStyles />
      <ModalProvider>
        <UserProvider>
          <CarProvider>
          <RoutesMain />
          </CarProvider>
        </UserProvider>
      </ModalProvider>
    </>
  );
}

export default App;
