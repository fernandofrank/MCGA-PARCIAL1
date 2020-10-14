import './style.css';
import React from 'react';
import { Field } from 'react-final-form';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Counter from '../counters';

function Form(props) {
    return (
        <BrowserRouter>
            <Route exact path="/home">
                <form className="form">
                    <h1>User</h1>
                    <div>
                        <Field className="textBox" name="name" component="input" disabled="disable" placeholder={props.name} />
                    </div>
                    <div>
                        <Field className="textBox" name="year" component="input" disabled="disable" placeholder={props.year} />
                    </div>
                    <div className="buttonsBox">
                        <Link className="link" to="/editForm">
                            <button className="buttons">Edit</button>
                        </Link>
                        <Link className="link" to="/Counters">
                            <button className="buttons">Counters</button>
                        </Link>
                    </div>
                </form>
            </Route>
            <Route exact path="/editForm">
                <form className="form" autocomplete="off">
                    <h1>User</h1>
                    <div>
                        <Field className="textBox" name="name" component="input" placeholder={props.name} />
                    </div>
                    <div>
                        <Field className="textBox" name="year" component="input" placeholder={props.year} />
                    </div>
                    <div className="buttonsBox">
                        <Link className="link" to="/home">
                            <button className="buttons" onClick={props.handleInputChange} >Save</button>
                        </Link>
                        <Link className="link" to="/Counters">
                            <button className="buttons">Counters</button>
                        </Link>
                    </div>
                </form>
            </Route>
            <Route exact path="/Counters" component={Counter}></Route>
        </BrowserRouter>
    )
};
export default Form;