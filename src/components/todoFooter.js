import React from 'react'
import FooterLink from './filterLink';

export default function todoFooter({filterTodo, activeFilter}) {
    return (

        <div className="footer">
            <FooterLink activeFilter= {activeFilter} onclickFilter ={filterTodo} actionType="ALL">
              ALL
            </FooterLink>
            {' '}
            <FooterLink activeFilter= {activeFilter} onclickFilter ={filterTodo} actionType="TODO">
              TO DO
            </FooterLink>
            {' '}
            <FooterLink activeFilter= {activeFilter} onclickFilter ={filterTodo} actionType="COMPLETED">
              COMPLETED
            </FooterLink>
          </div>

    )
}