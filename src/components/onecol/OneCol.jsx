import React from 'react'
import './onecol.css'

function OneCol({gallery}) {
  return (
    <div>
        {gallery.map((item) => {
            return(
                <img src={item.image} alt='' />
            )
        })}
    </div>
  )
}

export default OneCol