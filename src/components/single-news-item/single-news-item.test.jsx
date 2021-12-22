import { renderHook } from '@testing-library/react-hooks';
import useNewsItem from '../../hooks/use-news-item';
import SingleNewsItem from './single-news-item';


/* Case 1:  */
/* test('UseSingleNews should render', () => {

	<Route path="/item/:id" component={SingleNewsItem} />

	const { result } = renderHook(() => useNewsItem());
	expect(result.current.newsArray.length).toBe(3);

}); */


describe('<Header />', () => {

	jest.mock('react-router', () => ({
		useParams: jest.fn().mockReturnValue({ id: '123' }),
	}));

	it('renders', () => {
		const wrapper = shallow(<SingleNewsItem />);
		expect(wrapper).toBeTruthy();
	});

});