import { renderHook } from '@testing-library/react-hooks';
import useItemList from "../../hooks/use-item-list";


describe('useItemList should render', () => {

  /* Case 1:  */
  test('The `add` could correct change `count`', () => {
    const { newsArray } = renderHook(() => useItemList());
    expect(newsArray.count).toBe(3);
  });


});