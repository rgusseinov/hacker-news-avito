import { renderHook } from '@testing-library/react-hooks';
import { Route } from 'react-router-dom';
import useNewsItem from '../../hooks/use-news-item';
import SingleNewsItem from './single-news-item';


/* Case 1:  */
test('UseSingleNews should render', () => {

	const componentWrapper = () => {
		return <Route path="/item/:id" component={SingleNewsItem} />
	}

	const { result } = renderHook(() => useNewsItem, { componentWrapper });
	expect(result.current.newsArray.length).toBe(3);

});