import type { Culture } from './site.config';
export const TRANSLATIONS: Record<Culture, any> = {
  el: {
    nav: { home: 'Αρχική', menu: 'Μενού', about: 'Σχετικά', reviews: 'Κριτικές', contact: 'Κράτηση' },
    hero: { label: 'Από το 2018', title: 'Το καθημερινό σου', titleEm: 'τελετουργικό', subtitle: 'Εξαιρετικός καφές, φιλόξενη ατμόσφαιρα, η γειτονιά σου.', cta: 'Κάντε κράτηση', ctaSecondary: 'Δείτε το μενού' },
    stats: [ { value: '6+', label: 'Χρόνια' }, { value: '200k+', label: 'Καφέδες' }, { value: '4.9★', label: 'Βαθμολογία' } ],
    menu: { label: 'Επιλογές', title: 'Το μενού', titleEm: 'μας', items: [
      { name: 'Espresso', desc: 'Single origin Ethiopia, βατόμουρο & σοκολάτα', price: '€2.50' },
      { name: 'Cappuccino', desc: 'Διπλό espresso, αφρόγαλα, κανέλα', price: '€3.80' },
      { name: 'Cold Brew Tonic', desc: 'Cold brew, tonic water, lime zest', price: '€4.80' },
      { name: 'Avocado Toast', desc: 'Sourdough, αβοκάντο, αυγό ποσέ, za\'atar', price: '€9.00' },
      { name: 'Croissant Αμυγδάλου', desc: 'Βουτύρου, κρέμα αμυγδάλου, ζάχαρη άχνη', price: '€4.20' },
      { name: 'Bagel Σολομού', desc: 'Cream cheese, καπνιστός σολομός, κάπαρη', price: '€8.50' },
    ]},
    about: { label: 'Ποιοι είμαστε', title: 'Καφές με', titleEm: 'ψυχή', p1: 'Το Espresso Comune γεννήθηκε από την ανάγκη για έναν χώρο που νιώθει σαν σπίτι — όπου ο καφές είναι εξαιρετικός και η συντροφιά ακόμα καλύτερη.', p2: 'Δουλεύουμε με μικρές ευρωπαϊκές καβούρδες για να σου φέρουμε τον τέλειο κόκκο κάθε εποχή.', quote: 'Ένας καλός καφές αλλάζει την ημέρα σου.' },
    reviews: { label: 'Google Κριτικές', title: 'Τι λένε', titleEm: 'οι επισκέπτες', loading: 'Φόρτωση...', error: 'Δεν φορτώθηκαν κριτικές.', localGuide: 'Τοπικός Οδηγός', reviews: 'κριτικές' },
    contact: { label: 'Κράτηση', title: 'Κλείστε', titleEm: 'τραπέζι', namePlaceholder: 'Ονοματεπώνυμο *', emailPlaceholder: 'Email *', phonePlaceholder: 'Τηλέφωνο *', partySizePlaceholder: 'Άτομα', notesPlaceholder: 'Σχόλια', languageLabel: 'Γλώσσα', languageEl: 'Ελληνικά', languageEn: 'English', submit: 'Αποστολή', submitting: 'Αποστολή...', success: '✓ Η κράτησή σας ελήφθη!', error: 'Κάτι πήγε στραβά.', address: 'Κηφισίας 42, Αμπελόκηποι, Αθήνα', phone: '+30 210 699 4412', hours: 'Καθ. 07:00–22:00', openMap: 'Άνοιγμα στο Google Maps' },
    footer: { tagline: 'Ο καφές της γειτονιάς σου.', copy: '© 2025 Espresso Comune.' },
    validation: { required: 'Υποχρεωτικό πεδίο.', emailInvalid: 'Μη έγκυρο email.', phoneInvalid: 'Μη έγκυρο τηλέφωνο.' },
  },
  en: {
    nav: { home: 'Home', menu: 'Menu', about: 'About', reviews: 'Reviews', contact: 'Reserve' },
    hero: { label: 'Since 2018', title: 'Your daily', titleEm: 'ritual', subtitle: 'Exceptional coffee, welcoming atmosphere, your neighbourhood spot.', cta: 'Make a Reservation', ctaSecondary: 'View Menu' },
    stats: [ { value: '6+', label: 'Years' }, { value: '200k+', label: 'Coffees' }, { value: '4.9★', label: 'Rating' } ],
    menu: { label: 'Our Selection', title: 'The', titleEm: 'Menu', items: [
      { name: 'Espresso', desc: 'Single origin Ethiopia, blackberry & chocolate', price: '€2.50' },
      { name: 'Cappuccino', desc: 'Double espresso, steamed milk foam, cinnamon', price: '€3.80' },
      { name: 'Cold Brew Tonic', desc: 'Cold brew, tonic water, lime zest', price: '€4.80' },
      { name: 'Avocado Toast', desc: 'Sourdough, avocado, poached egg, za\'atar', price: '€9.00' },
      { name: 'Almond Croissant', desc: 'Butter pastry, almond cream, icing sugar', price: '€4.20' },
      { name: 'Salmon Bagel', desc: 'Cream cheese, smoked salmon, capers', price: '€8.50' },
    ]},
    about: { label: 'Who we are', title: 'Coffee with', titleEm: 'soul', p1: 'Espresso Comune was born from a need for a space that feels like home — where the coffee is exceptional and the company even better.', p2: 'We work with small European roasters to bring you the perfect bean every season.', quote: 'A good coffee changes your whole day.' },
    reviews: { label: 'Google Reviews', title: 'What our', titleEm: 'guests say', loading: 'Loading...', error: 'Could not load reviews.', localGuide: 'Local Guide', reviews: 'reviews' },
    contact: { label: 'Reservation', title: 'Reserve a', titleEm: 'table', namePlaceholder: 'Full Name *', emailPlaceholder: 'Email *', phonePlaceholder: 'Phone *', partySizePlaceholder: 'Guests', notesPlaceholder: 'Notes', languageLabel: 'Language', languageEl: 'Ελληνικά', languageEn: 'English', submit: 'Submit', submitting: 'Sending...', success: '✓ Reservation received!', error: 'Something went wrong.', address: '42 Kifisias Ave, Ambelokipi, Athens', phone: '+30 210 699 4412', hours: 'Daily 07:00–22:00', openMap: 'Open in Google Maps' },
    footer: { tagline: 'Your neighbourhood coffee.', copy: '© 2025 Espresso Comune.' },
    validation: { required: 'This field is required.', emailInvalid: 'Invalid email.', phoneInvalid: 'Invalid phone.' },
  },
};
