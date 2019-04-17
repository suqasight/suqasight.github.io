// ================================
// DEPENDENCIES
// ================================
// packages / etc.
import React from 'react'

// components
import Individual from './Individual'
import Small from './Small'

// ================================
// ITEM COMPONENT
// ================================
function Item(props) {
  // deconstructing props
  const { currentItemView, img, name, price, saleStatus, grade, styles, originalMakerLink, originalMaker, type, notes } = props

  // return render
  return (
    <div className={currentItemView === 'individual' ? 'item' : 'item small-item'}>
      {/* image */}
      <img src={img} alt="blood, sweat & tears" />

      {/* all item info when individual view */}
      {currentItemView === 'individual' ?
        <Individual
          img={img}
          name={name}
          price={price}
          saleStatus={saleStatus}
          grade={grade}
          styles={styles}
          originalMakerLink={originalMakerLink}
          originalMaker={originalMaker}
          type={type}
          notes={notes}
        />
        :
        <Small
          img={img}
          name={name}
          price={price}
          saleStatus={saleStatus}
          grade={grade}
          styles={styles}
          originalMakerLink={originalMakerLink}
          originalMaker={originalMaker}
          type={type}
          notes={notes}
        />
      }
    </div>
  )
}

export default Item
