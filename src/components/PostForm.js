
import React, { Component } from 'react'
import { AddPost, RemovePost } from './store/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

class PostForm extends Component {
   constructor(props) {
      super(props)
      this.state = {
         value: '',
      }
      console.log(props);
   }
   HandleClickAdd = (e) => {
      this.props.AddPost(this.state.value)
      this.setState({ value: '' })
   }
   HandleChangeInp = (e) => {
      this.setState({
         value: e.target.value,
      })
   }
   HandleClickRemove = () => {
         this.props.RemovePost();
   }
   render() {
      return (
         <div>
            <form>
               <div className="form-group">
                  <label htmlFor="InputText">ENTER POST</label>
                  <input type="text"
                     className="form-control"
                     id="InputText"
                     onChange={this.HandleChangeInp}
                     value={this.state.value}
                  />
               </div>
               <button type="button"  className="btn btn-success mr-5" onClick={this.HandleClickAdd}>ADD</button>
               <button type="button" 
                  className="btn btn-danger" onClick={this.HandleClickRemove}>
                  DELETE
                  </button>
            </form>
         </div>
      );
   }
}
const mapToPropsDispatch = ({ post }) => ({ post });
const mapDispatchToProps = (dispatch) => ({
   AddPost: bindActionCreators(AddPost, dispatch),
   RemovePost: bindActionCreators(RemovePost, dispatch),
});

export default connect(mapToPropsDispatch, mapDispatchToProps)(PostForm)