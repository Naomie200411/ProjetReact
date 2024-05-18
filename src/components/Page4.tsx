import React from 'react';
import Category from './category';
import Featuredjobs1 from './featuredjobs1';
import Filter from './filter';
import Jobs from './jobs';
import Recommandationjobs from './recommandation';
import PostJobs from './PostJobs';
import { FeaturedJobs1 } from '../interfaces/featuresProps1';
import { RecommandationProps } from '../interfaces/recommandationProps';
import '../App.css';
import { Icon } from '@iconify/react';
import Header from './header';
import Title from './title';
import Company_Categorie from './company_categorie'
import HeroSection1 from './HeroSection1';
import Resultat from './resultats';



function Page1() {
  const featuredjobs1: FeaturedJobs1 = {
    logo: '../src/assets/images/EmailMarketing.svg',
    name: 'Nomad',
    
    text: 'Nomad is located in Paris, France. Nomad has generates $728,000 in sales (USD).',
    button1: 'Business Service',
  };
  const featuredjobs2: FeaturedJobs1 = {
    logo: '../src/assets/images/Dropbox.svg',
    name: 'Discord',
    text: "We'd love to work with someone like you. We care about creating a delightful experience.",
    button1: 'Business Service',
  };
  const featuredjobs3: FeaturedJobs1 = {
    logo: '../src/assets/images/Company Logo.svg',
    name: 'Maze',
   
    text: "We're a passionate bunch working from all over the world to build the future of rapid testing together. ",
    button1: 'Business Service',
  };

  const featuredjobs4: FeaturedJobs1 = {
    logo: '../src/assets/images/Headers.svg',
    name: 'Udacity',
  
    text: "Udacity is a new type of online university that teaches the actual programming skills.",
    button1: 'Business Service',

  };
  const featuredjobs5: FeaturedJobs1 = {
    logo: '../src/assets/images/designer.svg',
    name: 'Webflow',
   
    text: "Webflow is the first design and hosting platform built from the ground up for the mobile age.",
    button1: 'Marketing',
  };
  const featuredjobs6: FeaturedJobs1 = {
    logo: '../src/assets/images/product.svg',
    name: 'Foundation',
  
    text: "Foundation helps creators mint and auction their digital artworks as NFTs on the Ethereum blockchain.",
    button1: 'Business Service',
  };
  


 

  return (
    <div className=" space-y-4 bg-[#F8F8FD]">
            <HeroSection1/>
      <div className="header">
        <div className='p-10'>
          <span className="explore">Companies by</span>
          <span className="category"> Category</span>
        </div>
      </div>
      <div className="  flex flex-row">
        <Company_Categorie icon="material-symbols-light:design-services-outline" companyName="Design"  />
        <Company_Categorie icon="mynaui:chart-bar" companyName="Sales"  />
        <Company_Categorie icon="octicon:megaphone-24" companyName="Marketing"  />
        <Company_Categorie icon="arcticons:finance-manager" companyName="Finance"  />
        <Company_Categorie icon="arcticons:emoji-desktop-computer" companyName="Technology"  />
        <Company_Categorie icon="ph:code-light" companyName="Technology"  />
       
      </div>
      <br />

      <div className="header">
        <div className='p-10'>
            <img className="category" src="../src/assets/images/material-symbols-light:design-services-outline" alt="" />
          <span className="explore">24 Result</span>

        </div>
      </div>
      <div className="grid grid-cols-4">
        <Resultat image="../src/assets/images/Company Logo1.svg" ResultName="Design" job="3 Jobs"  />
        <Resultat image="../src/assets/images/Company Logo2.svg" ResultName="Sales"  job="3 Jobs" />
        <Resultat image="../src/assets/images/Company Logo3.svg" ResultName="Marketing"  job="3 Jobs"/>
        <Resultat image="../src/assets/images/Company Logo4.svg" ResultName="Finance"  job="3 Jobs" />
        <Resultat image="../src/assets/images/Company Logo5.svg" ResultName="Technology"  job="3 Jobs" />
        <Resultat image="../src/assets/images/Company Logo8.svg" ResultName="Technology"  job="3 Jobs" />
        <Resultat image="../src/assets/images/dBymBmGq_400x400.svg" ResultName="Technology"  job="3 Jobs" />
        <Resultat image="../src/assets/images/Mask Group.svg" ResultName="Technology"  job="3 Jobs" />

      </div>
      <div className='p-10'>   <PostJobs /></div>
    
      <div className="header p-10">
        <span className="explore">Featured <span className="category">Jobs</span></span>
        <a href="#" className="show-all-jobs">Show all jobs <Icon icon="formkit:arrowright" className='arrow-icon' /> </a>
      </div>
      <div className="grid grid-cols-3  gap-6 p-10" >
        <Featuredjobs1
          job={featuredjobs1}
          buttons={[
            { bgColor: 'redLight', textColor: 'yellow', label: 'Marketing' },
          ]}
        />
        <Featuredjobs1
          job={featuredjobs2}
          buttons={[
            { bgColor: 'greenlight', textColor: 'green', label: 'Design' },
          ]}
        />
        <Featuredjobs1
          job={featuredjobs3}
          buttons={[
            { bgColor: 'greenlight', textColor: 'yellow', label: 'Marketing' }
            
          ]}
        />
        <Featuredjobs1
          job={featuredjobs4}
          buttons={[
            { bgColor: 'greenlight', textColor: 'green', label: 'Design' }
          ]}
        />
        <Featuredjobs1
          job={featuredjobs5}
          buttons={[
            { bgColor: 'greenlight', textColor: 'yellow', label: 'Marketing' },
            { bgColor: 'redlight', textColor: 'blue', label: 'Design' },
          ]}
        />
        <Featuredjobs1
          job={featuredjobs6}
          buttons={[
            { bgColor: 'greenlight', textColor: 'green', label: 'Design' },
            { bgColor: 'redlight', textColor: 'red', label: 'Business' },
          ]}
        />
        
      </div>
     
    </div>
  );
}

export default Page1;
