import React, { Component } from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';
import { Link } from 'react-router';
import Iframe from 'react-iframe';

function getIp() {
    var ip = location.hostname;
    return ip;
}

class VisualFrame extends Iframe {
    render() {
        return React.createElement("iframe", {
            ref: "iframe",
            frameBorder: "0",
            src: this.props.url,
            style: {
                position: this.props.position,
                height: this.props.height,
                width: this.props.width
            },
            height: this.props.height,
            width: this.props.width
        })
    }
}

class VisualForm extends Component {

  render() {
    let obj = JSON.parse(decodeURIComponent(this.props.source));
    window.obj = obj;
    var url = "http://"+ getIp() +":8003/iframe-embed.html#code=a_var+%3D+'global+value'%0Adef+outer(%29%3A%0A++a_var+%3D+'enclosed+value'%0A%0A++def+inner(%29%3A%0A++++a_var+%3D+'local+value'%0A++++print(a_var%29%0A++++def+inner2(%29%3A%0A++++++++a_var+%3D+'local+value2'%0A++++++++print(a_var%29%0A++++inner2(%29%0A++inner(%29%0A%0Aouter(%29&mode=display&origin=&cumulative=false&heapPrimitives=&textReferences=&py=2&rawInputLstJSON=%5B%5D&curInstr=0";
    return (
        <VisualFrame url={url}/>
    )
  }
}


export default VisualForm
