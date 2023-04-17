import React, { useState } from 'react';
import axios from 'axios';

const UploadImage = () => {
  const [image, setImage] = useState(null);

  const handleUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);

    axios.post('/upload', formData)
      .then(res => {
        console.log(res.data.filename);
        // Do something with the filename (e.g. save it to the database)
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleUpload} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadImage;
