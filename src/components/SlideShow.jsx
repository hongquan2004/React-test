import React, { useEffect, useRef, useState } from 'react';
import './SlideShow.css';

const slides = [
  {
    img: '/src/assets/img/6291649_cover_ohno.jpg',
    caption: 'Gốm nghệ thuật thủ công, tinh xảo từng chi tiết.'
  },
  {
    img: '/src/assets/img/anh-27-meme-dang-yeu-didongmy.jpg',
    caption: 'Sản phẩm độc bản, mang đậm nét truyền thống.'
  },
  {
    img: '/src/assets/img/no-thanks-meme.jpeg',
    caption: 'Trang trí không gian sống thêm sang trọng.'
  }
];

const SlideShow = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <div className="ceramic-slideshow">
      {slides.map((slide, idx) => (
        <div
          className={`slide${idx === current ? ' active' : ''}`}
          key={idx}
          style={{ backgroundImage: `url(${slide.img})` }}
        >
          <div className="slide-caption">{slide.caption}</div>
        </div>
      ))}
      <div className="slide-dots">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={idx === current ? 'dot active' : 'dot'}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
