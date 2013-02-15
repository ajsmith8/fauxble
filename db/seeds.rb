
# question_id -> 1
Question.create(
  issue_id: 1,
  title: 'What percent of all U.S. arrests are marijuana-related?',
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

# question_id -> 2
Question.create(
  issue_id: 1,
  title: 'What percent of all U.S. drug arrests are marijuana-related?',
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

# question_id -> 3  
Question.create(
  issue_id: 1,
  title: 'What percent of all Americans have reported trying marijuana at least once?',
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

# question_id -> 4
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

# question_id -> 5
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

# question_id -> 6
Question.create(
  issue_id: 1,
  title: 'Given that the U.S. has 5% of the world\'s population, what percent of the world\'s prison population does the U.S. have?',
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

# question_id -> 7
Question.create(
  issue_id: 1,
  title: 'What percentage of Mexico\'s GDP comes from marijuana sales?',
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

# question_id -> 8
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

# question_id -> 9
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

# question_id -> 10
Question.create(
  issue_id: 18,
  title: 'What percent of U.S. women have an unintended pregnancy by age 45?',
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

# question_id -> 11
Question.create(
  issue_id: 18,
  title: 'What percent of U.S. women have had an abortion by age 20?',
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

# question_id -> 12
Question.create(
  issue_id: 18,
  title: 'What percent of U.S. women who receive abortions are teenagers?',
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

# question_id -> 13
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

# question_id -> 14
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

# question_id -> 15
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

# question_id -> 16
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

# question_id -> 17
Question.create(
  issue_id: 6,
  title: 'How much have human-caused Carbon Dioxide emissions increased since 1990?',
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

# question_id -> 18
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

# question_id -> 19
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

# question_id -> 20
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

# question_id -> 21
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

# question_id -> 22
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

# question_id -> 23
Question.create(
  issue_id: 7,
  title: 'Approximately what percent of unemployed Americans have at least some college education?',
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

# question_id -> 24
Question.create(
  issue_id: 7,
  title: 'Approximately what percent of U.S. jobs require at least a two-year degree?',
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

# question_id -> 25
Question.create(
  issue_id: 7,
  title: 'Approximately how much per year does it cost to attend a private U.S. college?',
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

# question_id -> 26
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

# question_id -> 27
Question.create(
  issue_id: 7,
  title: 'What is the median U.S. family income?',
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

# question_id -> 28
Question.create(
  issue_id: 7,
  title: 'How much does the average employed college graduate earn per year?',
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

# question_id -> 29
Question.create(
  issue_id: 7,
  title: 'How much does the average employed non-college graduate earn per year?',
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

# question_id -> 30
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

# question_id -> 31
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

# question_id -> 32
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

# question_id -> 33
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

# question_id -> 34
Question.create(
  issue_id: 7,
  title: 'What is the U.S. per capital student loan debt?',
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

# question_id -> 35
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

# question_id -> 36
Question.create(
  issue_id: 4,
  title: 'How many U.S. presidents won the presidential race without winning the popular vote?',
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

# question_id -> 37
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

# question_id -> 38
Question.create(
  issue_id: 4,
  title: 'How many U.S. presidents have openly supported abolishing the Electoral College?',
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

# question_id -> 39
Question.create(
  issue_id: 4,
  title: 'According to a 2011 Gallup poll, approximately what percent of Americans support abolishing the Electoral College?',
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

# question_id -> 40
Question.create(
  issue_id: 8,
  title: 'How many pounds of corn are required to produce a gallon of ethanol?',
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

# question_id -> 41
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

# question_id -> 42
Question.create(
  issue_id: 8,
  title: 'How much less fuel efficient is burning ethanol vs. gasoline?',
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

# question_id -> 43
Question.create(
  issue_id: 8,
  title: 'Per capita, how much do crop subsidies cost the U.S. government?',
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

# question_id -> 44
Question.create(
  issue_id: 10,
  title: 'What percent of private-sector U.S. employees are union members?',
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

# question_id -> 45
Question.create(
  issue_id: 10,
  title: 'What percent of U.S. federal employees are union members?',
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

# question_id -> 46
Question.create(
  issue_id: 10,
  title: 'Adjusting for education, how much higher is total compensation for federal vs. private sector employees?',
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

# question_id -> 47
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

# question_id -> 48
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

# question_id -> 49
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

# question_id -> 50
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

# question_id -> 51
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

# question_id -> 52
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

# question_id -> 53
Question.create(
  issue_id: 14,
  title: 'What is the U.S. poverty line for a family of four?',
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

# question_id -> 54
Question.create(
  issue_id: 14,
  title: 'In what year was the first U.S. minimum wage implemented?',
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

# question_id -> 55
Question.create(
  issue_id: 14,
  title: 'How many U.S. states have a higher minimum wage than the federal level?',
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

# question_id -> 56
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

# question_id -> 57
Question.create(
  issue_id: 5,
  title: 'For primary education, how much does the U.S. annually spend per student?',
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

# question_id -> 58
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

# question_id -> 59
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

# question_id -> 60
Question.create(
  issue_id: 5,
  title: 'According to the Education Index, what is the U.S. worldwide academic ranking?',
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

# question_id -> 61
Question.create(
  issue_id: 16,
  title: 'As a percent of its annual net income, how much money did BP pay for the 2010 oil spill?',
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

# question_id -> 62
Question.create(
  issue_id: 16,
  title: 'Where does the U.S. rank worldwide for oil production?',
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

# question_id -> 63
Question.create(
  issue_id: 16,
  title: 'What percent of oil consumed in the U.S. is imported?',
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

# question_id -> 64
Question.create(
  issue_id: 16,
  title: 'What percent of crude oil processed in U.S. refineries is imported?',
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

# question_id -> 65
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

# question_id -> 66
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

# question_id -> 67
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

# question_id -> 68
Question.create(
  issue_id: 2,
  title: 'How many patent attorneys and agents are there in the U.S.?',
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

# question_id -> 69
Question.create(
  issue_id: 2,
  title: 'How many new software patents are issued each year in the U.S.?',
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

# question_id -> 70
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

# question_id -> 71
Question.create(
  issue_id: 2,
  title: 'Per capita, how much money do patent trolls annually cost the U.S.?',
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

# question_id -> 72
Question.create(
  issue_id: 12,
  title: 'How many pounds of trans fat does the average American eat per year?',
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

# question_id -> 73
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

# question_id -> 74
Question.create(
  issue_id: 12,
  title: 'How many annual deaths in the U.S. are attributed to trans fat consumption?',
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

# question_id -> 75
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

# question_id -> 76
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

# question_id -> 77
Question.create(
  issue_id: 3,
  title: 'How much does the TSA cost per year, per capita?',
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

# question_id -> 78
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

# question_id -> 79
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

# question_id -> 80
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

# question_id -> 81
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

# question_id -> 82
Question.create(
  issue_id: 9,
  title: 'Each year in the U.S., how many people die prematurely due to lack of healthcare?',
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

# question_id -> 83
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

# question_id -> 84
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

# question_id -> 85
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

# question_id -> 86
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

# question_id -> 87
Question.create(
  issue_id: 9,
  title: 'How much does the U.S. spend on healthcare relative to GDP?',
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

# question_id -> 88
Question.create(
  issue_id: 9,
  title: 'In terms of percent of GDP spent on healthcare, where does the U.S. rank globally?',
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

# question_id -> 89
Question.create(
  issue_id: 9,
  title: 'What is the average wait time for a doctors visit in the current U.S. system?',
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

# question_id -> 90
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

# question_id -> 91
Question.create(
  issue_id: 9,
  title: 'Where does the U.S. rank for globally for the lowest infant mortality rate?',
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

# question_id -> 92
Question.create(
  issue_id: 9,
  title: 'Where does the U.S. rank for globally for life expectancy?',
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

# question_id -> 93
Question.create(
  issue_id: 9, 
  title: 'Medical bills cause what percent of U.S. bankruptcies?',
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

# question_id -> 94
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

# question_id -> 95
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

# question_id -> 96
Question.create(
  issue_id: 9,
  title: 'How much of every dollar spent on U.S. health care is considered \'waste\'?',
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

# question_id -> 97
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

# question_id -> 98
Question.create(
  issue_id: 9,
  title: 'In terms of spending the most on pharmaceutical drugs, where does the U.S. rank?',
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

# question_id -> 99
Question.create(
  issue_id: 9,
  title: 'In terms of physicians per capita, where does the U.S. rank?',
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

# question_id -> 100
Question.create(
  issue_id: 9,
  title: 'What percent of U.S. citizens were medically uninsured in 2010?',
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

# question_id -> 101
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

# question_id -> 102
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

# question_id -> 103
Question.create(
  issue_id: 13,
  title: 'What percent of drone causalities are considered high-level targets?',
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

# question_id -> 104
Question.create(
  issue_id: 13,
  title: 'How many drone strikes occurred in Pakistan in 2012?',
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

# question_id -> 105
Question.create(
  issue_id: 13,
  title: 'What percent of the Americans support domestic drone use?',
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

# question_id -> 106
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

# question_id -> 107
Question.create(
  issue_id: 13,
  title: 'How many Pakistani civilians have been killed by U.S. drones?',
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
  description: "The United States is ranked very low in worldwide education standards. Finland is continuously ranked among the highest. Should the U.S. adopt an education system similar to Finland\'s?",
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

# Fracturing issue_id -> 11
Issue.create(
  title: 'Hydraulic fracturing',
  description: "Hydraulic Fracturing is used to release petroleum, natural gas, or other fossil fuels for extraction by way of injecting water, sand, and chemicals deep into the earth\'s surface.",
  image: 'fracturing'
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
  description: 'The rising cost of oil and fears about U.S. dependence on foreign oil have lead to desires for increased drilling off of U.S. coastlines. Opponents fear offshore drilling will have minimal economic benefit and substantial harmful effects on the environment.',
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

# question_id -> 108
Question.create(
  issue_id: 1,
  title: "A 2010 Rand Corporation report estimated that __ to __ percent of marijuana sold within the U.S. originates in Mexico",
  is_slider: false
)
Source.create(
  issue_id: 1,
  question_id: 108,
  url: "http://www.rand.org/content/dam/rand/pubs/occasional_papers/2010/RAND_OP325.pdf"
)

Answer.create(
  issue_id: 1,
  question_id: 108,
  title: '40 to 60',
  is_correct: true
)

Answer.create(
  issue_id: 1,
  question_id: 108,
  title: '10 to 20',
  is_correct: false
)

Answer.create(
  issue_id: 1,
  question_id: 108,
  title: '80 to 90',
  is_correct: false
)

Answer.create(
  issue_id: 1,
  question_id: 108,
  title: '1 to 2'
)

# question_id -> 109
Question.create(
  issue_id: 1, 
  title: "The U.S. State Department found that U.S. drug users send between $__ and $__  annually to Mexican drug cartels.",
  is_slider: false
)

Source.create(
  issue_id: 1,
  question_id: 109,
  url: "http://www.cfr.org/mexico/mexicos-drug-war/p13689",
)

Answer.create(
  issue_id: 1,
  question_id: 109,
  title: "$19 billion  and $29 billion",
  is_correct: true
)

Answer.create(
  issue_id: 1,
  question_id: 109,
  title: "$1 thousand and $2 thousand", 
  is_correct: false
)

Answer.create(
  issue_id: 1,
  question_id: 109,
  title: "$1 trillion and $2 trillion",
  is_correct: false
)

Answer.create(
  issue_id: 1,
  question_id: 109,
  title: "$500 and $700",
  is_correct: false
)

# question_id -> 110
Question.create(
  issue_id: 1,
  title: "Officials estimate that the drug trade makes up _ to _ percent of Mexico's $1.5 trillion annual GDP, totaling as much as $30 billion",
  is_slider: false
)
Source.create(
  issue_id: 1,
  question_id: 110,
  url: "http://www.cfr.org/mexico/mexicos-drug-war/p13689",
)

Answer.create(
  issue_id: 1,
  question_id: 110,
  title: "3% to 4%", 
  is_correct: true
)

Answer.create(
  issue_id: 1,
  question_id: 110,
  title: "80% to 85%",
  is_correct: false
)

Answer.create(
  issue_id: 1,
  question_id: 110,
  title: "20% to 24%",
  is_correct: false
)
  
Answer.create(
  issue_id: 1,
  question_id: 110,
  title: "51% to 53%",
  is_correct: false
)
 
# question_id -> 111 
Question.create(
  issue_id: 1,
  title: "A fatal accident is __ times more likely to occur to a driver under the influence alcohol than of marijuana",
  is_slider: false
)
  
Source.create(
  issue_id: 1,
  question_id: 111,
  url: "http://www.slate.com/articles/health_and_science/explainer/2011/11/does_marijuana_make_you_a_more_dangerous_driver_than_alcohol_.htm",
)

Answer.create(
  issue_id: 1,
  question_id: 111,
  title: "10",
  is_correct: true
)
  
Answer.create(
  issue_id: 1,
  question_id: 111,
  title: "2",
  is_correct: false
)

Answer.create(
  issue_id: 1,
  question_id: 111,
  title: "50",
  is_correct: false
)

Answer.create(
  issue_id: 1,
  question_id: 111,
  title: "100",
  is_correct: false
)

# question_id -> 112
Question.create(
  issue_id: 1,
  title: "Which states have legalized marijuana for recreational use?",
  is_slider: false
)
  
Source.create(
  issue_id: 1,
  question_id: 112,
  url:"http://www.huffingtonpost.com/2012/11/06/amendment-64-passes-in-co_n_2079899.html",
)

Answer.create(
  issue_id: 1,
  question_id: 112,
  title: "Colorado and Washington",
  is_correct: true
)
  
Answer.create(
  issue_id: 1,
  question_id: 112,
  title: "Colorado and California",
  is_correct: false
)
  
Answer.create(
  issue_id: 1,
  question_id: 112,
  title: "Washington and Vermont",
  is_correct: false
)
  
Answer.create(
  issue_id: 1,
  question_id: 112,
  title: "Vermont and California",
  is_correct: false
)

# question_id -> 113
Question.create(
  issue_id: 1,
  title: "What percent of high school students have tried marijuana?",
  is_slider: false
)
  
Source.create(
  issue_id: 1,
  question_id: 113,
  url: "http://well.blogs.nytimes.com/2011/03/10/marijuana-use-in-high-school/",
)

Answer.create(
  issue_id: 1,
  question_id: 113,
  title: "40%",
  is_correct: true
)
  
Answer.create(
  issue_id: 1,
  question_id: 113,
  title: "12%",
  is_correct: false
)
  
Answer.create(
  issue_id: 1,
  question_id: 113,
  title: "83%",
  is_correct: false
)
  
Answer.create(
  issue_id: 1,
  question_id: 113,
  title: "20%",
  is_correct: false
)

# question_id -> 114
Question.create(
  issue_id: 1,
  title: "Which U.S. presidents have admitted to have tried marijuana at least once?",
  is_slider: false
)

Source.create(
  issue_id: 1,
  question_id: 114,
  url: "http://www.csmonitor.com/USA/DC-Decoder/2012/0526/President-Obama-smoked-pot-in-high-school.-Why-is-he-against-legalizing-marijuana",
)

Source.create(
  issue_id: 1,
  question_id: 114,
  url: "http://www.cato-at-liberty.org/obamas-new-drug-strategy/",
)

Answer.create(
  issue_id: 1,
  question_id: 114,
  title: "Barack Obama, George W. Bush, and Bill Clinton",
  is_correct: true
)
  
Answer.create(
  issue_id: 1,
  question_id: 114,
  title: "Bill Clinton and Barack Obama",
  is_correct: false
)
  
Answer.create(
  issue_id: 1,
  question_id: 114,
  title: "George W. Bush and Barack Obama",
  is_correct: false
)
  
Answer.create(  
  issue_id: 1,
  question_id: 114,
  title: "Barack Obama",
  is_correct: false
)

# question_id -> 115
Question.create(
  issue_id: 12,
  title: 'Why do producers want to use trans fats ?',
  is_slider: false
)

Source.create(
  issue_id: 12,
  question_id: 115,
  url: "http://www.mayoclinic.com/health/trans-fat/CL00032",
)
  
Answer.create(
  issue_id: 12,
  question_id: 115,
  title: "To increase shelf life",
  is_correct: true
)
  
Answer.create(
  issue_id: 12,
  question_id: 115,
  title: "To make food healthier",
  is_correct: false
)

Answer.create(
  issue_id: 12,
  question_id: 115,
  title: "To increase protein",
  is_correct: false
)

Answer.create(
  issue_id: 12,
  question_id: 115,
  title: "For coloring",
  is_correct: false
)


# question_id -> 116
Question.create(
  issue_id: 1,
  title: "Adolescents can lose up to __ IQ points because of the chemicals in marijuana affecting cerebral development.",
  is_slider: false
)

Source.create(
  issue_id: 1,
  question_id: 116,
  url: "http://healthland.time.com/2012/08/28/does-weekly-marijuana-use-by-teens-really-cause-a-drop-in-iq/"
)
  
Answer.create(
  issue_id: 1,
  question_id: 116,
  title: "8",
  is_correct: true
)
  
Answer.create(
  issue_id: 1,
  question_id: 116,
  title: "51",
  is_correct: false
)
  
Answer.create(
  issue_id: 1,
  question_id: 116,
  title: "1",
  is_correct: false
)

Answer.create(
  issue_id: 1,
  question_id: 116,
  title: "17",
  is_correct: false
)

# question_id -> 117
Question.create(
  issue_id: 12, 
  title: "What percent of your total daily calories should come from trans fats?",
  is_slider: false
)

Source.create(
  issue_id: 12,
  question_id: 117,
  url: "http://www.heart.org/HEARTORG/GettingHealthy/FatsAndOils/Fats101/Trans-Fats"
)
  
Answer.create(
  issue_id: 12,
  question_id: 117,
  title: "Less than 1%",
  is_correct: true
)

Answer.create(
  issue_id: 12,
  question_id: 117,
  title: "10%",
  is_correct: false
)

Answer.create(
  issue_id: 12,
  question_id: 117,
  title: "8%",
  is_correct: false
)
 
Answer.create(
  issue_id: 1,
  question_id: 117,
  title: "25%",
  is_correct: false
)

# question_id -> 118
Question.create(
  issue_id: 3,
  title: "TSA employees are suing the TSA for issues related to ___ due to exposure to the scanners",
  is_slider: false
)

Source.create(
  issue_id: 3,
  question_id: 118,
  url: " http://intransit.blogs.nytimes.com/2011/07/12/airport-body-scanners-and-health/?src=twr"
)

Answer.create(
  issue_id: 3,
  question_id: 118,
  title: "Cancer",
  is_correct: true
)
  
Answer.create(
  issue_id: 1,
  question_id: 118,
  title: "Depression",
  is_correct: false
)

Answer.create(
  issue_id: 3,
  question_id: 118,
  title: "Heart failure",
  is_correct: false
)

Answer.create(
  issue_id: 3,
  question_id: 118,
  title: "Broken bones",
  is_correct: false
)

# question_id -> 119
Question.create(
  issue_id: 1,
  title: "According study by the Independent Scientific Committee on Drugs, alcohol is __ times more harmful than marijuana.",
  is_slider: false
)
  
Source.create(
  issue_id: 1,
  question_id: 119,
  url: "http://www.bbc.co.uk/news/uk-11660210",
)

Answer.create(
  issue_id: 1,
  question_id: 119,
  title: "3",
  is_correct: true
)
  
Answer.create(
  issue_id: 1,
  question_id: 119,
  title: "10",
  is_correct: false
  )
  
Answer.create(
  issue_id: 1,
  question_id: 119,
  title: "50",
  is_correct: false
)

# question_id -> 120
Question.create(
  issue_id: 1,
  title: 'States that have legalized medical marijuana have seen traffic fatalities __',
  is_slider: false
)

Source.create(
  issue_id: 1,
  question_id: 120,
  url: "http://a0.twimg.com/profile_images/1324543229/logo.jpg"
)
  
Answer.create(
  issue_id: 1,
  question_id: 120,
  title: "Increase by 9%",
  is_correct: false
)
  
Answer.create(
  issue_id: 1,
  question_id: 120,
  title: "Decrease by 9%",
  is_correct: true
)
  
Answer.create(
  issue_id: 1,
  question_id: 120,
  title: "Stay the same",
  is_correct: false
)

# question_id -> 121
Question.create(
  issue_id: 1,
  title: "How much money could be saved each year by states and the federal government if marijuana were legalized?",
  is_slider: false
  )

Source.create(
  issue_id: 1,
  question_id: 121,
  url: "http://web.archive.org/web/20110718082820/http://www.prohibitioncosts.org/execsummary.html",
)

Source.create(
  issue_id: 1,
  question_id: 121,
  url: "http://economics.about.com/od/incometaxestaxcuts/a/legalize_pot.htm",
)

Answer.create(
  issue_id: 1,
  question_id: 121,
  title: "$7.7 billion",
  is_correct: true
)
  
Answer.create(
  issue_id: 1,
  question_id: 121,
  title: "$10 thousand",
  is_correct: false
)
  
Answer.create(
  issue_id: 1,
  question_id: 121,
  title: "$100 billion",
  is_correct: false
)
  
Answer.create(
  issue_id: 1,
  question_id: 121,
  title: "$1 million",
  is_correct: false
)

# question_id -> 122
Question.create(
  issue_id: 1,
  title: "If marijuana were taxed similarly to alcohol, how much in tax revenue could be made each year?",
  is_slider: false
  )

Source.create(
  issue_id: 1,
  question_id: 122,
  url: "http://economics.about.com/od/incometaxestaxcuts/a/legalize_pot.htm"
)  

Source.create(
  issue_id: 1,
  question_id: 122,
  url: "http://web.archive.org/web/20110718082820/http://www.prohibitioncosts.org/execsummary.html"
)

Answer.create(
  issue_id: 1,
  question_id: 122,
  title: "$6.2 billion",
  is_correct: true
)
  
Answer.create(
  issue_id: 1,
  question_id: 122,
  title: "$1 million",
  is_correct: false
)
  
Answer.create(
  issue_id: 1,
  question_id: 122,
  title: "$2 thousand",
  is_correct: false
)
  
Answer.create(
  issue_id: 1,
  question_id: 122,
  title: "$100 billion",
  is_correct: false
)

# question_id -> 123
Question.create(
  issue_id: 1,
  title: "For marijuana possession, African Americans are arrested at ___ times the rate of whites",
  is_slider: false
)
  
Source.create(
  issue_id: 1,
  question_id: 123,
  url: "http://blog.norml.org/2010/10/22/california-study-say-blacks-disproportionately-arrested-for-minor-marijuana-crimes/"
)

Answer.create(
  issue_id: 1,
  question_id: 123,
  title: "4-12",
  is_correct: true
)
  
Answer.create(
  issue_id: 1,
  question_id: 123,
  title: "100",
  is_correct: false
)

Answer.create(
  issue_id: 1,
  question_id: 123,
  title: "20-30",
  is_correct: false
)

Answer.create(
  issue_id: 1,
  question_id: 123,
  title: "50-53",
  is_correct: false
)

# question_id -> 124
Question.create(
  issue_id: 18,
  title: "What percent of abortions are obtained by women who already have at least one child?",
  is_slider: false
)

Source.create(
  issue_id: 18,
  question_id: 124,
  url: "http://www.guttmacher.org/pubs/fb_induced_abortion.html"
)
  
Answer.create(
  issue_id: 18,
  question_id: 124,
  title: "61%",
  is_correct: true
)
  
Answer.create(
  issue_id: 18,
  question_id: 124,
  title: "10%",
  is_correct: false
)
  
Answer.create(
  issue_id: 18,
  question_id: 124,
  title: "80%",
  is_correct: false
)
  
Answer.create(
  issue_id: 18,
  question_id: 124,
  title: "25%",
  is_correct: false
)

# question_id -> 125
Question.create(
  issue_id: 18,
  title: "What percent of pregnancies among American women are unintended?",
  is_slider: false
)

Source.create(
  issue_id: 18,
  question_id: 125,
  url: "http://www.guttmacher.org/pubs/fb_induced_abortion.html",
)
  
Answer.create(
  issue_id: 18,
  question_id: 125,
  title: "50%",
  is_correct: true
)
  
Answer.create(
  issue_id: 18,
  question_id: 125,
  title: "10%",
  is_correct: false
)
  
Answer.create(
  issue_id: 18,
  question_id: 125,
  title: "25%",
  is_correct: false
)
  
Answer.create(
  issue_id: 18,
  question_id: 125,
  title: "75%",
  is_correct: false
)

# question_id -> 126
Question.create(
  issue_id: 18,
  title: "Each year, what percent of women aged 15-44 have an abortion?",
  is_slider: false
)

Source.create(
  issue_id: 18,
  question_id: 126,
  url: "http://www.guttmacher.org/pubs/fb_induced_abortion.html"
)

Answer.create(
  issue_id: 18,
  question_id: 126,
  title: "2%",
  is_correct: true
)
  
Answer.create(
  issue_id: 18,
  question_id: 126,
  title: "50%",
  is_correct: false
)
  
Answer.create(
  issue_id: 18,
  question_id: 126,
  title: "15%",
  is_correct: false
)
  
Answer.create(
  issue_id: 18,
  question_id: 126,
  title: "25%",
  is_correct: false
)
  
# question_id -> 127
Question.create(
  issue_id: 18,
  title: "18 years after the legalization of abortions crime rates in the U.S. __",
  is_slider: false
)

Source.create(
  issue_id: 18,
  question_id: 127,
  url: "http://en.wikipedia.org/wiki/Legalized_abortion_and_crime_effect"
)
  
Answer.create(
  issue_id: 18,
  question_id: 127,
  title: "Sharply decreased",
  is_correct: true
)
  
Answer.create(
  issue_id: 18,
  question_id: 127,
  title: "Sharply increased",
  is_correct: false
)
  
Answer.create(
  issue_id: 18,
  question_id: 127,
  title: "Stayed the same",
  is_correct: false
)

# question_id -> 128
Question.create(
  issue_id: 18,
  title: "What percent of women receiving abortions fall below the federal poverty line?",
  is_slider: false
)

Source.create(
  issue_id: 18,
  question_id: 128,
  url: "http://www.guttmacher.org/pubs/fb_induced_abortion.html#fn1"
)
  
Answer.create(
  issue_id: 18,
  question_id: 128,
  title: "42%",
  is_correct: true
 )

Answer.create(
  issue_id: 18,
  question_id: 128,
  title: "10%",
  is_correct: false
)
  
Answer.create(
  issue_id: 18,
  question_id: 128,
  title: "80%",
  is_correct: false
)
  
Answer.create(
  issue_id: 18,
  question_id: 128,
  title: "25%",
  is_correct: false
)

# question_id -> 129
Question.create(
  issue_id: 18,
  title: "What percent of women obtaining abortions receive the abortion within the first 13 weeks of pregnancy?",
  is_slider: false
)

Source.create(
  issue_id: 18,
  question_id: 129,
  url: "http://www.prochoice.org/about_abortion/facts/safety_of_abortion.html"
)
  
Answer.create(
  issue_id: 18,
  question_id: 129,
  title: "88%",
  is_correct: true
)
  
Answer.create(
  issue_id: 18,
  question_id: 129,
  title: "10%",
  is_correct: false
)

Answer.create(
  issue_id: 18,
  question_id: 129,
  title: "25%",
  is_correct: false
)
  
Answer.create(
  issue_id: 18,
  question_id: 129,
  title: "50%",
  is_correct: false
)

# question_id -> 130
Question.create(
  issue_id: 17,
  title: 'Who can SuperPACs receive money from?',
  is_slider: false
)

Source.create(
  issue_id: 17,
  question_id: 130,
  url: 'http://elections.nytimes.com/2012/campaign-finance'
)
  
Answer.create(
  issue_id: 17,
  question_id: 130,
  title: 'Corporations',
  is_correct: false
)

Answer.create(
  issue_id: 17,
  question_id: 130,
  title: 'Unions and individuals',
  is_correct: false
)

Answer.create(
  issue_id: 17,
  question_id: 130,
  title: 'Individuals',
  is_correct: false
)

Answer.create(
  issue_id: 17,
  question_id: 130,
  title: 'Corporations, individuals, and unions',
  is_correct: true
)

# question_id -> 131
Question.create(
  issue_id: 6,
  title: 'Some pollution is actually cooling the Earth',
  is_slider: false
)

Source.create(
  issue_id: 6,
  question_id: 131,
  url: 'http://www.edf.org/climate/human-activity-causes-warming',
)

Answer.create(
  issue_id: 6,
  question_id: 131,
  title: 'True',
  is_correct: true
)

Answer.create(
  issue_id: 6,
  question_id: 131,
  title: 'False',
  is_correct: false
)

# question_id -> 132
Question.create(
  issue_id: 6,
  title: 'What factors can affect the Earth\'s temperature?',
  is_slider: false
)

Source.create(
  issue_id: 6,
  question_id: 132,
  url: 'http://www.edf.org/climate/human-activity-causes-warming'
)

Answer.create(
  issue_id: 6,
  question_id: 132,
  title: 'The sun',
  is_correct: false
)

Answer.create(
  issue_id: 6,
  question_id: 132,
  title: 'The sun and greenhouse gases',
  is_correct: false
)

Answer.create(
  issue_id: 6,
  question_id: 132,
  title: "The earth\'s reflectivity",
  is_correct: false
)

Answer.create(
  issue_id: 6,
  question_id: 132,
  title: 'The sun, greenhouse gases, and the earth\'s reflectivity',
  is_correct: true
) 

# question_id -> 133
Question.create(
  issue_id: 6,
  title: 'Prior to the Industrial Revolution large changes in the climate were normal',
  is_slider: false
)

Source.create(
  issue_id: 6,
  question_id: 133,
  url: 'http://www.epa.gov/climatechange/science/causes.html'
)

Answer.create(
  issue_id: 6,
  question_id: 133,
  title: "True",
  is_correct: true
)

Answer.create(
  issue_id: 6,
  question_id: 133,
  title: 'False',
  is_correct: false
)

# question_id -> 134
Question.create(
  issue_id: 6,
  title: 'Will climate change increase or decrease crop yields?',
  is_slider: false
)

Source.create(
  issue_id: 6,
  question_id: 134,
  url: 'http://www.epa.gov/climatechange/impacts-adaptation/international.html#basics'
)

Answer.create(
  issue_id: 6,
  question_id: 134,
  title: 'Increase everywhere',
  is_correct: false
)

Answer.create(
  issue_id: 6,
  question_id: 134,
  title: 'Decrease everywhere',
  is_correct: false
)

Answer.create(
  issue_id: 6,
  question_id: 134,
  title: 'Increase at low latitudes, decrease at high latitudes',
  is_correct: false
)

Answer.create(
  issue_id: 6,
  question_id: 134,
  title: 'Increase at high latitudes, decrease at low latitudes',
  is_correct: true
)

# question_id -> 135
Question.create(
  issue_id: 6,
  title: 'Climate change will effect all regions similarly',
  is_slider: false
)

Source.create(
  issue_id: 6,
  question_id: 135,
  url: 'http://www.epa.gov/climatechange/impacts-adaptation/international.html#basics'
)
  
Answer.create(
  issue_id: 6,
  question_id: 135,
  title: 'True',
  is_correct: false
)

Answer.create(
  issue_id: 6,
  question_id: 135,
  title: 'False',
  is_correct: true
)

# question_id -> 136
Question.create(
  issue_id: 7,
  title: 'The majority of unemployed Americans have attended ___',
  is_slider: false
)

Source.create(
  issue_id: 7,
  question_id: 136,
  url: 'http://www.businessinsider.com/these-two-charts-prove-a-college-education-just-isnt-worth-the-money-anymore-2012-6',
)

Answer.create(
  issue_id: 7,
  question_id: 136,
  title: 'Some college',
  is_correct: true
)

Answer.create(
  issue_id: 7,
  question_id: 136,
  title: 'Graduate school',
  is_correct: false
)

Answer.create(
  issue_id: 7,
  question_id: 136,
  title: 'No college',
  is_correct: false
)

Answer.create(
  issue_id: 7,
  question_id: 136,
  title: 'Vocational school',
  is_correct: false
)

# question_id -> 137
Question.create(
  issue_id: 7,
  title: 'Level of education is generally correlated with?',
  is_slider: false
)

Source.create(
  issue_id: 7,
  question_id: 137,
  url: 'http://usgovinfo.about.com/od/moneymatters/a/edandearnings.htm'
)

Answer.create(
  issue_id: 7,
  question_id: 137,
  title: 'Higher income levels',
  is_correct: true
)

Answer.create(
  issue_id: 7,
  question_id: 137,
  title: 'Lower income levels',
  is_correct: false
)

Answer.create(
  issue_id: 7,
  question_id: 137,
  title: 'No change in income',
  is_correct: false
)

# question_id -> 138
Question.create(
  issue_id: 7,
  title: 'Jobs requiring a college degree are being created __ than jobs that do not require a degree',
  is_slider: false
)

Source.create(
  issue_id: 7,
  question_id: 138,
  url: 'http://wjbc.com/wjbc-forum-the-more-education-the-better/'
)

Answer.create(
  issue_id: 7,
  question_id: 138,
  title: 'Faster',
  is_correct: true
)

Answer.create(
  issue_id: 7,
  question_id: 138,
  title: 'Slower',
  is_correct: false
)

Answer.create(
  issue_id: 7,
  question_id: 138,
  title: 'At the same rate',
  is_correct: false
)

# question_id -> 139
Question.create(
  issue_id: 7,
  title: 'How often are student loans forgiven due to bankruptcy?',
  is_slider: false
)

Source.create(
  issue_id: 7,
  question_id: 139,
  url: 'http://en.wikipedia.org/wiki/Student_loans_in_the_United_States#Discharge_of_student_loans'
)

Answer.create(
  issue_id: 7,
  question_id: 139,
  title: 'Frequently',
  is_correct: false
)

Answer.create(
  issue_id: 7,
  question_id: 139,
  title: 'Always',
  is_correct: false
)

Answer.create(
  issue_id: 7,
  question_id: 139,
  title: 'Sometimes',
  is_correct: false
)

Answer.create(
  issue_id: 7,
  question_id: 139,
  title: 'Almost never',
  is_correct: true
)

# question_id -> 140
Question.create(
  issue_id: 4,
  title: 'Relative to population, which states are given disportionate voting power under the electoral system?',
  is_slider: false
)

Source.create(
  issue_id: 4,
  question_id: 140,
  url: 'http://www.fairvote.org/problems-with-the-electoral-college/#.UEd02KSe6k0'
)

Answer.create(
  issue_id: 4,
  question_id: 140,
  title: 'States with smaller populations',
  is_correct: true
)

Answer.create(
  issue_id: 4,
  question_id: 140,
  title: 'States with larger populations',
  is_correct: false
)

Answer.create(
  issue_id: 4,
  question_id: 140,
  title: 'None',
  is_correct: false
)

Answer.create(
  issue_id: 4,
  question_id: 140,
  title: 'States with large cities',
  is_correct: false
)

# question_id -> 141
Question.create(
  issue_id: 4,
  title: 'The U.S. has a history of switching from indirect to direct elections',
  is_slider: false
)
Source.create(
  issue_id: 4,
  question_id: 141,
  url: 'http://en.wikipedia.org/wiki/Seventeenth_Amendment_to_the_United_States_Constitution'
)

Answer.create(
  issue_id: 4,
  question_id: 141,
  title: 'True',
  is_correct: true
)

Answer.create(
  issue_id: 4,
  question_id: 141,
  title: 'False',
  is_correct: false
)

# question_id -> 142
Question.create(
  issue_id: 4,
  title: 'What process would need to be followed to switch from the electoral college to a popular vote?',
  is_slider: false
)

Source.create(
  issue_id: 4,
  question_id: 142,
  url: 'http://usgovinfo.about.com/od/usconstitution/a/conshttp://archive.fairvote.org/?page=2052tamend.htm'
)

Answer.create(
  issue_id: 4,
  question_id: 142,
  title: 'A constitutional amendment',
  is_correct: true
)

Answer.create(
  issue_id: 4,
  question_id: 142,
  title: 'A decision by the Supreme Court',
  is_correct: false
)
  
Answer.create(
  issue_id: 4,
  question_id: 142,
  title: 'A popular vote',
  is_correct: false
)

Answer.create(
  issue_id: 4,
  question_id: 142,
  title: 'An executive decision by the President',
  is_correct: false
)

# question_id -> 143
Question.create(
  issue_id: 4,
  title: 'What effect does the electoral college have on voter turnout in non-swing states?',
  is_slider: false
)

Source.create(
  issue_id: 4,
  question_id: 143,
  url: 'http://www.statemaster.com/graph/gov_200_tot_vot_as_per-2004-election-total-votes-percentage'
)

Answer.create(
  issue_id: 4,
  question_id: 143,
  title: 'Deters voter turnout',
  is_correct: false
)

Answer.create(
  issue_id: 4,
  question_id: 143,
  title: 'Increases voter turnout',
  is_correct: false
)

Answer.create(
  issue_id: 4,
  question_id: 143,
  title: 'Has no effect',
  is_correct: true
)

# question_id -> 144
Question.create(
  issue_id: 4,
  title: 'Due to the electoral college, a vote from a Wyoming resident is worth ___ a vote from a Texas resident',
  is_slider: false
)

Source.create(
  issue_id: 4,
  question_id: 144,
  url: 'http://www.fairvote.org/problems-with-the-electoral-college/#.UEd02KSe6k0'
)

Answer.create(
  issue_id: 4,
  question_id: 144,
  title: 'More than',
  is_correct: true
)

Answer.create(
  issue_id: 4,
  question_id: 144,
  title: 'The same as',
  is_correct: false
)

Answer.create(
  issue_id: 4,
  question_id: 144,
  title: 'Less than',
  is_correct: false
)

Answer.create(
  issue_id: 4,
  question_id: 144,
  title: 'Both are worthless',
  is_correct: false
)

# question_id -> 145
Question.create(
  issue_id: 4,
  title: 'Who is regularly disadvantaged by the electoral college?',
  is_slider: false
)

Source.create(
  issue_id: 4,
  question_id: 145,
  url: 'http://en.wikipedia.org/wiki/United_States_presidential_election,_1968'
)
Source.create(
  issue_id: 4,
  question_id: 145,
  url: 'http://en.wikipedia.org/wiki/List_of_third_party_performances_in_United_States_elections#1968.2A'
)

Source.create(
  issue_id: 4,
  question_id: 145,
  url: 'http://www.thedailybeast.com/articles/2011/12/03/drop-the-fantasy-of-a-third-party-candidate-winning-in-2012.html'
)

Answer.create(
  issue_id: 4,
  question_id: 145,
  title: '3rd party candidates',
  is_correct: true
)

Answer.create(
  issue_id: 4,
  question_id: 145,
  title: 'Incumbents',
  is_correct: false
)

Answer.create(
  issue_id: 4,
  question_id: 145,
  title: 'Primary candidates',
  is_correct: false
)

Answer.create(
  issue_id: 4,
  question_id: 145,
  title: 'Challengers',
  is_correct: false
)

# question_id -> 146
Question.create(
  issue_id: 4,
  title: 'Which states receive less attention due to the electoral college?',
  is_slider: false
)

Source.create(
  issue_id: 4,
  question_id: 146,
  url: 'http://en.wikipedia.org/wiki/Swing_state'
)

Answer.create(
  issue_id: 4,
  question_id: 146,
  title: 'Non-swing states',
  is_correct: true
)

Answer.create(
  issue_id: 4,
  question_id: 146,
  title: 'Swing states',
  is_correct: false
)

Answer.create(
  issue_id: 4,
  question_id: 146,
  title: 'Highly populated states',
  is_correct: false
)

Answer.create(
  issue_id: 4,
  question_id: 146,
  title: 'None',
  is_correct: false
)

# question_id -> 147
Question.create(
  issue_id: 8,
  title: 'In the U.S., it takes more energy to create a gallon of ethanol than is contained within the gallon of ethanol.',
  is_slider: false
)

Source.create(
  issue_id: 8,
  question_id: 147,
  url: 'http://www.slate.com/articles/news_and_politics/hey_wait_a_minute/2005/07/corn_dog.html'
)

Answer.create(
  issue_id: 8,
  question_id: 147,
  title: 'True',
  is_correct: true
)

Answer.create(
  issue_id: 8,
  question_id: 147,
  title: 'False',
  is_correct: false
)

# question_id -> 148
Question.create(
  issue_id: 3,
  title: 'A blogger successfully snuck ____ through a TSA full-body scanner?',
  is_slider: false
)

Source.create(
  issue_id: 3,
  question_id: 148,
  url: 'http://www.bgr.com/2012/03/08/blogger-shows-the-world-how-to-sneak-anything-past-tsas-nude-body-scanners-video/'
)

Answer.create(
  issue_id: 3,
  question_id: 148,
  title: 'Metal objects',
  is_correct: true
)

Answer.create(
  issue_id: 10,
  question_id: 148,
  title: 'Guns',
  is_correct: false
)

Answer.create(
  issue_id: 10,
  question_id: 148,
  title: 'A bomb',
  is_correct: false
)

Answer.create(
  issue_id: 10,
  question_id: 148,
  title: 'Knives',
  is_correct: false
)


# question_id -> 149
Question.create(
  issue_id: 10,
  title: 'Federal employee wages and benefits are ___ than in the private sector?',
  is_slider: false
)

Source.create(
  issue_id: 10,
  question_id: 149,
  url: 'http://www.cbo.gov/publication/42921'
)

Answer.create(
  issue_id: 10,
  question_id: 149,
  title: '2% higher',
  is_correct: true
)

Answer.create(
  issue_id: 10,
  question_id: 149,
  title: '2% lower',
  is_correct: false
)

Answer.create(
  issue_id: 10,
  question_id: 149,
  title: '20% higher',
  is_correct: false
)

Answer.create(
  issue_id: 10,
  question_id: 149,
  title: '20% lower',
  is_correct: false
)

# question_id -> 150
Question.create(
  issue_id: 10,
  title: 'Federal employees receive more health care choices than the average private sector employee',
  is_slider: false
)

Source.create(
  issue_id: 10,
  question_id: 150,
  url: 'http://www.opm.gov/INSURE/HEALTH/INDEX.ASP'
)

Answer.create(
  issue_id: 10,
  question_id: 150,
  title: 'True',
  is_correct: true
)

Answer.create(
  issue_id: 10,
  question_id: 150,
  title: 'False',
  is_correct: false
)

# question_id -> 151
Question.create(
  issue_id: 10,
  title: 'The U.S. has enough money to cover all of it\'s federal employee wages and benefits',
  is_slider: false
)

Source.create(
  issue_id: 10,
  question_id: 151,
  url: 'http://www.huffingtonpost.com/2012/07/02/pensions-us-munis-unfunded-lose-benefits_n_1644772.html'
)

Answer.create(
  issue_id: 10,
  question_id: 151,
  title: 'True',
  is_correct: false
)

Answer.create(
  issue_id: 10,
  question_id: 151,
  title: 'False',
  is_correct: true
)

# question_id -> 152
Question.create(
  issue_id: 10,
  title: 'On average, people with a bachelors degree in the private sector earn ___ those is the public sector',
  is_slider: false
)

Source.create(
  issue_id: 10,
  question_id: 152,
  url: 'http://www.cbo.gov/publication/42921'
)

Answer.create(
  issue_id: 10,
  question_id: 152,
  title: 'More than',
  is_correct: false
)

Answer.create(
  issue_id: 10,
  question_id: 152,
  title: 'Less than',
  is_correct: false
)

Answer.create(
  issue_id: 10,
  question_id: 152,
  title: 'The same as',
  is_correct: true
)

# question_id -> 153
Question.create(
  issue_id: 10,
  title: 'How much do employees with a doctorate or professional degree earn in the public sector compared to the private sector?',
  is_slider: false
)

Source.create(
  issue_id: 10,
  question_id: 153,
  url: 'http://www.cbo.gov/publication/42921'
)

Answer.create(
  issue_id: 10,
  question_id: 153,
  title: '23% less',
  is_correct: true
)

Answer.create(
  issue_id: 10,
  question_id: 153,
  title: '23% more',
  is_correct: false
)

Answer.create(
  issue_id: 10,
  question_id: 153,
  title: '58% less',
  is_correct: false
)

Answer.create(
  issue_id: 10,
  question_id: 153,
  title: '58% more',
  is_correct: false
)

# question_id -> 154
Question.create(
  issue_id: 14,
  title: 'How many developed countries have a minimum wage higher than the U.S.?',
  is_slider: false
)

Source.create(
  issue_id: 14,
  question_id: 154,
  url: 'http://en.wikipedia.org/wiki/List_of_minimum_wages_by_country'
)

Answer.create(
  issue_id: 14,
  question_id: 154,
  title: '10',
  is_correct: true
)

Answer.create(
  issue_id: 14,
  question_id: 154,
  title: '0',
  is_correct: false
)

Answer.create(
  issue_id: 14,
  question_id: 154,
  title: '100',
  is_correct: false
)

Answer.create(
  issue_id: 14,
  question_id: 154,
  title: '52',
  is_correct: false
)

# question_id -> 155
Question.create(
  issue_id: 14,
  title: 'How many developed countries have a lower minimum wage than the U.S.?',
  is_slider: false
)

Source.create(
  issue_id: 14,
  question_id: 155,
  url: 'http://en.wikipedia.org/wiki/List_of_minimum_wages_by_country'
)

Answer.create(
  issue_id: 14,
  question_id: 155,
  title: '21',
  is_correct: true
)

Answer.create(
  issue_id: 14,
  question_id: 155,
  title: '0',
  is_correct: false
)
  
Answer.create(
  issue_id: 14,
  question_id: 155,
  title: '58',
  is_correct: false
) 
  
Answer.create(
  issue_id: 14,
  question_id: 155,
  title: '102',
  is_correct: false
)
  
# question_id -> 156
Question.create(
  issue_id: 14,
  title: 'Adjusted for inflation, what was the highest minimum wage in U.S. history?',
  is_slider: false
)

Source.create(
  issue_id: 14,
  question_id: 156,
  url: 'http://oregonstate.edu/instruct/anth484/minwage.html'
)

Answer.create(
  issue_id: 14,
  question_id: 156,
  title: '$10.04/hr.',
  is_correct: true
)

Answer.create(
  issue_id: 14,
  question_id: 156,
  title: '$8.00/hr.',
  is_correct: false
)

Answer.create(
  issue_id: 14,
  question_id: 156,
  title: '$7.51/hr.',
  is_correct: false
)

Answer.create(
  issue_id: 14,
  question_id: 156,
  title: '$15.75/hr.',
  is_correct: false
)

# question_id -> 157
Question.create(
  issue_id: 14,
  title: 'What is the minimum wage for tipped employees?',
  is_slider: false
)

Source.create(
  issue_id: 14,
  question_id: 157,
  url: 'http://www.dol.gov/whd/state/tipped.htm'
)

Answer.create(
  issue_id: 14,
  question_id: 157,
  title: '$2.13/hr.',
  is_correct: true
)  

Answer.create(
  issue_id: 14,
  question_id: 157,
  title: '$8.13/hr.',
  is_correct: false
)  

Answer.create(
  issue_id: 14,
  question_id: 157,
  title: '$6.13/hr.',
  is_correct: false
)  

Answer.create(
  issue_id: 14,
  question_id: 157,
  title: '$10.13/hr.',
  is_correct: false
)  

# question_id -> 158
Question.create(
  issue_id: 14,
  title: 'How much do you make working 40hrs/week at the federal minimum wage?',
  is_slider: false
)

Source.create(
  issue_id: 14,
  question_id: 158,
  url: 'http://www.dol.gov/whd/minwage/america.htm'
)

Answer.create(
  issue_id: 14,
  question_id: 158,
  title: '$14,500/year',
  is_correct: true
)
Answer.create(
  issue_id: 14,
  question_id: 158,
  title: '$80,000/year',
  is_correct: false
)  
  
Answer.create(
  issue_id: 14,
  question_id: 158,
  title: '$50,500/year',
  is_correct: false
)
 
Answer.create(
  issue_id: 14,
  question_id: 158,
  title: '$30,000/year',
  is_correct: false
) 

# question_id -> 159
Question.create(
  issue_id: 14,
  title: 'What is the poverty line for one person in the U.S.?',
  is_slider: false
)

Source.create(
  issue_id: 14,
  question_id: 159,
  url: 'http://coverageforall.org/pdf/FHCE_FedPovertyLevel.pdf'
)

Answer.create(
  issue_id: 14,
  question_id: 159,
  title: '$11,170 per year',
  is_correct: true
) 
 
Answer.create(
  issue_id: 14,
  question_id: 159,
  title: '$5,170 per year',
  is_correct: false
) 

Answer.create(
  issue_id: 14,
  question_id: 159,
  title: '$38,000 per year',
  is_correct: false
) 

Answer.create(
  issue_id: 14,
  question_id: 159,
  title: '$50,500 per year',
  is_correct: false
) 

# question_id -> 160
Question.create(
  issue_id: 14,
  title: 'When was the federal minimum wage last raised?',
  is_slider: false
)

Source.create(
  issue_id: 14,
  question_id: 160,
  url: 'http://www.minimum-wage.org/minwage/answers/index.php?action=artikel&cat=1&id=6&artlang=en'
)

Answer.create(
  issue_id: 14,
  question_id: 160,
  title: '2013',
  is_correct: false
)  
  
Answer.create(
  issue_id: 14,
  question_id: 160,
  title: '1995',
  is_correct: false
)

Answer.create(
  issue_id: 14,
  question_id: 160,
  title: '2000',
  is_correct: false
)
 
Answer.create(
  issue_id: 14,
  question_id: 160,
  title: '2009',
  is_correct: true
) 

# question_id -> 161
Question.create(
  issue_id: 5,
  title: 'If the U.S. adopted Finland\'s education system all schools would be allocated the same amount of money',
  is_slider: false
)

Source.create(
  issue_id: 5,
  question_id: 161,
  url: 'http://www.washingtonpost.com/blogs/answer-sheet/post/what-the-us-cant-learn-from-finland-about-ed-reform/2012/04/16/gIQAGIvVMT_blog.html'
)

Answer.create(
  issue_id: 5,
  question_id: 161,
  title: 'True',
  is_correct: true
)

Answer.create(
  issue_id: 5,
  question_id: 161,
  title: 'False',
  is_correct: false
)

# question_id -> 162
Question.create(
  issue_id: 5,
  title: 'How much larger is the population size of the U.S. compared to Finland\'s?',
  is_slider: false
)

Source.create(
  issue_id: 5,
  question_id: 162,
  url: 'http://en.wikipedia.org/wiki/List_of_countries_by_population'
)

Answer.create(
  issue_id: 5,
  question_id: 162,
  title: '60 times larger',
  is_correct: true
) 

Answer.create(
  issue_id: 5,
  question_id: 162,
  title: 'It\'s the same',
  is_correct: false
) 

Answer.create(
  issue_id: 5,
  question_id: 162,
  title: '100 times larger',
  is_correct: false
)
  
Answer.create(
  issue_id: 5,
  question_id: 162,
  title: '60 times smaller',
  is_correct: true
)

# question_id -> 163
Question.create(
  issue_id: 11,
  title: 'The oil produced from hydraulic fracturing is different than oil produced from traditional methods',
  is_slider: false
)

Source.create(
  issue_id: 11,
  question_id: 163,
  url: 'http://en.wikipedia.org/wiki/Hydraulic_fracturing#Environmental_impact'
)

Answer.create(
  issue_id: 11,
  question_id: 163,
  title: 'True',
  is_correct: true
)  

Answer.create(
  issue_id: 11,
  question_id: 163,
  title: 'False',
  is_correct: false
)

# question_id -> 164
Question.create(
  issue_id: 11,
  title: 'Hydraulic fracturing can occur naturally',
  is_slider: false
)

Source.create(
  issue_id: 11,
  question_id: 164,
  url: 'http://en.wikipedia.org/wiki/Hydraulic_fracturing'
)

Answer.create(
  issue_id: 11,
  question_id: 164,
  title: 'True',
  is_correct: true
)

Answer.create(
  issue_id: 11,
  question_id: 164,
  title: 'False',
  is_correct: false
)

# question_id -> 165
Question.create(
  issue_id: 11,
  title: 'What effects can hydraulic fracturing have on groundwater?',
  is_slider: false
)

Source.create(
  issue_id: 11,
  question_id: 165,
  url: 'http://switchboard.nrdc.org/blogs/amall/incidents_where_hydraulic_frac.html'
)

Answer.create(
  issue_id: 11,
  question_id: 165,
  title: 'Contamination',
  is_correct: true
)

Answer.create(
  issue_id: 11,
  question_id: 165,
  title: 'Evaporation',
  is_correct: false
)

Answer.create(
  issue_id: 11,
  question_id: 165,
  title: 'Freezing',
  is_correct: false
)

Answer.create(
  issue_id: 11,
  question_id: 165,
  title: "Purification",
  is_correct: false
)

# question_id -> 166
Question.create(
  issue_id: 11,
  title: 'What effects can hydraulic fracturing have on the air',
  is_slider: false
)

Source.create(
  issue_id: 11,
  question_id: 166,
  url: 'http://en.wikipedia.org/wiki/Hydraulic_fracturing'
)

Source.create(
  issue_id: 11,
  question_id: 166,
  url: 'http://www.ncbi.nlm.nih.gov/pmc/?term=10.1289/ehp.119-a348'
)

Answer.create(
  issue_id: 11,
  question_id: 166,
  title: 'Pollution',
  is_correct: true
)

Answer.create(
  issue_id: 11,
  question_id: 166,
  title: 'Purification',
  is_correct: false
)

Answer.create(
  issue_id: 11,
  question_id: 166,
  title: 'Extreme heating',
  is_correct: false
)

Answer.create(
  issue_id: 11,
  question_id: 166,
  title: 'Freezing',
  is_correct: false
)

# question_id -> 167
Question.create(
  issue_id: 11,
  title: 'What is a possible effect of hydraulic fracturing?',
  is_slider: false
)

Source.create(
  issue_id: 11,
  question_id: 167,
  url: 'http://www.usgs.gov/faq/index.php?action=show&cat=113'
)

Answer.create(
  issue_id: 11,
  question_id: 167,
  title: 'Micro earthquakes',
  is_correct: true
)

Answer.create(
  issue_id: 11,
  question_id: 167,
  title: 'Tornados',
  is_correct: false
)
  
Answer.create(
  issue_id: 11,
  question_id: 167,
  title: 'Blizzards',
  is_correct: false
)

Answer.create(
  issue_id: 11,
  question_id: 167,
  title: 'Increased crop yield',
  is_correct: false
)

# question_id -> 168
Question.create(
  issue_id: 11,
  title: 'How many jobs can hydraulic fracturing contribute to the economy?',
  is_slider: false
)

Source.create(
  issue_id: 11,
  question_id: 168,
  url: 'http://finance.yahoo.com/blogs/daily-ticker/fracking-revolution-more-jobs-cheaper-energy-worth-manageable-171414515.html'
)

Answer.create(
  issue_id: 11,
  question_id: 168,
  title: '17,000 direct jobs',
  is_correct: true
)

Answer.create(
  issue_id: 11,
  question_id: 169,
  title: '100,000 direct jobs',
  is_correct: false
)

Answer.create(
  issue_id: 11,
  question_id: 168,
  title: '0 direct jobs',
  is_correct: false
)


Answer.create(
  issue_id: 11,
  question_id: 168,
  title: 'One million direct jobs',
  is_correct: false
)

# question_id -> 169
Question.create(
  issue_id: 16,
  title: 'Offshore oil drilling ___ prices at the pump',
  is_slider: false
)

 Source.create(
  issue_id: 16,
  question_id: 169,
  url: 'http://www.usclimatenetwork.org/resource-database/offshore-drilling-a-false-answer-to-energy-prices'
)

 Source.create(
  issue_id: 16,
  question_id: 169,
  url: 'http://www.ucsusa.org/clean_vehicles/smart-transportation-solutions/better-fuel-efficiency/protecting-consumers-from-pain-at-pump.html'
)

Answer.create(
  issue_id: 16,
  question_id: 169,
  title: 'Has little effect on',
  is_correct: true
)

Answer.create(
  issue_id: 16,
  question_id: 169,
  title: 'Increases',
  is_correct: false
)

Answer.create(
  issue_id: 16,
  question_id: 169,
  title: 'Decreases',
  is_correct: false
)

# question_id -> 170
Question.create(
  issue_id: 16,
  title: 'Offshore drilling can contribute to _____',
  is_slider: false
)

Source.create(
  issue_id: 16,
  question_id: 170,
  url: 'http://www.care2.com/causes/offshore-drilling-is-energy-worth-the-ecological-disaster-of-oil-spills.html'
)

Answer.create(
  issue_id: 16,
  question_id: 170,
  title: 'Coastal erosion',
  is_correct: true
)

Answer.create(
  issue_id: 16,
  question_id: 170,
  title: 'Cleaner waters',
  is_correct: false
)

Answer.create(
  issue_id: 16,
  question_id: 170,
  title: 'Increased crop yields',
  is_correct: false
)

Answer.create(
  issue_id: 16,
  question_id: 170,
  title: 'Increased fish populations',
  is_correct: false
)

# question_id -> 171
Question.create(
  issue_id: 16,
  title: 'The U.S. does not have the potential to become the #1 producer of oil in the world',
  is_slider: false
)

Source.create(
  issue_id: 16,
  question_id: 171,
  url: 'http://www.dailymail.co.uk/news/article-2222413/US-set-overtake-Saudi-Arabia-worlds-biggest-oil-producer-following-boom-output.html'
)

Answer.create(
  issue_id: 16,
  question_id: 171,
  title: 'True',
  is_correct: false
)

Answer.create(
  issue_id: 16,
  question_id: 171,
  title: 'False',
  is_correct: true
)

# question_id -> 172
Question.create(
  issue_id: 3,
  title: 'When actually tested, how much more radiation were TSA scanners emitting than they were theoretically suppose to be?',
  is_slider: false
)

Source.create(
  issue_id: 3,
  question_id: 172,
  url: 'http://www.usatoday.com/news/washington/2011-03-11-tsa-scans_N.htm'
)

Answer.create(
  issue_id: 3,
  question_id: 172,
  title: '10 times',
  is_correct: true
)

Answer.create(
  issue_id: 15,
  question_id: 172,
  title: '2 times',
  is_correct: false
)

Answer.create(
  issue_id: 15,
  question_id: 172,
  title: '50 times',
  is_correct: false
)

Answer.create(
  issue_id: 15,
  question_id: 172,
  title: '100 times',
  is_correct: false
)

# question_id -> 173
Question.create(
  issue_id: 15,
  title: 'How much money in tax breaks do oil and gas companies receive each year?',
  is_slider: false
)

Source.create(
  issue_id: 15,
  question_id: 173,
  url: 'http://oilprice.com/Energy/Crude-Oil/How-the-Big-Five-Oil-Companies-Spend-their-375-Million-Daily-Profits.html'
)

Answer.create(
  issue_id: 15,
  question_id: 173,
  title: '$4 billion',
  is_correct: true
)

Answer.create(
  issue_id: 15,
  question_id: 173,
  title: '$0',
  is_correct: false
)

Answer.create(
  issue_id: 15,
  question_id: 173,
  title: '$1 million',
  is_correct: false
)

Answer.create(
  issue_id: 15,
  question_id: 173,
  title: '$1 thousand',
  is_correct: false
)

# question_id -> 174
Question.create(
  issue_id: 13,
  title: 'According to the New America Foundation, how many civilian casualties occurred due to drone strikes in Pakistan in 2012?',
  is_slider: false
)

Source.create(
  issue_id: 13,
  question_id: 174,
  url: 'http://counterterrorism.newamerica.net/drones/2012'
)

Answer.create(
  issue_id: 13,
  question_id: 174,
  title: '5',
  is_correct: true
)

Answer.create(
  issue_id: 15,
  question_id: 174,
  title: '1',
  is_correct: false
)
Answer.create(
  issue_id: 15,
  question_id: 174,
  title: '100',
  is_correct: false
)

Answer.create(
  issue_id: 15,
  question_id: 174,
  title: '53',
  is_correct: false
)

# question_id -> 175
Question.create(
  issue_id: 15,
  title: 'How much money in direct compensation do the CEOs of the Big Five oil companies receive every day?',
  is_slider: false
)

Source.create(
  issue_id: 15,
  question_id: 175,
  url: 'http://oilprice.com/Energy/Crude-Oil/How-the-Big-Five-Oil-Companies-Spend-their-375-Million-Daily-Profits.html'
)

Answer.create(
  issue_id: 15,
  question_id: 175,
  title: '$60,110',
  is_correct: true
)

Answer.create(
  issue_id: 15,
  question_id: 175,
  title: '$100',
  is_correct: false
)

Answer.create(
  issue_id: 15,
  question_id: 175,
  title: '$1 billion',
  is_correct: false
)

Answer.create(
  issue_id: 15,
  question_id: 175,
  title: '$167 million',
  is_correct: false
)

# question_id -> 176
Question.create(
  issue_id: 15,
  title: 'Fossil fuels are subsidized nearly  ____ than renewable energy',
  is_slider: false
)

Source.create(
  issue_id: 15,
  question_id: 176,
  url: 'http://www.350.org/en/node/28553'
)

Answer.create(
  issue_id: 15,
  question_id: 176,
  title: '6 times more',
  is_correct: true
)

Answer.create(
  issue_id: 15,
  question_id: 176,
  title: '6 times less',
  is_correct: false
)

Answer.create(
  issue_id: 15,
  question_id: 176,
  title: '20 times more',
  is_correct: false
)

Answer.create(
  issue_id: 15,
  question_id: 176,
  title: '20 times less',
  is_correct: false
)

# question_id -> 177
Question.create(
  issue_id: 13,
  title: 'What legal restrictions are currently in place for domestic drone use?',
  is_slider: false
)

Source.create(
  issue_id: 13,
  question_id: 177,
  url: 'http://www.aclu.org/blog/tag/domestic-drones'
)

Answer.create(
  issue_id: 13,
  question_id: 177,
  title: 'None',
  is_correct: true
)

Answer.create(
  issue_id: 15,
  question_id: 177,
  title: "Usage limits",
  is_correct: false
)

Answer.create(
  issue_id: 13,
  question_id: 177,
  title: 'Data retention limits',
  is_correct: false
)

Answer.create(
  issue_id: 13,
  question_id: 177,
  title: 'Restrictions on weapons',
  is_correct: false
)

# question_id -> 178
Question.create(
  issue_id: 13,
  title: 'Military-age males are considered militants by U.S. officials if they are?',
  is_slider: false
)

Source.create(
  issue_id: 13,
  question_id: 178,
  url: 'http://www.salon.com/2012/05/29/militants_media_propaganda/'
)

Answer.create(
  issue_id: 13,
  question_id: 178,
  title: 'Known terrorists',
  is_correct: false
)

Answer.create(
  issue_id: 15,
  question_id: 178,
  title: 'In a military strike zone',
  is_correct: true
)

Answer.create(
  issue_id: 15,
  question_id: 178,
  title: 'Linked to terrorists',
  is_correct: false
)

Answer.create(
  issue_id: 15,
  question_id: 178,
  title: 'Official military personnel',
  is_correct: false
)


# question_id -> 179
Question.create(
  issue_id: 15,
  title: "Apple is able to take a __% manufacturer\'s tax deduction, but ExxonMobil is only allowed to take a __% deduction.",
  is_slider: false
)

Source.create(
  issue_id: 15,
  question_id: 179,
  url: 'http://www.forbes.com/sites/energysource/2012/04/25/the-surprising-reason-that-oil-subsidies-persist-even-liberals-love-them/'
)

Answer.create(
  issue_id: 15,
  question_id: 179,
  title: '9%, 6%',
  is_correct: true
)

Answer.create(
  issue_id: 15,
  question_id: 179,
  title: '2%, 1%',
  is_correct: false
)
Answer.create(
  issue_id: 15,
  question_id: 179,
  title: '75%, 64%',
  is_correct: false
)

Answer.create(
  issue_id: 15,
  question_id: 179,
  title: '50%, 37%',
  is_correct: false
)

Issue.create(
  title: 'Facts about Americans',
  description: 'Some interesting facts about how uninformed Americans really are',
  image: 'homer'
)

Question.create(
  issue_id: 19,
  title: 'When Newsweek gave 1,000 Americans the U.S. Citizenship Test, what percent could not define the Bill of Rights?',
  is_slider: true
)

Source.create(
  issue_id: 19,
  question_id: 180,
  url: 'http://www.thedailybeast.com/newsweek/2011/03/20/how-dumb-are-we.html'
)

Slider.create(
  issue_id: 19,
  question_id: 180,
  is_exponential: false,
  min: 1,
  max: 100,
  correct: 44,
  units: '/%'
)

Question.create(
	issue_id: 19,
	title: 'What percent of Americans do not believe in Darwin\'s theory of evolution?',
	is_slider: true
)

Source.create(
  issue_id: 19,
  question_id: 181,
  url: 'http://www.npr.org/blogs/13.7/2012/01/18/145338804/why-do-so-many-have-trouble-with-evolution'
)

Slider.create(
  issue_id: 19,
  question_id: 181,
  is_exponential: false,
  min: 1,
  max: 100,
  correct: 25,
  units: '/%'
)

Question.create(
  issue_id: 19,
  title: 'What percent of Americans believe that Judaism did not come before Christianity?',
  is_slider: true
)

Source.create(
  issue_id: 19,
  question_id: 182,
  url: 'http://coedmagazine.com/2010/01/24/the-10-most-ridiculous-things-people-believe/'
)

Slider.create(
  issue_id: 19,
  question_id: 182,
  is_exponential: false,
  min: 1,
  max: 100,
  correct: 50,
  units: '/%'
)

Question.create(
  issue_id: 19,
  title: 'What percent of Americans believe in creationism?',
  is_slider: true
)

Source.create(
  issue_id: 19,
  question_id: 183,
  url: 'http://www.huffingtonpost.com/2012/06/05/americans-believe-in-creationism_n_1571127.html'
)

Slider.create(
  issue_id: 19,
  question_id: 183,
  is_exponential: false,
  min: 1,
  max: 100,
  correct: 46,
  units: '/%'
)

Question.create(
  issue_id: 19,
  title: 'What percent of Americans think that the president has the authority to suspend the Constitution?',
  is_slider: true
)

Source.create(
  issue_id: 19,
  question_id: 184,
  url: 'http://www.usnews.com/news/national/articles/2008/06/03/the-ignorant-american-voter'
)

Slider.create(
  issue_id: 19,
  question_id: 184,
  is_exponential: false,
  min: 1,
  max: 100,
  correct: 49,
  units: '/%'
)

Question.create(
  issue_id: 19,
  title: 'When Newsweek gave 1,000 Americans the U.S. Citizenship Test, what percent could not name the vice president?',
  is_slider: true
)

Source.create(
  issue_id: 19,
  question_id: 185,
  url: 'http://www.thedailybeast.com/newsweek/2011/03/20/how-dumb-are-we.html'
)

Slider.create(
  issue_id: 19,
  question_id: 185,
  is_exponential: false,
  min: 1,
  max: 100,
  correct: 29,
  units: '/%'
)

Question.create(
  issue_id: 19,
  title: 'When Newsweek gave 1,000 Americans the U.S. Citizenship Test, what percent could not circle Independence Day on a calendar?',
  is_slider: true
)

Source.create(
  issue_id: 19,
  question_id: 186,
  url: 'http://www.thedailybeast.com/newsweek/2011/03/20/how-dumb-are-we.html'
)

Slider.create(
  issue_id: 19,
  question_id: 186,
  is_exponential: false,
  min: 1,
  max: 100,
  correct: 6,
  units: '/%'
)

Question.create(
  issue_id: 19,
  title: 'What percent of Americans think Obama is a Muslim?',
  is_slider: false
)

Source.create(
  issue_id: 19,
  question_id: 187,
  url: 'http://www.huffingtonpost.com/2012/07/26/obama-muslim_n_1706522.html'
)

Answer.create(
  issue_id: 19,
  question_id: 187,
  title: '17%',
  is_correct: true
)

Answer.create(
  issue_id: 19,
  question_id: 187,
  title: '80%',
  is_correct: false
)

Answer.create(
  issue_id: 19,
  question_id: 187,
  title: '2%',
  is_correct: false
)

Answer.create(
  issue_id: 19,
  question_id: 187,
  title: '50%',
  is_correct: false
)

Question.create(
  issue_id: 19,
  title: 'A Gallup poll shows that ____ Americans believe the U.S. won independence from a country other than Great Britain.',
  is_slider: false
)

Source.create(
  issue_id: 19,
  question_id: 188,
  url: 'http://www.funnyordie.com/lists/ef02e86313/stupid-things-americans-believe'
)

Answer.create(
  issue_id: 19,
  question_id: 188,
  title: '1 in 4',
  is_correct: true
)

Answer.create(
  issue_id: 19,
  question_id: 188,
  title: '1 in 20',
  is_correct: false
)

Answer.create(
  issue_id: 19,
  question_id: 188,
  title: '1 in 2',
  is_correct: false
)

Answer.create(
  issue_id: 19,
  question_id: 188,
  title: '1 in 100',
  is_correct: false
)

Question.create(
  issue_id: 19,
  title: 'What percent of Americans aged 18 to 24 can not find Iraq on a map?',
  is_slider: false
)

Source.create(
  issue_id: 19,
  question_id: 189,
  url: 'http://edition.cnn.com/2006/EDUCATION/05/02/geog.test/'
)

Answer.create(
  issue_id: 19,
  question_id: 189,
  title: '63%',
  is_correct: true
)

Answer.create(
  issue_id: 19,
  question_id: 189,
  title: '90%',
  is_correct: false
)

Answer.create(
  issue_id: 19,
  question_id: 189,
  title: '24%',
  is_correct: false
)

Answer.create(
  issue_id: 19,
  question_id: 189,
  title: '1%',
  is_correct: false
)

Question.create(
  issue_id: 19,
  title: 'What percent of Americans can name more than one of the five freedoms guaranteed by the First Amendment (freedom of speech, religion, press, assembly and petition for redress of grievances.)',
  is_slider: false
)

Source.create(
  issue_id: 19,
  question_id: 190,
  url: 'http://www.livescience.com/7069-doh-americans-simpsons-amendment.html'
)

Answer.create(
  issue_id: 19,
  question_id: 190,
  title: '25%',
  is_correct: true
)

Answer.create(
  issue_id: 19,
  question_id: 190,
  title: '87%',
  is_correct: false
)

Answer.create(
  issue_id: 19,
  question_id: 190,
  title: '2%',
  is_correct: false
)

Answer.create(
  issue_id: 19,
  question_id: 190,
  title: '64%',
  is_correct: false
)

Question.create(
  issue_id: 19,
  title: 'Only ___ U.S. voters can name the three branches of the federal government',
  is_slider: false
)

Source.create(
  issue_id: 19,
  question_id: 191,
  url: 'http://www.usnews.com/news/national/articles/2008/06/03/the-ignorant-american-voter'
)

Answer.create(
  issue_id: 19,
  question_id: 191,
  title: '2 in 5',
  is_correct: true
)

Answer.create(
  issue_id: 19,
  question_id: 191,
  title: '1 in 10',
  is_correct: false
)

Answer.create(
  issue_id: 19,
  question_id: 191,
  title: '1 in 100',
  is_correct: false
)

Answer.create(
  issue_id: 19,
  question_id: 191,
  title: '2 in 10',
  is_correct: false
)
Question.create(
  issue_id: 2,
  title: 'Do patent trolls actually produce their own inventions?',
  is_slider: false
)

Source.create(
  issue_id: 2,
  question_id: 192,
  url: 'http://en.wikipedia.org/wiki/Patent_troll'
)

Answer.create(
  issue_id: 2,
  question_id: 192,
  title: 'Always',
  is_correct: false
)

Answer.create(
  issue_id: 2,
  question_id: 192,
  title: 'Usually',
  is_correct: false
)

Answer.create(
  issue_id: 2,
  question_id: 192,
  title: 'Sometimes',
  is_correct: false
)

Answer.create(
  issue_id: 2,
  question_id: 192,
  title: 'Almost never',
  is_correct: true
)

Question.create(
  issue_id: 2,
  title: 'In order to own a patent you have to actually create the product',
  is_slider: false
)

Source.create(
  issue_id: 2,
  question_id: 193,
  url: 'http://en.wikipedia.org/wiki/Patent_troll'
)

Answer.create(
  issue_id: 2,
  question_id: 193,
  title: 'False',
  is_correct: true
)

Answer.create(
  issue_id: 2,
  question_id: 193,
  title: 'True',
  is_correct: false
)

Question.create(
  issue_id: 2,
  title: 'Which companies are considered part of the software industry?',
  is_slider: false
)

Source.create(
  issue_id: 2,
  question_id: 194,
  url: 'http://www.techdirt.com/articles/20120309/04304018046/why-its-mathematically-impossible-to-avoid-infringing-software-patents.shtml'
)

Answer.create(
  issue_id: 2,
  question_id: 194,
  title: 'Most that use the internet for business',
  is_correct: true
)

Answer.create(
  issue_id: 2,
  question_id: 194,
  title: 'Only software sellers',
  is_correct: false
)
 
Answer.create(
  issue_id: 2,
  question_id: 194,
  title: 'Only profitable websites',
  is_correct: false
)

Answer.create(
  issue_id: 2,
  question_id: 194,
  title: 'Only technology startups',
  is_correct: false
)

Question.create(
  issue_id: 12,
  title: 'Where are trans fats usually found?',
  is_slider: false
)

Source.create(
  issue_id: 12,
  question_id: 195,
  url: 'http://www.mayoclinic.com/health/trans-fat/CL00032'
)

Answer.create(
  issue_id: 12,
  question_id: 195,
  title: 'Fruits',
  is_correct: false
)

Answer.create(
  issue_id: 12,
  question_id: 195,
  title: 'Vegetables',
  is_correct: false
)

Answer.create(
  issue_id: 12,
  question_id: 195,
  title: 'Meat',
  is_correct: false
)

Answer.create(
  issue_id: 12,
  question_id: 195,
  title: 'Deep fried foods',
  is_correct: true
)

Question.create(
  issue_id: 19,
  title: 'What percent of Americans aged 18-24 can not find Iran on a map?',
  is_slider: false
)

Source.create(
  issue_id: 19,
  question_id: 196,
  url: 'http://edition.cnn.com/2006/EDUCATION/05/02/geog.test/'
)

Slider.create(
  issue_id: 19,
  question_id: 196,
  is_exponential: false,
  min: 1,
  max: 100,
  correct: 75,
  units: '/%'
)

Question.create(
  issue_id: 9,
  title: 'What percent of uninsured Americans work for small businesses?',
  is_slider: false
)

Source.create(
  issue_id: 9,
  question_id: 197,
  url: 'http://articles.cnn.com/2009-06-13/politics/small.business.health.care_1_health-care-premiums-small-businesses?_s=PM:POLITICS'
)

Answer.create(
  issue_id: 9,
  question_id: 197,
  title: '60%',
  is_correct: true
)

Answer.create(
  issue_id: 9,
  question_id: 197,
  title: '10%',
  is_correct: false
)

Answer.create(
  issue_id: 9,
  question_id: 197,
  title: '90%',
  is_correct: false
)

Answer.create(
  issue_id: 9,
  question_id: 197,
  title: '30%',
  is_correct: false
)

Question.create(
  issue_id: 9,
  title: 'How much does an average emergancy room visit cost for the uninsured?',
  is_slider: false
)

Source.create(
  issue_id: 9,
  question_id: 198,
  url: 'http://www.nctimes.com/news/local/sdcounty/hospitals-clinics-help-shoulder-burden-of-uninsured/article_d7a2cc3c-7be6-517d-a817-d4b949ca90b3.html'
)

Answer.create(
  issue_id: 9,
  question_id: 198,
  title: '$3,300',
  is_correct: true
)

Answer.create(
  issue_id: 9,
  question_id: 198,
  title: '$31,000',
  is_correct: false
)

Answer.create(
  issue_id: 9,
  question_id: 198,
  title: '$100',
  is_correct: false
)

Answer.create(
  issue_id: 9,
  question_id: 198,
  title: '$100,000',
  is_correct: false
)

Question.create(
  issue_id: 9,
  title: 'Among the 34 OECD countries, how many do not provide universal health care coverage?',
  is_slider: false
)

Source.create(
  issue_id: 9,
  question_id: 199,
  url: 'http://www.cbsnews.com/8301-505103_162-57522437/issue-brief-health-care/'
)

Answer.create(
  issue_id: 9,
  question_id: 199,
  title: '10',
  is_correct: false
)

Answer.create(
  issue_id: 9,
  question_id: 199,
  title: '1',
  is_correct: false
)

Answer.create(
  issue_id: 9,
  question_id: 199,
  title: '21',
  is_correct: false
)

Answer.create(
  issue_id: 9,
  question_id: 199,
  title: '3',
  is_correct: true
)