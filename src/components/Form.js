import React, { Component } from 'react'

export default class FormComponent extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div className='form-group col-md4'>
                    <select className='form-control' name="type" value={this.props.formDataState.type} onChange={this.props.handleTypeChange} >
                        <option value=''>Type</option>
                        <option value="card">Card</option>
                        <option value="cash">Cash</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className='form-row py-1'>
                    <input className='form-control' name="date" type="date" placeholder="Date?" value={this.props.formDataState.date} onChange={this.props.handleDateChange} />
                </div>
                <div className='form-row py-1'>
                    <input className='form-control' name="description" type="text" placeholder="Where?" value={this.props.formDataState.description} onChange={this.props.handleDescChange} />
                </div>
                <div className='form-row py-1'>
                    <input className='form-control' name="amount" type="text" placeholder="Amount?" value={this.props.formDataState.amount} onChange={this.props.handleAmountChange} />
                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>

        )
    }
}