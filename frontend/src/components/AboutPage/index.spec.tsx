import ReactDOM from 'react-dom'
import About from '.'
import React from 'react'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<About />, div)
})
