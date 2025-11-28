import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [files, setFiles] = useState({
    page1: null,
    page2: null,
    page3: null,
  });

  const handleChange = (e) => {
    const { name, files: selectedFiles } = e.target;
    console.log(e.target)
    setFiles((prev) => ({
      ...prev,
      [name]: selectedFiles[0],
    }));
  };

  const handleUpload = async () => {
    if (!files.page1 || !files.page2 || !files.page3) {
      alert("Please select all 3 documents.");
      return;
    }

    const formData = new FormData();
    formData.append("page1", files.page1);
    formData.append("page2", files.page2);
    formData.append("page3", files.page3);
    console.log(formData)

    try {
      const res = await axios.post("http://localhost:3000/api/v1/upload/getjson", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log(res.data);
      alert("Uploaded successfully!");
    } catch (err) {
      console.error(err);
      alert("Upload failed.");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Upload Medical Documents</h2>

        <div className="input-group">
          <label>Bill Detail (Page 1)</label>
          <input type="file" name="page1" onChange={handleChange} />
          {files.page1 && <p className="filename">{files.page1.name}</p>}
        </div>

        <div className="input-group">
          <label>Final Bill (Page 2)</label>
          <input type="file" name="page2" onChange={handleChange} />
          {files.page2 && <p className="filename">{files.page2.name}</p>}
        </div>

        <div className="input-group">
          <label>Pharmacy Bill (Page 3)</label>
          <input type="file" name="page3" onChange={handleChange} />
          {files.page3 && <p className="filename">{files.page3.name}</p>}
        </div>

        <button onClick={handleUpload}>Upload All Documents</button>
      </div>
    </div>
  );
}

export default App;