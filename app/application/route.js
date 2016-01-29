import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return Ember.RSVP.hash({
      lists: this.store.findAll('list')
    })
  }
});
