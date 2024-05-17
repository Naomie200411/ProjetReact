import React from 'react';
import Filter from './filter';
import SocialJobs from './SocialJobs';
import { Icon } from '@iconify/react';
import Paginate from './Paginate';
import Featuredjobs from './featuredjobs';
import { FeaturedJobs } from '../interfaces/featuresProps';
import Recommandationjobs from './recommandation';import { RecommandationProps } from '../interfaces/recommandationProps';





interface Page2Props {
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const Page3: React.FC<Page2Props> = ({ setCurrentPage }) => {
    const recommandationJob1 = {
        logo: '../src/assets/images/stripe.png',
        name: 'Stripe',
        text: 'Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools...',
        buttons: [
            { bgColor: 'redLight', textColor: 'yellow', label: 'Businss' },
            { bgColor: 'greenlight', textColor: 'green', label: 'Payment gateway' }
        ]
    };
    const recommandationJob2 = {
        logo: '../src/assets/images/truebill.png',
        name: 'TrueBill',
        text: 'Take control of your money. Truebill develops a mobile app that helps consumers take control of their financial...',
        buttons: [
            { bgColor: 'greenlight', textColor: 'green', label: 'Business' },
        ]
    };
    const recommandationJob3 = {
        logo: '../src/assets/images/square.png',
        name: 'Square',
        text: 'Square builds common business tools in unconventional ways so more people can start, run, and grow their businesses.',
        buttons: [
            { bgColor: 'greenlight', textColor: 'green', label: 'Business' },
            { bgColor: 'greenlight', textColor: 'green', label: 'Blockchhain' }

        ]
    };
    const recommandationJob4 = {
        logo: '../src/assets/images/coinbase.png',
        name: 'Coinbase',
        text: 'Coinbase is a digital currency wallet and platform where merchants and consumers can transact with new digital currencies.',
        buttons: [
            { bgColor: 'greenlight', textColor: 'green', label: 'Business' },
            { bgColor: 'greenlight', textColor: 'green', label: 'Blockchhain' }

        ]
    };
    const recommandationJob5 = {
        logo: '../src/assets/images/robinhood.png',
        name: 'Robinhood',
        text: 'Robinhood is lowering barriers, removing fees, and providing greater access to financial information.',
        buttons: [
            { bgColor: 'greenlight', textColor: 'green', label: 'Business' },

        ]
    };
    const recommandationJob6 = {
        logo: '../src/assets/images/kraken.png',
        name: 'Kraken',
        text: 'Based in San Francisco, Kraken is the world’s largest global bitcoin exchange in euro volume and liquidity.',
        buttons: [
            { bgColor: 'greenlight', textColor: 'green', label: 'Business' },
            { bgColor: 'greenlight', textColor: 'green', label: 'Blockchhain' }


        ]
    };
    const recommandationJob7 = {
        logo: '../src/assets/images/EmailMarketing.svg',
        name: 'Revolut',
        text: 'When Revolut was founded in 2015, we had a vision to build a sustainable, digital alternative to traditional big banks.',
        buttons: [
            { bgColor: 'greenlight', textColor: 'green', label: 'Business' },
            { bgColor: 'greenlight', textColor: 'green', label: 'Blockchhain' }


        ]
    };
    const recommandationJob8 = {
        logo: '../src/assets/images/divvy.png',
        name: 'Divvy',
        text: 'Divvy is a secure financial platform for businesses to manage payments and subscriptions.',
        buttons: [
            { bgColor: 'greenlight', textColor: 'green', label: 'Business' },
            { bgColor: 'greenlight', textColor: 'green', label: 'Blockchhain' }


        ]
    };


    return (
        <div className="p-10 flex justify-end space-y-4">
            <div className="flex-shrink-0 ml-0 flex flex-col space-y-4 p-11">
                <Filter
                    labelText="Industry"
                    filterTypes={[
                        { label: 'Advertising', count: 43 },
                        { label: 'Business Service', count: 4 },
                        { label: 'Blockchain', count: 5 },
                        { label: 'ConsumerTech', count: 5 },
                        { label: 'Education', count: 34 },
                        { label: 'Fintech', count: 45 },
                        { label: 'Gaming', count: 33 },
                        { label: 'Food et Beverage', count: 5 },
                        { label: 'Healthcare', count: 3 },
                        { label: 'Hostinng', count: 5 },
                        { label: 'Media', count: 4 },



                    ]}
                />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br />  
                <Filter
                    labelText="Company Size"
                    filterTypes={[
                        { label: '1-50', count: 25 },
                        { label: '51-150', count: 57 },
                        { label: '151-250', count: 45 },
                        { label: '251-500', count: 4 },
                        { label: '501-1000', count: 43 },
                        { label: '1000-above', count: 23 }

                    ]}
                />
              
            </div>
            <div className="p-10 space-y-4 ml-auto">
                <div className="flex justify-between items-center">
                    <span className="font-bold text-3xl italic cursive-font mr-[400px]">All jobs</span>
                    <div className="flex items-center space-x-4">
                        <span className="showing">Sort by. <span className="font-bold">Most relevant v</span></span>
                        <img src="../src/assets/images/View.png" alt="View icon" />
                        <img src="../src/assets/images/Icon.png" alt="Icon" />
                    </div>
                </div>
                <span className="showing">Showing 73 results</span>
                <div className="category-grid2 p-5">
                    <Recommandationjobs
                        logo={recommandationJob1.logo}
                        name={recommandationJob1.name}
                        text={recommandationJob1.text}
                        buttons={recommandationJob1.buttons}
                    />
                    <Recommandationjobs
                        logo={recommandationJob2.logo}
                        name={recommandationJob2.name}
                        text={recommandationJob2.text}
                        buttons={recommandationJob2.buttons}
                    />
                     <Recommandationjobs
                        logo={recommandationJob3.logo}
                        name={recommandationJob3.name}
                        text={recommandationJob3.text}
                        buttons={recommandationJob3.buttons}
                    />
                     <Recommandationjobs
                        logo={recommandationJob4.logo}
                        name={recommandationJob4.name}
                        text={recommandationJob4.text}
                        buttons={recommandationJob4.buttons}
                    />
                     <Recommandationjobs
                        logo={recommandationJob5.logo}
                        name={recommandationJob5.name}
                        text={recommandationJob5.text}
                        buttons={recommandationJob5.buttons}
                    />
                     <Recommandationjobs
                        logo={recommandationJob6.logo}
                        name={recommandationJob6.name}
                        text={recommandationJob6.text}
                        buttons={recommandationJob6.buttons}
                    />
                    <Recommandationjobs
                        logo={recommandationJob7.logo}
                        name={recommandationJob7.name}
                        text={recommandationJob7.text}
                        buttons={recommandationJob7.buttons}
                    />
                    <Recommandationjobs
                        logo={recommandationJob8.logo}
                        name={recommandationJob8.name}
                        text={recommandationJob8.text}
                        buttons={recommandationJob8.buttons}
                    />
                </div>
                <Paginate setCurrentPage={setCurrentPage} />
            </div>
        </div>
    );
}

export default Page3;





