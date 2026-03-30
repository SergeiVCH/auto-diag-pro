import { Box, Paper, Typography } from '@mui/material';
import { CAR_BRANDS } from '../data/data';

export const CarBrands = () => {
    return (
        <div>
            <Box sx={{py: 6, overflow: 'hidden', bgcolor: 'transparent'}}>
            <Typography
              variant='overline'
              sx={{
                display: 'block',
                textAlign: 'center',
                opacity: 0.5,
                letterSpacing: 3,
                mb: 4,
              }}>
              РАБОТАЕМ СО ВСЕМИ МАРКАМИ
            </Typography>

            <Box
              sx={{
                display: 'flex',
                width: 'max-content',
                animation: 'marquee 40s linear infinite',
                '&:hover': {animationPlayState: 'paused'},
              }}>
              {[...CAR_BRANDS, ...CAR_BRANDS].map((brand, i) => (
                <Box key={i} sx={{px: 1}}>
                  <Paper
                    variant='outlined'
                    sx={{
                      py: 1.5,
                      px: 4,
                      minWidth: 140,
                      textAlign: 'center',
                      bgcolor: 'transparent',
                      borderColor: 'rgba(255,152,0,0.2)',
                    }}>
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                        color: 'primary.main',
                        whiteSpace: 'nowrap',
                      }}>
                      {brand}
                    </Typography>
                  </Paper>
                </Box>
              ))}
            </Box>
          </Box>
        </div>
    );
};