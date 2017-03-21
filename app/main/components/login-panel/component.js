import Ember from 'ember';
const {
  Component,
  inject: {
    service
  }
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

      this.get('session').authenticate('authenticator:oauth2', email, password).then(res => {
        console.log('res:', res);

      }).catch((reason) => {
        console.log('err:', reason);
        this.set('errorMessage', reason.error || reason);
      });

    }
  }
});
