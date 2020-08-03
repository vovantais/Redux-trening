import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { FetchData } from './store/actions';
import Posts from './Posts';


class FetchedPosts extends Component {
   HendleFetch = () => {
      this.props.FetchData()
   }
   render() {
      return (
         <div>
            <button type="button" name='ADD' className="btn btn-primary " onClick={this.HendleFetch}>load</button>
            <div className='col'>
               {
                  this.props.fetch.map(item => (<Posts text={item.title} />))
               }
            </div>
         </div>

      )
   }
}
const mapToPropsDispatch = ({ fetch }) => ({ fetch });
const mapDispatchToProps = (dispatch) => ({
   FetchData: bindActionCreators(FetchData, dispatch),
});
export default connect(mapToPropsDispatch, mapDispatchToProps)(FetchedPosts);