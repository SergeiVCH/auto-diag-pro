import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull'
import BuildIcon from '@mui/icons-material/Build'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import EngineeringIcon from '@mui/icons-material/Engineering'
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent'
import SpeedIcon from '@mui/icons-material/Speed'
// --- ДАННЫЕ ---
export const SERVICES = [
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

export const EQUIPMENT = [
  {
    title: 'LAUNCH X431 Master',
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

export const CAR_BRANDS = [
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
