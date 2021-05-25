import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
  storeState: state,
});

export const withStoreState = connect(mapStateToProps, null);