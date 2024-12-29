import React, { useCallback, useMemo, useState } from "react"
import { MemoizedChildFive } from "./ChildFive"

const ParentFour = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Vishwas")
  const person = {
    fname: "Bruce",
    lname: "Wayne",
  }
  const memoizedPerson = useMemo(() => person, [])

  const handleClick = () => {}
  const memoizedHandleClick = useCallback(handleClick, [])
  console.log("ParentFour Render")

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("Codevoultion")}>Change Name</button>
      <MemoizedChildFive
        name={name}
        // person={memoizedPerson}
        handleClick={memoizedHandleClick}
      />
    </div>
  )
}

export default ParentFour
