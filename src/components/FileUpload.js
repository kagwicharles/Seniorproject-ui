import React from 'react';

import { Stack, Box } from '@mui/material';

class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: '', imagePreviewUrl: '' };
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    const { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} alt="Diagnosis" />;
    } else {
      $imagePreview = <div className="previewText">Select an X-Ray Image to diagnose</div>;
    }

    return (
      <div className="previewComponent">
        <Stack spacing={2}>
          <Box sx={{ width: '50%', height: '50%' }}>
            <div className="imgPreview">{$imagePreview}</div>
          </Box>
          <form onSubmit={(e) => this._handleSubmit(e)}>
            <input className="fileInput" type="file" onChange={(e) => this._handleImageChange(e)} />
          </form>
        </Stack>
      </div>
    );
  }
}

export default FileUpload;
