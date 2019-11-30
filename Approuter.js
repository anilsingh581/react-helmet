import React from 'react';

import {Switch, Route, Redirect} from 'react-router-dom';
import User  from '../src/user'
import CalculatorComponents from '../src/calculator'
import ImageUpload from '../src/ImageUpload'
import Counter from '../src/counter'

export default () => {
    return(
        <Switch>
            <Route path='/' exact component={User} />
            <Route path='/calculator' exact component={CalculatorComponents} />
            <Route path='/imageupload' exact component={ImageUpload} />
            <Route path='/counter' exact component={Counter} />
            <Redirect from='/*' to='/pagenotfound' />
        </Switch>
    )
}
