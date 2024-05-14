import { CreateRestaurantDto } from './restaurant.dto';

describe('RestaurantDto', () => {
  it('should be defined', () => {
    expect(new CreateRestaurantDto()).toBeDefined();
  });
});
