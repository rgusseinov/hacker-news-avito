import React from "react";
import renderer from "react-test-renderer";
import ItemList from "./item-list";

describe('item component', () => {
	const loading = false;
	const isFail = false;
	const newsArray = [];

	it(`<ItemList /> should render`, () => {

		const tree = renderer
			.create(<ItemList
				item={item}
			/>)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

});

