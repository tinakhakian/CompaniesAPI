/* eslint-disable react/no-unescaped-entities */
// pages/index.js
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

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Link from 'next/link';
import { Card } from 'react-bootstrap';
import CompanyDetails from '@/components/CompanyDetails'; 
import JumboHeading from '@/components/JumboHeading';

const Home = ({ company }) => {
    console.log('Home component rendered');
    
    return (
        <>
            <JumboHeading
                heading="Welcome to Company Info App"
                text="The app provides a variety of company information (from Crunchbase data) such as the company website and/or blog websites about the company, funding rounds, and known individuals associated with the company."
            />

            <Card>
                <Card.Body>
                    <p>
                        A short description of Crunchbase or Crunchbase data which is the origin of the sample_training.companies dataset on MongoDB Atlas. 
                        Learn more on <Link href="https://en.wikipedia.org/wiki/Crunchbase" target="_blank" rel="noopener noreferrer">Wikipedia</Link>.
                    </p>

                    <p>
                        It's difficult to choose a favourite but you can search companies using tags,e.g.
                        "<Link href="/companies/web">Web</Link>{' '}",
                        "<Link href="/companies/edu">edu</Link>{' '}",
                        "<Link href="/companies/game">game</Link>"
                        and so on. Currently, company <strong>{company.name}</strong> (Founded in {company.founded_year}) is one of my favourites and shown here. 
                    </p>

                    <CompanyDetails company={company} />
                </Card.Body>
            </Card>
        </>
    );
};

export async function getStaticProps() {
    // Fetching the Id for Pixsta
    const companyId = '52cdef7d4bab8bd675298970'; 
    const res = await fetch(`https://moccasins-gosling.cyclic.app/api/company/${companyId}`);
    const data = await res.json();

    return {
        props: {
            company: data,
        },
    };
}

export default Home;
