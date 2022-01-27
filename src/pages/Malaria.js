// material
import { Container, Stack, Typography, Button } from '@mui/material';

import React, { useState } from 'react';

import Page from '../components/Page';
import FileUpload from '../components/FileUpload';

// ----------------------------------------------------------------------

export default function Malaria() {
  const [data, setFile] = useState({
    file: ''
  });

  const passData = (data) => {
    setFile(data);
    console.log(data);
  };

  return (
    <Page title="Malaria">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Malaria Model
          </Typography>
        </Stack>
        <FileUpload passData={passData} />
      </Container>
    </Page>
  );
}
