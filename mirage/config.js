export default function () {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
  this.get('/users');
  this.get('/users/:id');

  this.post('/authenticate', ({
    users
  }, req) => {
    let body = {};
    req.requestBody.split('&').forEach(item => {

      item = item.split('=');

      body[decodeURIComponent(item[0])] = decodeURIComponent(item[1]);
    });
    let user = users.findBy({
      'email': body.username
    });
    if (user && user.password === body.password) {
      return {
        'user_id': user.id,
        'access_token': 'mock_token_value'

      }
    } else {
      return {ok: false, error: 'invalid credentials'}
    }
  })
}
