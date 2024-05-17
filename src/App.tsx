import React, { useState } from 'react';
import Header from './components/header';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState('Page1');

    const renderPage = () => {
        switch (currentPage) {
            case 'Page1':
                return <Page1 />;
            case 'Page2':
                return <Page2 />;
            default:
                return <Page1 />;
        }
    };

    return (
        <div>
            <Header setCurrentPage={setCurrentPage} />
            {renderPage()}
        </div>
    );
};

export default App;
