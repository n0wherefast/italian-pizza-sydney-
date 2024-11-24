import React from 'react'
import '../style/minSpend.scss'

function TableMinSpend() {
  return (
    <div className='main-spend'>
        <div className='head-spend'>
            Children 6-12 years old $15 (pizza only)
        </div>
        <div className='container-pack-spend'>
            <div className='packA'> 
                <p>package A-B</p>
                <div className='min-spend'>Minimum party spend $1000</div>
            </div>
            <div className='packB'> 
                <p>package C-D </p>
                <div className='min-spend'><p>Minimum party spend $1300</p> </div>
            </div>
        </div>

    </div>
  )
}

export default TableMinSpend
