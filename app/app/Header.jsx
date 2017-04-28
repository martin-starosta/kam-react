/* Header.jsx */
import React from 'react';
import { Link } from 'react-router-dom';

/*
<div class="flex"><div class="c-m-4"><a href="#/"><img src="static/resources/logo.png"></a></div><div class="c-m-8 flex flex--center m-bottom-0"><nav><ul class="list list--horizontal"><li><a href="#/">Home</a></li><li><a href="#/forum">Forum</a></li></ul></nav></div></div>
*/

const Header = (props) => 
    <header className='container forum-header p-top-2 p-bottom-1'>
        <div className='container container--fixed'>
            <div className='flex'>
                <div className="c-m-1">
                    <Link to="/">
                        <img className="r-img" alt="Logo KAM Fórum" src="static/resources/logo.png" />
                    </Link>
                </div>
                <div className="c-m-2 flex flex--center m-bottom-0 site-name" title="KAMovia tvoria túto stránku o sebe a pre seba.">
                    KAM Fórum
                </div>
                <div className='c-m-8 flex flex--center m-bottom-0'>
                    <nav>
                        <ul className='list list--horizontal'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/forum">Forum</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>;

export default Header;