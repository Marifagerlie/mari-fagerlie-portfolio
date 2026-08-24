const TOOL_ICONS = {
  "Canva": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M17.5 8.5a6 6 0 1 0 0 7"/><circle cx="15.5" cy="12" r="1" fill="currentColor" stroke="none"/></svg>`,
  "Instagram": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none"/></svg>`,
  "Figma": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 2h4a4 4 0 0 1 0 8H8V2Z"/><path d="M8 10h4a4 4 0 0 1 0 8 4 4 0 0 1-4-4v-4Z"/><path d="M8 18a4 4 0 1 1 0-8"/></svg>`,
  "Meta Ads": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 12c0-4 2.5-8 5-8s3 3 3 8-1 8-3 8-5-4-5-8Z"/><path d="M20 12c0-4-2.5-8-5-8s-3 3-3 8 1 8 3 8 5-4 5-8Z"/></svg>`,
  "Google Analytics": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 19V9"/><path d="M12 19V5"/><path d="M19 19v-6"/></svg>`,
  "CapCut": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="4"/><circle cx="8.5" cy="15.5" r="1.8"/><circle cx="15.5" cy="15.5" r="1.8"/><path d="M9.8 14.2L16.5 7.5"/><path d="M13.2 7.5h3.3v3.3"/></svg>`,
  "WordPress": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M4.5 9.5l3.8 9.8"/><path d="M8.5 6l4.3 11.5 1.7-4.6"/><path d="M13.2 6h2.5"/><path d="M17 8.5l1.8 5-1.2 3.2"/></svg>`,
  "Excel": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="1.5"/><path d="M3 9h18"/><path d="M9 4v16"/><path d="M6 12.5l3 4M9 12.5l-3 4"/></svg>`,
  "HubSpot": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="6" cy="18" r="2.4"/><circle cx="18" cy="6" r="2.4"/><path d="M8.2 16.2 15.8 8.8"/></svg>`,
  "TikTok": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 8v8a3 3 0 1 1-3-3"/><path d="M9 8c0 2.5 1.8 4 4 4V9c-2 0-3-1.2-3-3"/></svg>`,
  "Kolsquare": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="8" r="3"/><path d="M4 19c0-3.5 2.2-5.5 5-5.5s5 2 5 5.5"/><path d="M15 7c1.5 0 3 1.2 3 3s-1.5 3-3 3"/><path d="M18 16c1.2.5 2 1.7 2 3"/></svg>`,
  "Retriever": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c3 3 3 15 0 18"/><path d="M12 3c-3 3-3 15 0 18"/><path d="M4.5 7h15"/><path d="M4.5 17h15"/></svg>`,
  "Teams": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="6" width="12" height="9" rx="1.5"/><path d="M6 15l-1 3 4-3"/><circle cx="17" cy="7" r="2"/><path d="M14 17v-2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2"/></svg>`,
};

const PROJECTS = [
  {
    id: "Pr and influencer",
    title: "Augustinus bader and Bare Minerals",
    blurb: "Managed the Nordic PR and influencer seeding process for Augustinus Bader, coordinating influencer outreach, product allocation and shipments across Norway, Sweden, Finland and Denmark.",
    role: "Marketing Assistant",
    channel: "Instagram",
    tools: ["Teams", "Retriever", "Kolsquare", "Excel", "Instagram"],
    detail: {
      cover: "url('images/Pr-and-influencers.png')",    
      heroCover: "url('images/Pr-and-influencer-marketing-banner.png')",
      objective: "During my internship at Sæther Nordic, I was given independent responsibility for a Nordic PR seeding project for luxury skincare brand Augustinus Bader. The project involved coordinating PR sendouts to a pre-approved selection of influencers across Norway, Sweden, Denmark and Finland, from initial outreach and product selection to personalized communication, logistics and final distribution.",
      approach: [
        "<strong> Influencer outreach:</strong> Contacted approved influencers across Norway, Sweden, Denmark and Finland and coordinated product preferences and delivery details.",
        "<strong> Nordic coordination:</strong> Managed communication with local teams to ensure PR send-outs were correctly prepared and distributed across all four markets.",
        "<strong> Project management:</strong> Created and maintained a detailed Excel overview of responses, product selections, shipments and personalized messages.",
        "<strong> PR seeding & logistics:</strong> Planned products, personalized cards, packing instructions and shipping for the Norwegian send-outs." ,
        "<strong> Additional PR support:</strong> Following the Augustinus Bader project, supported a BareMinerals PR activation, including packaging, floral elements and delivery coordination in collaboration with the Danish PR lead." ,
      ],
        
        resultsNote: "The PR send-out resulted in organic influencer coverage on Instagram during my internship period. As the activation continued beyond my six-week internship, I was not involved in the final reporting or full campaign evaluation.",
      results: [
        { image: "images/result-influencer-story-1.png" },
        { image: "images/result-influencer-story-2.png" },
        { image: "images/result-influencer-story-3.png" },
      ],
      reflection: "This project taught me how much planning, communication and coordination goes into PR seeding, and that results are not always immediate or guaranteed. Managing the project independently across four Nordic markets also gave me greater confidence in my ability to take ownership, stay organized and bring a project from planning to execution.",
    },
  },
  {
    id: "Press release",
    title: "Two new perfumes",
    blurb: "Created and distributed press releases for two new Rabanne fragrances, adapting provided content and imagery into press materials and distributing them to relevant media outlets.",
    role: "Marketing assistant",
    channel: "Press",
    result: "4.1x ROAS",
    tools: ["Canva", "Retriever"],
    detail: {
      cover: "url('images/Press-release.png')",  
      resultsLayout: "grid-2",  
      heroCover: "url('images/Press-release-banner.png')",
      objective: "As part of my internship at Sæther Nordic, I created press releases for the launch of two new Rabanne fragrances, one for women and one for men. The purpose was to introduce the new launches to relevant media and provide journalists with product information and official brand imagery for potential editorial coverage.",
      approach: [
        "<strong>Press release creation:</strong> Created and structured press releases for two new Rabanne fragrance launches using approved brand messaging and product information.",
        "<strong>Visual selectior:</strong> Selected relevant official Rabanne imagery and presented the products in a clear format suitable for editorial use",
        "<strong>Media outreach:</strong> Wrote and sent targeted emails to relevant press contacts, introducing the new fragrance launches and distributing the press releases and supporting material.",
      ],
      resultsNote: "As my internship ended shortly after the outreach, I was not able to follow the subsequent media coverage or evaluate the final press release results.",
      results: [
        { label: "Result 1", image: "images/Rabanne-invictus-1.png" },
        { label: "Result 2", image: "images/Rabanne-invictus-2.png" },
        { label: "Result 3", image: "images/Rabanne-olympea-1.png" },
        { label: "Result 4", image: "images/Rabanne-olympea-2.png" },
      ],
      
      reflection: "This project taught me the importance of keeping press communication clear, informative and easy to use. I particularly enjoyed writing the outreach emails, where I had more freedom to present the launches in a way that could capture the recipient’s interest. Given more time, I would have enjoyed exploring how the press material could be developed further to reflect Rabanne’s brand identity more strongly, while still keeping it clear and functional for the press. This is something I would like to explore more in future PR projects.",
    },
  },
  {
    id: "lumen-crm-cleanup",
    title: "School projects",
    blurb: "Developed marketing strategies and digital concepts through academic projects, including a 12-week campaign strategy for KANDU and the development of a new business concept from scratch.",
    role: "Marketing",
    channel: "Wordpress, instagram, Email",
    tools: ["HubSpot", "Canva", "Google Analytics" , "Meta Ads", "Teams", "Figma", "CapCut", "WordPress", "Excel"],
    detail: {
    cover: "url('images/marketing-strategy.png')",
    },
    
    subProjects: [
      {
        title: "KANDU",
        cover: "url('images/Kandu-banner.png')",
        role: "Marketing Student",
        channel: "Instagram, Snapchat, Organic Ads",
        objective: "In this school project, I worked in a team of four to develop a 10 week campaign strategy leading up to KANDU’s major event, The Gathering. The campaign included posters to be displayed across Norway, social media content for platforms such as Instagram and Snapchat, influencer collaborations, Giveaway and a promotional stunt. The main objective was to increase awareness and encourage more girls to participate in The Gathering.",
        approach: [
          "<strong> Campaign planning: </strong> Developed a 10-week campaign plan leading up to The Gathering, outlining key activities, content and touchpoints throughout the campaign.", 
          "<strong> Creative concepts: </strong>Developed ideas for campaign posters, a promotional stunt and an interactive QR-code game where participants could win tickets to The Gathering.", 
          "<strong> Influencer strategy: </strong>Researched and selected relevant influencers for potential collaborations based on the campaign’s target audience and objective.",
          "<strong> Customer journey: </strong>Mapped out the customer journey from initial campaign exposure to engagement and potential participation in The Gathering.", 
          "<strong> Team collaboration:</strong> Worked as part of a four-person team to develop the overall campaign strategy, concepts and final deliverables."
      ],
      resultsNote: "The project received an A grade, we got strong feedback on the campaign startegy, creative consept and visual exucution. The posters and promotional stunt were particularly highlighted as effective and engaging elements of the campaign.",
      resultsLayout: "grid-2-crop",
      results: [
        { image: "images/Kandu-result.png" },
      ],
        reflection: "Taking on a full campaign project so early in my studies was both challenging and rewarding. It taught me how much planning and teamwork goes into developing a campaign from start to finish and that finding the right idea can often be one of the most important parts of the process.The project challenged me creatively and gave me the opportunity to turn ideas into a complete strategy and visual concept. It was an experience I learned a lot from and made me want to explore campaign development and creative marketing further.",
      },
      {
        title: "PubHub", 
        cover: "url('images/pubhub-banner.png')",
        role: "Marketing Student",
        channel: "Wordpress, Instagram, TikTok",
        objective: "As part of a group of five, we developed PubHub from an initial idea into a complete digital business concept. Starting from scratch, we created the name and concept, planned the digital strategy and built the website in WordPress. Throughout the project, we explored what goes into building and marketing a digital business by working with different channels and tools, including social media, email marketing through HubSpot and Meta Ads. The project took us from idea and develop it through the different stages from concept to launch.",
        approach: [
        "<strong>Concept development:</strong> Developed the initial idea, name, target audience and overall concept for PubHub.", 
        "<strong>Digital strategy:</strong> Planned how the business would use different digital channels to reach and engage its target audience.", 
        "<strong>Website development:</strong> Planned, designed and built the PubHub website from scratch using WordPress.",
        "<strong>Email marketing:</strong> Used HubSpot to build email marketing activities and communicate with users.",
        "<strong>Social media & advertising:</strong> Developed the social media presence and experimented with Meta Ads to promote the concept.",
        "<strong>Analytics & optimization:</strong> Used digital tools and data to understand performance and explore how the digital presence could be improved."
      ],
      resultsNote: "Our campaign generated 58 active users and 55 engaged sessions on the website, with most of the traffic coming from Oslo, the primary market we targeted. We also reached our goal of generating at least 10 website visits through Instagram. For an early-stage concept and our first time testing paid digital marketing, it was rewarding to see that the campaign generated traffic, reached the intended audience and resulted in newsletter sign-ups.",
      resultsLayout: "pubhub-result",
      results: [
          { image: "images/Pubhub-result.png" },
        ],
        reflection: "This project taught me how much time, planning and prioritization goes into building a digital business from the ground up. With a limited timeframe and budget, we had to make conscious decisions about where to focus our resources, while relying heavily on organic content and email marketing to build awarenes. Looking back, I would have balanced website development and content creation differently. We spent a lot of time perfecting the website, which left less time to consistently create and distribute content. The project taught me that a website does not need to be perfect from day one, building visibility and driving people to it is just as important. If I were to approach the project again, I would prioritize content planning earlier and continuously improve the website alongside the marketing activities.",
      },
    ],
  },
  
];
