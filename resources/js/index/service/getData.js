import fetch from '../utils/fetch'

export const compare = ({ textarea1, textarea2 }) => fetch(
  'compare',
  'POST',
  { textarea1, textarea2 }
);
