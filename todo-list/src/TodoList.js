import React, { Component, Fragment } from "react"

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['Vue', 'React']
        }
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    render() {
        const listItems = this.state.list.map((item, index) => {
            return <li key={index}>{item}</li>
        })
        return (
            <Fragment>
                <div>
                    <input
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleClick.bind(this)}>提交</button>
                </div>
                <ul>{listItems}</ul>
            </Fragment>
        )
    }
}

export default TodoList
