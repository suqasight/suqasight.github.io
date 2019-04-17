// ================================
// DEPENDENCIES
// ================================
// packages / etc.
import React, { useState } from 'react'

// components
import Item from './Item'

// etc. static files
import airport from '../images/pins/airport.jpg'
import answers from '../images/pins/answers.jpg'
import babyoongi from '../images/pins/babyoongi.jpg'
import bst from '../images/pins/bst.jpg'
import bt21game from '../images/pins/bt21game.jpg'
import btseasons from '../images/pins/btseasons.jpg'
import btssaid from '../images/pins/btssaid.jpg'
import chimmycloset from '../images/pins/chimmycloset.jpg'
import cookyartist from '../images/pins/cookyartist.jpg'
import fakelove from '../images/pins/fakelove.jpg'
import guccitae from '../images/pins/guccitae.jpg'
import hobieyes from '../images/pins/hobieyes.jpg'
import kookie from '../images/pins/kookie.jpg'
import lydonuts from '../images/pins/lydonuts.jpg'
import missjoon from '../images/pins/missjoon.jpg'
import seesaw from '../images/pins/seesaw.jpg'
import serendipity from '../images/pins/serendipity.jpg'
import tearopc from '../images/pins/tearopc.jpg'

function Items() {
  // ==============================
  // STATE
  // ==============================
  const [currentItemView, setCurrentItemView] = useState('individual')

  // ==============================
  // ETC. VARS
  // ==============================
  const pins = [
    {
      img: airport,
      name: 'airport style',
      price: '$5 EA.',
      saleStatus: ['all available'],
      grade: 'standard *',
      styles: ['jin', 'yoongi', 'hoseok', 'namjoon'],
      originalMakerLink: 'https://twitter.com/MK7LIAN',
      originalMaker: 'MK7LIAN',
      type: 'soft enamel with epoxy, gold plated',
      notes: ['technically ordered as standard, but more b-grade imo', 'comes with original backing card and original freebies'],
      tags: ['jin', 'seokjin', 'suga', 'yoongi', 'jhope', 'hoseok', 'rm', 'namjoon']
    },
    {
      img: answers,
      name: 'answer "s" tv',
      price: '$7 EA.',
      saleStatus: ['available'],
      grade: 'b-grade',
      styles: ['n/a (only one ver.)'],
      originalMakerLink: 'https://www.instagram.com/teardrop.studio/',
      originalMaker: 'teardrop studio',
      type: 'hard enamel with stained glass effect, gold plated',
      notes: false,
      tags: ['ot7']
    },
    {
      img: babyoongi,
      name: 'baby yoongi',
      price: '$6 EA.',
      saleStatus: ['available'],
      grade: 'standard',
      styles: ['n/a (only one ver.)'],
      originalMakerLink: '#',
      originalMaker: 'i can\'t remember T__T if anyone does, please let me know!!',
      type: 'hard enamel, gold plated',
      notes: false,
      tags: ['yoongi', 'suga']
    },
    {
      img: bst,
      name: 'blood, sweat & tears',
      price: '$8 EA.',
      saleStatus: ['all available'],
      grade: 'standard',
      styles: ['jin', 'taehyung', 'hoseok', 'jungkook'],
      originalMakerLink: 'https://www.instagram.com/izpins/',
      originalMaker: 'izpins',
      type: 'hard enamel, gold plated',
      notes: false,
      tags: ['jin', 'seokjin', 'v', 'taehyung', 'jhope', 'hoseok', 'jungkook']
    }
  ]

  // ==============================
  // METHODS
  // ==============================
  function toggleItemView(view) {
    setCurrentItemView(view)
  }

  // ==============================
  // RETURN RENDER
  // ==============================
  return (
    <div className="items-container">
      <div className="items-nav-bar">
        <form>
          <input type="text" placeholder="FILTER BY MEMBER NAME/0T7..." />
        </form>
        <nav>
          <i className="fas fa-square" onClick={() => {toggleItemView('individual')}}></i>
          <i className="fas fa-th-large" onClick={() => {toggleItemView('grid')}}></i>
        </nav>
      </div>
      <div className={currentItemView === 'individual' ? 'item-grid' : 'item-grid small-item-grid'}>
        { pins.map((pin, index) => {
          return(
            <Item
              currentItemView={currentItemView}
              img={pin.img}
              name={pin.name}
              price={pin.price}
              saleStatus={pin.saleStatus}
              grade={pin.grade}
              styles={pin.styles}
              originalMakerLink={pin.originalMakerLink}
              originalMaker={pin.originalMaker}
              type={pin.type}
              notes={pin.notes}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Items
