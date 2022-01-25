import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';

// material
import { Stack, Button, Container, Typography, Box } from '@mui/material';

import FileUpload from '../components/FileUpload';
import Page from '../components/Page';

export default function Pneumonia() {
  return (
    <Page title="Pneumonia">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Pneumonia Model
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
