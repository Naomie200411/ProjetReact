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
       <div className="flex-shrink-0 ml-5">
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
      </div>
        <div className="p-10 space-y-4 ml-auto">
         <SocialJobs
        name="Social Media Assistant"
        subtitle1="Nomad"
        subtitle2="Paris, France"
        width="90"
        applied="5"
        capacity="10"
        />
        <SocialJobs
        name="Social Media Assistant"
        subtitle1="Nomad"
        subtitle2="Paris, France"
        width="90"
        applied="5"
        capacity="10"
        />
        <SocialJobs
        name="Social Media Assistant"
        subtitle1="Nomad"
        subtitle2="Paris, France"
        width="90"
        applied="5"
        capacity="10"
        />
        <SocialJobs
        name="Social Media Assistant"
        subtitle1="Nomad"
        subtitle2="Paris, France"
        width="90"
        applied="5"
        capacity="10"
        />
        <SocialJobs
        name="Social Media Assistant"
        subtitle1="Nomad"
        subtitle2="Paris, France"
        width="90"
        applied="5"
        capacity="10"
        />
        <SocialJobs
        name="Social Media Assistant"
        subtitle1="Nomad"
        subtitle2="Paris, France"
        width="90"
        applied="5"
        capacity="10"
        />
        <SocialJobs
        name="Social Media Assistant"
        subtitle1="Nomad"
        subtitle2="Paris, France"
        width="90"
        applied="5"
        capacity="10"
        />

    </div>

    </div>   
  );
}

export default Page2;
