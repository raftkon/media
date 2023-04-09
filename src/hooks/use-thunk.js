import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

export const useThunk = (thunk) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  const runThunk = useCallback(
    (arg) => {
      setIsLoading(true);
      // dispatch returns a 'broken' promise where the .then() is ran whether
      // the promise is fulfilled or rejected. We can use .unwrap() so that
      // the dispatch function return a regular promise
      dispatch(thunk(arg))
        .unwrap()
        .catch((err) => setLoadingError(err))
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunk]
  );

  return [isLoading, loadingError, runThunk];
};
