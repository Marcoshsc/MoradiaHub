import ReactDOM from 'react-dom'
import Home from '.'
import React from 'react'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Home />, div)
})
