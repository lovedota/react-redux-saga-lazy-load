import thumbnailDefault from './styles/images/thumbnail-default.jpg';

import * as moment from 'moment';
import { put, takeEvery, select } from 'redux-saga/effects';
import HomeServices from './home-services';

const NYTIMES_DOMAIN = 'http://www.nytimes.com/';

function convertModelToViewModel(item) {
  const thumbnail = item.multimedia.find((m) => m.subtype === 'thumbnail');

  return {
      url: item.web_url,
      description: item.snippet,
      headline: item.headline.main,
      thumbnail: thumbnail ? `${NYTIMES_DOMAIN}${thumbnail.url}` : thumbnailDefault,
      publishDate: item.pub_date ? moment(item.pub_date).format('MMMM Do YYYY, h:mm a') : null
  };
}

function* fetchItems(action) {
   try {
      const { q, page, isLoaded } = yield select((state: any) => state.home);

      const { data } = yield HomeServices.getNews(q, page);

      const { docs, meta } = data.response;

      yield put({
        type: 'home/load-more/success',
        data: {
            items: docs.map(convertModelToViewModel),
            total: meta.hits
        }
      });

      if (!isLoaded) {
        yield put({
            type: 'home/init/success',
        });
      }
   } catch (error) {
      yield put({type: 'home/load-more/error', error});
   }
}

export default function* homeSaga() {
  yield takeEvery('home/init', fetchItems);
  yield takeEvery('home/load-more', fetchItems);
}
