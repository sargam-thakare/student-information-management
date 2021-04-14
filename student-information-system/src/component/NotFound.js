import React, { Component } from 'react'
import not_found from '../img/error.jpg'

export class NotFound extends Component {
    render() {
        return (
            <div style={{textAlign:'center'}}>
                
                <h1>NOT FOUND PAGE </h1>
              <img src={not_found} class="ccenter"/>   
               
            </div>
        )
    }
}

export default NotFound
