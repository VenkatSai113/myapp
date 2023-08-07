import React, { useState } from 'react';

const NewTab = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Create a preview URL for the selected file
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileInputChange} />

      {/* Render image preview */}
      {selectedFile && selectedFile.type.startsWith('image') && (
        <img src={previewUrl} alt="Preview" style={{ width: '300px', height: 'auto' }} />
      )}

      {/* Render video preview */}
      {selectedFile && selectedFile.type.startsWith('video') && (
        <video controls style={{ width: '300px', height: 'auto' }}>
          <source src={previewUrl} type={selectedFile.type} />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default NewTab;
