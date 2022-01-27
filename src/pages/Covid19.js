import { Link as RouterLink } from 'react-router-dom';
// material
import { Button, Container, Stack, Typography } from '@mui/material';

import React, { useState } from 'react';

import FileUpload from '../components/FileUpload';
import Page from '../components/Page';

export default function Covid19() {
  const [data, setFile] = useState({
    file: ''
  });

  const passData = (data) => {
    setFile(data);
    console.log(data);
  };

  return (
    <Page title="Covid19">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Covid19 Model
          </Typography>
        </Stack>
        <FileUpload passData={passData} />
      </Container>
    </Page>
  );
}
