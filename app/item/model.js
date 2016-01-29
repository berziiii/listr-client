import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  done: DS.attr('boolean'),
  list: DS.belongsTo('list')
});
