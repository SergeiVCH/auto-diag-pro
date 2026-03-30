import {alpha} from '@mui/material'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

const goldenAccent = '#ff9800'

export const Footer = () => {
  return (
    <div>
      <Box
        sx={{
          py: 8,
          bgcolor: '#05101c',
          borderTop: `1px solid ${alpha(goldenAccent, 0.2)}`,
          textAlign: 'center',
        }}>
        <Typography variant='h4' sx={{mb: 2, fontWeight: 900}}>
          +7 (705) 183-25-33
        </Typography>
        <Typography variant='h4' sx={{mb: 2, fontWeight: 900}}>
          +7 (747) 820-21-89
        </Typography>
        <Typography variant='h4' sx={{mb: 2, fontWeight: 900}}>
          +7 (700) 651-81-93
        </Typography>
      </Box>
      <Box
        component='footer'
        sx={{
          py: 3,
          textAlign: 'center',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          mt: 'auto',
        }}>
        <Typography
          variant='h5'
          sx={{
            color: 'rgba(255, 255, 255, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
          }}>
          Разработка сайта:
          <Link
            href='https://sergei-dev.netlify.app'
            target='_blank'
            sx={{
              color: '#fb923c',
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'all 0.3s ease-in-out',
              display: 'inline-block', // Важно для корректного свечения
              px: 1, // Небольшой отступ по бокам, чтобы свечение не обрезалось
              textShadow: `
      0 0 8px rgba(251, 146, 60, 0.4),
      0 0 12px rgba(251, 146, 60, 0.2)
    `,
              '&:hover': {
                textDecoration: 'none',
                textShadow: `
        0 0 5px #fff,
        0 0 10px #fb923c,
        0 0 20px #fb923c
      `,
              },
            }}>
            Сергей Чертов
          </Link>
        </Typography>
      </Box>
    </div>
  )
}
