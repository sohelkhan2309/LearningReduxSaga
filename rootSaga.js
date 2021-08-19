import { all } from "redux-saga/effects";
import { waitForFetchProducts } from "./sagas/product_saga";

export default function* rootSaga() {
  yield all([waitForFetchProducts()]);
}
