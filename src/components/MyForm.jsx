import React from "react";

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            address: '',
            city: '',
            country: '',
            acceptRules: false,
            completed: !'isCompleted'
        };
    }

    changeStateForm = () => {
        this.setState(({completed}) => ({completed: !completed}));
    }

    onChangeInput = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({[e.target.name]: value});
    }

    render() {
        const {completed} = this.state;

        if (!completed) {
            return (
                <form name="myForm" onSubmit={this.changeStateForm}>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="col-form-label">Email</label>
                        <input type="email" name="email" className="form-control"
                               value={this.state.email} id="email" placeholder="Email"
                               onChange={this.onChangeInput}/>
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="password" className="col-form-label">Password</label>
                        <input type="password" name="password" className="form-control"
                               value={this.state.password} id="password"
                               placeholder="Password" onChange={this.onChangeInput}/>
                    </div>

                    <div className="col-md-6 mb-3">
                        <label htmlFor="address" className="col-form-label">Address</label>
                        <textarea type="text" className="form-control" name="address" id="address"
                                  value={this.state.address} placeholder="1234 Main St"
                                  onChange={this.onChangeInput}></textarea>
                    </div>

                    <div className="col-md-6 mb-3">
                        <label htmlFor="city" className="col-form-label">City</label>
                        <input type="text" className="form-control" name="city"
                               value={this.state.city} id="city"
                               onChange={this.onChangeInput}/>
                    </div>

                    <div className="col-md-6 mb-3">
                        <label htmlFor="country" className="col-form-label">Country</label>
                        <select id="country" name="country" value={this.state.country}
                                className="form-control" onChange={this.onChangeInput}>
                            <option>Choose</option>
                            <option value="great britain">Great Britain</option>
                            <option value="ukraine">Ukraine</option>
                            <option value="usa">USA</option>
                        </select>
                    </div>

                    <div className="col-md-6 mb-3">
                        <div className="form-check">
                            <label className="form-check-label" htmlFor="rules">
                                <input id="rules" type="checkbox" name="acceptRules"
                                       className="form-check-input" checked={this.state.acceptRules}
                                       onChange={this.onChangeInput}/>
                                Accept Rules
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
            )
        } else {
            return (
                <div>
                    <button type="button" className="btn btn-primary"
                            onClick={this.changeStateForm}>
                        Back
                    </button>

                    <table className="table">
                        <tbody>
                        {Object.entries(this.state).sort()
                            .map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item[0]}</td>
                                            <td>{String(item[1])}</td>
                                        </tr>
                                    )
                                }
                            )
                        }
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}

export default MyForm;