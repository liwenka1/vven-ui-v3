import { useState } from "react"

const Main = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1)
        }}
      >
        点我++
      </button>
      {count}
    </div>
  )
}

export default Main
