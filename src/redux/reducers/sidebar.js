import { TOGGLE_SIDEBAR } from "../actions/types";

import getSidebarNavItems from "../../data/sidebar-nav-items";

const initialState = {
  menuVisible: false,
  navItems: getSidebarNavItems()
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        menuVisible: !state.menuVisible
      }
    default:
      return state;
  }
}