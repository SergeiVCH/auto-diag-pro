import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';

export const CallButton = () => {
    return (
        <div>
            <SpeedDial
          ariaLabel='Contact'
          sx={{
            position: 'fixed',
            bottom: 24,
            left: 24,
            display: {xs: 'flex', sm: 'none'},
            '& .MuiSpeedDial-fab': {
              bgcolor: '#fb923c',
              '&:hover': {bgcolor: '#f97316'},
            },
          }}
          icon={<SpeedDialIcon icon={<PhoneIcon />} />}
          direction='up'>
          <SpeedDialAction
            icon={<WhatsAppIcon sx={{color: '#25D366'}} />}
            tooltipTitle='WhatsApp'
            tooltipOpen
            onClick={() => window.open('https://wa.me/77051832533', '_blank')}
          />
          <SpeedDialAction
            icon={<PhoneIcon sx={{color: '#fb923c'}} />}
            tooltipTitle='+7 747 820 21 89'
            tooltipOpen
            onClick={() => window.open('tel:+77478202189')}
          />
          <SpeedDialAction
            icon={<PhoneIcon sx={{color: '#fb923c'}} />}
            tooltipTitle='+7 700 651 81 93'
            tooltipOpen
            onClick={() => window.open('tel:+77006518193')}
          />
        </SpeedDial>
        </div>
    );
};