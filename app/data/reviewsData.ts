export interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  service: string;
  location?: string;
  text: string;
  platform: 'Google' | 'Facebook' | 'Yelp' | 'BBB';
  verified: boolean;
  helpful: number;
  response?: {
    text: string;
    date: string;
  };
  images?: string[];
  projectType?: string;
  workDuration?: string;
}

export const reviewsData: Review[] = [
  {
    id: 1,
    name: 'Hillerie Davis',
    date: '2024-11-15',
    rating: 5,
    service: 'Residential',
    location: 'Myrtle Beach, SC',
    text: "I can't recommend Joe at Weather Shield Roofing enough! From the initial consultation to the final inspection, Joe was knowledgeable, courteous, and incredibly professional. The roof was completed on time and looks fantastic. The attention to detail and quality of work exceeded my expectations.",
    platform: 'Google',
    verified: true,
    helpful: 24,
    projectType: 'Complete Roof Replacement',
    workDuration: '2 days',
    response: {
      text: "Thank you for taking the time to leave us such a fantastic review! We're elated to hear that you had an excellent experience with Joe and the Weather Shield Roofing team. It's incredibly rewarding to hear that our efforts to provide quality service were successful.",
      date: '2024-11-16'
    }
  },
  {
    id: 2,
    name: 'Connor Adkins',
    date: '2024-11-10',
    rating: 5,
    service: 'Residential',
    location: 'Myrtle Beach, SC',
    text: "I've known Joe for about two years now. He actually trained me when I was getting started in roofing, and I can tell you firsthand — he's extremely thorough, detail-oriented, and takes pride in doing things the right way. He's since moved on to lead teams at Weather Shield, and they're lucky to have him.",
    platform: 'Google',
    verified: true,
    helpful: 18,
    projectType: 'Professional Training & Service',
    workDuration: 'Ongoing',
    response: {
      text: "Thank you so much for your outstanding review and the perfect rating! We are thrilled to hear about your positive experience with Joe and appreciate your words of affirmation. At Weather Shield Roofing LLC, we believe in treating customers with respect and professionalism.",
      date: '2024-11-11'
    }
  },
  {
    id: 3,
    name: 'Cody Salmons',
    date: '2024-11-08',
    rating: 5,
    service: 'Residential',
    location: 'Myrtle Beach, SC',
    text: "I've known Joe at Weather Shield roofing, and worked with him a few years back. He's very knowledgeable, and very honest. He loves his job and the companies values. When he says it's a great company I don't take that lightly, I trust his word over any others.",
    platform: 'Google',
    verified: true,
    helpful: 15,
    projectType: 'Roofing Consultation',
    workDuration: '1 day',
    response: {
      text: "Thank you for your emphatic 5-star rating and for placing your trust in Weather Shield Roofing LLC. It means the world to us! We are pleased to learn that you had a positive experience with Joe, and appreciate your kind words about our company values.",
      date: '2024-11-09'
    }
  },
  {
    id: 4,
    name: 'Carl Holgerson',
    date: '2023-11-05',
    rating: 5,
    service: 'Storm Damage',
    location: 'Myrtle Beach, SC',
    text: "Our roof experience with Weather Shield was exceptional due to the fact our roof experienced hail damage and if it was not for Sabrina and Brian who was doing a roof replacement down the street I would have not known the extent of damage. They handled everything with our insurance company and made the process seamless.",
    platform: 'Google',
    verified: true,
    helpful: 32,
    projectType: 'Hail Damage Repair',
    workDuration: '3 days',
    response: {
      text: "Thank you so much for the kind words Carl!! I'm so happy that you had a positive experience with Sabrina and Brian. We appreciate you and your business very much! Please let us know if we can be of service in the future, thank you!",
      date: '2023-11-06'
    }
  },
  {
    id: 5,
    name: 'Joe Coldiron',
    date: '2024-11-01',
    rating: 5,
    service: 'Residential',
    location: 'Myrtle Beach, SC',
    text: "I don't usually write reviews, but I've had too many bad experiences with contractors to stay quiet about a good one. Joe showed up, was polite, took his time, and actually explained the condition of my roof in a way I understood. No pressure, no gimmicks. Just real advice.",
    platform: 'Google',
    verified: true,
    helpful: 21,
    projectType: 'Roof Inspection',
    workDuration: '1 day',
    response: {
      text: "Thank you very much for taking the time to share your positive experience with Weather Shield Roofing LLC. We're delighted to hear that your experience with us was satisfactory, and that you felt comfortable and informed throughout the process.",
      date: '2024-11-02'
    }
  },
  {
    id: 6,
    name: 'Jeremiah Morrison',
    date: '2024-10-28',
    rating: 5,
    service: 'Residential',
    location: 'Conway, SC',
    text: "What separates Joe from a lot of people in this field is his integrity. He nor the company he works for at Weather shield roofing is in it for a quick buck — he genuinely wants to help people and make sure they're taken care of. With years of experience, he knows roofs inside and out. If they're doing the job, you can rest easy knowing it'll be done right.",
    platform: 'Google',
    verified: true,
    helpful: 19,
    projectType: 'Full Roof Replacement',
    workDuration: '2 days',
    response: {
      text: "Hey Jeremiah! Thanks for putting in a good word for Weather Shield Roofing LLC and especially for Joe. We're stoked to hear that you're appreciating his integrity and commitment to the work we do. We aim to help, and your kind words tell us we're on the right path. Thanks for trusting us to get the job done. You rock!",
      date: '2024-10-29'
    }
  },
  {
    id: 7,
    name: 'Zac Cooper',
    date: '2024-10-25',
    rating: 5,
    service: 'Roof Inspection',
    location: 'North Myrtle Beach, SC',
    text: "Joe came recommended by a friend, and I'm so glad I called. Another company insisted we had major damage. Joe came out and showed us the roof was fine, just a few minor issues that didn't justify a full replacement. He was able to do a minor repair that saved us thousands. Honest and professional!",
    platform: 'Google',
    verified: true,
    helpful: 27,
    projectType: 'Minor Roof Repair',
    workDuration: '1 day',
    response: {
      text: "We're thrilled you had such an amazing experience with Joe and Weather Shield Roofing LLC! Always happy to help and provide honest service - that's our motto. Thanks for the great review and recommendation. Feel free to call on us any time!",
      date: '2024-10-26'
    }
  },
  {
    id: 8,
    name: 'Samantha Snider',
    date: '2024-10-20',
    rating: 5,
    service: 'Residential',
    location: 'Myrtle Beach, SC',
    text: "I've never met a roofing guy who wasn't trying to make a sale—until I met Joe. He gave us the rundown without pressure. Said unfortunately we needed a roof replacement, we asked if he thought insurance would cover it. He said he would look for damage caused by weather, but in our situation due to the age of the roof and the fiberglass matting showing that he has seen them deny it for neglect. He did try, but insurance wouldn't cover it. I highly recommend hiring Joe at Weather Shield roofing.",
    platform: 'Google',
    verified: true,
    helpful: 35,
    projectType: 'Insurance Claim & Roof Replacement',
    workDuration: '3 days',
    response: {
      text: "Thank you for sharing your Five-star experience with our Joe at Weather Shield Roofing LLC. We are pleased to know that our commitment to transparency and quality service resonated with you. It's always our mission to provide detailed, honest assessments.",
      date: '2024-10-21'
    }
  },
  {
    id: 9,
    name: 'Patti Griswold',
    date: '2024-08-15',
    rating: 5,
    service: 'Residential',
    location: 'Conway, SC',
    text: "We had a great experience with Jordan when we had the roof completed last week. Jordan was available when we had questions and has an outstanding work ethic. He was extremely helpful through the process and explained each step. The crew was great they did an awesome job cleaning up. We are very happy with their services!",
    platform: 'Google',
    verified: true,
    helpful: 16,
    projectType: 'Complete Roof Replacement',
    workDuration: '2 days',
    response: {
      text: "Dear Patti Griswold, Thank you for your positive review and for giving Weather Shield Roofing LLC a 5-star rating. We are delighted to hear that you had a great experience with Jordan and that he was able to assist you throughout the process.",
      date: '2024-08-16'
    }
  },
  {
    id: 10,
    name: 'Chris Leachman',
    date: '2024-10-15',
    rating: 5,
    service: 'Residential',
    location: 'Myrtle Beach, SC',
    text: "Joe has helped my wife last year with her dad's home. Which is very hard to earn her trust. He took the time to go over every picture and what they showed, and meant, why she needed to replace her roof first before doing any interior work. Joe's honesty and expertise made all the difference.",
    platform: 'Google',
    verified: true,
    helpful: 29,
    projectType: 'Roof Assessment & Replacement',
    workDuration: '3 days',
    response: {
      text: "We're beyond excited to receive your 5-star rating and appreciate your positive feedback about your experience with Weather Shield Roofing LLC. We are delighted that Joe was helpful and informative during your wife's encounter, showing the care we put into every project.",
      date: '2024-10-16'
    }
  },
  {
    id: 11,
    name: 'Gary Sekura',
    date: '2024-04-25',
    rating: 5,
    service: 'Storm Damage',
    location: 'Rock Hill, SC',
    text: "I survived a tornado in Rock Hill SC on 4/20/24. I had much damage to my house. Car totaled, roof totaled, etc. Within ONE day I had literally a dozen roofers approach me for business. But only ONE roofer, Frank Stanton, from Weather Shield stood out with genuine care and professionalism. They handled everything from insurance to completion perfectly.",
    platform: 'Google',
    verified: true,
    helpful: 42,
    projectType: 'Tornado Damage Restoration',
    workDuration: '5 days',
    response: {
      text: "Thank you so much for taking the time to share your experience with Weather Shield Roofing and Frank Stanton. We are truly grateful for your kind words and are delighted to hear that you had such a positive experience with us during such a difficult time.",
      date: '2024-04-26'
    }
  },
  {
    id: 12,
    name: 'William Morrison',
    date: '2024-10-10',
    rating: 5,
    service: 'Residential',
    location: 'Surfside Beach, SC',
    text: "Honest, reliable, knows how the insurance companies operate. They truly do go to work for you, Joe and the company he works for at Weather shield roofing. Highly recommend them for roof replacements. Thanks again Joe Coldiron!",
    platform: 'Google',
    verified: true,
    helpful: 20,
    projectType: 'Insurance Claim & Replacement',
    workDuration: '2 days',
    response: {
      text: "Hey William! Thanks for your kind words. We're delighted to hear you had such a positive experience with Joe and Weather Shield Roofing LLC. We pride ourselves on going the extra mile for our clients and we're pleased to see that reflected in your review.",
      date: '2024-10-11'
    }
  },
  {
    id: 13,
    name: 'DJ Hale',
    date: '2024-10-05',
    rating: 5,
    service: 'Roof Inspection',
    location: 'Conway, SC',
    text: "Joe is one of the most honest people I've met in the construction world. He doesn't try to upsell or push anything you don't need. With 17 years of experience, he knows his stuff and backs it up with real professionalism. You can trust that if Joe says something needs to be done — it actually does.",
    platform: 'Google',
    verified: true,
    helpful: 17,
    projectType: 'Roof Inspection',
    workDuration: '1 day',
    response: {
      text: "Thank you for your stellar review! We assure you, Joe was on cloud nine reading this. We're thrilled to hear you've been impressed with his integrity, experience, and professionalism. Here at Weather Shield Roofing LLC, we strongly believe in keeping things above board, rain or shine.",
      date: '2024-10-06'
    }
  },
  {
    id: 14,
    name: 'Rhoda Smith',
    date: '2024-10-01',
    rating: 5,
    service: 'Roof Repair',
    location: 'Myrtle Beach, SC',
    text: "We had a couple leaks after a storm, and someone told us the whole roof needed to be replaced at a high cost. Joe came out and told us we could do a repair instead of a full replacement. He didn't just fix the problem—he earned our future business. Here on out, ask for Joe at weather shield roofing",
    platform: 'Google',
    verified: true,
    helpful: 23,
    projectType: 'Storm Damage Repair',
    workDuration: '1 day',
    response: {
      text: "Thanks for taking the time to post this glowing review! We're thrilled that Joe was able to deliver on our commitment to providing honest and reliable service. He's a rock star on our team and we'll pass along your kind words to him.",
      date: '2024-10-02'
    }
  },
  {
    id: 15,
    name: 'Terrie Young',
    date: '2024-09-20',
    rating: 5,
    service: 'Residential',
    location: 'Garden City, SC',
    text: "Jordan was great to work with. He was extremely helpful throughout the process. The installers did a great job on the roof and cleaning up. Highly recommend contacting Jordan if you have any roofing needs.",
    platform: 'Google',
    verified: true,
    helpful: 14,
    projectType: 'Complete Roof Replacement',
    workDuration: '2 days',
    response: {
      text: "Thank you so much for the great feedback! We're glad to hear that Jordan made the process smooth and helpful for you. We take pride in both our workmanship and clean-up, so it's wonderful to know the crew met your expectations.",
      date: '2024-09-21'
    }
  },
  {
    id: 16,
    name: 'Patricia Richardson',
    date: '2024-09-15',
    rating: 5,
    service: 'Residential',
    location: 'Pawleys Island, SC',
    text: "Sabrina and Brian were amazing and so helpful to me in this process. They helped me throughout the entire process so it was seamless. I chose them as my contractors because they are extremely honest and trustworthy.",
    platform: 'Google',
    verified: true,
    helpful: 25,
    projectType: 'Complete Roof Replacement',
    workDuration: '3 days',
    response: {
      text: "Thank you so much for your thoughtful review! We're thrilled to hear that Sabrina and Brian provided such outstanding support throughout your roofing project. At Weather Shield Roofing, we strive to make every step of the process seamless.",
      date: '2024-09-16'
    }
  },
  {
    id: 17,
    name: 'Stepheney McCrae',
    date: '2024-01-11',
    rating: 5,
    service: 'Residential',
    location: 'Myrtle Beach, SC',
    text: "On Sept 11, 2024 We had our whole roof replaced by Weather Shield Roofing. We worked with Alen, Sales Rep and he was very Professional, concise and knowledgeable about the process and procedures. My husband and I were very happy when he walked us through everything. The crew was amazing!",
    platform: 'Google',
    verified: true,
    helpful: 31,
    projectType: 'Complete Roof Replacement',
    workDuration: '2 days',
    response: {
      text: "Thank you so much for your thoughtful review! We're thrilled to hear about your positive experience with Alen and our team at Weather Shield Roofing. Alen takes pride in providing expert guidance and making the process seamless for our customers.",
      date: '2024-01-12'
    }
  },
  {
    id: 18,
    name: 'schaafy92',
    date: '2024-10-15',
    rating: 5,
    service: 'Residential',
    location: 'North Myrtle Beach, SC',
    text: "I had met Joe back during Covid, he had helped me out during a rough time, when most was just out for a profit. I would highly recommend hiring him and the team at Weather shield.",
    platform: 'Google',
    verified: true,
    helpful: 19,
    projectType: 'Emergency Assistance',
    workDuration: '1 day',
    response: {
      text: "Thank you for your trust and for providing a stellar review! Joe and our team at Weather Shield Roofing LLC are thrilled to hear that you had such a positive experience. We always strive to deliver the best customer service, especially in difficult times.",
      date: '2024-10-16'
    }
  },
  {
    id: 19,
    name: 'T. Mayers',
    date: '2024-03-15',
    rating: 5,
    service: 'Residential',
    location: 'Conway, SC',
    text: "It was a pleasure dealing with (Sonny) & this company. The customer service was incredible. They actually called & showed up when they said they were going to which is very rare in this area. The roof replacement was done very quickly and professionally.",
    platform: 'Google',
    verified: true,
    helpful: 26,
    projectType: 'Complete Roof Replacement',
    workDuration: '2 days',
    response: {
      text: "Dear T. Mayers, Thank you so much for taking the time to leave this excellent review for our Weather Shield Roofing team. We're honored that you found our services up to mark and really appreciate you acknowledging Sonny's efforts.",
      date: '2024-03-16'
    }
  },
  {
    id: 20,
    name: 'Kathy Morin',
    date: '2024-02-10',
    rating: 5,
    service: 'Residential',
    location: 'Surfside Beach, SC',
    text: "Weather Shield was very easy to work with from day one thanks to Sabrina and Brian. They were extremely knowledgeable and easily guided us through the process of replacing our roof. They worked with our insurance company to get the project approved and completed quickly.",
    platform: 'Google',
    verified: true,
    helpful: 13,
    projectType: 'Insurance Claim & Replacement',
    workDuration: '3 days',
    response: {
      text: "Thank you for sharing your wonderful experience with us! We're so pleased to hear that Sabrina and Brian could make the process easy and guide you through each step of your roof replacement. Our team is dedicated to ensuring projects run smoothly.",
      date: '2024-02-11'
    }
  }
];

export const getReviewStats = () => {
  const totalReviews = 71; // From Google
  const averageRating = 5.0; // From Google
  const verifiedCount = reviewsData.filter(r => r.verified).length;
  const platformCounts = {
    'Google': 68,
    'Facebook': 2,
    'Yelp': 1,
    'BBB': 0
  };

  return {
    totalReviews,
    averageRating,
    verifiedCount,
    verificationRate: 100, // All Google reviews are verified
    platformCounts,
    responseRate: 95,
    responseTime: '< 24 hours'
  };
};