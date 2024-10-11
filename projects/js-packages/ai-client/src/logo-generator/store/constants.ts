/**
 * AI Assistant feature actions
 */
export const ACTION_STORE_AI_ASSISTANT_FEATURE = 'STORE_AI_ASSISTANT_FEATURE';
export const ACTION_REQUEST_AI_ASSISTANT_FEATURE = 'REQUEST_AI_ASSISTANT_FEATURE';
export const ACTION_INCREASE_AI_ASSISTANT_REQUESTS_COUNT = 'INCREASE_AI_ASSISTANT_REQUESTS_COUNT';
export const ACTION_SET_AI_ASSISTANT_FEATURE_REQUIRE_UPGRADE =
	'SET_AI_ASSISTANT_FEATURE_REQUIRE_UPGRADE';
export const ACTION_SET_TIER_PLANS_ENABLED = 'SET_TIER_PLANS_ENABLED';
export const ACTION_SET_SITE_DETAILS = 'SET_SITE_DETAILS';

/**
 * Endpoints
 */
export const ENDPOINT_AI_ASSISTANT_FEATURE = '/wpcom/v2/jetpack-ai/ai-assistant-feature';

/**
 * New AI Assistant feature async request
 */
export const FREE_PLAN_REQUESTS_LIMIT = 20;
export const UNLIMITED_PLAN_REQUESTS_LIMIT = 3000;
export const ASYNC_REQUEST_COUNTDOWN_INIT_VALUE = 3;
export const NEW_ASYNC_REQUEST_TIMER_INTERVAL = 5000;
export const ACTION_DECREASE_NEW_ASYNC_REQUEST_COUNTDOWN = 'DECREASE_NEW_ASYNC_REQUEST_COUNTDOWN';
export const ACTION_ENQUEUE_ASYNC_REQUEST = 'ENQUEUE_ASYNC_COUNTDOWN_REQUEST';
export const ACTION_DEQUEUE_ASYNC_REQUEST = 'DEQUEUE_ASYNC_COUNTDOWN_REQUEST';

/**
 * Logo generator actions
 */
export const ACTION_SET_CONTEXT = 'SET_CONTEXT';
export const ACTION_SET_SELECTED_LOGO_INDEX = 'SET_SELECTED_LOGO_INDEX';
export const ACTION_ADD_LOGO_TO_HISTORY = 'ADD_LOGO_TO_HISTORY';
export const ACTION_SET_IS_SAVING_LOGO_TO_LIBRARY = 'SET_IS_SAVING_LOGO_TO_LIBRARY';
export const ACTION_SET_IS_APPLYING_LOGO = 'SET_IS_APPLYING_LOGO';
export const ACTION_SAVE_SELECTED_LOGO = 'SAVE_SELECTED_LOGO';
export const ACTION_SET_IS_REQUESTING_IMAGE = 'SET_IS_REQUESTING_IMAGE';
export const ACTION_SET_IS_ENHANCING_PROMPT = 'SET_IS_ENHANCING_PROMPT';
export const ACTION_SET_SITE_HISTORY = 'SET_SITE_HISTORY';
export const ACTION_SET_IS_LOADING_HISTORY = 'SET_IS_LOADING_HISTORY';

/**
 * Logo generator error actions
 */
export const ACTION_SET_FEATURE_FETCH_ERROR = 'SET_FEATURE_FETCH_ERROR';
export const ACTION_SET_FIRST_LOGO_PROMPT_FETCH_ERROR = 'SET_FIRST_LOGO_PROMPT_FETCH_ERROR';
export const ACTION_SET_ENHANCE_PROMPT_FETCH_ERROR = 'SET_ENHANCE_PROMPT_FETCH_ERROR';
export const ACTION_SET_LOGO_FETCH_ERROR = 'SET_LOGO_FETCH_ERROR';
export const ACTION_SET_SAVE_TO_LIBRARY_ERROR = 'SET_SAVE_TO_LIBRARY_ERROR';
export const ACTION_SET_LOGO_UPDATE_ERROR = 'SET_LOGO_UPDATE_ERROR';
