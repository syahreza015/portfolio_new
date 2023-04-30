import { DrawerContext } from "@config/context"
import { useState } from "react"
import Homepage from "@display/homepage";

function App() {
  // drawer context
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const setIsDrawerOpenDispatch = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }
  return (
    <DrawerContext.Provider value={{ isDrawerOpen, setIsDrawerOpenDispatch }}>
      <div className="App">
      <Homepage></Homepage>
      </div>
    </DrawerContext.Provider>
  )
}

export default App
