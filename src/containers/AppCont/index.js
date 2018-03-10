import { connect } from 'react-redux';
import App from '../../App';
import {postsLoad} from '../../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    PostsLoad: () => {
      dispatch(postsLoad());
    }
  };
};

export default connect('', mapDispatchToProps)(App);
