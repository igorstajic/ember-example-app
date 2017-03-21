import Ember from 'ember';
const {
  Controller,
  inject,
  computed
} = Ember;
export default Controller.extend({
  currentUser: inject.service(),
  session: inject.service(),

  sidebarOpen: false,
  userMenuIsOpen: false,

  me: computed.alias('currentUser.user'),

  actions: {
    logout() {
      this.get('session').invalidate()
    }
  }
});
