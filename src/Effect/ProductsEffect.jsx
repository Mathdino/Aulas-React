import React from 'react';

const ProductsEffect = () => {
  React.useEffect(() => {
    function hanldeScroll(event) {
      console.log(event);
    }
    window.addEventListener('scroll', hanldeScroll);
    return () => {
      window.removeEventListener('scroll', hanldeScroll);
    };
  }, []);

  return (
    <div style={{ height: '50vh' }}>
      <p>Este é meu Produto</p>
    </div>
  );
};

export default ProductsEffect;
