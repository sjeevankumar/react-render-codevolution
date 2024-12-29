import React, { memo } from "react"

const ChildFour = ({ name }) => {
  const date = new Date()
  console.log("ChildFour Render")

  return (
    <div>
      Hello {name}
      <p>
        It is currently {date.getHours()}:{date.getMinutes()}:
        {date.getSeconds()}
      </p>
    </div>
  )
}

export const MemoizedChildFour = memo(ChildFour)
