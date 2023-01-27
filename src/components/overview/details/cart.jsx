import React from 'react';
import axios from 'axios';

function Cart({ styles }) {
  const [open, setOpen] = React.useState(false);

  const [sizeSelected, setSizeSelected] = React.useState(false);

  const [sku, setSku] = React.useState('');
  const [size, setSize] = React.useState('');
  const [quantity, setQuantity] = React.useState([]);

  const infos = Object.keys(styles.skus);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const handleChangeSize = (e) => {
    e.preventDefault();
    let size = e.target.value;
    setSku(styles.skus[size])
    setSizeSelected(true);
  };

  const handleSelectQuantity = () => {
    let items = [];
    for (let i = 1; i <= sku.quantity; i++) {
      items.push(<option value={sku.quantity}>{i}</option>);
    }
    return items;
  };

  // handle submitting to cart here
  // const handleSubmiit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <form>
      <select name="sizeList" id="sizeList" onClick={(e) => handleOpen(e)} onChange={handleChangeSize}>
        <option value="" disabled selected>Select Size</option>
      {infos.map((info) => <option value={info}>{styles.skus[info].size}</option>)}
      </select>
      <select name="quantityList" id="quantityList" onClick={sizeSelected}>
      {(sizeSelected) ? handleSelectQuantity() : <option value="" disabled selected>--</option>}
      </select>
      <input type="submit" value="Add to Cart" onClick={((e) => {
        handleSubmiit(e);
      })}/>
    </form>
  );
}

export default Cart;
