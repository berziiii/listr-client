import Ember from 'ember';

export default Ember.Component.extend({
  // tagName: 'ul',
  // classNames: ['listr-list'],
  // done: Ember.computed.alias('list.hidden'),
  // classNameBindings: ['hidden:listr-list--hidden'],
  store: Ember.inject.service(),
  actions: {

    submit() {
      let text = this.get('text');
      let listId = this.get('list.id')
      let store = this.get('store');
      let post = store.createRecord('item', {
        title: text,
        done: false,
        listId: listId
      })

      this.set('text', "");
      this.$('input').focus();

      post.save();
    },
  }
});
