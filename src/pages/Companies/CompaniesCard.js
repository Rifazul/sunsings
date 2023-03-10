import React from 'react';
import { Link } from 'react-router-dom';

const CompaniesCard = ({companie}) => {

    const {company, description} = companie
    return (
      <div className="card  bg-blue-300 shadow-xl">
      <div className="card-body text-justify">
      <h2 className='text-2x'> <b>Company Name</b>: {company} </h2>
      <p className='p-0'><b >Job description</b>: {description} </p>
    
    <div className="card-actions justify-end">
      <Link to='/detailes'><button className="btn btn-primary">Details</button> </Link> 
     </div>
   </div>

</div>
    );
};

export default CompaniesCard;