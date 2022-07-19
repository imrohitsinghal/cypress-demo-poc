import { faker } from '@faker-js/faker'

export const userAddress = {
  country: faker.address.country(),
  name: faker.name.firstName().trim(),
  mobile: faker.random.numeric(8),
  zip: faker.address.zipCode('####'),
  address: faker.address.buildingNumber(),
  city: faker.address.cityName(),
  state: faker.address.state(),
}
