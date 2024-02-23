/*********************************************************************************
*  WEB422 – Assignment 3
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Tina Khakian Student ID: 133117226 Date: 02/21/2024
*
*
********************************************************************************/ 


import React from 'react';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { Pagination } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import JumboHeading from '@/components/JumboHeading';
import CompanyDetails from '@/components/CompanyDetails';


const CompaniesIndex = () => {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  console.log('Accordion:', Accordion);


  const { data, error } = useSWR(`https://moccasins-gosling.cyclic.app/api/companies?page=${page}&perPage=10`);

  useEffect(() => {
    console.log('useEffect - Data:', data);
    console.log('useEffect - Error:', error);

    if (data) {
      console.log('Data available. Setting page data:', data);
      setPageData(data);
    }

    if (error) {
      console.error('Error fetching data:', error);
    }
  }, [data, error]);

  const previous = () => {
    if (page > 1) {
      console.log('Going to previous page:', page - 1);
      setPage(page - 1);
    }
  };

  const next = () => {
    console.log('Going to next page:', page + 1);
    setPage(page + 1);
  };

  return (
    <>
      <JumboHeading
        heading="Companies Collection"
        text="This collection is from MongoDB Atlas sample data sample_training.companies which contains information on companies listed on Crunchbase."
      />
<Accordion>
  {pageData.map((company) => (
    <Accordion.Item key={company._id} eventKey={company._id}>
      <Accordion.Header>
        <strong style={{ marginRight: '4px' }}>{company.name}</strong>
        {`(Founded in ${company.founded_year}${company.founded_month ? `/${company.founded_month}` : ''}${company.founded_day ? `/${company.founded_day}` : ''})`}
        {company.description && ` (${company.description})`}
      </Accordion.Header>
      <Accordion.Body>
        <CompanyDetails company={company} />
      </Accordion.Body>
    </Accordion.Item> 
  ))}
</Accordion>







      
      <Pagination>
        <Pagination.Prev onClick={previous} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </>
  );
};

export default CompaniesIndex;
