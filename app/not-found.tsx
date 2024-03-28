import React from 'react'
import './style/notFound.scss'
import Link from 'next/link'
function NotFound() {
  return (
    <div className='notFoundMain'>
      <div className="notFoundText">
        404 Page not found
      </div>
      <Link className='notFoundLink' href={'/'}>Go Back</Link>
      <div className='slice'>🍕</div>
    </div>
  )
}

export default NotFound
