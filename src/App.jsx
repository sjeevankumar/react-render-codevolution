import { useState } from "react"
import "./App.css"
import UseState from "./components/UseState/UseState.jsx"
import UseReducer from "./components/UseReducer/UseReducer.jsx"
import ObjectUseState from "./components/ImmutableState/ObjectUseState.jsx"
import ArrayUseState from "./components/ImmutableState/ArrayUseState.jsx"
import Parent from "./components/ParentChild/Parent.jsx"
import ParentOne from "./components/Optimization/ParentOne.jsx"
import ChildOne from "./components/Optimization/ChildOne.jsx"
import GrandParent from "./components/Optimization/GrandParent.jsx"
import ParentTwo from "./components/Optimization/ParentTwo.jsx"
import ParentThree from "./components/IncorrectOptimizations/ParentThree.jsx"
import ParentFour from "./components/IncorrectOptimizations/ParentFour.jsx"
import ContextParent from "./components/Context/ContextParent.jsx"
import { ChildA } from "./components/Context/ContextChildren.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}
      {/* <Parent /> */}
      {/* <ParentOne>
        <ChildOne />
      </ParentOne> */}
      {/* <GrandParent /> */}
      {/* <ParentTwo /> */}
      {/* <ParentThree /> */}
      {/* <ParentFour /> */}
      <ContextParent>
        <ChildA />
      </ContextParent>
    </>
  )
}

export default App
