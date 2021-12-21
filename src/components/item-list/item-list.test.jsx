import React from "react";
import renderer from "react-test-renderer";
import ItemList from "./item-list";

describe('item component', () => {
	const item = {
		id: 1,
		score: 0,
		url: 'http://abc.com',
		title: 'Here the name of article',
		by: 'Ruslan',
		descendants: 50
	};

	it(`<ItemList /> should render`, () => {

		const tree = renderer
			.create(<ItemList
				item={item}
			/>)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

});

