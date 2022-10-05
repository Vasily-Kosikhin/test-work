const initialState = {
  vpsPlans: [],
  selectOs: [],
  selectPanel: [],
  osPanel: [],
  datacenters: [],
  categories: [],
  selectedPlans: [],
  isLoading: true,
  error: null
};

const FETCH_VPS_CONFIG = 'FETCH_VPS_CONFIG';
const FETCH_VPS_CONFIG_SUCCESS = 'FETCH_VPS_CONFIG_SUCCESS';
const FETCH_VPS_CONFIG_ERROR = 'FETCH_VPS_CONFIG_ERROR';
const SELECT_VPS_PLANS = 'SELECT_VPS_PLANS';
const SELECT_ALL_PLANS = 'SELECT_ALL_PLANS';

export const vpsConfigReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VPS_CONFIG:
      return { ...state, isLoading: true, error: null };
    case FETCH_VPS_CONFIG_SUCCESS:
      const {
        vpsPlans,
        selectOs,
        selectPanel,
        osPanel,
        datacenters,
        categories
      } = action.payload;
      return {
        ...state,
        isLoading: false,
        error: null,
        vpsPlans,
        selectOs,
        selectPanel,
        selectedPlans: vpsPlans,
        osPanel,
        datacenters,
        categories
      };
    case FETCH_VPS_CONFIG_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case SELECT_VPS_PLANS:
      return {
        ...state,
        selectedPlans: state.vpsPlans.filter((plan) =>
          action.payload.includes(plan.category_id)
        )
      };
    case SELECT_ALL_PLANS: {
      return {
        ...state,
        selectedPlans: state.vpsPlans
      };
    }
    default:
      return state;
  }
};

export const selectAllPlansAction = () => ({
  type: SELECT_ALL_PLANS
});

export const selectVpsPlansAction = (payload) => ({
  type: SELECT_VPS_PLANS,
  payload
});
export const fetchVpsConfigSuccessAction = (payload) => ({
  type: FETCH_VPS_CONFIG_SUCCESS,
  payload
});

export const fetchVpsConfigErrorAction = (payload) => ({
  type: FETCH_VPS_CONFIG_ERROR,
  payload
});
