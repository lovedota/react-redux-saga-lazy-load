import { call, put, takeEvery } from 'redux-saga/effects';
import AboutServices from './about-services';

function* fetchItems() {
   try {
      const items = yield call(AboutServices.getItems);

      yield put({type: 'about/init/success', items});
   } catch (error) {
      yield put({type: 'about/init/error', error});
   }
}

export default function* aboutSaga() {
  yield takeEvery('about/init', fetchItems);
}
