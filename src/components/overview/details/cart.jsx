import React from 'react';
import axios from 'axios';

function Cart({ styles }) {
  const [open, setOpen] = React.useState(false);

  let infos = Object.keys(styles.skus);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const clickSize = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  }

  return (
    <div className="dropdown">
      <form>
        <button onClick={(e) => handleOpen(e)}>Select Size</button>
        {open ? (
          <ul>
            {infos.map((info) => {
              return <li className="quantity"><button>{styles.skus[info].size}</button></li>;
            })}
          </ul>
        ) : null}
        {/* <button onClick={(e) => handleOpen(e)}>Quantity</button> */}
      </form>
    </div>
  );
}

export default Cart;
