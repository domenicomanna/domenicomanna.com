import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo'
import PageTitle from '../components/pageTitle/pageTitle';
import styles from '../pageStyles/contact.module.css';
import {socialNetworks, email} from '../constants/socialNetworks';

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <PageTitle>Contact</PageTitle>
      <p> Email me anytime: <a href = {`mailto: ${email.address}`}>{email.address} </a></p>
      <p>You can also find me at: </p>
      <ul className = {styles.networks}>
        {transformSocialNetworks()}
      </ul>
    </Layout>
  );
}

export default Contact;


const transformSocialNetworks = () => {
  return socialNetworks.map((socialNetwork, index) => (
    <li key = {index} className = {styles.networkItem}>
      <span className = {styles.networkName}>{socialNetwork.network}: </span>
      <a target="_blank" rel="noopener noreferrer" href = {socialNetwork.url}>{socialNetwork.username}</a>
    </li>
  ));
}