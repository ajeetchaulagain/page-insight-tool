import React from 'react';

const SiteInfoDisplay = (props) =>{

    return (
        <div>
            <p>This is site info section
            username: {props.siteInfo.websiteUrl}</p>
        </div>
    )
}

export default SiteInfoDisplay;