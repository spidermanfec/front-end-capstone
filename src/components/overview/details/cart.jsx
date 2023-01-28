import React from 'react';
import axios from 'axios';

function Cart({ styles }) {
  const [open, setOpen] = React.useState(false);
  const [sizeSelected, setSizeSelected] = React.useState(false);
  const [sku, setSku] = React.useState('');
  const [size, setSize] = React.useState('');
  const [amount, setAmount] = React.useState('');

  const infos = Object.keys(styles.skus);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const handleChangeSize = (e) => {
    e.preventDefault();
    let size = e.target.value;
    setSku(styles.skus[size])
    setSize(styles.skus[size].size)
    setSizeSelected(true);
  };

  console.log(size);

  const handleSelectQuantity = () => {
    let items = [];
    if (sku.quantity === undefined) {
      return <option value="" disabled selected>Out Of Stock</option>;
    }
    for (let i = 1; i <= sku.quantity; i++) {
      items.push(<option value={sku.quantity}>{i}</option>);
    }
    return items;
  };

  // handle submitting to cart here
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(size)
  };

  return (
    <form>
      <select name="sizeList" id="sizeList" onClick={(e) => handleOpen(e)} onChange={handleChangeSize}>
        <option value="" disabled selected>Select Size</option>
        {infos.map((info) => <option value={info}>{styles.skus[info].size}</option>)}
      </select>
      <select name="quantityList" id="quantityList">
        {(sizeSelected) ? handleSelectQuantity() : <option value="" disabled selected>--</option>}
      </select>
      <input type="submit" onClick={((e) => {handleSubmit(e)})} />
    </form>
  );
}

export default Cart;
