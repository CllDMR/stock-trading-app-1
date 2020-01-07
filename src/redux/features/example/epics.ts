import { ofType, Epic } from "redux-observable";
import { delay, tap } from "rxjs/operators";
import { Example_GET_ONE_START } from "@constants/Example";
import { RootActionTypes, RootState } from "@typings/MyRedux";

export const getEpic: Epic<
  RootActionTypes,
  RootActionTypes,
  RootState
> = action$ =>
  action$.pipe(
    ofType(Example_GET_ONE_START),
    delay(1000),
    tap(() => console.log("asdsda"))
  );
