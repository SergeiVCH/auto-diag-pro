import {
  alpha,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import Grid from '@mui/material/Grid'
import {motion} from 'framer-motion'
import * as React from 'react'
import {useState} from 'react'
import {SERVICES} from '../data/data'


export const WriteToMe = () => {
  const [booking, setBooking] = useState({
    name: '',
    phone: '',
    car: '',
    service: SERVICES[0].title,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBooking({...booking, [e.target.name]: e.target.value})
  }

  // Функция отправки (пока просто в WhatsApp с готовым текстом)
  const sendOrder = () => {
    const message = `Здравствуйте!
Заявка на диагностику:
Имя: ${booking.name}
Авто: ${booking.car}
Телефон: ${booking.phone}
Описание: ${booking.service}` // это наше новое текстовое поле

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/77051832533?text=${encodedMessage}`, '_blank')
  }

  return (
    <div>
      <Container maxWidth='md' sx={{py: 8}}>
        <motion.div
          initial={{opacity: 0, scale: 0.9}}
          whileInView={{opacity: 1, scale: 1}}
          viewport={{once: true}}>
          <Paper
            sx={{
              p: {xs: 3, md: 6},
              bgcolor: alpha('#132f4c', 0.8),
              border: '2px solid',
              borderColor: 'primary.main',
            }}>
            <Typography
              variant='h6'
              align='center'
              sx={{fontWeight: 900, mb: 4, color: 'white'}}>
              ЗАПИСЬ НА ДИАГНОСТИКУ
            </Typography>

            <Grid container spacing={3}>
              <Grid size={{xs: 12, sm: 6}}>
                <TextField
                  fullWidth
                  label='Ваше имя'
                  name='name'
                  variant='outlined'
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid size={{xs: 12, sm: 6}}>
                <TextField
                  fullWidth
                  label='Марка и модель авто'
                  name='car'
                  variant='outlined'
                  placeholder='Напр: Hyundai Tucson'
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid size={{xs: 12, sm: 6}}>
                <TextField
                  fullWidth
                  label='Номер телефона'
                  name='phone'
                  type='tel'
                  inputProps={{inputMode: 'tel'}}
                  variant='outlined'
                  placeholder='+7 (___) ___-__-__'
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid size={{xs: 12, sm: 6}}>
                <TextField
                  fullWidth
                  multiline
                  label='Описание проблемы'
                  name='service'
                  value={booking.service}
                  onChange={handleInputChange}
                  placeholder='Например: горит ошибка ABS, машина не заводится'
                  variant='outlined'
                  // Используем minRows и maxRows для гибкости или просто rows через sx
                  minRows={2}
                  sx={{
                    '& .MuiInputBase-root': {
                      // На мобилках (xs) будет одна высота, на sm и выше — другая
                      minHeight: {xs: '80px', sm: '120px'},
                    },
                  }}
                />
              </Grid>
              <Grid size={{xs: 12}}>
                <Button
                  fullWidth
                  variant='contained'
                  size='large'
                  onClick={sendOrder}
                  sx={{py: 2, fontWeight: 'bold', fontSize: '1.1rem'}}>
                  ОТПРАВИТЬ ЗАЯВКУ В WHATSAPP
                </Button>
                <Typography
                  variant='caption'
                  sx={{
                    display: 'block',
                    mt: 2,
                    textAlign: 'center',
                    opacity: 0.6,
                  }}>
                  * После нажатия данные сформируются в сообщение для мастера
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>
      </Container>
    </div>
  )
}
