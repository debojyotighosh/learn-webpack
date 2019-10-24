import React from 'react'
import { render } from 'react-dom'

const Test = () => {
  return (
    <div>I got in.</div>
  )
}

render(<Test />, document.getElementById('app'))