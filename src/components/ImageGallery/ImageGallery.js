import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import fetchImage from '../../api/img-api.js';
import LoaderSpinner from '../Loader/Loader.js';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem.js';
import Button from '../Button/Button';

import s from './ImageGallery.module.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function ImageGallery({
  searchQuery,
  toggleModal,
  onImgClick,
  page,
  handelClick,
}) {
  const [img, setImg] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [status, setStatus] = useState(Status.IDLE);

  const fetchGallery = useCallback(() => {
    if (!searchQuery) {
      return;
    }
    fetchImage(searchQuery, page).then(data => {
      if (data.hits.length > 0) {
        setImg(prevImg => {
          return [
            ...prevImg,
            ...data.hits.map(item => {
              const image = {};
              image.id = item.webformatURL;
              image.largeImageURL = item.largeImageURL;
              image.webformatURL = item.webformatURL;
              image.tags = item.tags;
              return image;
            }),
          ];
        });

        setStatus(Status.RESOLVED);

        showLoaderButton(data);
      } else {
        setStatus(Status.REJECTED);
      }
    });
  }, [searchQuery, page]);

  useEffect(() => {
    setImg([]);
    setStatus(Status.IDLE);
  }, [searchQuery]);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setStatus(Status.PENDING);

    fetchGallery();
  }, [fetchGallery, searchQuery]);

  function showLoaderButton(data) {
    if (data.totalHits > 12 && data.hits.length === 12) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }

  if (status === 'idle') {
    return <h2 className={s.gallery_title}>Enter a keyword...</h2>;
  }

  if (status === 'pending') {
    return (
      <div className={s.gallery_container}>
        <LoaderSpinner></LoaderSpinner>;
      </div>
    );
  }

  if (status === 'rejected') {
    return (
      <h2
        className={s.gallery_title}
      >{`No image with keyword ${searchQuery}`}</h2>
    );
  }

  if (status === 'resolved') {
    return (
      <>
        <section>
          <ul className={s.gallery_list}>
            {img.map(item => {
              return (
                <ImageGalleryItem
                  key={item.id}
                  img={item}
                  toggleModal={toggleModal}
                  onImgClick={onImgClick}
                ></ImageGalleryItem>
              );
            })}
          </ul>
        </section>

        {showButton && (
          <div className={s.button_container}>
            <Button handelClick={handelClick}></Button>
          </div>
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  onImgClick: PropTypes.func.isRequired,
};

export default ImageGallery;
