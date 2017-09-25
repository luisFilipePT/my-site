import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppLoader from './AppLoader';

import Nav from './Nav';
import Home from './Home';

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1500);
    }

    render() {
        const { loading } = this.state;

        if(loading) {
            return <AppLoader text="Loading..."/>;
        }

        return (
            <BrowserRouter>
                <div>
                    <Nav/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/battle" component={Home}/>
                        <Route path="/popular" component={Home}/>
                        <Route render={ () => <h1>Not Found</h1> }/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}