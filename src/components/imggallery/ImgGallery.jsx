import React, {useState} from 'react'
import Masonry, { ResponsiveMasonry} from 'react-responsive-masonry'
import './imggallery.css'
import left from '../../assets/images/left.svg'
import right from '../../assets/images/right.svg'
import close from '../../assets/images/close.svg'


function ImgGallery({gallery}) {
    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const length = gallery.length;

    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true)
    }

    const handleCloseModal = () => setOpenModal(false)

    const prevSlide = () => {
        setSlideNumber( slideNumber === 0 ? length - 1 : slideNumber -1)
    }

    const nextSlide = () => {
        setSlideNumber(slideNumber === length - 1 ? 0 : slideNumber + 1)
    }

  return (
    <>  
        {openModal &&
            <div className="modalContainer">
                <img src={close} alt='exit' className='close' onClick={handleCloseModal} />
                <img src={left} alt='left arrow' className='leftArrow' onClick={prevSlide} />
                <img src={gallery[slideNumber].image} alt='' className='modalImg'/>
                <img src={right} alt='right arrow' className='rightArrow' onClick={nextSlide} />
            </div>
        }
        <div className="masonryContainer">
            <ResponsiveMasonry columnsCountBreakPoints={{350:1, 750:2, 900:3}}> 
                <Masonry gutter='2em'>
                    {gallery.map((item,index) => {
                        return(
                            <img
                                key={index}
                                src={item.image}
                                alt=''
                                onClick={() => handleOpenModal(index)}
                            />
                        )
                    })}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    </>
  )
}

export default ImgGallery