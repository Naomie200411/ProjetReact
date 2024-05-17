import React, { useState } from 'react';
import Header from './components/header';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<string>('Page1');
    const renderPage = () => {
        switch (currentPage) {
            case 'Page1':
                return <Page1 />;
            case 'Page2':
                return <Page2 setCurrentPage={setCurrentPage} />;  
             case 'Page3':
                return <Page3 setCurrentPage={setCurrentPage} />;         
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
