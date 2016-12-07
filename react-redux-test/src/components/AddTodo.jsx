import * as React from 'react';

export default class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        let {addTodo} = this.props;
        addTodo(this.refs.input.value);
        this.refs.input.value = ""
    }
    render() {
        console.log("render addtodo")
        return (<div className="addtext"><input type="text" ref="input" /><button onClick={this.onClick}>add todo</button></div>)
    }
}
