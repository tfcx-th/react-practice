import React, { Component, Fragment } from "react"
import './style.css'
import TodoItem from "./TodoItem"

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['Vue', 'React']
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
    }

    handleInputChange(e) {
        const value = e.target.value
        this.setState(() => ({
            inputValue: value
        }))
    }

    handleBtnClick() {
        this.setState(state => ({
            list: [...state.list, state.inputValue],
            inputValue: ''
        }))
    }

    handleItemDelete(index) {
        this.setState(state => {
            const _list = [...state.list]
            _list.splice(index, 1)
            return {
                list: _list
            }
        })
    }

    render() {
        const listItems = this.state.list.map((item, index) => {
            return (
                <TodoItem
                    content={item}
                    index={index}
                    key={index}
                    deleteItem={this.handleItemDelete}
                    dangerouslySetInnerHTML={{__html: item}}
                />
            )
        })
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input
                        id='insertArea'
                        className={'input'}
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>{listItems}</ul>
            </Fragment>
        )
    }
}

export default TodoList
