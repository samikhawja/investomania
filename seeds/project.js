const { Project } = require('../models');

const projectData = [
    {
        title: "Apple",
        description: "Apple Inc. is an American multinational technology company that specializes in consumer electronics, computer software, and online services. Apple is the world's largest technology company by revenue and, since January 2021, the world's most valuable company.",
        date_created: "4/1/1976",
        user_id: 1
    },
    {
        title: "Google",
        description: "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.",
        date_created: "9/4/1998",
        user_id: 2
    },
    {
        title: "Meta",
        description: "Facebook is an American online social media and social networking service owned by Meta Platforms. Founded in 2004 by Mark Zuckerberg with fellow Harvard College students and roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes, its name comes from the face book directories often given to American university students.",
        date_created: "2/1/2004",
        user_id: 3
    }
];

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;