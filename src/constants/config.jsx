export const APP_CONFIG = {
  appName: 'My Scalable App',
  version: '1.0.0',
  apiTimeout: 30000,
  itemsPerPage: 10,
};

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  SETTINGS: '/settings',
};

export const API_ENDPOINTS = {
  USERS: '/users',
  POSTS: '/posts',
  COMMENTS: '/comments',
};


export const NAVITEMS = ['Home', 'About', 'Dashboard', 'Contactus','Signin'];

export const sections = ['company', 'products', 'support', 'legal'];

export const CompanySections = ['About Us', 'Careers', 'Press', 'Blog'];

export const products = ['Features', 'Pricing', 'Security', 'Updates'];

export const support = ['Help Center', 'Contact Us', 'Documentation', 'FAQ'];

export const legal = ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Licenses'];

export const countryOptions = [
  { value: '', label: 'Select a country' },
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'in', label: 'India' }
];


export const CHUNK_SIZE = 5 * 1024 * 1024; // 5MB per chunk (you can change this)


export const accordionData = [
  {
    title: "What is React?",
    content: "React is a JavaScript library for building UI."
  },
  {
    title: "What is TailwindCSS?",
    content: "TailwindCSS is a utility-first CSS framework."
  },
    {
    title: "What is Redux?",
    content: "Redux is storemanagement Library."
  }
];




