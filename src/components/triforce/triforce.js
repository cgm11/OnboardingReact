import React from 'react';
import './triforce.scss';

import Header from '../shared/header/header';
import NextStep from '../shared/next-step/next-step';
import PageTitle from '../shared/page-title/page-title';
import TagTriforce from './tag-triforce/tag-triforce';

const Triforce = () => {
    return (
        <div className="triforce">
            <header className="triforceHeader">
                <Header classLogo="logo__header"/>
                <PageTitle myClass="triforceHeader__title" title="The Triforce"/>
                <p>The three aspects consist of the Studio, TDC and Accounts</p>
            </header>
            <section className="tags">
                <h1 className="tags__title"><span>You</span> are here</h1>
                <TagTriforce/>
                <NextStep myClass="next__btn next"/>
            </section>
        </div>
    )
}

export default Triforce;
