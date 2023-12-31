const BASE_URL = 'http://localhost:5500';

export const ITEMS_URL = BASE_URL + '/items';
export const ITEMS_TAGS_URL = ITEMS_URL + '/tags';
export const ITEMS_BY_SEARCH_URL = ITEMS_URL + '/search/';
export const ITEMS_BY_TAG_URL = ITEMS_URL + '/tag/';
export const ITEM_BY_ID_URL = ITEMS_URL + '/';
export const ITEM_CREATE = ITEMS_URL + '/create';

export const USER_LOGIN_URL = BASE_URL + '/users/login';
export const USER_REGISTER_URL = BASE_URL + '/users/register';

export const ORDERS_URL = BASE_URL + '/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_NEW_FOR_CURRENT_USER_URL =
  ORDERS_URL + '/newOrderForCurrentUser';
export const ORDERS_PAY_URL = ORDERS_URL + '/pay';
export const ORDERS_TRACK_URL = ORDERS_URL + '/track/';
export const ORDERS_ALL_BY_USER_ID = ORDERS_URL + '/allUserOrders/';
