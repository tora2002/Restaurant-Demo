import React from 'react';
import './Tag.css'


/* Note: Call tag in the following format
    <Tag tagType={'price'} text = {'$20'}/>
    <Tag tagType={'cuisine'} text ={'mexican'}/>
*/

function Tag({tagType, text}) {
    var temp = tagType.concat('Tag');
    return(
        <button className={temp}>
            {text}
        </button>
        );


    }

export default Tag;