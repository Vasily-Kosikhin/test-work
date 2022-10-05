import axios from 'axios';
import {
  fetchVpsConfigErrorAction,
  fetchVpsConfigSuccessAction
} from '../reducers/vpsConfigReducer';

const url = 'https://api.sweb.ru/notAuthorized/';
const data = { jsonrpc: '2.0', method: 'vpsOsConfig', params: {} };
const headers = {
  'Content-Type': 'text/plain'
};

export const fetchVpsConfig = () => {
  return async (dispatch) => {
    try {
      const response = await axios({
        url: url,
        method: 'post',
        headers,
        data
      });
      dispatch(fetchVpsConfigSuccessAction(response.data.result));
    } catch (error) {
      dispatch(fetchVpsConfigErrorAction(error.message));
    }
  };
};
