import { connect } from "react-redux";
import addNewConponent from "../components/addtodo"
import { addTodo } from "../action/index";

/*
const mapDispatchToProps = (dispatch) => {
    return {
        addNew: (todo) => {
            dispatch(addTodo(todo))
        }
    }
}*/


//export default connect(null, mapDispatchToProps)(addNewConponent);
const methods = {
    addNew: addTodo
}
export default connect(null, methods)(addNewConponent);