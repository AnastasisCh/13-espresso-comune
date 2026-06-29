export type Theme = 'dark' | 'light';
export type Culture = 'el' | 'en';

export const SITE_CONFIG = {
  api: { baseUrl: 'https://marketswebapi-gde3hpftfdhuawaj.westeurope-01.azurewebsites.net', market: 'EspressoComune' },
  theme: {
    default: 'light' as Theme,
    colors: {
      dark: { background: '#1c1008', surface: '#2a1a0e', surfaceAlt: '#3a2418', text: '#f0e6d6', textMuted: 'rgba(240,230,214,0.5)', accent: '#d4854a', accentHover: '#e8a060', border: 'rgba(212,133,74,0.2)', navBg: 'rgba(28,16,8,0.97)', overlay: 'rgba(28,16,8,0.65)' },
      light: { background: '#fdf6ee', surface: '#ffffff', surfaceAlt: '#f5ede0', text: '#1c1008', textMuted: 'rgba(28,16,8,0.5)', accent: '#c06030', accentHover: '#a04020', border: 'rgba(192,96,48,0.18)', navBg: 'rgba(253,246,238,0.97)', overlay: 'rgba(28,16,8,0.55)' },
    },
  },
  images: {
    hero: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=85',
    about: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=70',
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=500&q=70',
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=70',
    ],
  },
  business: { name: 'Espresso Comune', address: 'Κηφισίας 42, Αμπελόκηποι, Αθήνα', addressEn: '42 Kifisias Ave, Ambelokipi, Athens', phone: '+30 210 699 4412', email: 'hello@espressocomune.gr', hours: 'Καθ. 07:00–22:00', hoursEn: 'Daily 07:00–22:00', social: { instagram: 'https://www.instagram.com/espressocomune.athens', facebook: 'https://www.facebook.com/espressocomune' } },
  reservation: { defaultTime: '09:00', defaultPartySize: 2 },
  location: { lat: 37.9832, lng: 23.7411, zoom: 15, mapsUrl: 'https://www.google.com/maps?q=37.9832,23.7411' },
};
