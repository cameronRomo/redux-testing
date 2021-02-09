import { todosReducer } from './todosReducer';
import * as actions from '../actions/index';

describe('todosReducer', () => {
  it('should return the correct initial state', () => {
    // setup
      // need the current state (undefined)
    const currentState = undefined;
      // need an action obj (can be a blank/empty obj)
    const action = { type: null };
    // execution
      // call my reducer, saving the state that i get back
    const state = todosReducer(currentState, action)
    // assertion 
      // make sure the initial state is an empty array
    expect(state).toEqual([])
  })

  it('should add a new todo to state', () => {
    //setup
    const text = 'I have an Idea';
    const id = 0
      // current state (empty array)
    const currentState = [];
    const newAction = actions.addTodo(text, id)
    const expected = [{text, id, completed: false}]
      // need an action with type ADD_TODO
      // const action = { type: 'ADD_TODO' }
    // execution
      // call our reducer passing in current state and action
    const state = todosReducer(currentState, newAction);
      // save the new state
    // assertion
      // make sure our state has a new todo
    expect(state).toEqual(expected);
  })
})