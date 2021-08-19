import { takeEvery, call, put } from "redux-saga/effects";
import { FETCH_PRODUCTS } from "../types/product_type";
import { setProducts } from "../actions/product_action";
import product_service from "../services/product_service";

function* fetchProducts() {
  try {
    const products = yield call(product_service.getAllProducts);
    yield put(setProducts(products));
  } catch (e) {}
}

export function* waitForFetchProducts() {
  yield takeEvery(FETCH_PRODUCTS, fetchProducts);
}
