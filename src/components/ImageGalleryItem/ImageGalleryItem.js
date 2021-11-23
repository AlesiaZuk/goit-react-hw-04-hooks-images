import { memo } from 'react';

import PropTypes from 'prop-types';

import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ img, toggleModal, onImgClick }) {
  function handleClick() {
    const imgModal = {};
    imgModal.url = img.largeImageURL;
    imgModal.alt = img.tags;

    toggleModal();
    onImgClick(imgModal);
  }

  return (
    <li className={s.gallery_item}>
      <div>
        <img
          src={img.webformatURL}
          alt={img.tags}
          width="370px"
          height="250px"
          className={s.gallery_image}
          onClick={handleClick}
        />
      </div>
    </li>
  );
}

ImageGalleryItem.propTypes = {
  img: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
  onImgClick: PropTypes.func.isRequired,
};

export default memo(ImageGalleryItem);
