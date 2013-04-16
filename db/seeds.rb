Achievable.create(
  title: "Science Guy",
  description: "You are the Science Guy!",
  name: "facts learned",
  person: "Bill Nye",
  image: "nye",
  count: 25
)

Achievable.create(
  title: "Fact Freedom",
  description: "You are setting those facts free!",
  name: "facts learned",
  person: "Abraham Lincoln",
  image: "lincoln",
  count: 10
)

Achievable.create(
  title: "Badass",
  description: "Ignorance doesn\'t stand a chance with you on our side!",
  name: "tos",
  person: "Gerard Butler",
  image: "butler",
  count: 300
)

Achievable.create(
  title: "Awesome Person",
  description: "Your just an awesome person. Enough said.",
  name: "tos",
  person: "Jimmy Wales",
  image: "wales",
  count: 1200
)

Achievable.create(
  title: "Get Learned",
  description: "Get learned or die trying.",
  name: "played",
  person: "50 Cent",
  image: "50cent",
  count: 5
)

Achievable.create(
  title: "Diverse Background",
  description: "You are trying all different kinds of issues!",
  name: "issues",
  person: "Barack Obama",
  image: "obama",
  count: 5
)

Achievable.create(
  title: "So Popular",
  description: "Wow, everyone loves you. Look at all those friends you have!",
  name: "share",
  person: "Bill Clinton",
  image: "clinton",
  count: nil
)

Achievable.create(
  title: "Renaissance Man",
  description: "You truely are a modern day Renaissance Man!",
  name: "mfc",
  person: "Al Gore",
  image: "gore",
  count: nil
)

Achievable.create(
  title: "Creepin\'",
  description: "You are almost as bad as this guy in Somthing About Mary...",
  name: "profiles",
  person: "Chris Elliot",
  image: "elliot",
  count: 3
)

# 209
Question.create(
  issue_id: 21,
  title: 'The recidivism (repeated criminal behavior) rate for sex offenders released from prison is?',
  is_slider: true
)

Source.create(
  issue_id: 21,
  question_id: 209,
  url:'http://reformsexoffenderlaws.org/ten_myths'
)
  
Slider.create(
  issue_id: 21,
  question_id: 209,
  is_exponential: false,
  min: 0,
  max: 100,
  correct: 5.3,
  units: '/%'
)

# 210
Question.create(
  issue_id: 21,
  title: 'How many states require sex offender registration for consensual sex between teenagers?',
  is_slider: true
)

Source.create(
  issue_id: 21,
  question_id: 210,
  url: 'http://freerangekids.wordpress.com/'
)

Slider.create(
  issue_id: 21,
  question_id: 210,
  is_exponential: false,
  min: 0,
  max: 50,
  correct: 28,
  units: '/ states'
)

Question.create(
  issue_id: 21,
  title: 'How many states require sex offender registration for public urination?',
  is_slider: true
)

Source.create(
  issue_id: 21,
  question_id: 211,
  url: 'http://freerangekids.wordpress.com/'
)
  
Slider.create(
  issue_id: 21,
  question_id: 211,
  is_exponential: false,
  min: 0,
  max: 50,
  correct: 13,
  units: '/ states'
)

Question.create(
  issue_id: 21,
  title: 'Juveniles make up more than __ percent of those convicted of sex offenses against children',
  is_slider: true
)

Source.create(
  issue_id: 21,
  question_id: 212,
  url: 'http://freerangekids.wordpress.com/'
)

Slider.create(
  issue_id: 21,
  question_id: 212,
  is_exponential: false,
  min: 0,
  max: 100,
  correct: 33,
  units: '/%'
)

Question.create(
  issue_id: 21,
  title: 'There are approximately how many registered sex offenders in the U.S.?',
  is_slider: false
)

Source.create(
  issue_id: 21,
  question_id: 213,
  url: 'http://www.nytimes.com/roomfordebate/2013/02/20/too-many-restrictions-on-sex-offenders-or-too-few/panic-leads-to-bad-policy-on-sex-offenders'
)

Answer.create(
  issue_id: 21,
  question_id: 213,
  title: '1,000',
  is_correct: false
)

Answer.create(
  issue_id: 21,
  question_id: 213,
  title: '750,000',
  is_correct: true
)

Answer.create(
  issue_id: 21,
  question_id: 213,
  title: '100,000,000',
  is_correct: false
)

Answer.create(
  issue_id: 21,
  question_id: 213,
  title: '500',
  is_correct: false
)

Question.create(
  issue_id: 21,
  title: 'California\'s Proposition 83 prohibits all registered sex offenders (felony and misdemeanor alike) from living within __ feet of a school or park',
  is_slider: true
)

Source.create(
  issue_id: 21,
  question_id: 214,
  url: 'http://www.nytimes.com/roomfordebate/2013/02/20/too-many-restrictions-on-sex-offenders-or-too-few/panic-leads-to-bad-policy-on-sex-offenders'
)

Slider.create(
  issue_id: 21,
  question_id: 214,
  is_exponential: true,
  min: 1,
  max: 10000,
  correct: 2000,
  units: '/ feet'
)

Question.create(
  issue_id: 21,
  title: 'What percent of child molestations are committed by a family member, friend of the family, or known and trusted adult in the community?',
  is_slider: true
)

Source.create(
  issue_id: 21,
  question_id: 215,
  url: 'http://reformsexoffenderlaws.org/ten_myths'
)

Slider.create(
  issue_id: 21,
  question_id: 215,
  is_exponential: false,
  min: 0,
  max: 100,
  correct: 93,
  units: '/%'
)

Question.create(
  issue_id: 21,
  title: 'The U.S. Department of Justice links all state\'s sex offender registries into one database that is available to?',
  is_slider: false
)

Source.create(
  issue_id: 21,
  question_id: 216,
  url: 'http://www.nytimes.com/roomfordebate/2013/02/20/too-many-restrictions-on-sex-offenders-or-too-few/panic-leads-to-bad-policy-on-sex-offenders'
)

Answer.create(
  issue_id: 21,
  question_id: 216,
  title: 'Only police officers',
  is_correct: false
)

Answer.create(
  issue_id: 21,
  question_id: 216,
  title: 'The general public',
  is_correct: true
)

Answer.create(
  issue_id: 21,
  question_id: 216,
  title: 'Only police officers and school officials',
  is_correct: false
)

Answer.create(
  issue_id: 21,
  question_id: 216,
  title: 'Only close neighbors',
  is_correct: false
)

# Sex Offender Laws issue_id -> 21
Issue.create(
  title: 'Sex Offender Registration',
  description: 'Sex offender registration is a system in various states designed to allow government authorities to keep track of the residence and activities of sex offenders, including those who have completed their criminal sentences.',
  image: 'sexoffender'
)

# U.S. Immigration issue_id -> 22
Issue.create(
  title: 'U.S. Immigration',
  description: 'Immigration to the United States is a complex demographic phenomenon that has been a major source of population growth and cultural change throughout much of the history of the United States.',
  image: 'immigration'
)

Question.create(
  issue_id: 22, 
  title: 'A report from the Pew Research Center projects that by 2050, non-Hispanic whites will account for what percent of the U.S. population?',
  is_slider: true
)

Source.create(
  issue_id: 22, 
  question_id: 217, 
  url: 'http://en.wikipedia.org/wiki/Us_immigration'
)

Slider.create(
  issue_id: 22,
  question_id: 217,
  is_exponential: false,
  min: 0,
  max: 100,
  correct: 47,
  units: '/%'
)

Question.create(
  issue_id: 22,
  title: 'Non-Hispanic whites made up what percent of the population in 1960?',
  is_slider: true
)

Source.create(
  issue_id: 22, 
  question_id: 218, 
  url: 'http://en.wikipedia.org/wiki/Us_immigration'
)

Slider.create(
  issue_id: 22,
  question_id: 218,
  is_exponential: false,
  min: 0,
  max: 100,
  correct: 85,
  units: '/%'
)

Question.create(
  issue_id: 22,
  title: 'Foreign nationals with family ties to American citizens and green-card holders accounted for about what percent of the total 1.1 million individuals who were granted legal permanent residency status by the U.S. government in 2009?',
  is_slider: true
)

Source.create(
  issue_id: 22,
  question_id: 219,
  url: 'http://cnsnews.com/news/article/cbo-748000-foreign-nationals-granted-us-permanent-residency-status-2009-because-they'
)

Slider.create(
  issue_id: 22,
  question_id: 219,
  is_exponential: false,
  min: 0,
  max: 100,
  correct: 68,
  units: '/%'
)

Question.create(
  issue_id: 22,
  title: 'In 2009, a study by the Cato Institute found that legalization of low-skilled illegal resident workers in the US would result in a net increase in US GDP of how much over ten years?',
  is_slider: false
)

Source.create(
  issue_id: 22,
  question_id: 220,
  url: 'http://washingtonindependent.com/55152/cato-institute-finds-180-billion-benefit-to-legalizing-illegal-immigrants'
)

Answer.create(
  issue_id: 22,
  question_id: 220,
  title: '$180 billion',
  is_correct: true
)

Answer.create(
  issue_id: 22,
  question_id: 220,
  title: '$1 billion',
  is_correct: false
)

Answer.create(
  issue_id: 22,
  question_id: 220,
  title: '$1 thousand',
  is_correct: false
)

Answer.create(
  issue_id: 22,
  question_id: 220,
  title: '$1 billion',
  is_correct: false
)

Question.create(
  issue_id: 22,
  title: 'According to the Cato Institute, a policy that reduces low-skilled immigration to about a third less than projected levels, over ten years, would reduce/increase U.S. household welfare by about what percent?',
  is_slider: false
)

Source.create(
  issue_id: 22,
  question_id: 221,
  url: 'http://washingtonindependent.com/55152/cato-institute-finds-180-billion-benefit-to-legalizing-illegal-immigrants'
)

Answer.create(
  issue_id: 22,
  question_id: 221,
  title: 'reduce by .5%',
  is_correct: true
)

Answer.create(
  issue_id: 22,
  question_id: 221,
  title: 'reduce by 10%',
  is_correct: false
)

Answer.create(
  issue_id: 22,
  question_id: 221,
  title: 'increase by 10%',
  is_correct: false
)

Answer.create(
  issue_id: 22,
  question_id: 221,
  title: 'increase by .5%',
  is_correct: false
)

Question.create(
  issue_id: 22,
  title: 'What percent of google\'s employees are in the U.S. on H-1B visas (non-immigrant temporary work visas)?',
  is_slider: true
)

Source.create(
  issue_id: 22,
  question_id: 222,
  url: 'http://www.businessweek.com/stories/2007-06-07/immigration-google-makes-its-casebusinessweek-business-news-stock-market-and-financial-advice'
)

Slider.create(
  issue_id: 22,
  question_id: 222,
  is_exponential: false,
  min: 0,
  max: 100,
  correct: 8,
  units: '/%'
)

Question.create(
  issue_id: 22,
  title: 'Immigrants have founded what percent of companies in the tech sector that were financed by venture capital and went on to become public in the United States, among them Yahoo, eBay, Intel and Google?',
  is_slider: true
)

Source.create(
  issue_id: 22,
  question_id: 223,
  url: 'http://www.grbj.com/articles/print/76393-scarcity-of-h1b-visas-presents-employers-with-conundrum'
)

Slider.create(
  issue_id: 22,
  question_id: 223,
  is_exponential: false,
  min: 0,
  max: 100,
  correct: 40,
  units: '/%'
)

Question.create(
  issue_id: 22, 
  title: 'On Average, a U.S. citizen wishing to sponsor an unmarried adult child from Mexico, has to wait about how many years before the application will be processed?',
  is_slider: true
)

Source.create(
  issue_id: 22, 
  question_id: 224,
  url: 'http://www.migrationinformation.org/USfocus/display.cfm?ID=931#4'
)

Slider.create(
  issue_id: 22,
  question_id: 224,
  is_exponential: false,
  min: 0,
  max: 50,
  correct: 19,
  units: '/ years'
)

Question.create(
  issue_id: 22, 
  title: 'On average, a U.S. citizen wishing to sponsor a sibling from the Philippines has to wait how many years before the application will be processed?',
  is_slider: true
)

Source.create(
  issue_id: 22, 
  question_id: 225,
  url: 'http://www.migrationinformation.org/USfocus/display.cfm?ID=931#4'
)

Slider.create(
  issue_id: 22,
  question_id: 225,
  is_exponential: false,
  min: 0,
  max: 50,
  correct: 23,
  units: '/ years'
)

Question.create(
  issue_id: 22,
  title: 'As of March 2012, US Citizenship and Immigration Services was processing some family-related visas applications filed as far back as January ___?',
  is_slider: false
)

Source.create(
  issue_id: 22, 
  question_id: 226,
  url: 'http://www.migrationinformation.org/USfocus/display.cfm?ID=931#4'
)

Answer.create(
  issue_id: 22,
  question_id: 226,
  title: '1989',
  is_correct: true
)

Answer.create(
  issue_id: 22,
  question_id: 226,
  title: '2008',
  is_correct: false
)

Answer.create(
  issue_id: 22,
  question_id: 226,
  title: '2000',
  is_correct: false
)

Answer.create(
  issue_id: 22,
  question_id: 226,
  title: '1995',
  is_correct: false
)

Question.create(
  issue_id: 22,
  title: 'FWD.us, a political advocacy group founded by leaders from Facebook, Google, Dropbox, and other tech giants, has come out in support of ___?',
  is_slider: false
)

Source.create(
  issue_id: 22,
  question_id: 227, 
  url: 'http://techcrunch.com/2013/04/11/fwd-us/'
)

Answer.create(
  issue_id: 22, 
  question_id: 227, 
  title: 'A pathway to citizenship',
  is_correct: false
)

Answer.create(
  issue_id: 22, 
  question_id: 227, 
  title: 'Easier access to H-1B temporary visas',
  is_correct: false
)

Answer.create(
  issue_id: 22, 
  question_id: 227, 
  title: 'guest worker programs for low- and high-skilled talent',
  is_correct: false
)

Answer.create(
  issue_id: 22, 
  question_id: 227, 
  title: 'All of the above',
  is_correct: true
)

Question.create(
  issue_id: 22,
  title: 'According to the Department of Homeland Security\'s Office of Immigration Statistics (OIS), an estimated ___ unauthorized immigrants resided in the United States as of January 2011.',
  is_slider: false
)

Source.create(
  issue_id: 22, 
  question_id: 228,
  url: 'http://www.migrationinformation.org/USfocus/display.cfm?ID=931#4'
)

Answer.create(
  issue_id: 22, 
  question_id: 228, 
  title: '11.5 million',
  is_correct: true
)

Answer.create(
  issue_id: 22, 
  question_id: 228, 
  title: '1 billion',
  is_correct: false
)

Answer.create(
  issue_id: 22, 
  question_id: 228, 
  title: '11 thousand',
  is_correct: false
)

Answer.create(
  issue_id: 22, 
  question_id: 228, 
  title: '100 thousand',
  is_correct: false
)