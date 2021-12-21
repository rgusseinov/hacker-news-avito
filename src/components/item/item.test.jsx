import React from "react";
import renderer from "react-test-renderer";
import Item from "./item";

describe('item component', () => {
  
  const item = {
    id: 1,
    score: 0,
    url: 'some url here',
    title: 'Here the name of article',
    by: 'Ruslan',
    descendants: 50
  };

  it(`<Item /> should render`, () => {
    const tree = renderer
    .create(<Item
      item={item}
    />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});

