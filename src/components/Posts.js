import React, { Component } from 'react'

export default class Posts extends Component {
   render() {
      return (
         <div>
            <div className="card mt-3">
               <div className="card-body">
                  {this.props.text}
               </div>
            </div>
         </div>
      )
   }
}
