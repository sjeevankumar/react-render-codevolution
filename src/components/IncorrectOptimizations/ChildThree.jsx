import React, { memo } from "react"

export const ChildThree = ({ name, children }) => {
  console.log(typeof children)

  console.log("ChildThree render")

  return (
    <div>
      {children} {name}
    </div>
  )
}

export const MemoizedChildThree = memo(ChildThree)
