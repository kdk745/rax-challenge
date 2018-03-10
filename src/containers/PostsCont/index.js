import { connect } from 'react-redux';
import Posts from '../../components/Posts';
import {sortPosts} from '../../actions';
const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    SortPosts: (data, type) => {
      dispatch(sortPosts(data, type));
    }
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(Posts);
