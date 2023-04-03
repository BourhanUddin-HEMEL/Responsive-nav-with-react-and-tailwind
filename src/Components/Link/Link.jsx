import React from 'react';

const Link = ({route}) => {
    return (
        <li className='pr-5 font-semibold  '>
            <a className='hover:text-red-50 ' href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;