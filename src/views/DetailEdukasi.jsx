import { useLocation, useNavigate } from "react-router-dom";
import {
  FaSeedling,
  FaTint,
  FaSun,
  FaLeaf,
  FaInfoCircle,
} from "react-icons/fa";

function DetailEdukasi() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <h1>Data tidak ditemukan</h1>;

  return (
    <>
      <div className="container">
        <button className="back" onClick={() => navigate(-1)}>
           Kembali
        </button>

        <div className="card">
          <h1>{state.nama}</h1>

          <img src={state.img} alt={state.nama} />

          {/* GRID INFO */}
          <div className="grid">
            <div className="item">
              <FaSeedling />
              <h4>Bibit</h4>
              <p>{state.bibit}</p>
            </div>

            <div className="item">
              <FaLeaf />
              <h4>Media Tanam</h4>
              <p>{state.media}</p>
            </div>

            <div className="item">
              <FaTint />
              <h4>Penyiraman</h4>
              <p>{state.air}</p>
            </div>

            <div className="item">
              <FaSun />
              <h4>Pencahayaan</h4>
              <p>{state.cahaya}</p>
            </div>

            <div className="item full">
              <FaInfoCircle />
              <h4>Tips Perawatan</h4>
              <p>{state.tips}</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .container {
          min-height: 100vh;
          padding: 30px 15px;

          background:
            linear-gradient(rgba(0,80,0,0.5), rgba(0,40,0,0.7)),
            url("https://images.unsplash.com/photo-1501004318641-b39e6451bec6");

          background-size: cover;
          background-position: center;
        }

        .back {
          margin-bottom: 15px;
          padding: 6px 12px;
          border: none;
          background: #2ecc71;
          color: white;
          border-radius: 6px;
          cursor: pointer;
        }

        .card {
          max-width: 700px;
          margin: auto;
          background: rgba(255,255,255,0.95);
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.25);
        }

        h1 {
          text-align: center;
          margin-bottom: 15px;
        }

        img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 20px;
        }

        /* GRID */
        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }

        .item {
          background: #f5f5f5;
          padding: 12px;
          border-radius: 8px;
          text-align: center;
        }

        .item svg {
          font-size: 20px;
          color: #2ecc71;
          margin-bottom: 5px;
        }

        .item h4 {
          margin: 5px 0;
          font-size: 14px;
        }

        .item p {
          font-size: 13px;
          color: #444;
        }

        .full {
          grid-column: span 2;
        }
      `}</style>
    </>
  );
}

export default DetailEdukasi;