import React from "react";
import React, { useState, useRef, useEffect } from "react";

function Gallery() {
  const [imageGalleryOpened, setImageGalleryOpened] = useState(false);
  const [imageGalleryActiveUrl, setImageGalleryActiveUrl] = useState(null);
  const [imageGalleryImageIndex, setImageGalleryImageIndex] = useState(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    const imageGalleryPhotos = galleryRef.current.querySelectorAll("img");
    for (let i = 0; i < imageGalleryPhotos.length; i++) {
      imageGalleryPhotos[i].setAttribute("data-index", i + 1);
    }
  }, []);

  const imageGalleryOpen = (event) => {
    setImageGalleryImageIndex(event.target.dataset.index);
    setImageGalleryActiveUrl(event.target.src);
    setImageGalleryOpened(true);
  };

  const imageGalleryClose = () => {
    setImageGalleryOpened(false);
    setTimeout(() => setImageGalleryActiveUrl(null), 300);
  };

  const imageGalleryNext = () => {
    if (imageGalleryImageIndex == galleryRef.current.childElementCount) {
      setImageGalleryImageIndex(1);
    } else {
      setImageGalleryImageIndex(parseInt(imageGalleryImageIndex) + 1);
    }
    setImageGalleryActiveUrl(
      galleryRef.current.querySelector(
        "[data-index='" + imageGalleryImageIndex + "']"
      ).src
    );
  };

  const imageGalleryPrev = () => {
    if (imageGalleryImageIndex == 1) {
      setImageGalleryImageIndex(galleryRef.current.childElementCount);
    } else {
      setImageGalleryImageIndex(parseInt(imageGalleryImageIndex) - 1);
    }
    setImageGalleryActiveUrl(
      galleryRef.current.querySelector(
        "[data-index='" + imageGalleryImageIndex + "']"
      ).src
    );
  };

  return (
    <section>
      <div className="w-full h-full select-none" ref={galleryRef}>
        <ul id="gallery" className="grid grid-cols-2 gap-5 lg:grid-cols-5">
          <li>
            <img
              onClick={imageGalleryOpen}
              src="https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
              alt="photo gallery image 01"
              data-index="1"
            />
          </li>
        </ul>
      </div>

      {imageGalleryOpened && (
        <div
          onClick={imageGalleryClose}
          onKeyDown={(e) => e.key === "Escape" && imageGalleryClose()}
          className="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-50 select-none cursor-zoom-out"
        >
          <div className="relative flex items-center justify-center w-11/12 xl:w-4/5 h-11/12">
            <div
              onClick={(e) => {
                e.stopPropagation();
                imageGalleryPrev();
              }}
              className="absolute left-0 flex items-center justify-center text-white translate-x-10 rounded-full cursor-pointer xl:-translate-x-24 2xl:-translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
            <img
              className="object-contain object-center w-full h-full select-none cursor-zoom-out"
              src={imageGalleryActiveUrl}
              alt=""
            />
            <div
              onClick={(e) => {
                e.stopPropagation();
                imageGalleryNext();
              }}
              className="absolute right-0 flex items-center justify-center text-white -translate-x-10 rounded-full cursor-pointer xl:translate-x-24 2xl:translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
