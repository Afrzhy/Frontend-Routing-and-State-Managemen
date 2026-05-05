import { FaSun, FaTint } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import anggur from "../assets/anggur.jpg";
import tomat from "../assets/tomat.jpg";
import cabai from "../assets/cabai.jpg";
import stroberi from "../assets/stroberi.jpg";
import mangga from "../assets/mangga.jpg";
import jeruk from "../assets/jeruk.jpg";

function Katalog() {
  const navigate = useNavigate();

  const data = [
    { nama: "Anggur", img: anggur, kategori: "Buah", cahaya: "Full Sun", air: "Sedang" },
    { nama: "Tomat", img: tomat, kategori: "Sayur", cahaya: "Cukup", air: "Rutin" },
    { nama: "Cabai", img: cabai, kategori: "Sayur", cahaya: "Full Sun", air: "Sedang" },
    { nama: "Stroberi", img: stroberi, kategori: "Buah", cahaya: "Sedang", air: "Lembab" },
    { nama: "Mangga", img: mangga, kategori: "Buah", cahaya: "Full Sun", air: "Rendah" },
    { nama: "Jeruk", img: jeruk, kategori: "Buah", cahaya: "Cukup", air: "Sedang" },
  ];

  return (
    <>
      <section className="katalog">
        <h1 className="title">Katalog Tanaman 🌿</h1>

        <div className="grid">
          {data.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.img} alt={item.nama} />

              <div className="content">
                <h2>{item.nama}</h2>
                <span className="badge">{item.kategori}</span>

                <div className="info">
                  <p><FaSun /> {item.cahaya}</p>
                  <p><FaTint /> {item.air}</p>
                </div>

                <button
                  className="btn"
                  onClick={() =>
                    navigate(`/katalog/${index}`, { state: item })
                  }
                >
                  Lihat Tanaman
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .katalog {
          padding: 60px 20px;
          min-height: 100vh;
          text-align: center;
          background: linear-gradient(rgba(0,100,0,0.25), rgba(0,60,0,0.35));
        }

        .title {
          font-size: 38px;
          margin-bottom: 30px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1000px;
          margin: auto;
        }

        .card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0,0,0,0.2);
        }

        .card img {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }

        .content {
          padding: 15px;
        }

        .badge {
          background: #2ecc71;
          color: white;
          padding: 3px 10px;
          border-radius: 6px;
          font-size: 12px;
        }

        .btn {
          margin-top: 10px;
          padding: 8px;
          width: 100%;
          border: none;
          background: #2ecc71;
          color: white;
          border-radius: 6px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export default Katalog;