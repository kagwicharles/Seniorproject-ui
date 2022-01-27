import React from 'react';

import TypeAnimation from 'react-type-animation';

import { Stack, Box, Button, Grid } from '@mui/material';
import { performDiagnosis } from '../services/ModelService';

class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: '', imagePreviewUrl: '' };
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
    performDiagnosis(this.state.file);
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
    this.props.passData(file);
  }

  render() {
    const { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} alt="Diagnosis" />;
    } else {
      $imagePreview = (
        <div className="previewText">
          <TypeAnimation
            sequence={['Select an X-Ray Image to diagnose']}
            wrapper="p"
            repeat={3}
            cursor={false}
          />
        </div>
      );
    }

    return (
      <div className="previewComponent">
        <Stack>
          <p id="notification-area" className="p-2 rounded" />
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <Box>
                <div className="imgPreview">{$imagePreview}</div>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <form onSubmit={(e) => this._handleSubmit(e)} encType="multipart/form-data">
                <Stack spacing={4}>
                  <input
                    className="fileInput"
                    type="file"
                    name="myfile"
                    onChange={(e) => this._handleImageChange(e)}
                  />
                  <Box>
                    <Button variant="contained" type="submit">
                      Predict
                    </Button>
                  </Box>
                </Stack>
              </form>
            </Grid>
          </Grid>
        </Stack>
      </div>
    );
  }
}

export default FileUpload;
