/**
 * @file amendments.ts
 * @description Structured data for the 27 amendments, including high-level summaries and landmark case law.
 */

import type { CaseLaw } from '../components/common/CaseLawExplorer'

/**
 * AmendmentDefinition models one constitutional amendment for the site.
 */
export interface AmendmentDefinition {
  /** Numerical order of the amendment (1–27). */
  number: number
  /** Short display name (e.g., "First Amendment"). */
  shortName: string
  /** One-line label of the amendment's core subject. */
  title: string
  /** Year the amendment was ratified. */
  ratified: string
  /** Brief plain-language explanation of what the amendment does. */
  summary: string
  /** Short list of recurring themes (e.g., "Free speech", "Criminal procedure"). */
  themes: string[]
  /** Landmark or illustrative cases that interpret or apply this amendment. */
  caseLaw: CaseLaw[]
}

/**
 * AMENDMENTS contains summary descriptions and example cases
 * for each of the 27 amendments. The goal is to give visitors
 * a high-level sense of how courts have applied these texts.
 */
export const AMENDMENTS: AmendmentDefinition[] = [
  {
    number: 1,
    shortName: 'First Amendment',
    title: 'Freedom of speech, religion, press, assembly, and petition',
    ratified: '1791',
    summary:
      'Protects core expressive and religious freedoms by limiting what the government can do to punish or restrict speech, beliefs, and peaceful political activity.',
    themes: ['Free speech', 'Religious liberty', 'Press & protest'],
    caseLaw: [
      {
        id: 'schenck-v-united-states',
        name: 'Schenck v. United States',
        year: 1919,
        citation: '249 U.S. 47',
        summary:
          'Charles Schenck was convicted for distributing leaflets urging resistance to the WWI draft. The question was when the government can punish speech that opposes war.',
        impact:
          'Introduced the “clear and present danger” test for when speech can be restricted, laying groundwork for future free-speech doctrine.',
        link: {
          label: 'Oyez summary of Schenck v. United States',
          href: 'https://www.oyez.org/cases/1900-1940/249us47',
        },
      },
      {
        id: 'brandenburg-v-ohio',
        name: 'Brandenburg v. Ohio',
        year: 1969,
        citation: '395 U.S. 444',
        summary:
          'A Ku Klux Klan leader was convicted under an Ohio law for inflammatory speech. The Court reconsidered when advocacy of violence can be punished.',
        impact:
          'Held that the government may only punish advocacy that is directed to inciting imminent lawless action and likely to produce such action, strongly protecting political speech.',
        link: {
          label: 'Oyez summary of Brandenburg v. Ohio',
          href: 'https://www.oyez.org/cases/1968/492',
        },
      },
      {
        id: 'nyt-v-sullivan',
        name: 'New York Times Co. v. Sullivan',
        year: 1964,
        citation: '376 U.S. 254',
        summary:
          'An elected official sued the New York Times for defamation over an advertisement criticizing police conduct in the civil-rights era.',
        impact:
          'Created the “actual malice” standard that protects the press when reporting on public officials, even when some details are inaccurate, as long as there is no knowing or reckless falsehood.',
        link: {
          label: 'Oyez summary of NYT v. Sullivan',
          href: 'https://www.oyez.org/cases/1963/39',
        },
      },
    ],
  },
  {
    number: 2,
    shortName: 'Second Amendment',
    title: 'Right to keep and bear arms',
    ratified: '1791',
    summary:
      'Protects an individual right to keep and bear arms, while leaving room for some regulation. Debates focus on how far that right extends and what limits are allowed.',
    themes: ['Guns & regulation', 'Individual rights', 'Public safety'],
    caseLaw: [
      {
        id: 'dc-v-heller',
        name: 'District of Columbia v. Heller',
        year: 2008,
        citation: '554 U.S. 570',
        summary:
          'A D.C. resident challenged laws that effectively banned handgun possession in the home.',
        impact:
          'Held that the Second Amendment protects an individual right to possess a handgun in the home for self-defense, separate from militia service.',
        link: {
          label: 'Oyez summary of D.C. v. Heller',
          href: 'https://www.oyez.org/cases/2007/07-290',
        },
      },
      {
        id: 'mcdonald-v-chicago',
        name: 'McDonald v. Chicago',
        year: 2010,
        citation: '561 U.S. 742',
        summary:
          'Residents challenged Chicago’s handgun ban and asked whether the Second Amendment limits state and local governments, not just the federal government.',
        impact:
          'Used the Fourteenth Amendment to “incorporate” the Second Amendment against the states, making the individual right to bear arms nationwide.',
        link: {
          label: 'Oyez summary of McDonald v. Chicago',
          href: 'https://www.oyez.org/cases/2009/08-1521',
        },
      },
    ],
  },
  {
    number: 3,
    shortName: 'Third Amendment',
    title: 'Quartering of soldiers',
    ratified: '1791',
    summary:
      'Prevents the government from forcing people to house soldiers in their homes in peacetime, and strongly limits doing so in wartime.',
    themes: ['Privacy of the home', 'Military vs. civilian life'],
    caseLaw: [
      {
        id: 'griswold-v-connecticut-third',
        name: 'Griswold v. Connecticut (Third Amendment background)',
        year: 1965,
        citation: '381 U.S. 479',
        summary:
          'A state law banning contraception for married couples raised questions about privacy within the home and marital relationship.',
        impact:
          'The Court cited the Third Amendment as part of the “penumbra” of privacy protections surrounding the home, even though the case was not directly about quartering soldiers.',
        link: {
          label: 'Oyez summary of Griswold v. Connecticut',
          href: 'https://www.oyez.org/cases/1964/496',
        },
      },
    ],
  },
  {
    number: 4,
    shortName: 'Fourth Amendment',
    title: 'Searches, seizures, and warrants',
    ratified: '1791',
    summary:
      'Protects people against unreasonable searches and seizures, usually requiring warrants based on probable cause, with evolving rules for new technologies and policing methods.',
    themes: ['Privacy', 'Police powers', 'Technology'],
    caseLaw: [
      {
        id: 'mapp-v-ohio',
        name: 'Mapp v. Ohio',
        year: 1961,
        citation: '367 U.S. 643',
        summary:
          'Police entered a home without a proper warrant and found evidence that led to a conviction. The question was whether illegally obtained evidence could be used in state courts.',
        impact:
          'Applied the “exclusionary rule” to the states, generally barring evidence obtained in violation of the Fourth Amendment.',
        link: {
          label: 'Oyez summary of Mapp v. Ohio',
          href: 'https://www.oyez.org/cases/1960/236',
        },
      },
      {
        id: 'katz-v-united-states',
        name: 'Katz v. United States',
        year: 1967,
        citation: '389 U.S. 347',
        summary:
          'The FBI recorded phone calls from a public phone booth without a physical trespass, raising the question of what counts as a “search.”',
        impact:
          'Shifted the focus from property to “reasonable expectations of privacy,” expanding Fourth Amendment protection to conversations and modern technology.',
      },
      {
        id: 'riley-v-california',
        name: 'Riley v. California',
        year: 2014,
        citation: '573 U.S. 373',
        summary:
          'Police searched the digital contents of an arrestee’s cell phone without a warrant.',
        impact:
          'Held that officers generally must get a warrant before searching a cell phone, recognizing the vast amount of personal data phones contain.',
      },
    ],
  },
  {
    number: 5,
    shortName: 'Fifth Amendment',
    title: 'Grand juries, double jeopardy, self-incrimination, due process, and takings',
    ratified: '1791',
    summary:
      'Provides several protections in criminal and property law, including the right to remain silent, limits on being tried twice, and payment requirements when government takes private property.',
    themes: ['Criminal process', 'Property rights', 'Self-incrimination'],
    caseLaw: [
      {
        id: 'miranda-v-arizona',
        name: 'Miranda v. Arizona',
        year: 1966,
        citation: '384 U.S. 436',
        summary:
          'Police interrogations without clear warnings led to confessions, raising concerns about coerced self-incrimination.',
        impact:
          'Required police to inform suspects of their rights (“Miranda warnings”), including the right to remain silent and to an attorney.',
        link: {
          label: 'Oyez summary of Miranda v. Arizona',
          href: 'https://www.oyez.org/cases/1965/759',
        },
      },
      {
        id: 'kelo-v-new-london',
        name: 'Kelo v. City of New London',
        year: 2005,
        citation: '545 U.S. 469',
        summary:
          'The city used eminent domain to transfer private homes to a private developer as part of an economic redevelopment plan.',
        impact:
          'Upheld the taking as a “public use,” broadening how governments may use eminent domain for economic development, while sparking strong public backlash and state-level reforms.',
      },
    ],
  },
  {
    number: 6,
    shortName: 'Sixth Amendment',
    title: 'Criminal trial rights',
    ratified: '1791',
    summary:
      'Guarantees rights in criminal prosecutions, including a speedy and public trial, an impartial jury, the right to counsel, and the right to confront witnesses.',
    themes: ['Right to counsel', 'Fair trial', 'Juries'],
    caseLaw: [
      {
        id: 'gideon-v-wainwright',
        name: 'Gideon v. Wainwright',
        year: 1963,
        citation: '372 U.S. 335',
        summary:
          'A Florida man was denied a lawyer because his case was not a capital offense.',
        impact:
          'Held that states must provide lawyers to indigent defendants in most serious criminal cases, making counsel a fundamental right.',
        link: {
          label: 'Oyez summary of Gideon v. Wainwright',
          href: 'https://www.oyez.org/cases/1962/155',
        },
      },
      {
        id: 'barker-v-wingo',
        name: 'Barker v. Wingo',
        year: 1972,
        citation: '407 U.S. 514',
        summary:
          'A defendant’s trial was repeatedly delayed, raising questions about the “speedy trial” guarantee.',
        impact:
          'Established a balancing test for deciding when delays violate the Sixth Amendment’s speedy trial right.',
      },
    ],
  },
  {
    number: 7,
    shortName: 'Seventh Amendment',
    title: 'Civil jury trials in federal court',
    ratified: '1791',
    summary:
      'Preserves the right to a jury trial in many federal civil cases and limits judges’ ability to overturn jury findings.',
    themes: ['Civil justice', 'Jury power'],
    caseLaw: [
      {
        id: 'tull-v-united-states',
        name: 'Tull v. United States',
        year: 1987,
        citation: '481 U.S. 412',
        summary:
          'A developer facing civil penalties for environmental violations claimed a right to a jury trial.',
        impact:
          'Clarified when the Seventh Amendment requires juries in civil penalty cases, tying the right to historical analogies to common-law actions.',
      },
    ],
  },
  {
    number: 8,
    shortName: 'Eighth Amendment',
    title: 'Excessive bail, fines, and cruel and unusual punishments',
    ratified: '1791',
    summary:
      'Limits extreme punishments and financial penalties, with the meaning of “cruel and unusual” evolving as society’s standards change.',
    themes: ['Death penalty', 'Prison conditions', 'Proportionality'],
    caseLaw: [
      {
        id: 'furman-v-georgia',
        name: 'Furman v. Georgia',
        year: 1972,
        citation: '408 U.S. 238',
        summary:
          'Challenges to death sentences highlighted arbitrary and discriminatory application of capital punishment.',
        impact:
          'Effectively halted the death penalty nationwide until states revised their statutes to meet constitutional standards.',
      },
      {
        id: 'gregg-v-georgia',
        name: 'Gregg v. Georgia',
        year: 1976,
        citation: '428 U.S. 153',
        summary:
          'Reviewed new death-penalty schemes designed to guide jury discretion and reduce arbitrariness.',
        impact:
          'Allowed the death penalty to resume under guided-discretion statutes, while recognizing that the Eighth Amendment’s meaning can evolve.',
      },
      {
        id: 'roper-v-simmons',
        name: 'Roper v. Simmons',
        year: 2005,
        citation: '543 U.S. 551',
        summary:
          'A juvenile offender challenged the death penalty for crimes committed under age 18.',
        impact:
          'Held that executing people for crimes committed as minors is unconstitutional, citing “evolving standards of decency.”',
      },
    ],
  },
  {
    number: 9,
    shortName: 'Ninth Amendment',
    title: 'Unenumerated rights',
    ratified: '1791',
    summary:
      'Clarifies that listing certain rights in the Constitution does not deny the existence of other rights retained by the people.',
    themes: ['Unwritten rights', 'Privacy', 'Limited government'],
    caseLaw: [
      {
        id: 'griswold-v-connecticut-ninth',
        name: 'Griswold v. Connecticut',
        year: 1965,
        citation: '381 U.S. 479',
        summary:
          'A ban on contraception for married couples raised questions about personal privacy beyond explicitly listed rights.',
        impact:
          'The Court pointed to the Ninth Amendment as part of the basis for recognizing a broader constitutional right to privacy.',
      },
    ],
  },
  {
    number: 10,
    shortName: 'Tenth Amendment',
    title: 'Reserved powers of the states and people',
    ratified: '1791',
    summary:
      'States that powers not given to the federal government nor denied to the states are reserved to the states or the people.',
    themes: ['Federalism', 'State sovereignty'],
    caseLaw: [
      {
        id: 'printz-v-united-states',
        name: 'Printz v. United States',
        year: 1997,
        citation: '521 U.S. 898',
        summary:
          'Local law-enforcement officers challenged a federal law requiring them to conduct background checks for gun purchases.',
        impact:
          'Held that the federal government cannot “commandeer” state officials to carry out federal regulatory programs, reinforcing state sovereignty.',
      },
    ],
  },
  {
    number: 11,
    shortName: 'Eleventh Amendment',
    title: 'State sovereign immunity in federal court',
    ratified: '1795',
    summary:
      'Limits when individuals can sue states in federal court, reinforcing the idea of state sovereign immunity.',
    themes: ['State immunity', 'Federal courts'],
    caseLaw: [
      {
        id: 'seminole-tribe-v-florida',
        name: 'Seminole Tribe v. Florida',
        year: 1996,
        citation: '517 U.S. 44',
        summary:
          'A Native nation sued a state under a federal statute, raising the question of whether Congress could authorize such suits.',
        impact:
          'Strengthened state sovereign immunity by limiting Congress’s power to subject unconsenting states to private suits in federal court.',
      },
    ],
  },
  {
    number: 12,
    shortName: 'Twelfth Amendment',
    title: 'Revised presidential election procedures',
    ratified: '1804',
    summary:
      'Reworks the Electoral College system by requiring separate electoral votes for President and Vice President, reducing the chance of deadlocks and ties.',
    themes: ['Elections', 'Presidency', 'Electoral College'],
    caseLaw: [],
  },
  {
    number: 13,
    shortName: 'Thirteenth Amendment',
    title: 'Abolition of slavery and involuntary servitude',
    ratified: '1865',
    summary:
      'Formally abolished slavery and involuntary servitude in the United States, except as punishment for crime, and gave Congress power to enforce this ban.',
    themes: ['Racial justice', 'Forced labor', 'Civil rights'],
    caseLaw: [
      {
        id: 'civil-rights-cases',
        name: 'The Civil Rights Cases',
        year: 1883,
        citation: '109 U.S. 3',
        summary:
          'Challenges to federal laws banning racial discrimination in public accommodations by private businesses.',
        impact:
          'Narrowly interpreted the Thirteenth and Fourteenth Amendments, limiting Congress’s power to prohibit private racial discrimination and contributing to the Jim Crow era.',
      },
      {
        id: 'jones-v-alfred-h-mayer',
        name: 'Jones v. Alfred H. Mayer Co.',
        year: 1968,
        citation: '392 U.S. 409',
        summary:
          'An African American man was refused the sale of a home because of his race and sued under a Reconstruction-era statute.',
        impact:
          'Held that Congress can use the Thirteenth Amendment to ban private racial discrimination in housing, broadening federal civil-rights power.',
      },
    ],
  },
  {
    number: 14,
    shortName: 'Fourteenth Amendment',
    title: 'Citizenship, due process, and equal protection',
    ratified: '1868',
    summary:
      'Defines citizenship, requires states to provide due process and equal protection of the laws, and has become a central tool for expanding civil rights and liberties.',
    themes: ['Equal protection', 'Civil rights', 'Incorporation'],
    caseLaw: [
      {
        id: 'brown-v-board',
        name: 'Brown v. Board of Education',
        year: 1954,
        citation: '347 U.S. 483',
        summary:
          'Black children challenged racial segregation in public schools.',
        impact:
          'Declared “separate but equal” schools unconstitutional, catalyzing the modern civil-rights movement and reshaping equal-protection law.',
        link: {
          label: 'Oyez summary of Brown v. Board',
          href: 'https://www.oyez.org/cases/1940-1955/347us483',
        },
      },
      {
        id: 'loving-v-virginia',
        name: 'Loving v. Virginia',
        year: 1967,
        citation: '388 U.S. 1',
        summary:
          'An interracial couple challenged a state ban on interracial marriage.',
        impact:
          'Struck down laws banning interracial marriage as violations of equal protection and due process, affirming marriage as a fundamental right.',
      },
      {
        id: 'obergefell-v-hodges',
        name: 'Obergefell v. Hodges',
        year: 2015,
        citation: '576 U.S. 644',
        summary:
          'Same-sex couples challenged state bans on same-sex marriage and refusals to recognize such marriages.',
        impact:
          'Held that same-sex couples have a constitutional right to marry, extending the fundamental right to marriage and equal protection.',
      },
    ],
  },
  {
    number: 15,
    shortName: 'Fifteenth Amendment',
    title: 'Voting rights regardless of race',
    ratified: '1870',
    summary:
      'Prohibits federal and state governments from denying or abridging the right to vote on account of race, color, or previous condition of servitude.',
    themes: ['Voting rights', 'Race & elections'],
    caseLaw: [
      {
        id: 'south-carolina-v-katzenbach',
        name: 'South Carolina v. Katzenbach',
        year: 1966,
        citation: '383 U.S. 301',
        summary:
          'A state challenged the Voting Rights Act of 1965, which targeted racial discrimination in voting.',
        impact:
          'Upheld strong federal enforcement of the Fifteenth Amendment, supporting preclearance and other tools to combat racial discrimination in voting.',
      },
      {
        id: 'shelby-county-v-holder',
        name: 'Shelby County v. Holder',
        year: 2013,
        citation: '570 U.S. 529',
        summary:
          'A county argued that the coverage formula for which jurisdictions needed federal preclearance for voting changes was outdated.',
        impact:
          'Invalidated the coverage formula, effectively weakening the Voting Rights Act and prompting new debates about voting restrictions and race.',
      },
    ],
  },
  {
    number: 16,
    shortName: 'Sixteenth Amendment',
    title: 'Federal income tax',
    ratified: '1913',
    summary:
      'Gives Congress the power to collect income taxes without apportioning them among the states based on population.',
    themes: ['Taxation', 'Federal power'],
    caseLaw: [
      {
        id: 'brushaber-v-union-pacific',
        name: 'Brushaber v. Union Pacific Railroad Co.',
        year: 1916,
        citation: '240 U.S. 1',
        summary:
          'A shareholder challenged the constitutionality of the new federal income tax system.',
        impact:
          'Upheld the income tax as authorized by the Sixteenth Amendment, confirming broad federal power to tax income.',
      },
    ],
  },
  {
    number: 17,
    shortName: 'Seventeenth Amendment',
    title: 'Direct election of senators',
    ratified: '1913',
    summary:
      'Shifts selection of U.S. Senators from state legislatures to direct election by the people of each state.',
    themes: ['Democracy', 'Senate elections'],
    caseLaw: [],
  },
  {
    number: 18,
    shortName: 'Eighteenth Amendment',
    title: 'Prohibition of alcohol (repealed)',
    ratified: '1919',
    summary:
      'Banned the manufacture, sale, and transportation of intoxicating liquors in the United States. Later repealed by the Twenty-First Amendment.',
    themes: ['Alcohol regulation', 'Moral reform', 'Repealed amendments'],
    caseLaw: [
      {
        id: 'national-prohibition-cases',
        name: 'National Prohibition Cases (Rhode Island v. Palmer)',
        year: 1920,
        citation: '253 U.S. 350',
        summary:
          'Multiple challenges questioned whether the Eighteenth Amendment and its enforcement act were valid.',
        impact:
          'Upheld Prohibition as a valid constitutional amendment and confirmed broad federal power to enforce it until repeal.',
      },
    ],
  },
  {
    number: 19,
    shortName: 'Nineteenth Amendment',
    title: 'Women’s suffrage',
    ratified: '1920',
    summary:
      'Prohibits denying the right to vote on account of sex, enfranchising women nationwide and reshaping the electorate.',
    themes: ['Gender equality', 'Voting rights'],
    caseLaw: [
      {
        id: 'leser-v-garnett',
        name: 'Leser v. Garnett',
        year: 1922,
        citation: '258 U.S. 130',
        summary:
          'Opponents argued that the Nineteenth Amendment was not properly ratified and that states could limit women’s voting rights.',
        impact:
          'Rejected challenges to the amendment’s validity, confirming women’s constitutional right to vote across the country.',
      },
    ],
  },
  {
    number: 20,
    shortName: 'Twentieth Amendment',
    title: 'Lame-duck sessions and start dates',
    ratified: '1933',
    summary:
      'Moves the start dates of presidential and congressional terms and clarifies what happens if a President-elect dies before taking office.',
    themes: ['Transitions of power', 'Elections'],
    caseLaw: [],
  },
  {
    number: 21,
    shortName: 'Twenty-First Amendment',
    title: 'Repeal of Prohibition',
    ratified: '1933',
    summary:
      'Repeals the Eighteenth Amendment and gives states significant control over the transportation and sale of alcoholic beverages.',
    themes: ['Alcohol regulation', 'State power'],
    caseLaw: [
      {
        id: 'granholm-v-heald',
        name: 'Granholm v. Heald',
        year: 2005,
        citation: '544 U.S. 460',
        summary:
          'States allowed in-state wineries to ship directly to consumers but restricted out-of-state wineries.',
        impact:
          'Held that the Twenty-First Amendment does not permit states to discriminate against out-of-state alcohol in ways that violate the Commerce Clause.',
      },
    ],
  },
  {
    number: 22,
    shortName: 'Twenty-Second Amendment',
    title: 'Presidential term limits',
    ratified: '1951',
    summary:
      'Limits Presidents to two elected terms (or a maximum of about ten years in special succession situations).',
    themes: ['Executive power', 'Term limits'],
    caseLaw: [],
  },
  {
    number: 23,
    shortName: 'Twenty-Third Amendment',
    title: 'Presidential electors for the District of Columbia',
    ratified: '1961',
    summary:
      'Gives Washington, D.C. electors in the Electoral College, allowing residents to vote for President and Vice President.',
    themes: ['Voting rights', 'D.C. representation'],
    caseLaw: [],
  },
  {
    number: 24,
    shortName: 'Twenty-Fourth Amendment',
    title: 'Abolition of poll taxes in federal elections',
    ratified: '1964',
    summary:
      'Bans poll taxes in federal elections, targeting a tool that had been used to disenfranchise Black voters and poor people.',
    themes: ['Voting rights', 'Economic barriers'],
    caseLaw: [
      {
        id: 'harper-v-virginia-board',
        name: 'Harper v. Virginia Board of Elections',
        year: 1966,
        citation: '383 U.S. 663',
        summary:
          'A Virginia poll tax for state elections was challenged as unconstitutional.',
        impact:
          'Relied on equal protection principles to strike down state poll taxes, extending the spirit of the Twenty-Fourth Amendment beyond federal elections.',
      },
    ],
  },
  {
    number: 25,
    shortName: 'Twenty-Fifth Amendment',
    title: 'Presidential disability and succession',
    ratified: '1967',
    summary:
      'Clarifies procedures for filling a vice-presidential vacancy and for transferring presidential powers when a President is disabled.',
    themes: ['Continuity of government', 'Succession'],
    caseLaw: [],
  },
  {
    number: 26,
    shortName: 'Twenty-Sixth Amendment',
    title: 'Voting age lowered to 18',
    ratified: '1971',
    summary:
      'Guarantees the right to vote for citizens 18 years and older, responding to “old enough to fight, old enough to vote” arguments during the Vietnam War.',
    themes: ['Youth voting', 'Democratic inclusion'],
    caseLaw: [
      {
        id: 'oregon-v-mitchell',
        name: 'Oregon v. Mitchell',
        year: 1970,
        citation: '400 U.S. 112',
        summary:
          'Congress attempted to lower the voting age to 18 for both federal and state elections by statute.',
        impact:
          'Produced a fragmented decision that helped spur adoption of the Twenty-Sixth Amendment to clearly set the voting age nationwide.',
      },
    ],
  },
  {
    number: 27,
    shortName: 'Twenty-Seventh Amendment',
    title: 'Congressional pay changes',
    ratified: '1992',
    summary:
      'Prevents any law that changes Congressional pay from taking effect until after the next election of Representatives.',
    themes: ['Legislative accountability', 'Compensation'],
    caseLaw: [],
  },
]
