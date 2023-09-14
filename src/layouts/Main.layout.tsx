import { FC, useEffect, useMemo } from 'react'

import { Container, CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Outlet } from 'react-router-dom'

import { Header } from 'src/components'
import { useAppDispatch, useAppSelector } from 'src/hooks'
import { themeActions } from 'src/redux'
import { ThemeMode } from 'src/types'

export const MainLayout: FC = () => {
  const dispatch = useAppDispatch()
  const { mode } = useAppSelector((state) => state.theme)

  useEffect(() => {
    dispatch(themeActions.getFromLocalStorage())
  }, [])

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode || ThemeMode.DARK,
        },
        typography: {
          fontFamily: ['Poppins', 'Roboto'].join(','),
        },
      }),
    [mode],
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />

      <Container maxWidth="xl" sx={{ mt: 6, textAlign: 'center' }}>
        <Outlet />
      </Container>
    </ThemeProvider>
  )
}
