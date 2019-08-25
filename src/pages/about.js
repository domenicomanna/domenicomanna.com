import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import PageTitle from '../components/pageTitle/pageTitle';

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <PageTitle>About</PageTitle>
      <p>
        Before discovering programming, I originally wanted to become an English teacher.
        After earning an Associate's in Liberal Arts in 2017, I fell out of love with that idea and began evaluating
        other career options. With some research, I came across software development, and I found a <a target="_blank" rel="noopener noreferrer" href="http://moocfi.github.io/courses/2013/programming-part-1/">free, online Java course </a> taught by a university in Finland. I began working through it and loved it. I enrolled at the University of Bridgeport, and will graduate in December 2021 with a major in computer science and a double minor in computer engineering and math.
      </p>

      <p>
        In addition to attending school full time, I work part-time as a software developer for <a rel="noopener noreferrer" href = "https://www.premieruplink.com/">Premier Graphics</a>. I help maintain the existing codebase, as well as add additional features to the programs. I also write new applications that aim to automate repetitive tasks.
       </p> 

      <p>
        I felt confused when I no longer wanted to become an English teacher. However, that confusion is gone, as I know now that software development is the right career for me.
      </p>
      {/* <p>
        Today, I'm glad to say that software development is the right career path for me.
      </p> */}

    </Layout>
  );
}

export default About;