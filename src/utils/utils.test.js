import { getProductImageLink } from './imageUtils';

describe('Image utils', () => {
  describe('Get product image URL', () => {
    it('should return url', () => {
      const product = {
        name: 'Samsung Galaxy S9 64GB',
        imageId: '1802434265'
      };

      const imageUrl = getProductImageLink(product);
      const expected =
        'http://medlogotyp.se//phone/1653696315/Samsung-Galaxy-S8-64GB.jpg';

      expect(imageUrl).toEqual(expected);
    });
  });
});
