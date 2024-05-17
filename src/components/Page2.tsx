import React from 'react';
import Filter from './filter';
import SocialJobs from './SocialJobs';
import { Icon } from '@iconify/react';
import Paginate from './Paginate';


interface Page2Props {
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const Page2: React.FC<Page2Props> = ({ setCurrentPage }) => {
    return (
        <div className="p-10 flex justify-end space-y-4">
            <div className="flex-shrink-0 ml-0 flex flex-col space-y-4 p-11">
                <Filter
                    labelText="Type of Employment"
                    filterTypes={[
                        { label: 'Full-time', count: 3 },
                        { label: 'Part-Time', count: 5 },
                        { label: 'Remote', count: 2 },
                        { label: 'Internship', count: 24 },
                        { label: 'Contract', count: 3 }
                    ]}
                />
                <Filter
                    labelText="Categories"
                    filterTypes={[
                        { label: 'Design', count: 24 },
                        { label: 'Sales', count: 3 },
                        { label: 'Marketing', count: 3 },
                        { label: 'Business', count: 3 },
                        { label: 'Human Ressource', count: 6 },
                        { label: 'Finance', count: 4 },
                        { label: 'Engineering', count: 4 },
                        { label: 'Technology', count: 5 }

                    ]}
                />
                <br /><br /><br /><br /><br /><br /><br />
                <Filter
                    labelText="Job Level"
                    filterTypes={[
                        { label: 'Entry Level', count: 57 },
                        { label: 'Mid Level', count: 3 },
                        { label: 'Senior Level', count: 5 },
                        { label: 'Director', count: 12 },
                        { label: 'VP or Above', count: 8 }
                    ]}
                />
                <Filter
                    labelText="Salary Range"
                    filterTypes={[
                        { label: '$700-$1000', count: 4 },
                        { label: '$100-$1500', count: 6 },
                        { label: '$1500-$2000', count: 10 },
                        { label: '$3000 or above', count: 4 },
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
                <SocialJobs
                    name="Social Media Assistant"
                    subtitle1="Nomad"
                    subtitle2="Paris, France"
                    width="80"
                    applied="5"
                    capacity="10"
                    logo='../src/assets/images/Company-Logo.png'
                />
                <SocialJobs
                    name="Brand Designer"
                    subtitle1="Dropbox"
                    subtitle2="San Francisco, USA"
                    width="32"
                    applied="2"
                    capacity="10"
                    logo='../src/assets/images/Dropbox.svg'
                />
                <SocialJobs
                    name="Interactive Developer"
                    subtitle1="Terraform"
                    subtitle2="Hamburg, Germany"
                    width="90"
                    applied="5"
                    capacity="10"
                    logo='../src/assets/images/Company Logo.png'
                />
                <SocialJobs
                    name="Email Marketing"
                    subtitle1="Revolut"
                    subtitle2="Madrid, Spain"
                    width="0"
                    applied="0"
                    capacity="10"
                    logo='../src/assets/images/email.png'
                />
                <SocialJobs
                    name="Lead Engineer"
                    subtitle1="Canva"
                    subtitle2="Ankara, Turkey"
                    width="90"
                    applied="5"
                    capacity="10"
                    logo='../src/assets/images/product.svg'
                />
                <SocialJobs
                    name="Product Designer"
                    subtitle1="ClassPass"
                    subtitle2="Berlin, Germany"
                    width="90"
                    applied="5"
                    capacity="10"
                    logo= '../src/assets/images/designer.svg'
                />
                <SocialJobs
                    name="Customer Manager"
                    subtitle1="Pitch"
                    subtitle2="Berlin, Germany"
                    width="90"
                    applied="5"
                    capacity="10"
                    logo='../src/assets/images/Company Logo.svg'
                />
                <Paginate setCurrentPage={setCurrentPage} />
            </div>
        </div>
    );
}

export default Page2;
