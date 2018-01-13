import thumbnailDefault from './styles/images/thumbnail-default.jpg';

import { put, takeEvery, select } from 'redux-saga/effects';

import HomeServices from './home-services';

const NYTIMES_DOMAIN = 'http://www.nytimes.com/';

function convertModelToViewModel(item) {
  const thumbnail = item.multimedia.find((m) => m.subtype === 'thumbnail');

  return {
      url: item.web_url,
      description: item.snippet,
      headline: item.headline.main,
      thumbnail: thumbnail ? `${NYTIMES_DOMAIN}${thumbnail.url}` : thumbnailDefault
  };
}

function* fetchItems(action) {
   try {
      const { q, page } = yield select((state: any) => state.page);

      const { data } = yield HomeServices.getNews(q, page);

      const { docs, meta } = data.response;

      yield put({
        type: 'home/init/success',
        items: docs.map(convertModelToViewModel),
        total: meta.hits
      });
   } catch (error) {
      yield put({type: 'home/init/error', error});
   }
}

export default function* homeSaga() {
  yield takeEvery('home/init', fetchItems);
}
