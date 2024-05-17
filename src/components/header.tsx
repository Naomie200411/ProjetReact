import React, { useState } from 'react';

const Header = ({ setCurrentPage }) => {
    // États locaux pour suivre si les liens ont été cliqués
    const [findJobsClicked, setFindJobsClicked] = useState(false);
    const [browseCompaniesClicked, setBrowseCompaniesClicked] = useState(false);

    // Fonctions pour gérer les clics sur les liens
    const handleFindJobsClick = () => {
        setFindJobsClicked(true);
        setBrowseCompaniesClicked(false); // Assurez-vous que l'autre lien est désactivé
        setCurrentPage('Page1');
    };

    const handleBrowseCompaniesClick = () => {
        setBrowseCompaniesClicked(true);
        setFindJobsClicked(false); // Assurez-vous que l'autre lien est désactivé
        setCurrentPage('Page2');
    };

    return (
        <header style={headerStyle} className='flex justify-between items-center p-4 bg-white w-full'>
            <div className="flex gap-2">
                <img src="../src/assets/images/Frame 3.svg" alt="Company Logo" />
                <h2 className="text-[#25324B] font-red-hat-display text-2xl font-bold leading-9 tracking-tight text-left">JobHuntly</h2>
            </div>
            <nav>
                <ul className="flex flex-row gap-4">
                    <li className='relative gap-6 flex flex-col'>
                        <a
                            href="#"
                            className={`font-epilogue text-base font-medium leading-6 text-left ${findJobsClicked ? 'text-[#4640DE]' : 'text-[#515B6F]'}`}
                            onClick={handleFindJobsClick}
                        >
                            Find Jobs
                        </a>
                        {findJobsClicked && <div className="absolute w-[76px] h-1 mt-14 bg-[#4640DE]"></div>}
                    </li>
                    <li className="relative gap-6 flex flex-col">
                        <a
                            href="#"
                            className={`font-epilogue text-base font-medium leading-6 text-left ${browseCompaniesClicked ? 'text-[#4640DE]' : 'text-[#515B6F]'}`}
                            onClick={handleBrowseCompaniesClick}
                        >
                            Browse Companies
                        </a>
                        {browseCompaniesClicked && <div className="absolute left-0 w-[152px] h-1 mt-14 bg-[#4640DE]"></div>}
                    </li>
                </ul>
            </nav>
            <div className="auth-buttons flex mr-16" style={authButtonsStyle}>
                <button className="login-button">Login</button>
                <span className="separator" style={separatorStyle}></span>
                <div className="w-[108px] h-[50px] p-3 gap-10 bg-[#4640DE]">
                    <button className="signup-button text-white">Sign Up</button>
                </div>
            </div>
        </header>
    );
};

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#FFFFFF',
};

const authButtonsStyle = {
    width: '92px',
    height: '50px',
    gap: '10px',
    borderRadius: '4px 0px 0px 0px',
    opacity: '0px',
};

const separatorStyle = {
    border: '1px solid #D6DDEB',
    boxShadow: '0px 4px 4px 0px #00000040',
};

export default Header;
