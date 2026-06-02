"use client";

import "./inventory.css";
import { useEffect, useState } from "react";

const API_URL =
  "https://script.google.com/macros/s/AKfycbyOrtZDIrXdenarjgVT4VWxZYOkugGk3ObEzgvKV5QJdrx-fkHGEx3hMeShBJ0fCfYi/exec";

export default function LGInventory() {
  const [diamonds, setDiamonds] = useState([]);
  const [loading, setLoading] = useState(true);

   const [search, setSearch] = useState("");
  const [shape, setShape] = useState("");
  const [color, setColor] = useState("");
  const [clarity, setClarity] = useState("");
  const [lab, setLab] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const cleanData = data.filter(
          (d) =>
            d["Stone ID"] &&
            d["Stone ID"] !== "Available" &&
            d.Shape !== "Status"
        );

        setDiamonds(cleanData);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ padding: "30px" }}>Loading Inventory...</h2>;
  }

  const shapes = [...new Set(diamonds.map(d => d.Shape).filter(Boolean))];
const colors = [...new Set(diamonds.map(d => d.Color).filter(Boolean))];
const clarities = [...new Set(diamonds.map(d => d.Clarity).filter(Boolean))];
const labs = [...new Set(diamonds.map(d => d.Lab).filter(Boolean))];

const filteredDiamonds = diamonds.filter((d) => {

  const matchesSearch =
    search === "" ||
    (d["Stone ID"] || "")
      .toLowerCase()
      .includes(search.toLowerCase());

  const matchesShape =
    shape === "" || d.Shape === shape;

  const matchesColor =
    color === "" || d.Color === color;

  const matchesClarity =
    clarity === "" || d.Clarity === clarity;

  const matchesLab =
    lab === "" || d.Lab === lab;

  return (
    matchesSearch &&
    matchesShape &&
    matchesColor &&
    matchesClarity &&
    matchesLab
  );
});



  return (
    <div style={{ padding: "20px" }}>
      <h1>LG Trader Inventory</h1>

      <p>{filteredDiamonds.length} Stones Found</p>
      <div className="filters">

  <input
    type="text"
    placeholder="Search Stone ID"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <select
    value={shape}
    onChange={(e) => setShape(e.target.value)}
  >
    <option value="">All Shapes</option>
    {shapes.map((s) => (
      <option key={s} value={s}>
        {s}
      </option>
    ))}
  </select>

  <select
    value={color}
    onChange={(e) => setColor(e.target.value)}
  >
    <option value="">All Colors</option>
    {colors.map((s) => (
      <option key={s} value={s}>
        {s}
      </option>
    ))}
  </select>

  <select
    value={clarity}
    onChange={(e) => setClarity(e.target.value)}
  >
    <option value="">All Clarity</option>
    {clarities.map((s) => (
      <option key={s} value={s}>
        {s}
      </option>
    ))}
  </select>

  <select
    value={lab}
    onChange={(e) => setLab(e.target.value)}
  >
    <option value="">All Labs</option>
    {labs.map((s) => (
      <option key={s} value={s}>
        {s}
      </option>
    ))}
  </select>

</div>

      

      <div className="diamond-grid">
        {filteredDiamonds.map((d, i) => (
          <div className="diamond-card" key={i}>
            <div className="image-wrapper">
  <img
    src={d.ImgURL || "https://via.placeholder.com/400x300"}
    alt={d["Stone ID"]}
  />
</div>
            
            <div className="card-body">
              <h3>
                {d.Weight} Ct {d.Shape} Diamond
              </h3>

              <div className="badge">
                🟢 Ready to Ship
              </div>

              <p>
                <b>Stone ID:</b> {d["Stone ID"]}
              </p>

              <div className="specs">
                <span>Color: {d.Color}</span>
                <span>Clarity: {d.Clarity}</span>

                <span>Cut: {d.Cut}</span>
                <span>Polish: {d.Polish}</span>

                <span>Symm: {d.Symmetry}</span>
                <span>Lab: {d.Lab}</span>
              </div>

              <p>
                <b>Measurements:</b> {d.Measurements}
              </p>

              <hr />


             <div className="price-section">
  <div className="rate">
   <b>Rate/Ct: </b>${d["System Price"]}
  </div>

  <div className="total-price">
    <b> Total Amount: </b>${Number(d["System Amount"] || 0).toLocaleString()}
  </div>
</div>

<div className="card-buttons">

  {d["Certi. PDF URL"] ? (
    <a
      href={d["Certi. PDF URL"]}
      target="_blank"
      rel="noreferrer"
    >
      Certificate
    </a>
  ) : (
    <button disabled>No Cert</button>
  )}

  {d.V360 ? (
    <a
      href={d.V360}
      target="_blank"
      rel="noreferrer"
    >
      360° View
    </a>
  ) : (
    <button disabled>No 360</button>
  )}

  <a
    href={`https://wa.me/91YOURNUMBER?text=Hi, I am interested in Stone ID ${d["Stone ID"]}`}
    target="_blank"
    rel="noreferrer"
  >
    WhatsApp
  </a>

</div>
             
            </div>

            
          </div>
        ))}
      </div>
    </div>
  );
}