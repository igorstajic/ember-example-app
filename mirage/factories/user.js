import {
  Factory,
  faker
} from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `Person ${i}`;
  },
  email() {
    return faker.internet.email();
  },
  admin: false,
  avatar() {
    return faker.internet.avatar();
  }
});
