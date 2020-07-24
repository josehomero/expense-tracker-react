import React from "react"

class Form extends React.Component {
    constructor() {
        super()
        this.state={
            type:"",
            date:"",
            description:"",
            amount:""
        }
    }
    render () {
        return (<div>
            <form>
                <select className="input-item" name="type">
                    <option value=''>Type</option>
                    <option value="card">Card</option>
                    <option value="cash">Cash</option>
                    <option value="other">Other</option>
                </select>
                <input className="date" type="text" placeholder="When?" />
                <input className="description" type="text" placeholder="Where?" />
                <input className="amount" type="text" placeholder="Cost?" />
            </form>
        </div>)
    }
}

export default Form