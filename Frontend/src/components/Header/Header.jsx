import React from 'react'
import './Header.css'

const Header = () => {

    return (
        <div>
            <marquee scrollamount="8" behavior="scroll" direction="left">
                Shop exquisite handcrafted jewellery at unbeatable prices. India’s trusted destination for timeless elegance — only at RJ-GEMS.
            </marquee>

            <div className='header'>
                <div className="header-contents">
                    <h3>Discover Timeless Elegance in Every Piece</h3>
                    <p>Explore our exquisite collection of handcrafted jewelry, designed to celebrate your unique style.</p>

                    <a href='#explore-menu'>Explore</a>
                </div>
            </div>
        </div>
    )
}

export default Header
