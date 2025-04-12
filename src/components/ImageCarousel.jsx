import { useState } from "react";

export default function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="relative w-full max-w-lg mx-auto rounded-lg shadow-lg bg-white">
        <div className="flex justify-center items-center overflow-hidden">
          <img
            src={images[current]}
            alt={`Slide ${current}`}
            className="max-w-full h-auto object-contain cursor-pointer transition duration-500 ease-in-out"
            onClick={openModal}
          />
        </div>

        <button
          onClick={prev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#FFF8F0] bg-opacity-70 px-3 py-1 rounded-r hover:bg-opacity-100"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#FFF8F0] bg-opacity-70 px-3 py-1 rounded-l hover:bg-opacity-100"
        >
          ›
        </button>

        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === current ? "bg-dark-plum" : "bg-[#FFF8F0]"
              }`}
            ></span>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <img
            src={images[current]}
            alt={`Slide ${current}`}
            className="max-w-full max-h-full object-contain cursor-zoom-out"
          />
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-3xl font-bold"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
