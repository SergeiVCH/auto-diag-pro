import {Box, Paper, Typography} from '@mui/material'
import Grid from '@mui/material/Grid'
import {motion} from 'framer-motion'
import {SERVICES} from '../data/data'

export const Services = () => {
  return (
    <div>
      <Grid container spacing={3} sx={{mb: 10}}>
        {SERVICES.map((s, i) => (
          <Grid size={{xs: 12, sm: 6, md: 4}} key={i}>
            {/* 1. Добавляем оболочку для анимации */}
            <motion.div
              initial={{opacity: 0, y: 50}} // Начинаем: невидимый и смещен вниз на 50px
              whileInView={{opacity: 1, y: 0}} // Когда доскроллили: проявляется и встает на место
              viewport={{once: true, amount: 0.2}} // Сработает один раз, когда 20% карточки видно
              transition={{
                duration: 0.6, // Длительность подъема — 0.6 сек
                delay: i * 0.1, // Каждая следующая карточка ждет чуть дольше
              }}>
              {/* Твой существующий Paper (карточка) */}
              <Paper sx={{p: 4, height: '100%', textAlign: 'center'}}>
                <Box sx={{color: 'primary.main', mb: 2}}>{s.icon}</Box>
                <Typography variant='h6' sx={{fontWeight: 700, color: 'white'}}>
                  {s.title}
                </Typography>
                <Typography
                  variant='body2'
                  sx={{color: 'white', mt: 1, opacity: 1}}>
                  {s.desc}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
