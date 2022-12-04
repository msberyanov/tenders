import { tendersActions } from "../tenders/slice";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

const actions = {
  ...tendersActions
}

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
}