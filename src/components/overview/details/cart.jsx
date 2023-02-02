import React, { useEffect } from 'react';
import axios from 'axios';

function Cart({ styles, selectedStyle, itemStyles, handleStyleSelect }) {
  const [open, setOpen] = React.useState(false);
  const [sizeSelected, setSizeSelected] = React.useState(false);
  const [sku, setSku] = React.useState('');
  const [size, setSize] = React.useState('');
  const [amount, setAmount] = React.useState('');

  console.log(styles);

  useEffect(() => {
    setOpen(false);
    setSizeSelected(false);
    // setSku('');
    // setSize('');
    setAmount('');
  }, [handleStyleSelect])

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

  const handleSelectQuantity = () => {
    let items = [];
    if (sku.quantity === undefined) {
      return <option value="" disabled selected>Out Of Stock</option>;
    }
    for (let i = 1; i <= sku.quantity; i++) {
      items.push(<option value={i}>{i}</option>);
    }
    return items;
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  }

  // handle submitting to cart here
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(size)
    console.log(amount);
  };

  return (
    <form className="cart">
      <select name="sizeList" id="sizeList" onClick={(e) => handleOpen(e)} onChange={handleChangeSize}>
        <option value="" disabled selected>SELECT SIZE</option>
        {infos.map((info) => <option value={info}>{styles.skus[info].size}</option>)}
      </select>
      <select name="quantityList" id="quantityList" onChange={handleAmount}>
        {(sizeSelected) ? handleSelectQuantity() : <option value="" disabled selected>--</option>}
      </select>
      <button id="addToBag" type="submit" onClick={((e) => {handleSubmit(e)})}>ADD TO BAG</button>
    </form>
  );
}

export default Cart;
