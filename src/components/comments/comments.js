import React, { Component } from 'react';
import './comments.css'

class Comments extends Component {
  componentDidMount() {
    const head = document.getElementsByTagName('head')[0];
    const script = document.createElement("script");
    script.src = "//cdn.commento.io/js/commento.js";
    script.async = true;
    head.appendChild(script);
  }
  render() {
    return (<div id="commento"></div>)
  }
}

export default Comments;