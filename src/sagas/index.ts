import { AllEffect, ForkEffect } from "redux-saga/effects";

export default function* rootSaga(): Generator<
	AllEffect<ForkEffect<void>>,
	void,
	unknown
> {
	// console.log("Hello");
}
