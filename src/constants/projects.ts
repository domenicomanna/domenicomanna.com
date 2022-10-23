export type Project = {
  imageFileName: string
  title: string
  description: string
  technologiesUsed: string[]
  websiteLink: string
  repositoryLink: string
}

const projects: Project[] = [
  {
    imageFileName: "bodyFitnessTracker.jpg",
    title: "Body Fitness Tracker",
    description:
      "A website powered by a REST API that allows users to track their body measurements and body fat percentage.",
    technologiesUsed: [
      ".Net Core",
      "Entity Framework Core",
      "MySQL Server",
      "Docker",
      "React",
      "Typescript",
      "CSS",
    ],
    websiteLink: "https://body-fit-tracker-client.hobby-projects.com/",
    repositoryLink: "https://github.com/domenicomanna/bodyFitTracker",
  },
  {
    imageFileName: "beerHub.jpg",
    title: "BeerHub",
    description: `A React app that utilizes the <a href = "https://punkapi.com/" target = "_blank" rel="noopener noreferrer"> Punk API </a> to retrieve information about BrewDog's massive beer catalog. This app enables users to search for any BrewDog beer, and save their favorite ones.`,
    technologiesUsed: ["React", "CSS"],
    websiteLink: "https://domenicomanna.github.io/beerHub/",
    repositoryLink: "https://github.com/domenicomanna/beerHub",
  },
  {
    imageFileName: "titanFitness.jpg",
    title: "Titan Fitness",
    description: `A responsive website for a fictional gym. This project was created to practice fundamental CSS layouts such as flexbox and grid.`,
    technologiesUsed: ["Javascript", "CSS", "HTML"],
    websiteLink: "https://domenicomanna.github.io/titanFitness/",
    repositoryLink: "https://github.com/domenicomanna/titanFitness",
  },
]

export default projects
