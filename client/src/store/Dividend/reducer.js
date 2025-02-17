import * as ACTION_TYPES from "./actionType";

export const initialState = {
  schedule: [],
  filter: localStorage.getItem("filter")
    ? localStorage.getItem("filter") === "true"
    : true,
};

export default function ScheduleReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_SCHEDULE_SUCCESS:
      return {
        ...state,
        schedule: action.payload,
      };
    case ACTION_TYPES.GET_SCHEDULE_FAIL:
      return {
        ...state,
        error: true,
      };
    case ACTION_TYPES.TOGGLE_FILTER:
      localStorage.setItem("filter", `${!state.filter}`);
      return {
        ...state,
        filter: !state.filter,
      };
    default:
      return state;
  }
}
