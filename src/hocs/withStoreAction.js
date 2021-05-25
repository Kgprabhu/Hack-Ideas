import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actionCreators';

const mapDispatchToProps = (dispatch) => ({
  storeActions: bindActionCreators(actionCreators, dispatch),
});


export const withStoreActions = connect(null, mapDispatchToProps);