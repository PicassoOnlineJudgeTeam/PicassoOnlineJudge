import React, { Component } from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';
import { Link } from 'react-router';

function viewVis() {
    $.get("http://localhost:8003/iframe-embed.html#code=a_var+%3D+'global+value'%0Adef+outer(%29%3A%0A++a_var+%3D+'enclosed+value'%0A%0A++def+inner(%29%3A%0A++++a_var+%3D+'local+value'%0A++++print(a_var%29%0A++++def+inner2(%29%3A%0A++++++++a_var+%3D+'local+value2'%0A++++++++print(a_var%29%0A++++inner2(%29%0A++inner(%29%0A%0Aouter(%29&mode=display&origin=&cumulative=false&heapPrimitives=&textReferences=&py=2&rawInputLstJSON=%5B%5D&curInstr=0", function(data){
        $("#vis").html(data);
        console.log("aaaaaa");
        }
    );
}

class VisualForm extends Component {

  render() {
    viewVis();
    return (
        <div></div>
    )
  }
}

export default VisualForm
