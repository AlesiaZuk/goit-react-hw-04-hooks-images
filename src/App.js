import { useState } from 'react';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';

const container = ['container'];
const search = ['search'];
const searchContainer = ['search_container'];
const image = ['image'];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [imgModal, setImgModal] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);

  function formSubmit(searchQuery) {
    setSearchQuery(searchQuery.trim());
    setPage(1);
  }

  function toggleModal() {
    setShowModal(showModal => !showModal);
  }

  function ImgClick(imgModal) {
    setImgModal(imgModal);
  }

  function changePage() {
    setPage(page + 1);
  }

  return (
    <>
      <main>
        <div className={container}>
          <section className={search}>
            <div className={searchContainer}>
              <Searchbar onSubmit={formSubmit}></Searchbar>
            </div>
          </section>
          <ImageGallery
            searchQuery={searchQuery}
            toggleModal={toggleModal}
            onImgClick={ImgClick}
            page={page}
            handelClick={changePage}
          ></ImageGallery>
        </div>
      </main>
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={imgModal.url} alt={imgModal.alt} className={image} />
        </Modal>
      )}
    </>
  );
}

export default App;
