import React from 'react';
import CharityContactInfo from './CharityContactInfo';
import CharityData from './CharityData';
import CharityEmailList from './CharityEmailListSignUp';
import CharityLogo from './CharityLogo';
import CharityName from './CharityName';
import CharityClaimPage from './CharityClaimPage';
import Divider from '../../../../components/Divider';

const charityLeft = () => {
    return (
        <div className="container">
            <CharityLogo />
            <CharityName />
            <CharityData />
            <CharityContactInfo />
            <Divider />
            <CharityEmailList />
            <Divider />
            <CharityClaimPage />
        </div>
    )


};

export default charityLeft;