import { memo } from 'react';

import PropTypes from 'prop-types';

import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ img, toggleModal, onImgClick }) {
  function handleClick(e) {
    e.preventDefault();

    if (e.target.nodeName === 'IMG') {
      const img = {};
      img.largeImageURL = e.target.dataset.source;
      img.alt = e.target.alt;

      toggleModal();
      onImgClick(img);
    }
  }

  return img.map(item => {
    return (
      <li className={s.gallery_item} key={item.id}>
        <div>
          <a
            href={item.largeImageURL}
            className={s.gallery_link}
            onClick={handleClick}
          >
            <img
              src={item.webformatURL}
              alt={item.tags}
              width="370px"
              height="250px"
              className={s.gallery_image}
              data-source={item.largeImageURL}
            />
          </a>
        </div>
      </li>
    );
  });
}

ImageGalleryItem.propTypes = {
  img: PropTypes.array.isRequired,
  toggleModal: PropTypes.func.isRequired,
  onImgClick: PropTypes.func.isRequired,
};

export default memo(ImageGalleryItem);
