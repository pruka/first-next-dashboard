"use client";

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Merhaba', 'Hoş geldiniz', 'Web sitemize göz atın'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el}></span>;
};

export default TypedText;