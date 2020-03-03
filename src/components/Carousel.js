import React, { useState } from 'react'

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState({
    activeIndex: 0
  })

  const goToSlide = index => {
    setCurrent({ activeIndex: index })
  }

  const goToPrevSlide = () => {
    if (current.activeIndex < 1) {
      return
    }

    setCurrent({
      activeIndex: --current.activeIndex
    })
  }

  const goToNextSlide = () => {
    if (current.activeIndex === images.length - 1) {
      return
    }

    setCurrent({
      activeIndex: ++current.activeIndex
    })
  }

  return (
    <div className="carousel">
      <button
        className="carousel__icon carousel__icon--left btn--transparent"
        onClick={goToPrevSlide}
        disabled={current.activeIndex < 1 ? true : false}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      {images.map(image => (
        <img
          src={image.imgUrl}
          alt={image.id}
          key={image.id}
          className={
            current.activeIndex + 1 === image.id
              ? 'carousel__img carousel__img--active'
              : 'carousel__img'
          }
        />
      ))}
      <button
        className="carousel__icon carousel__icon--right btn--transparent"
        onClick={goToNextSlide}
        disabled={current.activeIndex === images.length - 1}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <div className="carousel__pagination">
        {images.map(item => (
          <button
            className={
              item.id === current.activeIndex + 1
                ? 'carousel__circle carousel__circle--active btn--transparent'
                : 'carousel__circle btn--transparent'
            }
            key={item.id}
            onClick={() => goToSlide(item.id - 1)}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default Carousel
