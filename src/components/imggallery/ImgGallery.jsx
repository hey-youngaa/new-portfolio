import React from 'react'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

function ImgGallery({gallery}) {
  return (
    <ResponsiveMasonry>
      <Masonry>
        {gallery.map((item,index) => {
          return(
            <img
              key={index}
              src={item.image}
              alt={item.alt}
            />
          )
        })}
      </Masonry>
  </ResponsiveMasonry>
  )
}

export default ImgGallery