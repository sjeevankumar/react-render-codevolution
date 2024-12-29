import React, { createContext } from "react"
import { useState } from "react"
import { ChildA, MemoizedChildA } from "./ContextChildren"

export const CountContext = createContext()
const CountProvider = CountContext.Provider

const ContextParent = ({ children }) => {
  const [count, setCount] = useState(0)
  console.log("ContextParent Render")
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
      <CountProvider value={count}>
        {children}
        {/* <MemoizedChildA /> */}
      </CountProvider>
    </>
  )
}

export default ContextParent
