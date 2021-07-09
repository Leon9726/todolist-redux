import {connect } from 'react-redux';
import todoFooter from '../components/todoFooter';

import { filterTodo } from '../actions/index';

 const mapStateToProps = (state, ownProps) => {
    return {
        activeFilter: state.activeFilter
    }
}

export default connect(mapStateToProps, {filterTodo})(todoFooter);