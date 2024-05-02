import { dateFormats as defaultDateFormats } from 'strapi-helper-plugin';

const dateFormats = {
  ...defaultDateFormats,
  // Customise the format by uncommenting the one you wan to override it corresponds to the type of your field
  date: 'DD/MM/YYYY',
  datetime: 'DD/MM/YYYY HH:mm',
  // time: 'HH:mm A',
  timestamp: 'DD/MM/YYYY HH:mm',
};

export default dateFormats;