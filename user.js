import React, { Component } from 'react'
import ReactTable from 'react-table'
import ReactTableDefaults from 'react-table'
import { Helmet } from "react-helmet";

export default class User extends Component {
    data = [];
    columns = [];

    constructor(props) {
        super(props);

        //ReactTableDefaults used for Display Default number of Rows
        Object.assign(ReactTableDefaults, {
            defaultPageSize: 5,
            minRows: 1
        });

        //Your Grid Data
        this.data = [{
            id: 10001,
            name: 'Anil Singh',
            age: 35,
            friend: {
                name: 'Dilip Singh',
                age: 35,
            }
        }, {
            id: 10002,
            name: 'Sunil Singh',
            age: 25,
            friend: {
                name: 'Sushil',
                age: 26,
            }
        }, {
            id: 10003,
            name: 'Sushil Singh',
            age: 26,
            friend: {
                name: 'Anil',
                age: 35,
            }
        }, {
            id: 10004,
            name: 'Aradhya',
            age: 5,
            friend: {
                name: 'Reena ',
                age: 28,
            }
        }, {
            id: 10005,
            name: 'Reena Singh',
            age: 28,
            friend: {
                name: 'Aradhay',
                age: 5,
            }
        }, {
            id: 10006,
            name: 'UP Singh',
            age: 35,
            friend: {
                name: 'Dilip',
                age: 35,
            }
        }];

        //Your ReactTable Disply columns
        this.columns = [
            {
                Header: 'ID', // Custom header components!
                accessor: 'id',
                Cell: props => <span className='number'>{props.value}</span>
            }, {
                Header: 'Name',
                accessor: 'name',
                Cell: props => <span className='number'>{props.value}</span>,
                filterable: true
            }, {
                Header: 'Age',
                accessor: 'age',
                Cell: props => <span className='number'>{props.value}</span> // Custom cell components!,         
            }, {
                id: 'friendName', // Required because our accessor is not a string
                Header: 'Friend Name',
                accessor: d => d.friend.name // Custom value accessors!           
            }, {
                Header: props => <span>Friend Age</span>, // Custom header components!
                accessor: 'friend.age'
            }]
    }
    render() {
        return (
            <>
                <div>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>React - React Table</title>
                        <meta property="og:type" content="website - tech blog" />
                        <meta name="description" content="This is used for ReactTable to display list of users, pagging, sorting, filtering records.." />
                        <meta property="og:site_name" content="code sample" />
                        <meta name="twitter:card" content="summary" />
                        <meta name="twitter:domain" content="code-sample.com" />
                        <meta name="twitter:title" property="og:title" itemprop="name" content="react helmet meta tag dynamically." />
                        <meta name="twitter:description" property="og:description" itemprop="description" content="I am trying to explain how to create meta tag from awebsite dynamically using react-helmet" />
                    </Helmet>
                </div>
                <div><h4>User List -</h4></div>
                <div>
                    <ReactTable
                        data={this.data}
                        columns={this.columns}
                        defaultPageSize={5}
                        minRows={2} />
                </div>
            </>
        )
    }
}