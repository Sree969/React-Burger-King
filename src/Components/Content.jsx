import React,{Component} from 'react';
export default class Content extends Component{
        constructor(props){
            super(props)
        }
        render(){
            return(
            <div class='zzcc'>
              <img src={this.props.img}/>
              <h2>{this.props.h2}</h2>
              <p>{this.props.p}</p>
              <a>{this.props.a}</a>
              <button>{this.props.butt}</button>
              </div>
            )
        }
    }