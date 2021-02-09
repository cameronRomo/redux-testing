import * as actions from './index';

describe('actions', () => {
  it('should have a type of ADD_TODO', () => {
    const text = 'My new idea!';
    const id = 1;
    
    const newAction = actions.addTodo(text, id);

    expect(newAction.type).toEqual('ADD_TODO');
    expect(newAction.text).toEqual(text);
    expect(newAction.id).toEqual(id);
  })
})