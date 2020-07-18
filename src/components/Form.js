import React from "react"

function Form () {
    return (<div>
        <form>
            <select id="input-item" name="type">
                <option value=''>Type</option>
                <option value="card">Card</option>
                <option value="cash">Cash</option>
                <option value="other">Other</option>
            </select>
            <input name="date" type="text" placeholder="When?" />
            <input name="description" type="text" placeholder="Where?" />
            <input name="amount" type="text" placeholder="Cost?" />
        </form>
    </div>)
}

export default Form