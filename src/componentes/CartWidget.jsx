import cart from '../assets/carrito.png';

export const CartWidget = () => {
  return (
    <>
      <img
        src={cart}
        alt=""
        className="img-fluid"
        style={{ maxWidth: '50px', maxHeight: '50px' }}
      />
      0
    </>
  );
};
