import { useLocation, useNavigate } from "react-router-dom";
import { FaLeaf, FaSun, FaTint } from "react-icons/fa";

function DetailKatalog() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <h1>Data tidak ditemukan</h1>;

  return (
    <>
      <div className="container">
        <button className="back" onClick={() => navigate(-1)}>
          ← Kembali
        </button>

        <div className="card">
          <h1>{state.nama}</h1>

          <img src={state.img} alt={state.nama} />

          <div className="box">
            <p><FaLeaf /> <b>Kategori:</b> {state.kategori}</p>
            <p><FaSun /> <b>Cahaya:</b> {state.cahaya}</p>
            <p><FaTint /> <b>Penyiraman:</b> {state.air}</p>
          </div>
        </div>
      </div>

      <style>{`
        .container {
          min-height: 100vh;
          padding: 30px 15px;
          display: flex;
          flex-direction: column;
          align-items: center;

          /* BACKGROUND HIJAU PEGUNUNGAN */
          background:
            linear-gradient(rgba(0,80,0,0.6), rgba(0,40,0,0.8)),
            url("https://images.unsplash.com/photo-1506744038136-46273834b3fb");

          background-size: cover;
          background-position: center;
        }

        .back {
          align-self: flex-start;
          margin-bottom: 20px;
          padding: 8px 14px;
          border: none;
          background: #2ecc71;
          color: white;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          transition: 0.3s;
        }

        .back:hover {
          background: #27ae60;
          transform: translateY(-2px);
        }

        .card {
          width: 100%;
          max-width: 520px;

          /* GLASS EFFECT */
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);

          padding: 20px;
          border-radius: 14px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);

          text-align: center;
          animation: fadeUp 0.6s ease;
        }

        h1 {
          margin-bottom: 15px;
        }

        img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 15px;
        }

        .box {
          background: #f5f5f5;
          padding: 15px;
          border-radius: 10px;
          text-align: left;
        }

        .box p {
          margin: 8px 0;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
        }

        .box svg {
          color: #2ecc71;
        }

        /* ANIMASI */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* RESPONSIVE */
        @media (max-width: 500px) {
          img {
            height: 180px;
          }
        }
      `}</style>
    </>
  );
}

export default DetailKatalog;