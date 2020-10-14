import './style.css';
import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Form } from 'react-final-form';
import Form1 from '../form';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                name: 'Fernando Frank',
                year: 1996
            }
        }
    }

    handleInputChange = (event) => {
        const user = Object.assign({}, this.state.user);
        user.name = event.target("name").value;
        user.year = event.target("year").value;
        this.setState({ user: user });
    }

    onSubmit(values) {
        console.log('Submitting form', values);
    }

    render() {
        return (
            <BrowserRouter>
                <Redirect to="/home" />
                <Route exact path="/home" component={Home}>
                    <div className="conteinter">
                        <Form
                            onSubmit={this.onSubmit}
                            render={Form1}
                            name={this.state.user.name}
                            year={this.state.user.year}
                        />
                    </div>
                </Route>
            </BrowserRouter>
        );
    }
}
export default Home;