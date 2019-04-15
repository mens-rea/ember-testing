import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | todos', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /todos', async function(assert) {
    await visit('/todos');

    assert.equal(currentURL(), '/todos');
  });

  test('should add new todo', async function(assert){
    await visit('/todos/new');
    fillIn('input.task', 'a new todo')
    click('button.submit');
  });
});
