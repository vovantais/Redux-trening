import React from "react";
import PostForm from "./components/PostForm";
import FetchedPosts from "./components/FetchedPosts";
import Posts from "./components/Posts";
import { connect } from 'react-redux';

class App extends React.Component {

   render() {
      return (
         <>
            <div className="container pt-5">
               <div className='row'>
                  <div className='col'>
                     <PostForm />
                  </div>
               </div>
               <div className='row'>
                  <div className='col'>
                     {
                        this.props.post.map(item => (<Posts text={item.value} />))
                     }
                  </div>
                  <div className='col'>
                     <FetchedPosts />
                  </div>
               </div>
            </div>
         </>
      );
   }
}

const mapToPropsDispatch = ({ post }) => ({ post });

export default connect(mapToPropsDispatch)(App);
