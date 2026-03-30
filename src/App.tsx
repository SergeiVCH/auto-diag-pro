import {
  alpha,
  AppBar,
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  Link,
  Paper,
  Stack,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material'
import Grid from '@mui/material/Grid'
import {useEffect, useMemo, useState} from 'react'

// Иконки
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull'
import BuildIcon from '@mui/icons-material/Build'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import EngineeringIcon from '@mui/icons-material/Engineering'
import HandymanIcon from '@mui/icons-material/Handyman'
import SensorsIcon from '@mui/icons-material/Sensors'
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent'
import SpeedIcon from '@mui/icons-material/Speed'

// Графики (pnpm add recharts)
import {motion} from 'framer-motion'
import {Line, LineChart, ResponsiveContainer, YAxis} from 'recharts'

import PhoneIcon from '@mui/icons-material/Phone'

import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
// --- ДАННЫЕ ---
const SERVICES = [
  {
    title: '',
    desc: 'Чтение DTC ошибок, анализ параметров через OBD-II.',
    icon: <SettingsInputComponentIcon sx={{fontSize: 40}} />,
  },
  {
    title: 'Ремонт стартеров и генераторов',
    desc: 'Проверка на стенде, замена щеток и подшипников.',
    icon: <EngineeringIcon sx={{fontSize: 40}} />,
  },
  {
    title: 'Топливная система',
    desc: 'Замер давления и чистка форсунок.',
    icon: <SpeedIcon sx={{fontSize: 40}} />,
  },
  {
    title: 'Обслуживание АКБ',
    desc: 'Зарядка, восстановление и проверка нагрузкой.',
    icon: <BatteryChargingFullIcon sx={{fontSize: 40}} />,
  },
  {
    title: 'Дымогенератор',
    desc: 'Поиск подсосов воздуха во впускной системе.',
    icon: <DirectionsCarIcon sx={{fontSize: 40}} />,
  },
  {
    title: 'Ремонт автоэлектрики',
    desc: 'Поиск обрывов и ремонт проводки.',
    icon: <BuildIcon sx={{fontSize: 40}} />,
  },
]

const EQUIPMENT = [
  {
    title: 'LAUNCH PRO',
    desc: 'Дилерский уровень: чтение данных, адаптации и кодирование блоков.',
    src: 'https://i.ibb.co.com/67Jv1mnK/IMG-1635.jpg',
  },
  {
    title: 'Дымогенератор G-Smoke',
    desc: 'Точный поиск утечек воздуха во впускной и вакуумной системах.',
    src: 'https://i.ibb.co.com/wZwyn3fw/Screenshot-1.jpg',
  },
  {
    title: 'Стенд чистки форсунок',
    desc: 'Проверка факела распыла и ультразвуковая очистка форсунок.',
    src: 'https://i.ibb.co.com/FL3kZXz7/Whats-App-Image-2026-03-19-at-08-58-19.jpg',
  },
  {
    title: 'Сканматик 2',
    desc: 'Сканматик 2 (и его обновленная версия 2 PRO) — это профессиональный мультимарочный автосканер, предназначенный для диагностики электронных систем управления современных автомобилей. Это одно из самых популярных и уважаемых устройств среди диагностов в СНГ.',
    src: 'https://i.ibb.co.com/RTX0bNLc/a3fc10be11c57c319fec04cfb87720ed.jpg',
  },
  {
    title: 'Лаборатория "Мотор-Мастер"',
    desc: 'Комплекс «Мотор-Мастер» (Motor-Master) — это профессиональное российское оборудование для чип-тюнинга и глубокой диагностики систем управления двигателем. Чаще всего под этим названием подразумевают связку программного обеспечения и аппаратных модулей (таких как Diag-2 или Scan Master CAN)',
    src: ' https://i.ibb.co.com/VcMPd656/full-img-f313d690f244-5.jpg',
  },
  {
    title: 'ThinkScan 689 BT',
    desc: 'Сканер Thinkscan 689BT — это мощное мультимарочное устройство, которое поддерживает более 140 марок автомобилей со всего мира (Азия, Европа, Америка, Китай). Поддерживаются практически все популярные бренды авто. Начиная с 1992 по 2026 годы выпуска автомобилей',
    src: 'https://i.ebayimg.com/images/g/dhIAAOSwEYtoCKwl/s-l1600.jpg',
  },
  {
    title: 'Стенд КИ-968',
    desc: 'Точность 100%: Мы имитируем реальные нагрузки двигателя. Если генератор «сбоит» только на высоких оборотах — мы это увидим. Честный ремонт: Мы меняем только то, что реально вышло из строя (реле, диодный мост или щетки), экономя ваш бюджет. Проверка под нагрузкой: Ваш стартер крутит «вяло»? Мы замерим пусковой ток и найдем причину за 15 минут.',
    src: 'https://avatars.mds.yandex.net/i?id=fa272ffd4adf81d379b616fb2ade2515_l-5273845-images-thumbs&n=13',
  },
  {
    title: 'ППЯ',
    desc: 'Прибор ППЯ533 предназначен для проверки обмоток якорей и катушек возбуждения автотракторных генераторов и стартеров, а также для размагничивания постоянных магнитов.',
    src: 'https://i.ytimg.com/vi/XLmQr0pPHww/hqdefault.jpg',
  },
  {
    title: 'Замер давления топливной системы',
    desc: 'Замер давления в топливной магистрали — это не просто техническая процедура, а своеобразная «диагностика пульса» вашего автомобиля. Это момент истинной проверки здоровья двигателя, когда цифры на манометре рассказывают историю о состоянии бензонасоса, чистоте фильтров и исправности регуляторов',
    src: 'https://i.ibb.co.com/MrPZ99j/video-Preview.jpg',
  },
  {
    title: 'Комплексная проверка компресии двигателя',
    desc: 'Замер компрессии — это один из самых эффективных способов оценить «здоровье» поршневой группы и клапанного механизма без разборки двигателя. Одновременный замер компрессии на всех цилиндрах',
    src: 'https://i.ibb.co.com/WvND493Z/Whats-App-Image-2026-03-19-at-09-04-12.jpg',
  },
]

const CAR_BRANDS = [
  'Toyota',
  'Lexus',
  'Hyundai',
  'Kia',
  'Chevrolet',
  'Nissan',
  'Opel',
  'BMW',
  'Ford',
  'Subaru',
  'Audi',
  'Skoda',
  'Honda',
  'Suzuki',
  'Volvo',
  'Peugeot',
  'Reno',
  'Geely',
  'Chery',
  'Haval',
  'Lifan',
  'Chrysler',
  'Mercedes-Benz',
]

// --- КОМПОНЕНТ ГРАФИКА ---
const LiveDashboard = () => {
  const [rpm, setRpm] = useState(800)
  const [history, setHistory] = useState(
    Array.from({length: 20}, (_, i) => ({t: i, v: 800})),
  )

  useEffect(() => {
    const interval = setInterval(() => {
      const nextRpm = Math.floor(Math.random() * (820 - 780 + 1)) + 780
      setRpm(nextRpm)
      setHistory((prev) => [...prev.slice(1), {t: Date.now(), v: nextRpm}])
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{opacity: 0, x: -100}} // Вылетает слева
      whileInView={{opacity: 1, x: 0}}
      transition={{duration: 0.8, ease: 'easeOut'}}
      viewport={{once: true}}>
      <Paper
        sx={{
          p: 3,
          bgcolor: alpha('#132f4c', 0.5),
          backdropFilter: 'blur(10px)',
        }}>
        <Stack direction='row' spacing={2} alignItems='center' mb={2}>
          <SensorsIcon color='primary' />
          <Typography variant='h6'>LIVE DATA</Typography>
        </Stack>
        <Typography variant='h3' color='primary' sx={{fontWeight: 900}}>
          {rpm} RPM
        </Typography>
        <Box sx={{width: '100%', height: 80, mt: 2}}>
          <ResponsiveContainer>
            <LineChart data={history}>
              <YAxis domain={[600, 1000]} hide />
              <Line
                type='monotone'
                dataKey='v'
                stroke='#ff9800'
                strokeWidth={3}
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Paper>
    </motion.div>
    //
  )
}

// --- ОСНОВНОЙ КОМПОНЕНТ ---
export const App = () => {
  const [booking, setBooking] = useState({
    name: '',
    phone: '',
    car: '',
    service: SERVICES[0].title,
  })
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
            variant='h4'
            align='center'
            sx={{fontWeight: 900, color: 'white', mb: 6}}>
            Диагностика и ремонт электрооборудования автомобилей
          </Typography>

          {/* УСЛУГИ */}
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
                    <Typography
                      variant='h6'
                      sx={{fontWeight: 700, color: 'white'}}>
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

          {/* ЖИВЫЕ ДАННЫЕ */}
          {/* <Grid container spacing={4} alignItems='center' sx={{mb: 12}}>
            <Grid size={{xs: 12, md: 5}}>
              <LiveDashboard />
            </Grid>
            <Grid size={{xs: 12, md: 7}}>
              <Typography variant='h4' sx={{fontWeight: 800, mb: 2}}>
                ТОЧНЫЕ ДАННЫЕ
              </Typography>
              <Typography sx={{opacity: 0.7, fontSize: '1.1rem'}}>
                Мы не гадаем на кофейной гуще. Используя графический анализ
                параметров, мы видим отклонения в работе датчиков еще до того,
                как они полностью выйдут из строя.
              </Typography>
            </Grid>
          </Grid> */}

          {/* ГАЛЕРЕЯ ОБОРУДОВАНИЯ */}
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
                      * После нажатия данные сформируются в сообщение для
                      мастера
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </motion.div>
          </Container>

          {/* МАРКИ */}
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
        </Container>

        {/* FOOTER */}
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
          {/* <Button
            variant='contained'
            size='large'
            onClick={handleConnect}
            sx={{px: 6, py: 1.5, fontWeight: 'bold'}}>
            WhatsApp Консультация
          </Button>
          <Typography variant='body2' sx={{mt: 3, opacity: 0.4}}>

          </Typography> */}
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
        {/* КНОПКА ВЫЗОВА ДЛЯ МОБИЛЬНЫХ — ВСТАВЛЯЕМ СЮДА */}
        {/* <Fab 
          aria-label="call" 
          href="tel:+77051832533"
          sx={{ 
            position: 'fixed', 
            bottom: 24, 
            left: 24, 
            display: { xs: 'flex', sm: 'none' }, // Скрыта на ПК, видна на мобилках
            bgcolor: '#fb923c', 
            color: 'white',
            zIndex: 1000,
            boxShadow: '0 0 15px rgba(251, 146, 60, 0.5)',
            '&:hover': { 
              bgcolor: '#f97316',
              boxShadow: '0 0 20px rgba(251, 146, 60, 0.8)',
            } 
          }}
        >
          <PhoneIcon />
        </Fab> */}

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
      </Box>
    </ThemeProvider>
  )
}
