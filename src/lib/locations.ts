import { Location } from '@/lib/types';

export const locations: Location[] = [
  {
    name: 'Frederick, MD',
    phone: '+13014506717',
    email: 'frederickxrays@omaxdocs.com',
    street: '6550 Mercantile Drive E Suite 101',
    city: 'Frederick',
    state: 'MD',
    zip: '21703',
    country: 'United States',
    hours: {
      monday: '7:00 AM - 3:00 PM',
      tuesday: '7:30 AM - 4:00 PM',
      wednesday: '7:00 AM - 3:00 PM',
      thursday: '7:30 AM - 4:00 PM',
      friday: 'Closed',
      saturday: 'Closed',
      sunday: 'Closed'
    },
    timezone: 'EST',
  },
  {
    name: 'Hagerstown, MD',
    phone: '+13015070064',
    email: 'hagerstownxrays@omaxdocs.com',
    street: '1144 Opal Court',
    city: 'Hagerstown',
    state: 'MD',
    zip: '21740',
    country: 'United States',
    hours: {
      monday: '7:00 AM - 4:00 PM',
      tuesday: '7:00 AM - 3:00 PM',
      wednesday: 'Closed',
      thursday: '7:00 AM - 4:00 PM',
      friday: '7:00 AM - 1:00 PM',
      saturday: 'Closed',
      sunday: 'Closed'
    },
    timezone: 'EST',
  },
  {
    name: 'Martinsburg, WV',
    phone: '+13045775063',
    email: 'xraywv@omaxdocs.com',
    street: '1007 Sushruta Dr',
    city: 'Martinsburg',
    state: 'WV',
    zip: '25401',
    country: 'United States',
    hours: {
      monday: 'Closed',
      tuesday: '7:00 AM - 3:00 PM',
      wednesday: '7:00 AM - 3:00 PM',
      thursday: '7:00 AM - 4:00 PM',
      friday: '7:00 AM - 1:00 PM',
      saturday: 'Closed',
      sunday: 'Closed'
    },
    timezone: 'EST',
  },
];
