import React from 'react';
import { Link } from 'react-router-dom'

const Post = ({ title, text, slug, author}) => {
    return (
        <div className='card forum-post m-top-2'>
            <div className="p-top-1">
                Napísal: {author} v Food/Tesco
            </div>
            <h3>{ title }</h3>
            <img className="r-img" src="https://kamforum.sk/wp-content/themes/refur-kam/images/tesco.jpg" />
            <p>{ text.substring(0, 150) + '...' }</p>
            <p>
                <Link className="fe-btn fe--anch" to={ "/post/" + slug }>Prečítať...</Link>
            </p>
        </div>
    );
};

export default Post;