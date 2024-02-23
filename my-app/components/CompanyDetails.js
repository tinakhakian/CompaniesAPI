// components/CompanyDetails.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CompanyDetails = ({ company }) => {
    const {
        overview,
        founded_year,
        founded_month,
        founded_day,
        relationships,
        total_money_raised,
        competitions,
        number_of_employees,
        crunchbase_url,
    } = company;

    return (
        <Container>
            <Row>
                <Col md>
                <div dangerouslySetInnerHTML={{ __html: overview || 'N/A' }} />
                <br />
                <strong>Founded:</strong>{' '}
                {founded_year || founded_month
                 ? `${getMonthAbbreviation(founded_month)} ${founded_day || ''} ${founded_year}`
                : 'N/A'}
                    <br />
                    <br />

                    <strong>Founders:</strong>{' '}
                    {relationships && relationships.some((relation) => relation.title.includes('Founder'))
                       ? relationships
                     .filter((relation) => relation.title.includes('Founder'))
                    .map(
                     (founder, index) =>
                  `${founder.person.first_name} ${founder.person.last_name} (${founder.title})${
                      index < relationships.length - 1 ? ', ' : ''
                  }`
                       )
                 : 'N/A'}
                    <br />
                    <br />

                    <strong>Total Money Raised:</strong> {total_money_raised || 'N/A'} <br />
                    <br />
                    <strong>Competitors:</strong>{' '}
                    {competitions ? (
                        competitions.length > 0 ? (
                            <ul>
                                {competitions.map((competitor, index) => (
                                    <li key={`competitor-${index}`}>{competitor.competitor.name}</li>
                                ))}
                            </ul>
                        ) : (
                            'N/A'
                        )
                    ) : (
                        'N/A'
                    )}
                    <br />
                    <strong>Number of Employees: </strong> {number_of_employees || 'N/A'} <br />
                    <br />
                    <strong>Crunchbase_url:</strong>{' '}
                    {crunchbase_url ? (
                        <a href={crunchbase_url} target="_blank" rel="noopener noreferrer">
                            {crunchbase_url}
                        </a>
                    ) : (
                        'N/A'
                    )}
                    <br />
                    <br />
                </Col>
            </Row>
        </Container>
    );
};

// Helper function to get three-letter month abbreviation
const getMonthAbbreviation = (month) => {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return months[month - 1] || '';
  };

export default CompanyDetails;
