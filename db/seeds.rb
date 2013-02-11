
# question_id -> 1
Question.create(
  issue_id: 1,
  title: 'What percent of all US arrests are marijuana-related?',
  is_slider: true
)

Source.create(
  issue_id: 1,
  question_id: 1,
  url: 'http://blog.norml.org/2011/09/19/marijuana-arrests-driving-americas-so-called-drug-war-latest-fbi-data-shows/',
)

Slider.create(
  issue_id: 1,
  question_id: 1,
  is_exponential: false,
  min: 1,
  correct: 7,
  max: 100,
  units: '/%'
)

Question.create(
  issue_id: 1,
  title: 'What percent of all US drug arrests are marijuana-related?',
  is_slider: true
)

Source.create(
  issue_id: 1,
  question_id: 2,
  url: 'http://blog.norml.org/2011/09/19/marijuana-arrests-driving-americas-so-called-drug-war-latest-fbi-data-shows/',
  )
  
Slider.create(
  issue_id: 1,
  question_id: 2,
  is_exponential: false,
  min: 1,
  max: 100,
  correct: 50,
  units: '/%'
)
  
Question.create(
  issue_id: 1,
  title: 'What percent of Americans have tried marijuana at least once?',
  is_slider: true
)

Source.create(
  issue_id: 1,
  question_id: 3,
  url: 'http://www.time.com/time/health/article/0,8599,1821697,00.html'
)
  
Slider.create(
  issue_id: 1,
  question_id: 3,
  is_exponential: false,
  min: 1,
  max: 100,
  correct: 42,
  units: '/%',
)

Question.create(
  issue_id: 1,
  title: 'Approximately what percent of Americans support marijuana legalization?',
  is_slider: true
)

Source.create(
  issue_id: 1,
  question_id: 4,
  url: 'http://www.csmonitor.com/USA/2012/0523/Poll-shows-strong-support-for-legal-marijuana-Is-it-inevitable'
)

Slider.create(
  issue_id: 1,
  question_id: 4,
  is_exponential: false,
  min: 1,
  max: 100,
  correct: 50,
  units: '/%' 
)

Question.create(
  issue_id: 1,
  title: 'In 1969, approximately what percent of Americans supported marijuana legalization?',
  is_slider: true
)

Source.create(
  issue_id: 1,
  question_id: 5,
  url: 'http://en.wikipedia.org/wiki/Legality_of_cannabis'
)

Slider.create(
  issue_id: 1,
  question_id: 5,
  is_exponential: false,
  min: 1,
  max: 100,
  correct: 16,
  units: '/%'
)

Question.create(
  issue_id: 1,
  title: 'Given that the US has 5% of the worlds population, what percent of the worlds prison population does the US have?',
  is_slider: true
)
  
Source.create(
  issue_id: 1,
  question_id: 6,
  url: 'http://www.nytimes.com/2008/04/23/us/23prison.html?pagewanted=all&_r=0'
)

Slider.create( 
  issue_id: 1,
  question_id: 6,
  is_exponential: false,
  min: 1,
  max: 100,
  correct: 25,
  units: '/%'
)  

Question.create(
  issue_id: 1,
  title: 'What percent of Mexico\'s GDP is from marijuana sales?',
  is_slider: true
)

Source.create(
  issue_id: 1,
  question_id: 7,
  url: 'http://www.economist.com/blogs/democracyinamerica/2012/11/legalising-marijuana?fsrc=scn/tw/te/bl/viewfromMexico'
)

Slider.create(
  issue_id: 1,
  question_id: 7,
  is_exponential: false,
  min: 0.1,
  max: 10.0,
  correct: 0.2,
  units: '/%'
)

Question.create(
  issue_id: 1,
  title: 'In addition to Washington DC, how many states have legalized medical marijuana?',
  is_slider: true
)

Source.create(
  issue_id: 1,
  question_id: 8,
  url: 'http://en.wikipedia.org/wiki/Medical_cannabis#United_States'
)

Slider.create(
  issue_id: 1,
  question_id: 8,
  is_exponential: false,
  min: 0,
  max: 50,
  correct: 20,
  units: '/'
)

Question.create(
  issue_id: 18,
  title: 'How many days after conception does a fetus\'s heart begin to beat?',
  is_slider: true
)

Source.create(
  issue_id: 18,
  question_id: 9,
  url: 'http://www.abortionfacts.com/literature/literature_9438MS.asp#day21'
)

Slider.create(
  issue_id: 18,
  question_id: 9,
  is_exponential: false,
  min: 1,
  max: 200,
  correct: 21,
  units: '/ days'
)

Question.create(
  issue_id: 18,
  title: 'What percent of US women have an unintended pregnancy by age 45?',
  is_slider: false
)

Source.create(
  issue_id: 18,
  question_id: 10,
  url: 'http://www.guttmacher.org/pubs/fb_induced_abortion.html'
)

Slider.create(
  issue_id: 18,
  question_id: 10,
  is_exponential: false,
  min: 1,
  max: 100,
  correct: 50,
  units: '/%'
)

Question.create(
  issue_id: 18,
  title: 'What percent of US women have an abortion by age 20?',
  is_slider: true
)

Source.create( 
  issue_id: 18,
  question_id: 11,
  url: 'http://www.guttmacher.org/pubs/fb_induced_abortion.html'
)
  
Slider.create(
  issue_id: 18,
  question_id: 11,
  is_exponential: false,
  min: 1,
  max: 100,
  correct: 10,
  units: '/%'
)

Question.create(
  issue_id: 18,
  title: 'What percent of US women who receive abortions are teenagers?',
  is_slider: true
)

Source.create(
  issue_id: 18,
  question_id: 12,
  url: 'http://www.guttmacher.org/pubs/fb_induced_abortion.html'
)

Slider.create(
  issue_id: 18,
  question_id: 12,
  is_exponential: false,
  min: 1,
  max: 100,
  correct: 18,
  units: '/%'
)

Question.create(
  issue_id: 18,
  title: 'How many days after conception does a fetus\'s  brain begin cognitive function?',
  is_slider: true
)

Source.create(
  issue_id: 18,
  question_id: 13,
  url: 'http://www.christiananswers.net/q-sum/q-life019.html'
)

Slider.create(
  issue_id: 18,
  question_id: 13,
  is_exponential: false,
  min: 0,
  max: 200,
  correct: 41,
  units: '/ days'
)

Question.create(
  issue_id: 17,
  title: 'How much money was spent on the 2012 presidential election?',
  is_slider: true
)

Source.create(
  issue_id: 17,
  question_id: 14,
  url: 'http://elections.nytimes.com/2012/campaign-finance'
)

Slider.create(
  issue_id: 17,
  question_id: 14,
  is_exponential: true,
  min: 0.1,
  max: 1000,
  correct: 15.87,
  units: '$/'
)

Question.create(
  issue_id: 17,
  title: 'How much money was spent per vote on the 2008 presidential election?',
  is_slider: true
)

Source.create(
  issue_id: 17,
  question_id: 15,
  url: 'https://www.opensecrets.org/pres08/'
)

Slider.create(
  issue_id: 17,
  question_id: 15,
  is_exponential: true,
  min: 0.1,
  max: 1000,
  correct: 8.37,
  units: '$/'
)

Question.create(
  issue_id: 17,
  title: 'What percent of campaign money was raised from small donors for the 2008 presidential election?',
  is_slider: true
)

Source.create(
  issue_id: 17,
  question_id: 16,
  url: 'http://www.cfinst.org/press/releases_tags/10-01-08/Revised_and_Updated_2008_Presidential_Statistics.aspx'
)

Slider.create(
  issue_id: 17,
  question_id: 16,
  is_exponential: false,
  min: 1,
  max: 100,
  correct: 18,
  units: '/%'
)

Question.create(
  issue_id: 6,
  title: 'How much have CO2 emissions by human activities increased since 1990?',
  is_slider: true
)

Source.create(
  issue_id: 6,
  question_id: 17,
  url: 'http://www.epa.gov/climatechange/science/indicators/ghg/us-ghg-emissions.html'
)

Slider.create(
  issue_id: 6,
  question_id: 17,
  is_exponential: true,
  min: 0,
  max: 1000,
  correct: 16,
  units: '/%'
)

Question.create(
  issue_id: 6,
  title: 'By approximately how many degrees has the Earth\'s temperature risen since 1880?',
  is_slider: true
)

Source.create(
  issue_id: 6,
  question_id: 18,
  url: 'http://www.dailymail.co.uk/sciencetech/article-2217286/Global-warming-stopped-16-years-ago-reveals-Met-Office-report-quietly-released--chart-prove-it.html'
)

Slider.create(
  issue_id: 6,
  question_id: 18,
  is_exponential: false,
  min: 0.1,
  max: 25,
  correct: 1,
  units: '/ deg'
)

Question.create(
  issue_id: 6,
  title: 'What percent of climate scientists agree that climate change is largely caused by humans?',
  is_slider: true
)

Source.create(
  issue_id: 6,
  question_id: 19,
  url: 'http://www.pnas.org/content/early/2010/06/04/1003187107.abstract'
)

Slider.create(
  issue_id: 6,
  question_id: 19,
  is_exponential: false,
  min: 0,
  max: 100,
  correct: 97,
  units: '/%'
)

Question.create(
  issue_id: 6,
  title: 'Approximately how much have sea levels risen in the last century (inches)?',
  is_slider: true
)

Source.create(
  issue_id: 6,
  question_id: 20,
  url: 'http://www.edf.org/climate/how-we-know-the-earth-is-warming'
)

Slider.create(
  issue_id: 6,
  question_id: 20,
  is_exponential: true,
  min: 0,
  max: 1000,
  correct: 7,
  units: '/ in'
)

Question.create(
  issue_id: 6,
  title: 'By how many degrees has the Earth\'s temperature increased since 1997?',
  is_slider: true
)

Source.create(
  issue_id: 6,
  question_id: 21,
  url: 'http://www.dailymail.co.uk/sciencetech/article-2217286/Global-warming-stopped-16-years-ago-reveals-Met-Office-report-quietly-released--chart-prove-it.html',
)

Slider.create(
  issue_id: 6,
  question_id: 21,
  is_exponential: false,
  min: 0,
  max: 25,
  correct: 0,
  units: '/ deg'
)

Question.create(
  issue_id: 6,
  title: 'Approximately how much higher are current CO2 levels than natural, historical levels?',
  is_slider: true
)

Source.create(
  issue_id: 6,
  question_id: 22,
  url: 'http://www.edf.org/climate/human-activity-causes-warming'
)

Slider.create(
  issue_id: 6,
  question_id: 22,
  is_exponential: true,
  min: 0,
  max: 1000,
  correct: 30,
  units: '/%'
)

Question.create(
  issue_id: 7,
  title: 'Approximately what percent of unemployed Americans have attended at least some college?',
  is_slider: true
)

Source.create(
  issue_id: 7,
  question_id: 23,
  url: 'http://www.businessinsider.com/these-two-charts-prove-a-college-education-just-isnt-worth-the-money-anymore-2012-6'
)

Slider.create(
  issue_id: 7,
  question_id: 23,
  is_exponential: false,
  min: 0,
  max: 100,
  correct: 50,
  units: '/%'
)

Question.create(
  issue_id: 7,
  title: 'Approximately what percent of US jobs require at least a 2 year degree?',
  is_slider: true
)

Source.create(
  issue_id: 7,
  question_id: 24,
  url: 'https://www.acteonline.org/uploadedFiles/Publications_and_E-Media/files/files-techniques-2009/Theme_4(3).pdf'
)

Slider.create(
  issue_id: 7,
  question_id: 24,
  is_exponential: false,
  min: 0,
  max: 100,
  correct: 67,
  units: '/%'
)

Question.create(
  issue_id: 7,
  title: 'Approximately how much per year does it cost to attend a private US college?',
  is_slider: true
)

Source.create(
  issue_id: 7,
  question_id: 25,
  url: 'http://money.cnn.com/2012/03/27/pf/college/tuition-costs.moneymag/index.htm'
)

Slider.create(
  issue_id: 7,
  question_id: 25,
  is_exponential: true,
  min: 1000,
  max: 1000000,
  correct: 43500,
  units: '$/'
)

Question.create(
  issue_id: 7,
  title: 'Since 1993, how many more administrators than professors have been hired by universities?',
  is_slider: true
)

Source.create(
  issue_id: 7,
  question_id: 26,
  url: 'http://www.businessweek.com/articles/2012-11-21/the-troubling-dean-to-professor-ratio'
)

Slider.create(
  issue_id: 7,
  question_id: 26,
  is_exponential: true,
  min: 1,
  max: 100,
  correct: 10,
  units: '/ times'
)

Question.create(
  issue_id: 7,
  title: 'What is the median US family income?',
  is_slider: true
)

Source.create(
  issue_id: 7,
  question_id: 27,
  url: 'http://usatoday30.usatoday.com/money/economy/story/2012-02-09/income-rising/53033322/1'
)

Slider.create(
  issue_id: 7,
  question_id: 27,
  is_exponential: false,
  min: 15000,
  max: 200000,
  correct: 51400,
  units: '$/'
)

Question.create(
  issue_id: 7,
  title: 'How much does the average working college graduate earn per year?',
  is_slider: true
)

Source.create(
  issue_id: 7,
  question_id: 28,
  url: 'http://www9.georgetown.edu/grad/gppi/hpi/cew/pdfs/FullReport.pdf'
)

Slider.create(
  issue_id: 7,
  question_id: 28,
  is_exponential: false,
  min: 15000,
  max: 300000,
  correct: 80000,
  units: '$/'
)

Question.create(
  issue_id: 7,
  title: 'How much does the average working non-college graduate earn per year?',
  is_slider: true
)

Source.create(
  issue_id: 7,
  question_id: 29,
  url: 'http://www9.georgetown.edu/grad/gppi/hpi/cew/pdfs/FullReport.pdf'
)

Slider.create(
  issue_id: 7,
  question_id: 29,
  is_exponential: false,
  min: 15000,
  max: 300000,
  correct: 40000,
  units: '$/'
)

Question.create(
  issue_id: 7,
  title: 'What percent of college graduates are either unemployed or underemployed?',
  is_slider: true
)

Source.create(
  issue_id: 7,
  question_id: 30,
  url: 'http://www.ibtimes.com/half-recent-us-college-graduates-unemployed-or-underemployed-440742'
)

Slider.create(
  issue_id: 7,
  question_id: 30,
  is_exponential: false,
  min: 1,
  max: 100,
  correct: 50,
  units: '/%'
)

Question.create(
  issue_id: 7,
  title: 'Adjusted for inflation, how much has the cost of a 4-year degree increased since 1980?',
  is_slider: true
)

Source.create(
  issue_id: 7,
  question_id: 31,
  url: 'http://www.businessinsider.com/these-two-charts-prove-a-college-education-just-isnt-worth-the-money-anymore-2012-6'
)

Slider.create(
  issue_id: 7,
  question_id: 31,
  is_exponential: true,
  min: 1,
  max: 1000,
  correct: 100,
  units: '/%'
)

Question.create(
  issue_id: 7,
  title: 'Adjusted for inflation, how much have college graduate earnings increased since 1990?',
  is_slider: true
)

Source.create(
  issue_id: 7,
  question_id: 32,
  url: 'http://www.businessinsider.com/these-two-charts-prove-a-college-education-just-isnt-worth-the-money-anymore-2012-6'
)

Slider.create(
  issue_id: 7,
  question_id: 32,
  is_exponential: true,
  min: 1,
  max: 1000,
  correct: 2,
  units: '/%'
)

Question.create(
  issue_id: 7,
  title: 'Since the 1980s, how much as the price of college textbooks increased?',
  is_slider: true
)

Source.create(
  issue_id: 7,
  question_id: 33,
  url: 'http://usatoday30.usatoday.com/news/education/story/2012-02-12/college-costs-free-textbooks/53123522/1'
)

Slider.create(
  issue_id: 7,
  question_id: 33,
  is_exponential: true,
  min: 1,
  max: 1000,
  correct: 600,
  units: '/%'
)

Question.create(
  issue_id: 7,
  title: 'What is the US per capital student loan debt?',
  is_slider: true
)

Source.create(
  issue_id: 7,
  question_id: 34,
  url: 'http://www.nytimes.com/2012/05/13/business/student-loans-weighing-down-a-generation-with-heavy-debt.html?_r=2&pagewanted=all&'
)

Slider.create(
  issue_id: 7,
  question_id: 34,
  is_exponential: true,
  min: 1,
  max: 10000,
  correct: 3215,
  units: '$/'
)

Question.create(
  issue_id: 4,
  title: 'How many times has a constitutional amendment to reform or eliminate the electoral college been proposed?',
  is_slider: true
)

Source.create(
  issue_id: 4,
  question_id: 35,
  url: 'http://www.archives.gov/federal-register/electoral-college/faq.html#changes'
)

Slider.create(
  issue_id: 4,
  question_id: 35,
  is_exponential: true,
  min: 0,
  max: 100000,
  correct: 700,
  units: '/ times'
)

Question.create(
  issue_id: 4,
  title: 'How many US presidents won the presidental race without winning the popular vote?',
  is_slider: true
)

Source.create(
  issue_id: 4,
  question_id: 36,
  url: 'http://americanhistory.about.com/od/uspresidents/f/pres_unpopular.htm'
)

Slider.create(
  issue_id: 4,
  question_id: 36,
  is_exponential: false,
  min: 0,
  max: 20,
  correct: 4,
  units: '/'
)

Question.create(
  issue_id: 4,
  title: 'How many electoral votes are needed to win the presidential election?',
  is_slider: true
)

Source.create(
  issue_id: 4,
  question_id: 37,
  url: 'http://www.archives.gov/federal-register/electoral-college/about.html'
)

Slider.create(
  issue_id: 4,
  question_id: 37,
  is_exponential: true,
  min: 0,
  max: 600,
  correct: 270,
  units: '/ votes'
)
  
Question.create(
  issue_id: 4,
  title: 'How many US presidents have openly supported abolishing the electoral college?',
  is_slider: true
)

Source.create(
  issue_id: 4,
  question_id: 38,
  url: 'http://spot.colorado.edu/~mcguire/alternatevoting.htm'
)

Slider.create(
  issue_id: 4,
  question_id: 38,
  is_exponential: true,
  min: 0,
  max: 43,
  correct: 4,
  units: '/'
)

Question.create(
  issue_id: 4,
  title: 'According to a 2011 Gallup poll, approximately what percent of Americans support abolishing the electoral college?',
  is_slider: true
)

Source.create(
  issue_id: 4,
  question_id: 39,
  url: 'http://www.gallup.com/poll/150245/americans-swap-electoral-college-popular-vote.aspx'
)

Slider.create(
  issue_id: 4,
  question_id: 39,
  is_exponential: false,
  min: 0,
  max: 100,
  correct: 62,
  units: '/%'
)

Question.create(
  issue_id: 8,
  title: 'How many pounds of corn is required to produce a gallon of ethanol?',
  is_slider: true
)

Source.create(
  issue_id: 8,
  question_id: 40,
  url: 'http://auto.howstuffworks.com/fuel-efficiency/alternative-fuels/question707.htm'
)

Slider.create(
  issue_id: 8,
  question_id: 40,
  is_exponential: true,
  min: 1,
  max: 100,
  correct: 26,
  units: '/ lbs'
)

Question.create(
  issue_id: 8,
  title: 'When burning ethanol, how much less CO2 is produced relative to gasoline?',
  is_slider: true
)

Source.create(
  issue_id: 8,
  question_id: 41,
  url: 'http://www.ethanolrfa.org/pages/ethanol-facts-environment'
)

Slider.create(
  issue_id: 8,
  question_id: 41,
  is_exponential: true,
  min: 0,
  max: 100,
  correct: 40,
  units: '/%'
)

Question.create(
  issue_id: 8,
  title: 'How much less fuel efficient is burning ethanol vs gasoline?',
  is_slider: true
)

Source.create(
  issue_id: 8,
  question_id: 42,
  url: 'http://auto.howstuffworks.com/fuel-efficiency/alternative-fuels/question707.htm'
)

Slider.create(
  issue_id: 8,
  question_id: 42,
  is_exponential: false,
  min: 0,
  max: 100,
  correct: 30,
  units: '/%'
)

Question.create(
  issue_id: 8,
  title: 'Per capita, how much have crop subsidies cost the US government?',
  is_slider: true
)

Source.create(
  issue_id: 8,
  question_id: 43,
  url: 'http://farm.ewg.org/'
)

Slider.create(
  issue_id: 8,
  question_id: 43,
  is_exponential: true,
  min: 0,
  max: 100000,
  correct: 623,
  units: '$/'
)

Question.create(
  issue_id: 10,
  title: 'What percent of private-sector US employees are union members?',
  is_slider: true
)

Source.create(
  issue_id: 10,
  question_id: 44,
  url: 'http://www.kansascity.com/2012/01/27/3395890/percentage-of-workforce-represented.html'
)

Slider.create(
  issue_id: 10,
  question_id: 44,
  is_exponential: false,
  min: 1,
  max: 100,
  correct: 7,
  units: '/%'
)

Question.create(
  issue_id: 10,
  title: 'What percent of US federal employees are union members?',
  is_slider: true
)

Source.create(
  issue_id: 10,
  question_id: 45,
  url: 'http://www.kansascity.com/2012/01/27/3395890/percentage-of-workforce-represented.html'
)

Slider.create(
  issue_id: 10,
  question_id: 45,
  is_exponential: false,
  min: 1,
  max: 100,
  correct: 37,
  units: '/%'
)

Question.create(
  issue_id: 10,
  title: 'Adjusting for education, how much higher is total compensation for federal vs private sector employees?',
  is_slider: true
)

Source.create(
  issue_id: 10,
  question_id: 46,
  url: 'http://www.cbo.gov/publication/42921'
)

Slider.create(
  issue_id: 10,
  question_id: 46,
  is_exponential: false,
  min: 1,
  max: 100,
  correct: 16,
  units: '/%'
)

Question.create(
  issue_id: 10,
  title: 'What percent of the total federal budget is spend on veteran and retired federal employee benefits?',
  is_slider: true
)

Source.create(
  issue_id: 10,
  question_id: 47,
  url: 'http://www.cbpp.org/cms/index.cfm?fa=view&id=1258'
)

Slider.create(
  issue_id: 10,
  question_id: 47,
  is_exponential: false,
   min: 0,
   max: 40,
   correct: 7,
   units: '/%'
)

Question.create(
  issue_id: 10,
  title: 'What percent of federal government employees are fired each year?',
  is_slider: true
)

Source.create(
  issue_id: 10,
  question_id: 48,
  url: 'http://usatoday30.usatoday.com/news/washington/2011-07-18-fderal-job-security_n.htm'
)

Slider.create(
  issue_id: 10,
  question_id: 48,
  is_exponential: true,
  min: 0,
  max: 20,
  correct: 0.55,
  units: '/%'
)

Question.create(
  issue_id: 10,
  title: 'What percent of private sector employees are fired each year?',
  is_slider: true
)

Source.create(
  issue_id: 10,
  question_id: 49,
  url: 'http://usatoday30.usatoday.com/news/washington/2011-07-18-fderal-job-security_n.htm'
)

Slider.create(
  issue_id: 10,
  question_id: 49,
  is_exponential: true,
  min: 0,
  max: 20,
  correct: 3,
  units: '/%'
)

Question.create(
  issue_id: 14,
  title: 'What percent of working Americans make minimum wage?',
  is_slider: true
)

Source.create(
  issue_id: 14,
  question_id: 50,
  url: 'http://www.bls.gov/cps/minwage2011.htm'
)

Slider.create(
  issue_id: 14,
  question_id: 50,
  is_exponential: false,
  min: 0,
  max: 20,
  correct: 1,
  units: '/%'
)

Question.create(
  issue_id: 14,
  title: 'What percent of working teenagers make minimum wage?',
  is_slider: true
)

Source.create(
  issue_id: 14,
  question_id: 51,
  url: 'http://www.bls.gov/cps/minwage2011tbls.htm#1'
)

Slider.create(
  issue_id: 14,
  question_id: 51,
  is_exponential: false,
  min: 0,
  max: 50,
  correct: 13,
  units: '/%'
)

Question.create(
  issue_id: 14,
  title: 'What percent of working women make minimum wage?',
  is_slider: true
)

Source.create(
  issue_id: 14,
  question_id: 52,
  url: 'http://www.bls.gov/cps/minwage2011tbls.htm#1'
)

Slider.create(
  issue_id: 14,
  question_id: 52,
  is_exponential: false,
  min: 0,
  max: 30,
  correct: 3,
  units: '/%'
)

Question.create(
  issue_id: 14,
  title: 'What is the US poverty line for a family of four?',
  is_slider: true
)

Source.create(
  issue_id: 14,
  question_id: 53,
  url: 'http://coverageforall.org/pdf/FHCE_FedPovertyLevel.pdf'
)

Slider.create(
  issue_id: 14,
  question_id: 53,
  is_exponential: false,
  min: 5000,
  max: 50000,
  correct: 23050,
  units: '$/'
)
  
Question.create(
  issue_id: 14,
  title: 'In what year was the first US minimum wage implemented?',
  is_slider: true
)

Source.create(
  issue_id: 14,
  question_id: 54,
  url: 'http://www.cato.org/sites/cato.org/files/pubs/pdf/PA701.pdf'
)

Slider.create(
  issue_id: 14,
  question_id: 54,
  is_exponential: false,
  min: 1776,
  max: 2010,
  correct: 1938,
  units: '/'
)

Question.create(
  issue_id: 14,
  title: 'How many US states have a higher minimum wage than the federal level?',
  is_slider: true
)

Source.create(
  issue_id: 14,
  question_id: 55,
  url: 'http://www.nytimes.com/2012/06/07/business/bill-pushes-for-increase-in-wages.html?_r=1&'
)

Slider.create(
  issue_id: 14,
  question_id: 55,
  is_exponential: false,
  min: 0,
  max: 50,
  correct: 18,
  units: '/'
)

Question.create(
  issue_id: 14,
  title: 'What percent of countries have minimum wage laws?',
  is_slider: true
)

Source.create(
  issue_id: 14,
  question_id: 56,
  url: 'http://www.conservapedia.com/Minimum_wage'
)

Slider.create(
  issue_id: 14,
  question_id: 56,
  is_exponential: false,
  min: 1,
  max: 100,
  correct: 90,
  units: '/%'
)

Question.create(
  issue_id: 5,
  title: 'For primary education, how much does the US annually spend per student?',
  is_slider: true
)

Source.create(
  issue_id: 5,
  question_id: 57,
  url: 'http://www.oecd-ilibrary.org/sites/eag_highlights-2011-en/03/01/index.html;jsessionid=1gcqdsr4ne73e.delta?contentType=&itemId=/content/chapter/eag_highlights-2011-21-en&containerItemId=/content/serial/2076264x&accessItemIds=/content/book/eag_highlights-20'
)

Slider.create(
  issue_id: 5,
  question_id: 57,
  is_exponential: true,
  min: 100,
  max: 100000,
  correct: 15000,
  units: '$/'
)

Question.create(
  issue_id: 5,
  title: 'For primary education, how much does Finland annually spend per student?',
  is_slider: true
)

Source.create(
  issue_id: 5,
  question_id: 58,
  url: 'http://www.oecd-ilibrary.org/sites/eag_highlights-2011-en/03/01/index.html;jsessionid=1gcqdsr4ne73e.delta?contentType=&itemId=/content/chapter/eag_highlights-2011-21-en&containerItemId=/content/serial/2076264x&accessItemIds=/content/book/eag_highlights-20'
)

Slider.create(
  issue_id: 5,
  question_id: 58,
  is_exponential: true,
  min: 100,
  max: 100000,
  correct: 9000,
  units: '$/'
)

Question.create(
  issue_id: 5,
  title: 'According to the Education Index, what is Finland\'s worldwide academic ranking?',
  is_slider: true
)

Source.create(
  issue_id: 5,
  question_id: 59,
  url: 'http://en.wikipedia.org/wiki/Education_Index'
)

Slider.create(
  issue_id: 5,
  question_id: 59,
  is_exponential: true,
  min: 1,
  max: 100,
  correct: 2,
  units: '/'
)

Question.create(
  issue_id: 5,
  title: 'According to the Education Index, what is the US worldwide academic ranking?',
  is_slider: true
)

Source.create(
  issue_id: 5,
  question_id: 60,
  url: 'http://en.wikipedia.org/wiki/Education_Index'
)

Slider.create(
  issue_id: 5,
  question_id: 60,
  is_exponential: true,
  min: 1,
  max: 100,
  correct: 20,
  units: '/'
)

Question.create(
  issue_id: 16,
  title: 'As a percent of annual net income, how much money did BP pay for the 2010 oil spill?',
  is_slider: true
)

Source.create(
  issue_id: 16,
  question_id: 61,
  url: 'http://www.bp.com/sectiongenericarticle800.do?categoryId=9036584&contentId=7067605'
)

Slider.create(
  issue_id: 16,
  question_id: 61,
  is_exponential: true,
  min: 1,
  max: 10000,
  correct: 181,
  units: '/%'
)

Question.create(
  issue_id: 16,
  title: 'Where does the US rank worldwide for oil production?',
  is_slider: true
)

Source.create(
  issue_id: 16,
  question_id: 62,
  url: 'https://www.cia.gov/library/publications/the-world-factbook/rankorder/2173rank.html'
)

Slider.create(
  issue_id: 16,
  question_id: 62,
  is_exponential: true,
  min: 1,
  max: 100,
  correct: 3,
  units: '/'
)

Question.create(
  issue_id: 16,
  title: 'What percent of oil consumed in the US is imported?',
  is_slider: true
)

Source.create(
  issue_id: 16,
  question_id: 63,
  url: 'http://www.eia.gov/tools/faqs/faq.cfm?id=36&t=6'
)

Slider.create(
  issue_id: 16,
  question_id: 63,
  is_exponential: true,
  min: 0,
  max: 100,
  correct: 45,
  units: '/'
)

Question.create(
  issue_id: 16,
  title: 'What percent of crude oil processed in US refineries is imported?',
  is_slider: true
)

Source.create(
  issue_id: 16,
  question_id: 64,
  url: 'http://www.eia.gov/tools/faqs/faq.cfm?id=36&t=6'
)

Slider.create(
  issue_id: 16,
  question_id: 64,
  is_exponential: true,
  min: 0,
  max: 100,
  correct: 60,
  units: '/'
)

Question.create(
  issue_id: 16,
  title: 'What year is projected to be the peak year for oil production from new offshore drilling leases?',
  is_slider: true
)

Source.create(
  issue_id: 16,
  question_id: 65,
  url: 'http://www.usclimatenetwork.org/resource-database/offshore-drilling-a-false-answer-to-energy-prices'
)

Slider.create(
  issue_id: 16,
  question_id: 65,
  is_exponential: false,
  min: 2013,
  max: 2200,
  correct: 2030,
  units: '/'
)

Question.create(
  issue_id: 16,
  title: 'How many gallons of oil are annually spilled due to offshore drilling?',
  is_slider: true
)

Source.create(
  issue_id: 16,
  question_id: 66,
  url: 'http://www.care2.com/causes/offshore-drilling-is-energy-worth-the-ecological-disaster-of-oil-spills.html'
)

Slider.create(
  issue_id: 16,
  question_id: 66,
  is_exponential: true,
  min: 0,
  max: 10000000,
  correct: 42000,
  units: '/'
)

Question.create(
  issue_id: 16,
  title: 'Per decade, how many times do spills of more than 10,000 barrels occur?',
  is_slider: true
)

Source.create(
  issue_id: 16,
  question_id: 67,
  url: 'http://www.care2.com/causes/offshore-drilling-is-energy-worth-the-ecological-disaster-of-oil-spills.html'
)

Slider.create(
  issue_id: 16,
  question_id: 67,
  is_exponential: true,
   min: 0,
   max: 100,
   correct: 3,
   units: '/'
)

Question.create(
  issue_id: 2,
  title: 'How many patent attorneys and agents are in the US?',
  is_slider: true,
)

Source.create(
  issue_id: 2,
  question_id: 68,
  url: 'http://arstechnica.com/tech-policy/2012/03/opinion-the-problem-with-software-patents-they-dont-scale/'
)

Slider.create(
  issue_id: 2,
  question_id: 68,
  is_exponential: true,
  min: 100,
  max: 1000000,
  correct: 40000,
  units: '/'
)

Question.create(
  issue_id: 2,
  title: 'How many new software patents are issued each year in the US?',
  is_slider: true
)

Source.create(
  issue_id: 2,
  question_id: 69,
  url: 'http://arstechnica.com/tech-policy/2012/03/opinion-the-problem-with-software-patents-they-dont-scale/'
)

Slider.create(
  issue_id: 2,
  question_id: 69,
  is_exponential: true,
  min: 100,
  max: 1000000,
  correct: 40000,
  units: '/'
)

Question.create(
  issue_id: 2,
  title: 'How many full-time attorneys would it take to make sure that no company is infringing on a software patent?',
  is_slider: true
)

Source.create(
  issue_id: 2,
  question_id: 70,
  url: 'http://arstechnica.com/tech-policy/2012/03/opinion-the-problem-with-software-patents-they-dont-scale/'
)

Slider.create(
  issue_id: 2,
  question_id: 70,
  is_exponential: true,
  min: 100,
  max: 100000000,
  correct: 2000000,
  units: '/'
)

Question.create(
  issue_id: 2,
  title: 'Per capita, how much money do patent trolls annually cost the US?',
  is_slider: true
)

Source.create(
  issue_id: 2,
  question_id: 71,
  url: 'http://venturebeat.com/2012/06/26/we-want-our-30b-back-patent-trolls-were-looking-at-you-nathan-myhrvold/'
)

Slider.create(
  issue_id: 2,
  question_id: 71,
  is_exponential: true,
  min: 0.1,
  max: 10000,
  correct: 93,
  units: '$/'
)

Question.create(
  issue_id: 12,
  title: 'How many pounds of trans fat does an average American eat annually?',
  is_slider: true
)

Source.create(
  issue_id: 12,
  question_id: 72,
  url: 'http://www.msnbc.msn.com/id/16051436/ns/health-diet_and_nutrition/t/new-york-city-passes-trans-fat-ban/#.UHNf2a5f2So'
)

Slider.create(
  issue_id: 12,
  question_id: 72,
  is_exponential: true,
  min: 1,
  max: 100,
  correct: 5,
  units: '/ lbs'
)

Question.create(
  issue_id: 12,
  title: 'What is the maximum recommend amount of trans fat to consume per day (grams)?',
  is_slider: true
)

Source.create(
  issue_id: 12,
  question_id: 73,
  url: 'http://www.heart.org/HEARTORG/GettingHealthy/FatsAndOils/Fats101/Trans-Fats_UCM_301120_Article.jsp'
)

Slider.create(
  issue_id: 12,
  question_id: 73,
  is_exponential: true,
  min: 0,
  max: 50,
  correct: 2,
  units: '/g'
)

Question.create(
  issue_id: 12,
  title: 'How many annual deaths in the US are attributed to trans fat consumption?',
  is_slider: true
)

Source.create(
  issue_id: 12,
  question_id: 74,
  url: 'http://en.wikipedia.org/wiki/Trans_fat'
)

Slider.create(
  issue_id: 12,
  question_id: 74,
  is_exponential: true,
  min: 0,
  max: 1000000,
  correct: 20000,
  units: '/'
)

Question.create(
  issue_id: 3,
  title: 'Approximately how much does one TSA nude-body scanner cost?',
  is_slider: true
)

Source.create(
  issue_id: 3,
  question_id: 75,
  url: 'http://articles.businessinsider.com/2012-05-10/politics/31650296_1_tsa-to-advanced-imaging-technology-scanners'
)

Slider.create(
  issue_id: 3,
  question_id: 75,
  is_exponential: true,
  min: 1000,
  max: 10000000,
  correct: 200000,
  units: '$/'
)

Question.create(
  issue_id: 3,
  title: 'How many people does the TSA directly employ?',
  is_slider: true
)

Source.create(
  issue_id: 3,
  question_id: 76,
  url: 'http://en.wikipedia.org/wiki/Transportation_Security_Administration'
)

Slider.create(
  issue_id: 3,
  question_id: 76,
  is_exponential: true,
  min: 1000,
  max: 1000000,
  correct: 60000,
  units: '/'
)

Question.create(
  issue_id: 3,
  title: 'How much does the TSA annually cost, per capita?',
  is_slider: true
)

Source.create(
  issue_id: 3,
  question_id: 77,
  url: 'http://en.wikipedia.org/wiki/Transportation_Security_Administration'
)

Slider.create(
  issue_id: 3,
  question_id: 77,
  is_exponential: true,
  min: 0.1,
  max: 10000,
  correct: 26,
  units: '$/'
)

Question.create(
  issue_id: 3,
  title: 'According to a 2012 Gallup poll, what percent of Americans think the TSA is doing a good job?',
  is_slider: true
)

Source.create(
  issue_id: 3,
  question_id: 78,
  url: 'http://www.politico.com/news/stories/0812/79499.html?hp=r8'
)

Slider.create(
  issue_id: 3,
  question_id: 78,
  is_exponential: false,
  min: 0,
  max: 100,
  correct: 54,
  units: '/%'
)

Question.create(
  issue_id: 3,
  title: 'One CT scan emits how many times more radiation than a TSA scan?',
  is_slider: true
)

Source.create(
  issue_id: 3,
  question_id: 79,
  url: 'http://en.wikipedia.org/wiki/Backscatter_X-ray#Health_effects'
)

Slider.create(
  issue_id: 3,
  question_id: 79,
  is_exponential: true,
  min: 1,
  max: 10000000,
  correct: 200000,
  units: '/'
)

Question.create(
  issue_id: 3,
  title: 'It takes approximately how many seconds for an average TSA scan?',
  is_slider: true
)

Source.create(
  issue_id: 3,
  question_id: 80,
  url: 'http://www.studentnewsdaily.com/daily-news-article/scanners-and-probing-pat-downs-upset-airline-passengers/'
)

Slider.create(
  issue_id: 3,
  question_id: 80,
  is_exponential: true,
  min: 1,
  max: 1000,
  correct: 30,
  units: '/s'
)

Question.create(
  issue_id: 3,
  title: 'Relative to theoretical levels, how much radiation were TSA scanners actually emitting when tested?',
  is_slider: true
)

Source.create(
  issue_id: 3,
  question_id: 81,
  url: 'http://usatoday30.usatoday.com/news/washington/2011-03-11-tsa-scans_N.htm'
)

Slider.create(
  issue_id: 3,
  question_id: 81,
  is_exponential: true,
  min: 50,
  max: 100000,
  correct: 1000,
  units: '/%'
)

Question.create(
  issue_id: 9,
  title: 'Each year in the US, how many people die prematurely due to lack of healthcare?',
  is_slider: true
)

Source.create(
  issue_id: 9,
  question_id: 82,
  url: 'http://news.harvard.edu/gazette/story/2009/09/new-study-finds-45000-deaths-annually-linked-to-lack-of-health-coverage/'
)

Slider.create(
  issue_id: 9,
  question_id: 82,
  is_exponential: true,
  min: 0,
  max: 10000000,
  correct: 45000,
  units: '/'
)

Question.create(
  issue_id: 9,
  title: 'How much do Medicaid and Medicare annually cost taxpayers per capita?',
  is_slider: true
)

Source.create(
  issue_id: 9,
  question_id: 83,
  url: 'http://usatoday30.usatoday.com/news/health/healthcare/health/healthcare/story/2011/08/Medicare-Medicaid-tab-keeps-growing/49776998/1'
)

Slider.create(
  issue_id: 9,
  question_id: 83,
  is_exponential: true,
  min: 0.1,
  max: 10000,
  correct: 3190,
  units: '$/'
)

Question.create(
  issue_id: 9,
  title: 'In 1980, how much of the federal budget was spent on health care?',
  is_slider: true
)

Source.create(
  issue_id: 9,
  question_id: 84,
  url: 'http://www.washingtonpost.com/opinions/health-cares-heap-of-waste/2012/09/13/ee62aa62-fdb6-11e1-b153-218509a954e1_story.html'
)

Slider.create(
  issue_id: 9,
  question_id: 84,
  is_exponential: false,
  min: 0,
  max: 100,
  correct: 11,
  units: '/%'
)

Question.create(
  issue_id: 9,
  title: 'In 2011, how much of the federal budget was spent on health care?',
  is_slider: true
)

Source.create(
  issue_id: 9,
  question_id: 85,
  url: 'http://www.washingtonpost.com/opinions/health-cares-heap-of-waste/2012/09/13/ee62aa62-fdb6-11e1-b153-218509a954e1_story.html'
)

Slider.create(
  issue_id: 9,
  question_id: 85,
  is_exponential: false,
  min: 0,
  max: 100,
  correct: 27,
  units: '/%'
)

Question.create(
  issue_id: 9,
  title: 'What percent of Americans are covered by Medicare or Medicaid?',
  is_slider: true
)

Source.create(
  issue_id: 9,
  question_id: 86,
  url: 'http://aspe.hhs.gov/health/reports/2011/cpshealthins2011/ib.shtml'
)

Slider.create(
  issue_id: 9,
  question_id: 86,
  is_exponential: false,
  min: 0,
  max: 100,
  correct: 30,
  units: '/%'
)

Question.create(
  issue_id: 9,
  title: 'How much does the US spend on healthcare relative to GDP?',
  is_slider: true
)

Source.create(
  issue_id: 9,
  question_id: 87,
  url: 'http://www.commonwealthfund.org/~/media/Files/Publications/Issue%20Brief/2011/Jul/1532_Squires_US_hlt_sys_comparison_12_nations_intl_brief_v2.pdf'
)

Slider.create(
  issue_id: 9,
  question_id: 87,
  is_exponential: false,
  min: 1,
  max: 100,
  correct: 16,
  units: '/%'
)

Question.create(
  issue_id: 9,
  title: 'In terms of percent of GDP spent on healthcare, where does the US rank globally?',
  is_slider: true
)

Source.create(
  issue_id: 9,
  question_id: 88,
  url: 'http://www.commonwealthfund.org/~/media/Files/Publications/Issue%20Brief/2011/Jul/1532_Squires_US_hlt_sys_comparison_12_nations_intl_brief_v2.pdf'
)

Slider.create(
  issue_id: 9,
  question_id: 88,
  is_exponential: false,
  min: 1,
  max: 100,
  correct: 30,
  units: '/'
)

Question.create(
  issue_id: 9,
  title: 'What is the average wait time for a doctors visit in the current US system?',
  is_slider: true
)

Source.create(
  issue_id: 9,
  question_id: 89,
  url: 'http://www.huffingtonpost.com/2012/04/04/doctor-office-wait-times_n_1400957.html'
)

Slider.create(
  issue_id: 9,
  question_id: 89,
  is_exponential: true,
  min: 1,
  max: 300,
  correct: 21,
  units: '/ min'
)

Question.create(
  issue_id: 9,
  title: 'For every dollar that states spend on uninsured healthcare, how much does the federal government contribute?',
  is_slider: true
)

Source.create(
  issue_id: 9,
  question_id: 90,
  url: 'http://www.kff.org/insurance/upload/7670-03.pdf'
)

Slider.create(
  issue_id: 9,
  question_id: 90,
  is_exponential: false,
  min: 0,
  max: 20,
  correct: 2,
  units: '$/'
)

Question.create(
  issue_id: 9,
  title: 'Where does the US rank for globally for the lowest infant mortality rate?',
  is_slider: true
)

Source.create(
  issue_id: 9,
  question_id: 91,
  url: 'http://en.wikipedia.org/wiki/List_of_countries_by_infant_mortality_rate'
)

Slider.create(
  issue_id: 9,
  question_id: 91,
  is_exponential: false,
  min: 1,
  max: 100,
  correct: 34,
  units: '/'
)

Question.create(
  issue_id: 9,
  title: 'Where does the US rank for globally for life expectancy?',
  is_slider: true
)

Source.create(
  issue_id: 9,
  question_id: 92,
  url: 'http://en.wikipedia.org/wiki/List_of_countries_by_life_expectancy'
)

Slider.create(
  issue_id: 9,
  question_id: 92,
  is_exponential: false,
  min: 1,
  max: 100,
  correct: 38,
  units: '/'
)

Question.create(
  issue_id: 9, 
  title: 'Medical bills cause what percent of US bankruptcies?',
  is_slider: true
)

Source.create(
  issue_id: 9,
  question_id: 93,
  url: 'http://articles.cnn.com/2009-06-05/health/bankruptcy.medical.bills_1_medical-bills-bankruptcies-health-insurance?_s=PM:HEALTH'
)

Slider.create(
  issue_id: 9,
  question_id: 93,
  is_exponential: false,
  min: 0,
  max: 100,
  correct: 60,
  units: '/%'
)

Question.create(
  issue_id: 9,
  title: 'What percent of Americans think health care should be a right?',
  is_slider: true
)

Source.create(
  issue_id: 9,
  question_id: 94,
  url: 'http://www.political.com/Reports/Majority_Say_Health_Care_For_All'
)

Slider.create(
  issue_id: 9,
  question_id: 94,
  is_exponential: false,
  min: 0,
  max: 100,
  correct: 64,
  units: '/%'
)
  
Question.create(
  issue_id: 9,
  title: 'Per capita, how much money was spent on health care lobbying in 2010?',
  is_slider: true
)

Source.create(
  issue_id: 9,
  question_id: 95,
  url: 'http://money.cnn.com/2011/03/25/news/economy/health_care_lobbying/index.htm'
)

Slider.create(
  issue_id: 9,
  question_id: 95,
  is_exponential: true,
  min: 0.1,
  max: 1000,
  correct: 1.6,
  units: '$/'
)

Question.create(
  issue_id: 9,
  title: 'How much of every dollar spent on US health care is considered \'waste\'?',
  is_slider: true
)

Source.create(
  issue_id: 9,
  question_id: 96,
  url: 'http://news.yahoo.com/report-us-health-care-system-wastes-750b-140106406.html'
)

Slider.create(
  issue_id: 9,
  question_id: 96,
  is_exponential: false,
  min: 0,
  max: 99,
  correct: 30,
  units: '$0./'
)

Question.create(
  issue_id: 9,
  title: 'Relative to inflation, how much are health insurance premiums increasing?',
  is_slider: true
)

Source.create(
  issue_id: 9,
  question_id: 97,
  url: 'http://www.oecd.org/canada/BriefingNoteCANADA2012.pdf'
)

Slider.create(
  issue_id: 9,
  question_id: 97,
  is_exponential: true,
  min: 25,
  max: 1000,
  correct: 250,
  units: '/%'
)

Question.create(
  issue_id: 9,
  title: 'In terms of spending the most on pharmaceutical drugs, where does the US rank?',
  is_slider: true
)

Source.create(
  issue_id: 9,
  question_id: 98,
  url: 'http://www.oecd.org/health/healthpoliciesanddata/36960035.pdf'
)

Slider.create(
  issue_id: 9,
  question_id: 98,
  is_exponential: false,
  min: 1,
  max: 100,
  correct: 1,
  units: '/'
)

Question.create(
  issue_id: 9,
  title: 'In terms of physicians per capita, where does the US rank?',
  is_slider: true
)

Source.create(
  issue_id: 9,
  question_id: 99,
  url: 'http://www.nationmaster.com/graph/hea_phy_per_1000_peo-physicians-per-1-000-people'
)

Slider.create(
  issue_id: 9,
  question_id: 99,
  is_exponential: false,
  min: 1,
  max: 100,
  correct: 52,
  units: '/'
)

Question.create(
  issue_id: 9,
  title: 'What percent of US citizens were medically uninsured in 2010?',
  is_slider: true
)

Source.create(
  issue_id: 9,
  question_id: 100,
  url: 'http://aspe.hhs.gov/health/reports/2011/cpshealthins2011/ib.shtml'
)

Slider.create(
  issue_id: 9,
  question_id: 100,
  is_exponential: false,
  min: 0,
  max: 100,
  correct: 16,
  units: '/%'
)

Question.create(
  issue_id: 13,
  title: 'How many personnel are required to fully operate a military Predator drone?',
  is_slider: true
)

Source.create(
  issue_id: 13,
  question_id: 101,
  url: 'http://science.howstuffworks.com/predator6.htm'
)

Slider.create(
  issue_id: 13,
  question_id: 101,
  is_exponential: true,
  min: 1,
  max: 200,
  correct: 82,
  units: '/'
)

Question.create(
  issue_id: 13,
  title: 'How many military drone pilots does the Pentagon want by 2015?',
  is_slider: true
)

Source.create(
  issue_id: 13,
  question_id: 102,
  url: 'http://www.nytimes.com/2012/07/30/us/drone-pilots-waiting-for-a-kill-shot-7000-miles-away.html?_r=5&hp&pagewanted=all&'
)

Slider.create(
  issue_id: 13,
  question_id: 102,
  is_exponential: true,
  min: 10,
  max: 100000,
  correct: 2000,
  units: '/'
)

Question.create(
  issue_id: 13,
  title: 'What percent of drone casualities are considered high-level targets?',
  is_slider: true
)

Source.create(
  issue_id: 13,
  question_id: 103,
  url: 'http://www.cnn.com/2012/09/25/world/asia/pakistan-us-drone-strikes/index.html'
)

Slider.create(
  issue_id: 13,
  question_id: 103,
  is_exponential: false,
  min: 0,
  max: 100,
  correct: 2,
  units: '/%'
)

Question.create(
  issue_id: 13,
  title: 'How many drone strikes occured in Pakistan in 2012?',
  is_slider: true
)

Source.create(
  issue_id: 13,
  question_id: 104,
  url: 'http://counterterrorism.newamerica.net/drones/2012#2012chart'
)

Slider.create(
  issue_id: 13,
  question_id: 104,
  is_exponential: true,
  min: 0,
  max: 10000,
  correct: 48,
  units: '/'
)

Question.create(
  issue_id: 13,
  title: 'What percent of the US support domestic drone use?',
  is_slider: true
)

Source.create(
  issue_id: 13,
  question_id: 105,
  url: 'http://www.cbsnews.com/8301-201_162-57521768/more-than-a-third-fear-drone-use-in-u.s.-poll/'
)

Slider.create(
  issue_id: 13,
  question_id: 105,
  is_exponential: false,
  min: 0,
  max: 100,
  correct: 44,
  units: '/%'
)

Question.create(
  issue_id: 13,
  title: 'Due to privacy concerns, what percent of Americans are \'very concerned\' about domestic drone use?',
  is_slider: true
)

Source.create(
  issue_id: 13,
  question_id: 106,
  url: 'http://www.cbsnews.com/8301-201_162-57521768/more-than-a-third-fear-drone-use-in-u.s.-poll/'
)

Slider.create(
  issue_id: 13,
  question_id: 106,
  is_exponential: false,
  min: 0,
  max: 100,
  correct: 35,
  units: '/%'
)

Question.create(
  issue_id: 13,
  title: 'How many Pakistani civilians have been killed by US drones?',
  is_slider: true
)

Source.create(
  issue_id: 13,
  question_id: 107,
  url: 'http://www.cnn.com/2012/09/25/world/asia/pakistan-us-drone-strikes/index.html'
)

Slider.create(
  issue_id: 13,
  question_id: 107,
  is_exponential: true,
  min: 0,
  max: 100000,
  correct: 700,
  units: '/'
)



# Marijuana issue_id -> 1
Issue.create(
  title: 'Marijuana legalization',
  description: 'The usage, sale and possession of cannabis in the United States is illegal under federal law. However, some states have created exemptions for medical cannabis use, some states have decriminalized non-medical cannabis use, and two states have legalized cannabis for recreational use.',
  image: 'weed'
)

# Trolling issue_id -> 2
Issue.create(
  title: 'Software patent trolling',
  description: 'A software patent troll is a person or company who enforces patents against one or more alleged infringers in a manner considered aggressive or opportunistic, with no intention to manufacture or market the patented invention.',
  image: 'troll'
)

# TSA issue_id -> 3
Issue.create(
  title: 'TSA full body scanners',
  description: "Full body scanners are devices that create an image of a person\'s unclothed body using high-frequency radio waves. They have become a popular alternative to traditional metal detectors at security checkpoints.",
  image: 'tsa'
)

# Electoral college issue_id -> 4
Issue.create(
  title: 'Electoral College',
  description: 'The United States Electoral College is the institution that officially elects the President and Vice President of the United States every four years',
  image: 'electoralcollege'
)

# Finland issue_id -> 5
Issue.create(
  title: 'Finland\'s education system',
  description: "The United States is ranked very low in worldwide education standards. Finland is continuously ranked among the highest. Should the US adopt an education system similar to Finland\'s?",
  image: 'finland'
)

# Climate change issue_id -> 6
Issue.create(
  title: 'Climate change',
  description: 'Climate change is a significant and lasting change in the statistical distribution of weather patterns over periods ranging from decades to millions of years.',
  image: 'climate'
)

# College issue_id -> 7
Issue.create(
  title: 'College and University',
  description: 'Tuition costs for both private and public colleges and universities in the United States are skyrocketing.',
  image: 'college'
)

# Ethanol issue_id -> 8
Issue.create(
  title: 'Ethanol subsidies',
  description: 'Ethanol fuel is ethanol (ethyl alcohol), the same type of alcohol found in beer, wine, and spirits. It is also commonly used as a biofuel additive in gasoline.',
  image: 'ethanol'
)

# Health care issue_id -> 9
Issue.create(
  title: 'Universal health care',
  description: 'Universal health care refers to a governmental health care system that provides healthcare to all citizens.',
  image: 'health'
)

# Employee comp issue_id -> 10
Issue.create(
  title: 'Federal employee compensation',
  description: 'Federal employees are not subject to the same standards for wages and benefits as those in the private sector.',
  image: 'employee'
)

# Fracking issue_id -> 11
Issue.create(
  title: 'Hydraulic fracking',
  description: "Hydraulic Fracking is used to release petroleum, natural gas, or other fossil fuels for extraction by way of injecting water, sand, and chemicals deep into the earth\'s surface.",
  image: 'fracking'
)

# Trans fat issue_id -> 12
Issue.create(
  title: 'Trans fat',
  description: 'Trans fat is short for trans-isomer fatty acids. They do not exist in nature. They raise LDL (bad) cholesterol, and lower HDL (good) cholesterol, but are used very commonly. ',
  image: 'transfats'
)

# Drones issue_id -> 13
Issue.create(
  title: 'Unmanned aerial vehicles',
  description: 'An unmanned aerial vehicle (UAV) or drone, is an aircraft without an on-board pilot. UAVs are commonly used for military purposes.',
  image: 'drones'
)

# Min Wage issue_id -> 14
Issue.create(
  title: 'Federal minimum wage',
  description: 'A minimum wage is the lowest hourly remuneration that employers may legally pay to workers.',
  image: 'minimumwage'
)

# Oil subsidies issue_id -> 15
Issue.create(
  title: 'Oil company subsidies',
  description: 'A subsidy is monetary grant paid by the government to assist an industry, so that the price of a commodity or service remains low, or competitive.',
  image: 'oilsubsidies'
)

# Offshore oil issue_id -> 16
Issue.create(
  title: 'Offshore drilling',
  description: 'The rising cost of oil and fears about US dependence on foreign oil have lead to desires for increased drilling off of US coastlines. Opponents fear offshore drilling will have minimal economic benefit and substantial harmful effects on the environment.',
  image: 'offshoreoil'
)

# Citizens U issue_id -> 17
Issue.create(
  title: 'Citizens United',
  description: 'Citizens United v. Federal Election Commission was a landmark United States Supreme Court case in which the Court held that the First Amendment prohibited the government from restricting independent political expenditures by corporations and unions.',
  image: 'citizensunited'
)

# Abortion issue_id -> 18
Issue.create(
  title: 'Abortion',
  description: 'Abortion is the termination of pregnancy by the removal or expulsion from the uterus of a fetus or embryo.',
  image: 'abortion'
)