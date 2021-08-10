import React ,{Component} from "react";

export  default class Counter extends Component {
    render(){
        console.log("from Render");
        return (<h1>Hello Aboud</h1>);
    }

    foo(){
        console.log("from FOO");
        return (<h1>Hello Basel  from Counter </h1>);
    };
 }
