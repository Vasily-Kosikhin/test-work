import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVpsConfig } from '../store/action-creators/fetchVpsConfig';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(fetchVpsConfig, dispatch);
};
