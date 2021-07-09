import React from 'react'


const filterLink = ({activeFilter, actionType, children, onclickFilter}) => {
    if (activeFilter === actionType) {
        return children;
    }
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href="#" onClick= {(e) => {
            e.preventDefault();
            onclickFilter(actionType);
        }}>
            {children}
        </a>
    );
};

export default filterLink;