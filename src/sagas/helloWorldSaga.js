import axios from "axios";
import { call, put } from "redux-saga/effects";

const fetchHelloWorld = () => {
  return axios.get("api/hellos");
};

export function* helloWorldSaga() {
  try {
    const response = yield call(fetchHelloWorld);
    const hellos = response.data;
    yield put({ type: "LOAD_HELLO_WORLD_SUCCESS", hellos });
  } catch (error) {
    yield put({ type: "LOAD_HELLO_WORLD_ERROR", error });
  }
}

const fetchHelloWorldById = id => {
  return axios.get("api/hello/");
};

export function* helloWorldByIdSaga() {
  try {
    const response = yield call(fetchHelloWorldById);
    const hello = response.data;
    yield put({ type: "LOAD_HELLO_WORLD_ID_SUCCESS", hello });
  } catch (error) {
    yield put({ type: "LOAD_HELLO_WORLD_ID_ERROR", error });
  }
}
