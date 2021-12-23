import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import renderer from 'react-test-renderer';
import Item from './item';

describe('item component', () => {
  const history = createMemoryHistory();
  const item = {
    id: 1,
    score: 0,
    url: 'http://abc.com',
    title: 'Here the name of article',
    by: 'Ruslan',
    descendants: 50
  };

  it(`<Item /> should render`, () => {
    const tree = renderer
      .create(
        <Router history={history}>
          <Item item={item} />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
