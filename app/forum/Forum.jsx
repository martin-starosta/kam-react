/* Forum.jsx */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ForumActions from './ForumActions';

import {Helmet} from "react-helmet";
import Header from '../app/Header.jsx';
import Leadspace from '../app/Leadspace.jsx';
import Post from './Post.jsx';

// component part
class Forum extends React.Component {
    clikMe() {
        this.props.addPost('This is another post');
    }

    render() {
        const PostsList = this.props.posts.map( (post) => {
            return ( 
            <Post 
                key={ post.id }
                author="Fero Mrkva"
                title={ post.title }
                text={ post.text }
                slug={ post.slug }
            />);
        });

        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Fórum pre Key Account Manažérov</title>
                    <link rel="canonical" href="http://kamforum.sk/forum" />
                </Helmet>
                <Leadspace 
                    title="Tvoj priestor pre výmenu informácií z trhu"
                    subtitle="Ako profesionálny Key Account Manager tu nájdeš všetky aktuálne informácie o svojich zákazníkoch a množstvo zaujímavých udalostí z trhu."
                />
                <section className="container-cards">
                    <main className='container container--fixed main p-bottom-2'>
                        <div className='row'>
                            <div className="c-m-9">
                                { PostsList }
                            </div>
                            <div className="c-m-3">
                                <p>Počet príspevkov: { this.props.posts.length } </p>
                            </div>
                        </div>
                    </main>
                </section>
            </div>
        );
    }
}
/*
export const Forum = (post) => {
    const clickedBuddy = (event) => {
        post.addPost('This is another post');
    };

    const PostsList = (props) => {
        console.log(posts);
        return post.posts.map(function (post) {
            return (
                <p>{ post.text }</p>
            )
        });
    };

    return (
        <main className='container container--fixed main p-bottom-2'>
            <div className='row'>
                <p onClick={clickedBuddy} >Welcome on Forum</p>
                <p>Počet príspevkov: { post.posts.length } </p>
                { PostsList }
            </div>
        </main>
    );
}
*/
// container part
const mapStateToProps = (state) => {
    return {...state};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ...ForumActions
    }, dispatch);
}

export default connect ( mapStateToProps, mapDispatchToProps) (Forum);