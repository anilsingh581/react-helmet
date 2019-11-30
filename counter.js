import React, { useState } from 'react';
import { Helmet } from "react-helmet";

export default function Counter() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>React - Counter Example</title>
                    <meta property="og:type" content= "website - tech blog" />
                    <meta name="description" content="This is used for generate counter increment." />
                    <meta property="og:site_name" content="code sample" />
                    <meta name="twitter:card" content="summary"/>
                    <meta name="twitter:domain" content="code-sample.com"/>
                    <meta name="twitter:title" property="og:title" itemprop="name" content="react helmet meta tag dynamically." />
                    <meta name="twitter:description" property="og:description" itemprop="description" content="I am trying to explain how to create meta tag from awebsite dynamically using react-helmet"/>
                </Helmet>
            </div>

            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
            </button>
            </div>
        </div>
    );
}