import {
  alpha,
  AppBar,
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography
} from '@mui/material'
import { useMemo } from 'react'

// Иконки
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'

// Графики (pnpm add recharts)
import { CallButton } from './components/CallButton/CallButton'
import { CarBrands } from './components/CarBrands/CarBrands'
import { EquipmentGallery } from './components/EquipmentGallery/EquipmentGallery'
import { Footer } from './components/footer/Footer'
import { Services } from './components/Services/Services'
import { WriteToMe } from './components/WriteToMe/WriteToMe'

// --- ОСНОВНОЙ КОМПОНЕНТ ---
export const App = () => {
  const goldenAccent = '#ff9800'

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'dark',
          primary: {main: goldenAccent},
          background: {default: '#0a1929', paper: '#132f4c'},
        },
        shape: {borderRadius: 16},
        components: {
          MuiAppBar: {
            styleOverrides: {
              root: {
                background: '#0a1929',
                borderBottom: `2px solid ${goldenAccent}`,
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  borderColor: goldenAccent,
                  boxShadow: `0 0 25px 5px ${alpha(goldenAccent, 0.25)}`,
                  border: '2px solid',
                },
              },
            },
          },
          MuiCssBaseline: {
            styleOverrides: `
       @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
      `,
          },
        },
      }),
    [],
  )

  const handleConnect = () => window.open('https://wa.me/77051832533', '_blank')

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{minHeight: '100vh', bgcolor: 'background.default'}}>
        <AppBar position='sticky' elevation={0}>
          <Toolbar>
            <DirectionsCarIcon sx={{mr: 2, color: 'primary.main'}} />
            <Typography variant='h6' sx={{flexGrow: 1, fontWeight: 'bold'}}>
              AUTO-DIAG PRO
            </Typography>
            <Button
              variant='outlined'
              color='primary'
              onClick={handleConnect}
              sx={{borderRadius: 10, borderWidth: 2}}>
              WhatsApp Консультация
            </Button>
          </Toolbar>
        </AppBar>

        <Container sx={{py: 8}}>
          <Typography
            variant='h5'
            align='center'
            sx={{fontWeight: 900, color: 'white', mb: 6}}>
            Диагностика и ремонт электрооборудования автомобилей
          </Typography>

          {/* УСЛУГИ, services */}
          <Services />

          {/* ГАЛЕРЕЯ ОБОРУДОВАНИЯ */}
          <EquipmentGallery />

          {/* Напишите мне */}
          <WriteToMe />

          {/* МАРКИ */}
          <CarBrands/>
        </Container>

        {/* FOOTER */}
        <Footer />

        {/* КНОПКА ВЫЗОВА ДЛЯ МОБИЛЬНЫХ — ВСТАВЛЯЕМ СЮДА */}
        <CallButton />
      </Box>
    </ThemeProvider>
  )
}
