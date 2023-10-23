
import { UserProvider } from "./Providers/UserContext"
import GlobalStyles from "./Styles/GlobalStyles"
import { RoutesMain } from "./routes"


function App() {

  return (
    <>
     <GlobalStyles/>
      <UserProvider>
     <RoutesMain/>
     </UserProvider>
    
     
    </>
  )
}

export default App

