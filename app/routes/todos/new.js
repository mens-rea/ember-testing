import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.createRecord('todo');
    },
    setupController(controller, model){
        this._super(controller, model);
    },
    actions: {
        addTodo(newTask){
            alert(newTask.task);
            newTask.save().then(() => this.transitionTo('todos'));
        }
    }
});
