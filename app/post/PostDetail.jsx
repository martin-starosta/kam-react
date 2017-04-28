/* PostDetail.jsx */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Helmet} from "react-helmet";

import * as PostActions from './PostActions';

class PostDetail extends React.Component {
    clikMe() {
        //this.props.addPost('This is another post');
    }

    render() {
        const PostData = this.props.posts.filter( (post) => {
            return this.props.match.params.slug == post.slug;
        })[0];

        document.title = PostData.title;

        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{ PostData.title}</title>
                    <link rel="canonical" href={ "http://kamforum.sk/#/post/" + PostData.slug } />
                </Helmet>
                <main className='container container--fixed main p-bottom-2'>
                    <div className='row'>
                        <h1 className="post-detail-title">{ PostData.title }</h1>
                        <div className="post-detail-content">
                            <p>{ PostData.text }</p>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
/*
const PostDetail = ({ match }) => 
    <main className='container container--fixed main p-bottom-2'>
        <div className='row'>
            <p>Single post content { match.params.title } </p>
        </div>
    </main>;
*/
// container part
const mapStateToProps = (state) => {
    return {...state};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ...PostActions
    }, dispatch);
}

export default connect ( mapStateToProps, mapDispatchToProps) (PostDetail);