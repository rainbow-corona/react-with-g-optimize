import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Greeting = styled.p`
  width: 100%;
  padding: 2.5em 0;
  text-align: center;
  font-size: 2.5em;
  color: blueviolet;
`

const App = () => <Greeting>Hello!</Greeting>

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
