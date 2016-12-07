import AddTodo from '../components/AddTodo';
import { connect } from 'react-redux';
import { addTodo } from '../actions'

function mapDispatchToProps(dispatch) {
    return {
        addTodo: (value) => {
            dispatch(addTodo(value))
        }
    }
}

export default connect(null,mapDispatchToProps)(AddTodo)