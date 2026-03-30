import HandymanIcon from '@mui/icons-material/Handyman';
import { Box, Paper, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import { EQUIPMENT } from '../data/data';

export const EquipmentGallery = () => {
    return (
        <div>
            <Box sx={{mb: 12}}>
            <Stack direction='row' spacing={2} justifyContent='center' mb={6}>
              <HandymanIcon color='primary' fontSize='large' />
              <Typography variant='h5' sx={{fontWeight: 800}}>
                НАШЕ ОБОРУДОВАНИЕ
              </Typography>
            </Stack>
            <Grid container spacing={4}>
              {EQUIPMENT.map((item, i) => (
                <Grid size={{xs: 12, md: 4}} key={i}>
                  <motion.div
                    initial={{opacity: 0, scale: 0.9}} // Здесь можно сделать эффект легкого масштабирования
                    whileInView={{opacity: 1, scale: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.5, delay: i * 0.2}}>
                    <Paper
                      sx={{
                        overflow: 'hidden',
                        height: '100%',
                        '&:hover img': {transform: 'scale(1.1)'},
                      }}>
                      <Box sx={{height: 220, overflow: 'hidden'}}>
                        <img
                          src={item.src}
                          alt={item.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: '0.4s',
                          }}
                        />
                      </Box>
                      <Box sx={{p: 3}}>
                        <Typography
                          variant='h6'
                          gutterBottom
                          sx={{fontWeight: 700, color: 'white'}}>
                          {item.title}
                        </Typography>
                        <Typography
                          variant='body2'
                          sx={{color: 'white', opacity: 1}}>
                          {item.desc}
                        </Typography>
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
    );
};