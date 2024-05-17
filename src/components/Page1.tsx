import React from 'react';
import Category from './category';
import Featuredjobs from './featuredjobs';
import Filter from './filter';
import Jobs from './jobs';
import Recommandationjobs from './recommandation';
import PostJobs from './PostJobs';
import { FeaturedJobs } from '../interfaces/featuresProps';
import { RecommandationProps } from '../interfaces/recommandationProps';
import '../App.css';
import { Icon } from '@iconify/react';

function Page1() {
  const featuredjobs1: FeaturedJobs = {
    logo: '../src/assets/images/EmailMarketing.svg',
    name: 'Email Marketing',
    subtitle1: 'Revolut',
    subtitle2: 'Madrid, Spain',
    text: 'Revolut is looking for Email Marketing to help team ma ...',
    button1: 'Marketing',
    button2: 'Design'
  };
  const featuredjobs2: FeaturedJobs = {
    logo: '../src/assets/images/Dropbox.svg',
    name: 'Brand Designer',
    subtitle1: 'Dropbox',
    subtitle2: 'San Francisco, US',
    text: 'Dropbox is looking for Brand Designer to help the team t...',
    button1: 'Marketing',
    button2: 'Design'
  };
  const featuredjobs3: FeaturedJobs = {
    logo: '../src/assets/images/Company Logo.svg',
    name: 'Email Marketing',
    subtitle1: 'Pitch',
    subtitle2: 'Berlin, Germany',
    text: 'Pitch is looking for Custumer Manager to join marketing t... ',
    button1: 'Marketing',
    button2: 'Design'
  };

  const featuredjobs4: FeaturedJobs = {
    logo: '../src/assets/images/Headers.svg',
    name: 'Visual Designer',
    subtitle1: 'Blinklist',
    subtitle2: 'Granada, Spain',
    text: 'Blinklist is looking for Visual Designer to help team desi...',
    button1: 'Marketing',
    button2: 'Design'
  };
  const featuredjobs5: FeaturedJobs = {
    logo: '../src/assets/images/designer.svg',
    name: 'Product Designer',
    subtitle1: 'ClassPass',
    subtitle2: 'Manchester, UK',
    text: 'ClassPass is looking for Product Designer to help us...',
    button1: 'Marketing',
    button2: 'Design'
  };
  const featuredjobs6: FeaturedJobs = {
    logo: '../src/assets/images/product.svg',
    name: 'Lead Designer',
    subtitle1: 'Canva',
    subtitle2: 'Ontario, Canada',
    text: 'Canva is looking for Lead Engineer to help develop n...',
    button1: 'Marketing',
    button2: 'Design'
  };
  const featuredjobs7: FeaturedJobs = {
    logo: '../src/assets/images/strategist.svg',
    name: 'Brand Strategist',
    subtitle1: 'GoDaddy',
    subtitle2: 'Marseille, France',
    text: 'GoDaddy is looking for Brand Strategist to join the team',
    button1: 'Marketing',
    button2: 'Design'
  };
  const featuredjobs8: FeaturedJobs = {
    logo: '../src/assets/images/analyst.svg',
    name: 'Data Analyst',
    subtitle1: 'Twitter',
    subtitle2: 'San Diego, US',
    text: 'Twitter is looking for Data Analyst to help team desi...',
    button1: 'Marketing',
    button2: 'Design'
  };


  const recommandationData: RecommandationProps = {
    logo: '../src/assets/images/EmailMarketing.svg',
    name: 'Nom de l\'entreprise',
    text: 'Nomad is located in Paris, France. Nomad has generates $728,000 in sales (USD).',
    buttons: [
      { bgColor: 'yellowlight', textColor: 'yellow', label: 'Business Service' },
      { bgColor: 'secondary', textColor: 'black', label: 'Button 2' },
    ]
  };

  return (
    <div className="p-10 space-y-4">
      <div className="header">
        <div>
          <span className="explore">Explore by</span>
          <span className="category"> Category</span>
        </div>
        <a href="#" className="show-all-jobs">Show all jobs <Icon icon="formkit:arrowright" className='arrow-icon' /> </a>
      </div>
      <div className="category-grid ">
        <Category icon="material-symbols-light:design-services-outline" categoryName="Design" jobsNumber={235} />
        <Category icon="mynaui:chart-bar" categoryName="Sales" jobsNumber={756} />
        <Category icon="octicon:megaphone-24" categoryName="Marketing" jobsNumber={140} />
        <Category icon="arcticons:finance-manager" categoryName="Finance" jobsNumber={325} />
        <Category icon="arcticons:emoji-desktop-computer" categoryName="Technology" jobsNumber={436} />
        <Category icon="ph:code-light" categoryName="Engineering" jobsNumber={542} />
        <Category icon="material-symbols-light:business-center-outline" categoryName="Business" jobsNumber={211} />
        <Category icon="mdi:people-group" categoryName="Human Ressource" jobsNumber={346} />
      </div>
      <br />
      <PostJobs />
      <div className="header">
        <span className="explore">Featured <span className="category">Jobs</span></span>
        <a href="#" className="show-all-jobs">Show all jobs <Icon icon="formkit:arrowright" className='arrow-icon' /> </a>
      </div>
      <div className="category-grid">
        <Featuredjobs
          job={featuredjobs1}
          buttons={[
            { bgColor: 'redLight', textColor: 'yellow', label: 'Marketing' },
            { bgColor: 'greenlight', textColor: 'green', label: 'Design' },
          ]}
        />
        <Featuredjobs
          job={featuredjobs2}
          buttons={[
            { bgColor: 'greenlight', textColor: 'green', label: 'Design' },
            { bgColor: 'blue', textColor: 'blue', label: 'Business' },
          ]}
        />
        <Featuredjobs
          job={featuredjobs3}
          buttons={[
            { bgColor: 'greenlight', textColor: 'yellow', label: 'Marketing' }
            
          ]}
        />
        <Featuredjobs
          job={featuredjobs4}
          buttons={[
            { bgColor: 'greenlight', textColor: 'green', label: 'Design' }
          ]}
        />
        <Featuredjobs
          job={featuredjobs5}
          buttons={[
            { bgColor: 'greenlight', textColor: 'yellow', label: 'Marketing' },
            { bgColor: 'redlight', textColor: 'blue', label: 'Design' },
          ]}
        />
        <Featuredjobs
          job={featuredjobs6}
          buttons={[
            { bgColor: 'greenlight', textColor: 'green', label: 'Design' },
            { bgColor: 'redlight', textColor: 'red', label: 'Business' },
          ]}
        />
        <Featuredjobs
          job={featuredjobs7}
          buttons={[
            { bgColor: 'greenlight', textColor: 'yellow', label: 'Marketing' },
          ]}
        />
        <Featuredjobs
          job={featuredjobs8}
          buttons={[
            { bgColor: 'greenlight', textColor: 'red', label: 'Technology' },
           
          ]}
        />
      </div>
      <div className="header mt-8 mb-8">
        <span className="explore">Latest <span className="category">Jobs open</span></span>
        <a href="#" className="show-all-jobs">Show all jobs <Icon icon="formkit:arrowright" className='arrow-icon' /> </a>
      </div>
      <div className="category-grid2 ">
        <Jobs
          name="Social Media Assistant"
          subtitle1="Nomad"
          subtitle2="Paris, France"
          logo='../src/assets/images/Company-Logo.png'
        />
        <Jobs
          name="Social Media Assistant"
          subtitle1="Netlify"
          subtitle2="Paris, France"
          logo='../src/assets/images/social_media.png'

        />
        <Jobs
          name="Brand Designer"
          subtitle1="Dropbox"
          subtitle2="San Francisco, USA"
          logo='../src/assets/images/Dropbox.svg'

        />
        <Jobs
          name="Brand Designer"
          subtitle1="Maze"
          subtitle2="San Francisco, USA"
          logo='../src/assets/images/brand_designer.png'

        />
        <Jobs
          name="Interactive Developper"
          subtitle1="Terraform"
          subtitle2="Hamburg, Germany"
          logo='../src/assets/images/Company Logo.png'

        />
        <Jobs
          name="Interactive Developper"
          subtitle1="Udacity"
          subtitle2="Hamburg, Germany"
          logo='../src/assets/images/interactive.png'

        />
        <Jobs
          name="HR Manager"
          subtitle1="Packer"
          subtitle2="Lucern, Switzerland"
          logo='../src/assets/images/hr_manager.png'

        />
        <Jobs
          name="HR Manager"
          subtitle1="Webflow"
          subtitle2="Lucern, Switzerland"
          logo='../src/assets/images/manager.png'

        />
      </div>
      
      <Recommandationjobs {...recommandationData} />
    </div>
  );
}

export default Page1;
