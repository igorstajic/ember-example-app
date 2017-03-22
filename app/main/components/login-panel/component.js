import Ember from 'ember';
const {
  Component,
  inject: {
    service
  },
  Logger
} = Ember;
export default Component.extend({
  classNames: ['component-login-panel'],
  session: service(),
  actions: {
    login() {
      let {
        email,
        password
      } = this.getProperties('email', 'password');

      this.get('session').authenticate('authenticator:oauth2', email, password).then(() => {
        Logger.debug('Logged in.');
      }).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });

    }
  }
});
