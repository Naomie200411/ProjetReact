import Paginate from "./Paginate";
import PostJobs from "./PostJobs";
import Category from "./category";
import Featuredjobs from "./featuredjobs";
import Filter from "./filter";
import Jobs from "./jobs";
import SocialJobs from "./SocialJobs";

import Recommandationjobs from "./recommandation";
// import LatestJobs from "./components/latestjobs";
import { FeaturedJobs } from "../interfaces/featuresProps"; 
import { RecommandationProps } from "../interfaces/recommandationProps";
import '../App.css';
import { Icon } from '@iconify/react';

function Page2() {
  return(

    <div className="p-10 flex justify-end space-y-4">
       <div className="flex-shrink-0 ml-0 flex flex-col space-y-4 p-11">
        <div>
        <Filter
          labelText="Categories"
          filterTypes={[
            { label: 'Full-time', count: 3 },
            { label: 'Part-Time', count: 5 },
            { label: 'Remote', count: 2 },
            { label: 'Internship', count: 24 },
            { label: 'Contract', count: 3 }
          ]}
        />
        <span className="mr-0">^</span>
        </div>
       
        <div>
        <Filter
          labelText="Categories"
          filterTypes={[
            { label: 'Full-time', count: 3 },
            { label: 'Part-Time', count: 5 },
            { label: 'Remote', count: 2 },
            { label: 'Internship', count: 24 },
            { label: 'Contract', count: 3 }
          ]}
        />
        <span>^</span>
        </div>
        <div>
        <Filter
          labelText="Categories"
          filterTypes={[
            { label: 'Full-time', count: 3 },
            { label: 'Part-Time', count: 5 },
            { label: 'Remote', count: 2 },
            { label: 'Internship', count: 24 },
            { label: 'Contract', count: 3 }
          ]}
        />
        <span>^</span>
        </div>
        <div>
        <Filter
          labelText="Categories"
          filterTypes={[
            { label: 'Full-time', count: 3 },
            { label: 'Part-Time', count: 5 },
            { label: 'Remote', count: 2 },
            { label: 'Internship', count: 24 },
            { label: 'Contract', count: 3 }
          ]}
        />
        <span>^</span>
        </div>
</div>

        <div className="p-10 space-y-4 ml-auto">
            <div className="flex justify-between items-center">
            <span className="font-bold text-3xl italic cursive-font mr-[400px]">All jobs</span>           <div className="flex items-center space-x-4">
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
          name="Interactive Developper"
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

    </div>

    </div>   
  );
}

export default Page2;
