import { takeLatest } from "redux-saga/effects";
import { helloWorldSaga, helloWorldByIdSaga } from "./helloWorldSaga";

export default function* watcherSaga() {
  yield takeLatest("LOAD_HELLO_WORLD", helloWorldSaga);
  yield takeLatest("LOAD_HELLO_WORLD_ID", helloWorldByIdSaga);
}
