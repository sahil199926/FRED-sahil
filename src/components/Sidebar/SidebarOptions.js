import overview from '../../assets/icon/project_overview.png'
import hes from '../../assets/icon/hes.png'
import engineering from '../../assets/icon/Engineering_blue_rgb 1.png'
import construction from '../../assets/icon/Construction.png'
import Systems from '../../assets/icon/Systems Completion.png'
import startup from '../../assets/icon/startup.png'
import quality from '../../assets/icon/quality management.png';
import cost from '../../assets/icon/cost.png';
import schedule from '../../assets/icon/schedule.png';
import Information from '../../assets/icon/Information Management.png';
import Resourcing from '../../assets/icon/Resourcing.png';
import Contracts from '../../assets/icon/Contracts.png';
import materials from '../../assets/icon/materials.png';
import digital from '../../assets/icon/digital.png';




export const option=[
  {
    name:"Project Overview",
    icon:overview,
    path:"/overview",
   children:[]
  },
  {
    name:"HES",
    icon:hes,
    children:[]
  },
  {
    name:"Engineering",
    icon:engineering,
    children:[]
  },
  {
    name:"Construction",
    icon:construction,
  },
  {
    name:"Systems Completion",
    icon:Systems,
    children:[]
  },
  {
    name:"Start-up & Operations",
    icon:startup,
    children:[]
  },
  {
    name:"Quality Management",
    icon:quality,
    children:[]
  },
  {
    name:"Cost",
    icon:cost,
    path:'/cost',
    navigateTo:'/cost/cost-baselines',
    children:[
      {
        name:'Cost Baselines',
        path:'/cost/cost-baselines'
      }
    ]
  },
  {
    name:"Schedule",
    icon:schedule,
    children:[]
  },
  {
    name:"Information Management",
    icon:Information,
    children:[]
  },
  {
    name:"Resourcing",
    icon:Resourcing,
    children:[]
  },
  {
    name:"Contracts",
    icon:Contracts,
    children:[]
  },
  {
    name:"Materials",
    icon:materials,
    children:[]
  },
  {
    name:'Automation / Digital',
    icon:digital,
    children:[]
  }

]