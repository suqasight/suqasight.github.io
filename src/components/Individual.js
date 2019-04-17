// ================================
// DEPENDENCIES
// ================================
// packages / etc.
import React from 'react'

// ================================
// ITEM COMPONENT
// ================================
function Individual(props) {
  // deconstructing props
  const { img, name, price, saleStatus, grade, styles, originalMakerLink, originalMaker, type, notes } = props

  // return render
  return (
    <div className="all-item-info">
      {/* quick info */}
      <div className="quick-info">
        <h1>{name}</h1>
        <span>{price}</span>
      </div>
      {/* sale status */}
      <div className="sale-status">
        <span>{saleStatus}</span>
      </div>
      {/* etc. info */}
      <div className="etc-info">
        <div className="etc-info-single">
          <h2>grade</h2>
          <p>{grade}
          </p>
        </div>
        <div className="etc-info-single">
          <h2>styles</h2>
          <p>{ styles.map((style, index) => {
            return index % 2 === 0 ?
              <span>{style} </span>
              :
              <span>{style} <br/></span>
          })}</p>
        </div>
        <div className="etc-info-single">
          <h2>original maker</h2>
          <p><a href={originalMakerLink}>{originalMaker}</a>
          </p>
        </div>
        <div className="etc-info-single">
          <h2>type</h2>
          <p>{type}
          </p>
        </div>
      </div>
      { notes ?
        <div className="item-note">
          <h3>EXTRA NOTES</h3>
          <ul>
            {notes.map((note) => {
              return(
                <li>{note}</li>
              )
            })}
          </ul>
        </div> :
        null
      }
    </div>
  )
}

export default Individual
