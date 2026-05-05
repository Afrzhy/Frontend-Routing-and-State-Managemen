import { useState, useEffect } from "react";
import { FaPlus, FaTrash, FaEdit, FaImage, FaEye } from "react-icons/fa";

function Log() {
  const [logs, setLogs] = useState([]);
  const [form, setForm] = useState({
    nama: "",
    catatan: "",
    tanggal: "",
    gambar: "",
  });
  const [editIndex, setEditIndex] = useState(null);
  const [detail, setDetail] = useState(null);

  /* LOAD DATA */
  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem("logs")) || [];
      setLogs(data);
    } catch {
      setLogs([]);
    }
  }, []);

  /* SIMPAN DATA */
  useEffect(() => {
    localStorage.setItem("logs", JSON.stringify(logs));
  }, [logs]);

  /* HANDLE INPUT */
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  /* HANDLE GAMBAR */
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({
        ...prev,
        gambar: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  /* SUBMIT */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nama || !form.catatan) {
      alert("Isi nama dan catatan!");
      return;
    }

    if (editIndex !== null) {
      const updated = [...logs];
      updated[editIndex] = form;
      setLogs(updated);
      setEditIndex(null);
    } else {
      setLogs((prev) => [...prev, form]);
    }

    setForm({
      nama: "",
      catatan: "",
      tanggal: "",
      gambar: "",
    });
  };

  /* DELETE */
  const handleDelete = (index) => {
    const filtered = logs.filter((_, i) => i !== index);
    setLogs(filtered);
  };

  /* EDIT */
  const handleEdit = (index) => {
    setForm(logs[index]);
    setEditIndex(index);
  };

  return (
    <>
      <div className="container">
        <h1>Log Tanaman 🌱</h1>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="nama"
            placeholder="Nama Tanaman"
            value={form.nama}
            onChange={handleChange}
          />

          <input
            type="date"
            name="tanggal"
            value={form.tanggal}
            onChange={handleChange}
          />

          <textarea
            name="catatan"
            placeholder="Catatan perkembangan..."
            value={form.catatan}
            onChange={handleChange}
          />

          <label className="upload">
            <FaImage /> Upload Gambar
            <input type="file" onChange={handleImage} hidden />
          </label>

          <button type="submit">
            <FaPlus /> {editIndex !== null ? "Update" : "Tambah"}
          </button>
        </form>

        {/* LIST */}
        <div className="grid">
          {logs.map((item, index) => (
            <div className="card" key={index}>
              {item.gambar && <img src={item.gambar} alt="tanaman" />}

              <h3>{item.nama}</h3>
              <small>{item.tanggal}</small>
              <p>{item.catatan}</p>

              <div className="actions">
                <button onClick={() => setDetail(item)}>
                  <FaEye />
                </button>

                <button onClick={() => handleEdit(index)}>
                  <FaEdit />
                </button>

                <button onClick={() => handleDelete(index)}>
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* DETAIL POPUP */}
        {detail && (
          <div className="modal" onClick={() => setDetail(null)}>
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
              {detail.gambar && (
                <img src={detail.gambar} alt="detail" />
              )}
              <h2>{detail.nama}</h2>
              <p><b>Tanggal:</b> {detail.tanggal}</p>
              <p>{detail.catatan}</p>

              <button onClick={() => setDetail(null)}>Tutup</button>
            </div>
          </div>
        )}
      </div>

      {/* STYLE */}
      <style>{`
        .container {
          padding: 30px 15px;
          min-height: 100vh;
          text-align: center;
          background:
            linear-gradient(rgba(0,100,0,0.4), rgba(0,50,0,0.6)),
            url("https://images.unsplash.com/photo-1501004318641-b39e6451bec6");
          background-size: cover;
          color: white;
        }

        .form {
          max-width: 400px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: white;
          padding: 15px;
          border-radius: 10px;
          color: black;
        }

        input, textarea {
          padding: 8px;
          border-radius: 6px;
          border: 1px solid #ccc;
        }

        .upload {
          background: #eee;
          padding: 8px;
          border-radius: 6px;
          cursor: pointer;
        }

        button {
          padding: 10px;
          border: none;
          border-radius: 6px;
          background: #2ecc71;
          color: white;
          cursor: pointer;
        }

        .grid {
          margin-top: 30px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
        }

        .card {
          background: white;
          color: black;
          padding: 10px;
          border-radius: 10px;
        }

        .card img {
          width: 100%;
          height: 140px;
          object-fit: cover;
          border-radius: 8px;
        }

        .actions {
          display: flex;
          justify-content: space-around;
          margin-top: 10px;
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.6);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modalContent {
          background: white;
          padding: 20px;
          border-radius: 10px;
          max-width: 400px;
          width: 90%;
          text-align: center;
          color: black;
        }

        .modalContent img {
          width: 100%;
          border-radius: 8px;
          margin-bottom: 10px;
        }
      `}</style>
    </>
  );
}

export default Log;