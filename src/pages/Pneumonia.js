// material
import { Stack, Button, Container, Typography, Box } from '@mui/material';

import React, { useState } from 'react';
import FileUpload from '../components/FileUpload';
import Page from '../components/Page';

export default function Pneumonia() {
  const [data, setFile] = useState({
    file: ''
  });

  const passData = (data) => {
    setFile(data);
    console.log(data);
  };

  return (
    <Page title="Pneumonia">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Pneumonia Model
          </Typography>
        </Stack>
        <FileUpload passData={passData} />
      </Container>
    </Page>
  );
}
