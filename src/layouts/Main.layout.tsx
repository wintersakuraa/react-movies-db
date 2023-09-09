import { FC } from 'react'

import { Container, CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Outlet } from 'react-router-dom'

import { Header } from 'src/components'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: ['"Open Sans"', 'Roboto'].join(','),
  },
})

export const MainLayout: FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />

      <Container maxWidth="xl" sx={{ mt: 6, textAlign: 'center' }}>
        <Outlet />
      </Container>
    </ThemeProvider>
  )
}
