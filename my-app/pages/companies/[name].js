// pages/companies/[name].js
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Error from 'next/error';
import JumboHeading from '@/components/JumboHeading';
import CompanyDetails from '@/components/CompanyDetails';

const Companies = () => {
  const router = useRouter();
  const { name } = router.query;

  const { data, error } = useSWR(`https://moccasins-gosling.cyclic.app/api/companies?page=1&perPage=8&name=${name}`);

  useEffect(() => {
    
  }, [data, error]);


  if (!data) {
    return null;
  }

  if (Array.isArray(data) && data.length === 0) {
    return <Error statusCode={400} />;
  }

  return (
    <div>
      {data.map((company) => (
        <div key={company._id}>
          <JumboHeading heading={company.name} text={company.description} />
          <CompanyDetails company={company} />
        </div>
      ))}
    </div>
  );
};

export default Companies;
