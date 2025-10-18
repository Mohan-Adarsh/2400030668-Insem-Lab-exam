import React, { useState } from "react";
import "./KLUStore.css";

export default function KLUStore() {
  const [show, setShow] = useState(null);
  const products = [
    { name: "Hoodie", price: "₹899", desc: "Cotton hoodie", img: "https://via.placeholder.com/250" },
    { name: "Mug", price: "₹299", desc: "Logo mug", img: "https://via.placeholder.com/250" },
    { name: "Bag", price: "₹1,499", desc: "Campus backpack", img: "https://via.placeholder.com/250" },
  ];

  return (
    <div className="store">
      <h2>KL University Store</h2>
      <div className="list">
        {products.map((p, i) => (
          <div key={i} className="card" onClick={() => setShow(p)}>
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>

      {show && (
        <div className="popup">
          <div className="content">
            <button onClick={() => setShow(null)}>✕</button>
            <h3>{show.name}</h3>
            <img src={show.img} alt={show.name} />
            <p>{show.price}</p>
            <p>{show.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}
