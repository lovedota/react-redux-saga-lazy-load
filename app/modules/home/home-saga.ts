import { call, put, takeEvery } from "redux-saga/effects";
import HomeServices from "./home-services";

function* fetchItems() {
   try {
      const items = yield call(HomeServices.getItems);

      yield put({type: "home/init/success", items});
   } catch (error) {
      yield put({type: "home/init/error", error});
   }
}

export default function* homeSaga() {
  yield takeEvery("home/init", fetchItems);
}
