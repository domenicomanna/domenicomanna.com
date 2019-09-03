import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo'
import PageTitle from '../components/pageTitle/pageTitle';
import { socialNetworks, email } from '../constants/socialNetworks';
import styles from './pageStyles/contact.module.css';

const Contact = () => {
  return (
    <Layout>
      <section>
        <SEO title="Contact" />
        <PageTitle>Contact</PageTitle>
        <p> Email me anytime: <a href={`mailto: ${email.address}`}>{email.address} </a></p>
        <p className = {styles.listDescription}>You can also find me at: </p>
        <ul className = {styles.socialNetworks}>
          {transformSocialNetworks()}
        </ul>
      </section>
    </Layout>
  );
}

export default Contact;


const transformSocialNetworks = () => (
  socialNetworks.map(socialNetwork => (
    <li key={socialNetwork.url}>
      <span>{socialNetwork.network}: </span>
      <a target="_blank" rel="noopener noreferrer" href={socialNetwork.url}>{socialNetwork.username}</a>
    </li>
  ))
);