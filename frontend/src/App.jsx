import { AuthProvider } from "./Providers/AuthContext/AuthProvider"
import GlobalStyles from "./Styles/GlobalStyles"
import { RoutesMain } from "./routes"


function App() {

  return (
    <>
     <GlobalStyles/>
     <AuthProvider> 
     <RoutesMain/>
     </AuthProvider>
    </>
  )
}

export default App

