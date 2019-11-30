import React from 'react';
import { plus, minus } from './Helpers'
import { Helmet } from "react-helmet";

class CalculatorComponents extends React.Component {
    constructor(props) {
        super(props);
        this.yourClickFunction = this.yourClickFunction.bind(this);
    }

    yourClickFunction(x, y) {
        console.log(plus(x, y)); //Output will be (10, 20) => 30
        console.log(minus(x, y)); //Output will be (10, 20) => -10
    }

    render() {
        return (
            <>
                <div>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>React Helper functions</title>
                        <meta property="og:type" content="website - tech blog" />
                        <meta name="description" content="This is used for create and used Helper functions in reactjs" />
                        <meta property="og:site_name" content="code sample" />
                        <meta name="twitter:card" content="summary" />
                        <meta name="twitter:domain" content="code-sample.com" />
                        <meta name="twitter:title" property="og:title" itemprop="name" content="react helmet meta tag dynamically." />
                        <meta name="twitter:description" property="og:description" itemprop="description" content="I am trying to explain how to create meta tag from awebsite dynamically using react-helmet" />
                    </Helmet>
                </div>
            <div>
                    <h4>React Helper functions</h4>
                    <button onClick={this.yourClickFunction(10, 20)}>Click..</button>
                </div>
            </>
        );
    }
}
export default CalculatorComponents;