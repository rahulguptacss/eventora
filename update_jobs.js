const fs = require('fs');

const dataPath = './app/data/data.json';
const data = require(dataPath);

const jobsList = data.categories.Event.sections.CareerJobs.variants.EventCareerJobs1.list;

const additionalData = {
  2: {
    experience: "2 - 4 Years",
    postedOn: "June 1, 2024",
    image: "/images/blog/blog2.png",
    aboutRole: "We are looking for a creative Event Marketing Executive to promote our events and drive attendance. You will manage campaigns across multiple channels and ensure maximum reach.",
    responsibilities: [
      "Develop and execute comprehensive event marketing campaigns.",
      "Manage social media promotions and email marketing.",
      "Collaborate with PR and media partners for event coverage.",
      "Track and report on campaign performance and ROI.",
      "Assist in creating marketing collaterals and promotional materials."
    ],
    requirements: [
      "Bachelor's degree in Marketing, Communications, or related field.",
      "2-4 years of experience in marketing, preferably in events.",
      "Strong copywriting and communication skills.",
      "Proficiency in digital marketing tools and analytics.",
      "Creative thinker with a data-driven approach."
    ],
    niceToHave: [
      "Experience with event ticketing platforms.",
      "Basic graphic design skills (Canva, Photoshop).",
      "Familiarity with SEO and content marketing."
    ]
  },
  3: {
    experience: "4 - 6 Years",
    postedOn: "June 10, 2024",
    image: "/images/blog/blog3.png",
    aboutRole: "Join our team as a Vendor Relations Manager to build and maintain strong partnerships with suppliers, caterers, decorators, and venues. You will be the key point of contact for all our vendor partners.",
    responsibilities: [
      "Identify, evaluate, and onboard new event vendors.",
      "Negotiate contracts and pricing to ensure cost-effectiveness.",
      "Maintain a comprehensive vendor database and track performance.",
      "Ensure quality of service and compliance with event standards.",
      "Resolve any vendor-related issues before, during, or after events."
    ],
    requirements: [
      "Bachelor's degree in Business Administration or related field.",
      "4-6 years of experience in procurement or vendor management.",
      "Excellent negotiation and contract management skills.",
      "Strong relationship-building and communication abilities.",
      "Detail-oriented with strong organizational skills."
    ],
    niceToHave: [
      "Existing strong network of event vendors and suppliers.",
      "Experience in the hospitality or event industry.",
      "Strong conflict resolution skills."
    ]
  },
  4: {
    experience: "3 - 5 Years",
    postedOn: "June 15, 2024",
    image: "/images/blog/blog4.png",
    aboutRole: "We are seeking a highly organized Production Coordinator to oversee the technical and logistical aspects of our events. You will ensure that lighting, sound, staging, and logistics run flawlessly.",
    responsibilities: [
      "Coordinate technical requirements including AV, lighting, and staging.",
      "Manage production schedules and run-of-show documents.",
      "Oversee load-in, setup, and load-out processes on-site.",
      "Ensure health and safety compliance during event production.",
      "Liaise with technical crew and venue management."
    ],
    requirements: [
      "3-5 years of experience in technical event production.",
      "Strong understanding of AV equipment and stage management.",
      "Excellent problem-solving skills under high-pressure situations.",
      "Ability to work flexible hours and travel as required.",
      "Strong leadership and team coordination skills."
    ],
    niceToHave: [
      "Technical certifications (e.g., AV, Rigging, OSHA).",
      "Experience with AutoCAD or event diagramming software.",
      "First Aid and CPR certification."
    ]
  },
  5: {
    experience: "1 - 3 Years",
    postedOn: "July 1, 2024",
    image: "/images/blog/blog5.png",
    aboutRole: "As a Guest Experience Executive, you will be the face of our events, ensuring every attendee feels welcomed, valued, and has an unforgettable experience from start to finish.",
    responsibilities: [
      "Manage guest registration, ticketing, and on-site check-in processes.",
      "Coordinate VIP arrivals, seating, and special requests.",
      "Serve as the primary point of contact for attendee queries on-site.",
      "Design and implement strategies to enhance attendee engagement.",
      "Gather post-event feedback and compile satisfaction reports."
    ],
    requirements: [
      "1-3 years of experience in hospitality, customer service, or events.",
      "Exceptional communication and interpersonal skills.",
      "Friendly, approachable, and professional demeanor.",
      "Ability to remain calm and positive in fast-paced environments.",
      "Proficiency in basic office software and quick to learn new tools."
    ],
    niceToHave: [
      "Fluency in multiple languages.",
      "Experience with event registration and guest management software.",
      "Background in luxury hospitality or premium event services."
    ]
  },
  6: {
    experience: "2 - 4 Years",
    postedOn: "July 5, 2024",
    image: "/images/blog/blog6.png",
    aboutRole: "We need a creative Content & Social Media Specialist to tell the story of our events through compelling digital content. You will be responsible for bringing our event experiences to life online.",
    responsibilities: [
      "Create engaging written and visual content for all social platforms.",
      "Provide live social media coverage during events (tweets, stories, reels).",
      "Manage the content calendar and schedule posts appropriately.",
      "Engage with our online community and respond to comments/messages.",
      "Analyze social media metrics and provide regular performance reports."
    ],
    requirements: [
      "2-4 years of proven experience in social media management.",
      "Excellent writing, editing, and storytelling skills.",
      "Deep understanding of social media algorithms and best practices.",
      "Proficiency in social media analytics and management tools.",
      "Ability to capture high-quality photos and short videos."
    ],
    niceToHave: [
      "Photography and videography skills.",
      "Experience with Adobe Creative Suite (Premiere, Illustrator).",
      "Prior experience managing social media for live events."
    ]
  }
};

jobsList.forEach(job => {
  if (additionalData[job.id]) {
    Object.assign(job, additionalData[job.id]);
  }
});

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
console.log('Successfully updated data.json with job details.');
