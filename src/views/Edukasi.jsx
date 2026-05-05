import {
  FaSeedling,
  FaTint,
  FaSun,
  FaLeaf,
  FaInfoCircle,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import anggur from "../assets/anggur.jpg";
import tomat from "../assets/tomat.jpg";
import cabai from "../assets/cabai.jpg";
import stroberi from "../assets/stroberi.jpg";
import mangga from "../assets/mangga.jpg";
import jeruk from "../assets/jeruk.jpg";

function Edukasi() {
  const navigate = useNavigate();

  const data = [
    {
      nama: "Anggur",
      img: anggur,
      bibit: "Bibit stek batang sehat",
      media: "Tanah gembur + kompos",
      air: "Siram secukupnya",
      cahaya: "Matahari penuh",
      tips: "Gunakan rambatan",
      konsep: "Butuh arah",
      mindset: "Sabar",
      karakter: "Konsisten",
    },
    {
      nama: "Tomat",
      img: tomat,
      bibit: "Biji matang",
      media: "Tanah subur",
      air: "Pagi hari",
      cahaya: "Cukup",
      tips: "Gunakan penyangga",
      konsep: "Butuh dukungan",
      mindset: "Tidak sendiri",
      karakter: "Kerja sama",
    },
    {
      nama: "Cabai",
      img: cabai,
      bibit: "Benih unggul",
      media: "Tanah gembur",
      air: "Jangan berlebih",
      cahaya: "Langsung",
      tips: "Waspada hama",
      konsep: "Lingkungan penting",
      mindset: "Secukupnya",
      karakter: "Teliti",
    },
    {
      nama: "Stroberi",
      img: stroberi,
      bibit: "Anakan",
      media: "Tanah lembab",
      air: "Jaga kelembaban",
      cahaya: "Tidak berlebih",
      tips: "Pot gantung",
      konsep: "Keseimbangan",
      mindset: "Tidak berlebihan",
      karakter: "Kontrol diri",
    },
    {
      nama: "Mangga",
      img: mangga,
      bibit: "Cangkok",
      media: "Tanah luas",
      air: "Sesuai kebutuhan",
      cahaya: "Full matahari",
      tips: "Pangkas rutin",
      konsep: "Butuh waktu",
      mindset: "Tidak instan",
      karakter: "Sabar",
    },
    {
      nama: "Jeruk",
      img: jeruk,
      bibit: "Okulasi",
      media: "Tanah gembur",
      air: "Rutin",
      cahaya: "Cukup",
      tips: "Pupuk rutin",
      konsep: "Konsistensi",
      mindset: "Hal kecil penting",
      karakter: "Disiplin",
    },
  ];

  return (
    <>
      <section className="edukasi">
        <h1 className="title">Edukasi Tanaman 🌿</h1>

        <div className="grid">
          {data.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.img} alt={item.nama} />

              <div className="content">
                <h3>{item.nama}</h3>

                {/* TABLE STYLE */}
                <div className="table">
                  <div><FaSeedling /> {item.bibit}</div>
                  <div><FaLeaf /> {item.media}</div>
                  <div><FaTint /> {item.air}</div>
                  <div><FaSun /> {item.cahaya}</div>
                </div>

                <button
                  className="btn"
                  onClick={() =>
                    navigate(`/edukasi/${index}`, { state: item })
                  }
                >
                  Lihat Detail 
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .edukasi {
          padding: 60px 20px;
          min-height: 100vh;

          /* BACKGROUND KEREN */
          background:
            linear-gradient(rgba(0,80,0,0.6), rgba(0,40,0,0.7)),
            url("https://images.unsplash.com/photo-1501004318641-b39e6451bec6");

          background-size: cover;
          background-position: center;

          text-align: center;
          color: white;
        }

        .title {
          font-size: 38px;
          margin-bottom: 40px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 25px;
          max-width: 1000px;
          margin: auto;
        }

        .card {
          background: rgba(255,255,255,0.95);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
          transition: 0.3s;
          color: black;
        }

        .card:hover {
          transform: translateY(-6px) scale(1.02);
        }

        .card img {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }

        .content {
          padding: 15px;
        }

        h3 {
          margin-bottom: 10px;
        }

        /* TABLE STYLE */
        .table {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          font-size: 13px;
          margin-bottom: 12px;
        }

        .table div {
          background: #f4f4f4;
          padding: 6px;
          border-radius: 6px;
          display: flex;
          gap: 6px;
          align-items: center;
        }

        .table svg {
          color: #2ecc71;
        }

        .btn {
          width: 100%;
          padding: 8px;
          background: #2ecc71;
          border: none;
          color: white;
          border-radius: 6px;
          cursor: pointer;
        }

        .btn:hover {
          background: #27ae60;
        }
      `}</style>
    </>
  );
}

export default Edukasi;