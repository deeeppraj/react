import React from 'react'
import Card from "./Card.jsx";

const response = [
  {
    "logo": "https://img.icons8.com/color/96/amazon.png",
    "companyName": "Amazon",
    "role": "Senior UI Developer",
    "postingDate": "5 days ago",
    "tag1": "Part-time",
    "tag2": "Senior Level",
    "payRate": "$120/hr",
    "location": "San Francisco, CA"
  },
  {
    "logo": "https://img.icons8.com/color/96/google-logo.png",
    "companyName": "Google",
    "role": "Machine Learning Engineer",
    "postingDate": "2 days ago",
    "tag1": "Full-time",
    "tag2": "Hybrid",
    "payRate": "$135/hr",
    "location": "Mountain View, CA"
  },
  {
    "logo": "https://img.icons8.com/color/96/microsoft.png",
    "companyName": "Microsoft",
    "role": "Cloud Solutions Architect",
    "postingDate": "1 week ago",
    "tag1": "Senior Level",
    "tag2": "Remote",
    "payRate": "$150/hr",
    "location": "Redmond, WA"
  },
  {
    "logo": "https://img.icons8.com/color/96/netflix.png",
    "companyName": "Netflix",
    "role": "Backend Engineer",
    "postingDate": "3 days ago",
    "tag1": "Contract",
    "tag2": "On-site",
    "payRate": "$140/hr",
    "location": "Los Gatos, CA"
  },
  {
    "logo": "https://img.icons8.com/color/96/stripe.png",
    "companyName": "Stripe",
    "role": "Product Designer",
    "postingDate": "10 days ago",
    "tag1": "Full-time",
    "tag2": "Senior Level",
    "payRate": "$125/hr",
    "location": "New York, NY"
  },
  {
    "logo": "https://img.icons8.com/color/96/tesla-logo.png",
    "companyName": "Tesla",
    "role": "Autopilot Software Engineer",
    "postingDate": "4 days ago",
    "tag1": "Full-time",
    "tag2": "On-site",
    "payRate": "$145/hr",
    "location": "Palo Alto, CA"
  },
  {
    "logo": "https://img.icons8.com/color/96/facebook.png",
    "companyName": "Meta",
    "role": "Frontend Engineer (React)",
    "postingDate": "3 hours ago",
    "tag1": "Full-time",
    "tag2": "Remote",
    "payRate": "$155/hr",
    "location": "Menlo Park, CA"
  },
  {
    "logo": "https://img.icons8.com/color/96/airbnb.png",
    "companyName": "Airbnb",
    "role": "Data Scientist",
    "postingDate": "6 days ago",
    "tag1": "Contract",
    "tag2": "Hybrid",
    "payRate": "$130/hr",
    "location": "San Francisco, CA"
  },
  {
    "logo": "https://img.icons8.com/color/96/shopify.png",
    "companyName": "Shopify",
    "role": "Full Stack Engineer",
    "postingDate": "1 day ago",
    "tag1": "Senior Level",
    "tag2": "Remote",
    "payRate": "$115/hr",
    "location": "Ottawa, Canada"
  },
  {
    "logo": "https://img.icons8.com/color/96/adobe.png",
    "companyName": "Adobe",
    "role": "UX Researcher",
    "postingDate": "2 weeks ago",
    "tag1": "Full-time",
    "tag2": "On-site",
    "payRate": "$105/hr",
    "location": "San Jose, CA"
  },
  {
    "logo": "https://img.icons8.com/color/96/ibm.png",
    "companyName": "IBM",
    "role": "DevOps Engineer",
    "postingDate": "12 days ago",
    "tag1": "Full-time",
    "tag2": "Hybrid",
    "payRate": "$95/hr",
    "location": "Armonk, NY"
  },
  {
    "logo": "https://img.icons8.com/color/96/intel.png",
    "companyName": "Intel",
    "role": "Embedded Systems Engineer",
    "postingDate": "8 days ago",
    "tag1": "On-site",
    "tag2": "Senior Level",
    "payRate": "$140/hr",
    "location": "Santa Clara, CA"
  },
  {
    "logo": "https://img.icons8.com/color/96/paypal.png",
    "companyName": "PayPal",
    "role": "Security Engineer",
    "postingDate": "4 days ago",
    "tag1": "Full-time",
    "tag2": "Remote",
    "payRate": "$150/hr",
    "location": "San Jose, CA"
  },
  {
    "logo": "https://img.icons8.com/color/96/oracle.png",
    "companyName": "Oracle",
    "role": "Database Administrator",
    "postingDate": "3 weeks ago",
    "tag1": "Full-time",
    "tag2": "On-site",
    "payRate": "$110/hr",
    "location": "Redwood Shores, CA"
  },
  {
    "logo": "https://img.icons8.com/color/96/linkedin.png",
    "companyName": "LinkedIn",
    "role": "Site Reliability Engineer",
    "postingDate": "9 days ago",
    "tag1": "Contract",
    "tag2": "Hybrid",
    "payRate": "$135/hr",
    "location": "Sunnyvale, CA"
  }
]





const App = () => {
  return (
    
    <div className='parent'>
       {response.map(function(elem){
        return <Card logo={elem.logo} name ={elem.companyName} role={elem.role} date = {elem.postingDate}
        tag1 = {elem.tag1} tag2 = {elem.tag2} rate = {elem.payRate} location = {elem.location}/>

       })}
    </div>




  )
}

export default App