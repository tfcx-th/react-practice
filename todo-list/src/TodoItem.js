import React from "react"

class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const { deleteItem, index } = this.props
        deleteItem(index)
    }

    render() {
        const { content } = this.props
        return (
            <div onClick={this.handleClick}>{content}</div>
        )
    }
}

export default TodoItem
