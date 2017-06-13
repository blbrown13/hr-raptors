import React from 'react';

export default function reducer(state = {
  code: {},
  fetching: false,
  fetched: false,
  error: null,
  tree: {},
  saving: false,
  saved: false,
  loading: false,
  loaded: false,
  projects: [],
}, action) {

  switch (action.type) {
  case 'FETCH_CODE': {
    return Object.assign({}, state, {fetching: true});
  }
  case 'FETCH_CODE_REJECTED': {
    return Object.assign({}, state, {fetching: false, error: action.payload});
  }
  case 'FETCH_CODE_FULFILLED': {
    return Object.assign({}, state, {fetching: false, fetched: true, code: action.payload});
  }
  case 'CLEAR_CODE': {
    return Object.assign({}, state, {componentsLinkedList: {} });
  }
  case 'UPDATE_TREE': {
    return Object.assign({}, state, { tree: action.payload.tree });
  }
  case 'SAVE_PROJECT': {
    return Object.assign({}, state, {saving: true});
  }
  case 'SAVE_PROJECT_REJECTED': {
    return Object.assign({}, state, {saving: false, error: action.payload});
  }
  case 'SAVE_PROJECT_FULFILLED': {
    return Object.assign({}, state, {saving: false, saved: true});
  }
  case 'LOAD_PROJECTS': {
    return Object.assign({}, state, {loading: true});
  }
  case 'LOAD_PROJECTS_REJECTED': {
    return Object.assign({}, state, {loading: false, error: action.payload});
  }
  case 'LOAD_PROJECTS_FULFILLED': {
    return Object.assign({}, state, {loading: false, loaded: true, projects: action.payload });
  }
}

  return state;
}
