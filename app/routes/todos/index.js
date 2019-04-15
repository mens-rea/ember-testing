import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [{task: "Study tests in ember", completed: true},{task: "meet with Billy", completed: false}]
        /* return this.store.findAll("todo"); */
    }
});
