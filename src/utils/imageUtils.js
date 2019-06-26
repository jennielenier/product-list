export const getProductImageLink = product => {
  const baseUrl = 'http://medlogotyp.se/phone/';
  return `${baseUrl}/${product.imageId}/${product.name.replace(
    /[^a-z0-9]/gim,
    '-'
  )}.jpg`;
};
