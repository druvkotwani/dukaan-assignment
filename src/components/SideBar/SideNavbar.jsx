import React from 'react';
import Credit from './Credit';
import SideItems from './SideItems';
import Logo from './Logo';
import Header from '../Header/Header';

const SideNavbar = () => {
    return (
        <div className="flex flex-col h-full">
            <Logo />

            <ul className="p-2 list-none flex-1">
                <SideItems iconName='carbon:home' text='Home' />
                <SideItems iconName='carbon:shopping-cart' text='Orders' />
                <SideItems iconName='carbon:shopping-bag' text='Products' />
                <SideItems iconName='carbon:delivery-parcel' text='Delivery' />
                <SideItems iconName='nimbus:marketing' text='Marketing' />
                <SideItems iconName='carbon:analytics' text='Analytics' />
                <SideItems iconName='fluent:payment-20-regular' text='Payments' />
                <SideItems iconName='carbon:tools' text='Tools' />
                <SideItems iconName='ic:outline-discount' text='Discounts' />
                <SideItems iconName='fluent:people-audience-24-regular' text='Audience' />
                <SideItems iconName='pajamas:appearance' text='Appearance' />
                <SideItems iconName='gravity-ui:thunderbolt' text='Plugins' />
            </ul>


            <Credit />
        </div>
    )
}

export default SideNavbar