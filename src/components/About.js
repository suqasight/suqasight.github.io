// ================================
// DEPENDENCIES
// ================================
// packages / etc.
import React, { useState } from 'react'

// etc. static files
import proofOne from '../images/proofshots/one.png'
import proofTwo from '../images/proofshots/two.png'
import proofThree from '../images/proofshots/three.png'
import proofFour from '../images/proofshots/four.png'
import proofFive from '../images/proofshots/five.png'
import proofSix from '../images/proofshots/six.png'
import proofSeven from '../images/proofshots/seven.png'

function About() {
  // ==============================
  // STATE
  // ==============================
  // -- modal
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState('')

  // ==============================
  // METHODS
  // ==============================
  // -- toggles modal
  function toggleModal() {
    if(modalOpen) {
      document.body.style.overflow = "auto"
    } else {
      document.body.style.overflow = "hidden"
    }
    setModalOpen(!modalOpen)
  }
  // -- sets modal image
  function modalImg(img) {
    setModalImage(img)
    toggleModal()
  }

  // ==============================
  // RETURN RENDER
  // ==============================
  return (
    <div className="about">
      {/* ============================================= */}
      {/*                ABOUT CONTENT                  */}
      {/* ============================================= */}
      <h1>WHAT IS THIS?</h1>
      <p>hi i'm rica and this is my <strong>rehoming site</strong> because i'm Extra and why not. i just felt like making a site instead of using twitter threads repeatedly~</p>

      <p>as you can see though, this is super informal. it's really just a place for me to show you guys what i have for sale, but <strong>actual sales will still take place over twitter dm's</strong> so don't worry you won't be putting any credit card information or anything like that here!! </p>

      <h1>HOW TO BUY?</h1>
      <p>like i said, everything will still take place over twitter!! so <strong>just dm me</strong> (@suqasight, or click the contact button) with what items you're interested in and where you're located (please include your state + zipcode so i can check shipping, or city + country if international)</p>

      <p>then i'll let you know if the items are still available and give you a quote with shipping included~ and we'll go from there! i'll accept <strong>payments over either paypal or venmo</strong>, it's up to you!!</p>

      <h1>WHAT ARE YOU REHOMING?</h1>
      <p>mostly <strong>bts pins and other bts fanmerch</strong> i no longer need and feel like would be in better hands with someone else! you can see all the items if you click on the "items" tab up there!!</p>

      <p>please note i'm not selling for a profit, in fact i'm usually selling at a loss, hence me always saying rehoming instead of reselling. i really just want to get these items to others who would more appreicate them! (and to.. thin down my ridiculous collection :')</p>

      <h1>GENERAL THINGS ABOUT THE ITEMS</h1>
      <p>unless stated otherwise, most pins listed do not come with their orginal backing cards. pins will all come with rubber black backings. if you prefer the metal clasps instead, please let me know!</p>
      <p><strong>prices listed do not include shipping</strong>, but if you're in the us and you only buy a pin or two, my general estimate for shipping is ~$2-4! <strong>i will ship worldwide,</strong> but please note international shipping though is a whole different thing, and it'll usually be expensive :(</p>
      <p>i have proof of previous sales and trades down below if you need to see them!</p>

      <h1>PROOF OF PREVIOUS SALES/TRADES</h1>
      <p><strong>click on an image to enlarge it!</strong></p>
      <div className="proof-thumbnails">
        <img src={proofOne} alt="proofshot one" onClick={() => {modalImg(proofOne)}}/>
        <img src={proofTwo} alt="proofshot two" onClick={() => {modalImg(proofTwo)}}/>
        <img src={proofThree} alt="proofshot three" onClick={() => {modalImg(proofThree)}}/>
        <img src={proofFour} alt="proofshot four" onClick={() => {modalImg(proofFour)}}/>
        <img src={proofFive} alt="proofshot five" onClick={() => {modalImg(proofFive)}}/>
        <img src={proofSix} alt="proofshot six" onClick={() => {modalImg(proofSix)}}/>
        <img src={proofSeven} alt="proofshot seven" onClick={() => {modalImg(proofSeven)}}/>
      </div>
      <div className="proofshot-note"><strong>note:</strong> i hid as much personal info as i could, but if you see yourself up there and want me to remove you, please let me know and i'd be happy to!!</div>
      {/* ============================================= */}
      {/*              PROOFSHOT MODAL                  */}
      {/* ============================================= */}
      {modalOpen ?
        <div className="proofshot-modal-container">
          <div className="proofshot-modal">
            {/* IMAGE */}
            <img src={modalImage} alt="proofshot large"/>
            {/* CLOSE BUTTON */}
            <div className="close-modal" onClick={toggleModal}>
              X
            </div>
          </div>
        </div> :
        null
      }
    </div>
  )
}

export default About
