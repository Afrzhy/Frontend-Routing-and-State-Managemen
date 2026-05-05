import { FaBookOpen, FaLeaf, FaSeedling, FaPenFancy } from "react-icons/fa";

function Home() {
  return (
    <>
      <section className="home">
        {/* HERO */}
        <div className="hero">
          <h1 className="title">
            Grow Your Plants <span>Smarter</span>
          </h1>

          <p className="subtitle">
            Belajar menanam, temukan tanaman yang cocok, dan pantau
            perkembangan tanamanmu dengan cara yang lebih modern.
          </p>

          <div className="buttons">
            <a href="/katalog" className="btn primary">
            Jelajahi Katalog
            </a>
            <a href="/log" className="btn secondary">
             Mulai Catatan
            </a>
          </div>
        </div>

        {/* FEATURES */}
        <div className="features">
          <div className="card">
            <FaBookOpen className="icon" />
            <h3>Edukasi Tanaman</h3>
            <p>Panduan lengkap cara menanam dari awal hingga panen</p>
          </div>

          <div className="card">
            <FaLeaf className="icon" />
            <h3>Katalog Tanaman</h3>
            <p>Pilih tanaman sesuai lingkungan dan kebutuhanmu</p>
          </div>

          <div className="card">
            <FaSeedling className="icon" />
            <h3>Perawatan</h3>
            <p>Tips merawat tanaman agar tumbuh sehat dan optimal</p>
          </div>

          <div className="card">
            <FaPenFancy className="icon" />
            <h3>Log Tanaman</h3>
            <p>Catat perkembangan harian tanaman dengan mudah</p>
          </div>
        </div>
      </section>

      {/* STYLE */}
      <style>{`
        .home {
          padding: 80px 20px;
          text-align: center;
          min-height: 100vh;

          background:
            linear-gradient(rgba(0, 120, 0, 0.25), rgba(0, 80, 0, 0.35)),
            url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop");

          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

          color: white;
        }

        /* HERO */
        .hero {
          max-width: 750px;
          margin: auto;
          animation: fadeUp 1s ease;
        }

        .title {
          font-size: 46px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .title span {
          color: #c8ffcb;
        }

        .subtitle {
          margin-top: 18px;
          font-size: 17px;
          line-height: 1.6;
          color: #f1f1f1;
        }

        .buttons {
          margin-top: 30px;
          display: flex;
          justify-content: center;
          gap: 18px;
        }

        .btn {
          padding: 13px 22px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          transition: 0.3s;
        }

        .primary {
          background: #2ecc71;
          color: white;
        }

        .primary:hover {
          background: #27ae60;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        }

        .secondary {
          border: 2px solid white;
          color: white;
        }

        .secondary:hover {
          background: white;
          color: black;
          transform: translateY(-3px);
        }

        /* FEATURES */
        .features {
          margin-top: 80px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 25px;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
        }

        .card {
          background: rgba(255,255,255,0.95);
          padding: 25px;
          border-radius: 14px;
          box-shadow: 0 6px 25px rgba(0,0,0,0.25);
          transition: 0.3s;
          color: black;
          text-align: center;
        }

        .card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 12px 30px rgba(0,0,0,0.35);
        }

        .icon {
          font-size: 30px;
          color: black;
          margin-bottom: 12px;
        }

        .card h3 {
          margin-bottom: 10px;
          font-size: 18px;
        }

        .card p {
          font-size: 14px;
          color: #444;
          line-height: 1.5;
        }

        /* ANIMASI */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}

export default Home;