import React from 'react';
import './services.css';

const services = [
  {
    title: 'Asset Evaluation and Portfolio Assessment',
    description: 'Comprehensive analysis and evaluation of assets to optimize portfolio performance.'
  },
  {
    title: 'Investment Management Services',
    description: 'Professional management of investments to meet specified goals.'
  },
  {
    title: 'Contractual Fund Management Services',
    description: 'Specialized management of funds based on contractual agreements.'
  },
  {
    title: 'Business Management Services',
    description: 'Expert services to manage and grow your business effectively.'
  },
  {
    title: 'Expenses Management Services',
    description: 'Efficient management of expenses to maximize profitability.'
  },
  {
    title: 'Investment Plans',
    description: 'Customized investment plans tailored to your financial goals.'
  }
];

function Services() {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
