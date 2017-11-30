import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Test from 'modules/Test';

const App = () => (
    <main>
        <Switch>
            <Route path="/" component={Test} exact />
        </Switch>
    </main>
);

export default App;
