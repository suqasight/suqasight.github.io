// ================================
// DEPENDENCIES
// ================================
// packages / etc.
import React, { useState } from 'react'

// components
import Header from './Header'
import About from './About'
import Items from './Items'

function App() {
  // ==============================
  // STATE
  // ==============================
  // -- view
  const [currentState, setCurrentState] = useState('items')

  // ==============================
  // METHODS
  // ==============================
  // -- set the view
  function changeState(view) {
    setCurrentState(view)
  }

  // ==============================
  // RETURN RENDER
  // ==============================
  return (
    <div>
    {/* ============================================= */}
    {/*                   HEADER                      */}
    {/* ============================================= */}
      <Header
        changeState={changeState}
      />
      {/* ============================================= */}
      {/*                    VIEWS                      */}
      {/* ============================================= */}
      { currentState === 'about' ?
          <About /> :
          <Items />
      }
    </div>
  )
}

export default App;
