import newsReducer from './news';
import { loadNewsSuccess } from '../actions/news';

it(`<newsReducer /> news should be added`, () => {
  const newsId = 29645887;
  const newsList = [
    {
      by: 'darkscape',
      descendants: 63,
      id: 29645887,
      kids: [29647408],
      score: 152,
      time: 1640150882,
      title:
        'DeepMind’s New AI with a Memory Outperforms Algorithms 25 Times Its Size',
      type: 'story',
      url: 'https://singularityhub.com/2021/12/20/biggers-not-always-better-deepminds-new-language-ai-is-small-but-mighty/'
    },
    {
      by: 'Petiver',
      descendants: 56,
      id: 29645762,
      kids: [29646421, 29646567, 29646366, 29646196, 29647013],
      score: 105,
      time: 1640149280,
      title:
        'Scientists find preserved dinosaur embryo preparing to hatch like a bird',
      type: 'story',
      url: 'https://www.theguardian.com/science/2021/dec/21/scientists-find-perfectly-preserved-dinosaur-embryo-preparing-to-hatch-like-a-bird'
    }
  ];

  const initialState = {
    news: newsList,
    loading: false,
    isFail: false
  };

  const action = loadNewsSuccess(newsList);
  const newState = newsReducer(initialState, action);

  expect(newState.news[newsId]).toEqual(newsList[0]);
});
