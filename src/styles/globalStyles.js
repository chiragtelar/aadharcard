import { GlobalStyles as MuiGlobalStyles } from '@mui/material';

const GlobalStyles = () => (
  <MuiGlobalStyles
    styles={{
      '*': { boxSizing: 'border-box', margin: 0, padding: 0 },
      html: { scrollBehavior: 'smooth' },
      body: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        backgroundColor: '#f5f5f5',
      },
      a: { textDecoration: 'none', color: 'inherit' },
    }}
  />
);

export default GlobalStyles;
