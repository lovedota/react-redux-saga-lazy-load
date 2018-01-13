import { call, put, takeEvery } from "redux-saga/effects";
import AboutServices from "./contact-services";

function* fetchItems() {
   try {
      const items = yield call(AboutServices.getItems);

      yield put({type: "contact/init/success", items});
   } catch (error) {
      yield put({type: "contact/init/error", error});
   }
}

export default function* aboutSaga() {
  yield takeEvery("contact/init", fetchItems);
}
