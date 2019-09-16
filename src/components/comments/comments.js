import React, { Component } from 'react';

class Comments extends Component {
  componentDidMount() {
    const head = document.getElementsByTagName('head')[0];
    const script = document.createElement("script");
    script.src = "https://cdn.commento.io/js/commento.jsz";
    script.async = true;
    head.appendChild(script);
  }
  render() {
    return (<div id="commento"></div>)
  }
}

export default Comments;