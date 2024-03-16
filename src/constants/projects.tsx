export type Project = {
  imagePath: string;
  imageAlt: string;
  title: string;
  description: string;
  technologiesUsed: string[];
  websiteLink: string;
  repositoryLink: string;
};

const projects: Project[] = [
  {
    imagePath: '/src/assets/bodyFitnessTracker.jpg',
    imageAlt: "Dashboard showing a user's body measurements",
    title: 'Body Fitness Tracker',
    description:
      'A website powered by a REST API that allows users to track their body measurements and body fat percentage.',
    technologiesUsed: ['.Net Core', 'Entity Framework Core', 'Postgres', 'Docker', 'React', 'Typescript', 'CSS'],
    websiteLink: 'https://body-fit-tracker-client.hobby-projects.com/',
    repositoryLink: 'https://github.com/domenicomanna/bodyFitTracker',
  },
  {
    imagePath: '/src/assets/beerHub.jpg',
    imageAlt: 'Dashboard showing the name and description of several beers',
    title: 'BeerHub',
    description: `A React app that utilizes the <a href = "https://punkapi.com/" target = "_blank" rel="noopener noreferrer">Punk API</a> to retrieve information about BrewDog's massive beer catalog. This app enables users to search for any BrewDog beer, and save their favorite ones.`,
    technologiesUsed: ['React', 'CSS'],
    websiteLink: 'https://domenicomanna.github.io/beerHub/',
    repositoryLink: 'https://github.com/domenicomanna/beerHub',
  },
  {
    imagePath: '/src/assets/titanFitness.jpg',
    imageAlt: 'Two people doing alternating arm waves with battle ropes',
    title: 'Titan Fitness',
    description: `A responsive website for a fictional gym. This project was created to practice fundamental CSS layouts such as flexbox and grid.`,
    technologiesUsed: ['Javascript', 'CSS', 'HTML'],
    websiteLink: 'https://domenicomanna.github.io/titanFitness/',
    repositoryLink: 'https://github.com/domenicomanna/titanFitness',
  },
];

export default projects;
