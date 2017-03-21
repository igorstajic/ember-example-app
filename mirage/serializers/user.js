import BaseSerializer from './application';

export default BaseSerializer.extend({
  serialize(object, request) {
    let json = BaseSerializer.prototype.serialize.apply(this, arguments);

    console.log(json);

    return json;
  }
});
