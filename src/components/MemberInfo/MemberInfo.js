import React from 'react'
import './MemberInfo.css'
import { Icon } from '@iconify/react';

function MemberInfo ( {name} ) {
    return (
        <div className='member-profile'>
            <Icon fontSize={30} icon='iconoir:profile-circle' color='black' />
            <p className='member-name'>{name}</p>
        </div>
    );
}

export default MemberInfo;