import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Button, Container, Stack, Typography } from '@mui/material';
// components

import FileUpload from '../components/FileUpload';
import Page from '../components/Page';

export default function Covid19() {
  return (
    <Page title="Covid19">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Covid19 Model
          </Typography>
          <Button variant="contained" component={RouterLink} to="#">
            Make Prediction
          </Button>
        </Stack>
        <FileUpload />
      </Container>
    </Page>
  );
}
