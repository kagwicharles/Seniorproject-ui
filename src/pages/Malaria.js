import { Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
// material
import { Container, Stack, Typography, Button } from '@mui/material';
// components
import Page from '../components/Page';
import FileUpload from '../components/FileUpload';

// ----------------------------------------------------------------------

export default function Malaria() {
  return (
    <Page title="Malaria">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Malaria Model
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
