export default function (server) {

  server.create('user', {name: 'Administrator', email: 'admin@example.com', password: '@dmin123', admin: true});
  server.createList('user', 5);

}
