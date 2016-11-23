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
					id : this.props.id,
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
	componentDidMount(){
		let sysin = this.props.input;
		$('#visualFrame').ready(function(){
			let intv = setInterval(function(){
				if ($('#visualFrame').get(0) && $('#visualFrame').get(0).contentWindow && $('#visualFrame').get(0).contentWindow.setInputCase){
					$('#visualFrame').get(0).contentWindow.setInputCase(sysin);
					clearInterval(intv);
				}
			}, 200);
		});
	}
}

class VisualForm extends Component {
	componentWillMount() {
		// this.appendScript("http://" + getIp() + ":8003" + "/js/jquery-1.8.2.min.js");
		// this.appendScript("http://" + getIp() + ":8003" + "/js/jquery.ba-bbq.min.js");
	}
	appendScript(src){
		let script = document.createElement("script");
		script.src = src;
		script.async = true;
		document.getElementsByTagName('head')[0].appendChild(script);
	}
	render() {
		let obj = JSON.parse(decodeURIComponent(this.props.source));
		window.obj = obj;
		var url = "http://" + getIp() + ":8003" + genEmbedUrlStr(obj.source);
		//console.log(url);
		//var url = "http://"+ getIp() +":8003/iframe-embed.html#code=a_var+%3D+'global+value'%0Adef+outer(%29%3A%0A++a_var+%3D+'enclosed+value'%0A%0A++def+inner(%29%3A%0A++++a_var+%3D+'local+value'%0A++++print(a_var%29%0A++++def+inner2(%29%3A%0A++++++++a_var+%3D+'local+value2'%0A++++++++print(a_var%29%0A++++inner2(%29%0A++inner(%29%0A%0Aouter(%29&mode=display&origin=&cumulative=false&heapPrimitives=&textReferences=&py=2&rawInputLstJSON=%5B%5D&curInstr=0";
		return (
				<VisualFrame url={url} input={obj.case} id={'visualFrame'} />
		)
	}
}


// visualizer를 위한 state를 만드는 함수
function genEmbedUrlStr(source){
	// visualizer를 위한 state를 만드는 함수 (genEmbedUrlStr)
	let getAppState = function(txt) {
		var ret = {code: txt,
				mode: 'display', //appMode,
				origin: undefined, //originFrontendJsFile,
				cumulative: false,//$('#cumulativeModeSelector').val(),
				heapPrimitives: undefined, // $('#heapPrimitivesSelector').val(),
				textReferences: undefined, //$('#textualMemoryLabelsSelector').val(),
				py: '2', //$('#pythonVersionSelector').val(),
				/* ALWAYS JSON serialize rawInputLst, even if it's empty! */
				rawInputLstJSON: '[]', //JSON.stringify(rawInputLst),
				curInstr: 0//myVisualizer ? myVisualizer.curInstr : undefined
			};

		// keep this really clean by avoiding undefined values
		if (ret.cumulative === undefined)
			delete ret.cumulative;
		if (ret.heapPrimitives === undefined)
			delete ret.heapPrimitives;
		if (ret.textReferences === undefined)
			delete ret.textReferences;
		if (ret.py === undefined)
			delete ret.py;
		if (ret.rawInputLstJSON === undefined)
			delete ret.rawInputLstJSON;
		if (ret.curInstr === undefined)
			delete ret.curInstr;
		return ret;
	}
	let state = getAppState(source);
	let embedUrlStr = $.param.fragment("/iframe-embed.html", state, 2 /* clobber all */);
	embedUrlStr = embedUrlStr.replace(/\)/g, '%29') // replace ) with %29 so that links embed well in Markdown
	return embedUrlStr;
}


export default VisualForm
