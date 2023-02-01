import leadtechLogo from '../Statics/leadtech.jpeg';
import lodgifyLogo from '../Statics/lodgify.png';
import slashmobilityLogo from '../Statics/slash.jpg';
import unacastLogo from '../Statics/unacast.png';
import upfLogo from '../Statics/upf.jpg';


// SOCIAL

export const linkedinUrl = 'https://linkedin.com/in/marcgarciamullon';
export const githubUrl = 'https://github.com/mgm793';
export const twitterUrl = 'https://twitter.com/mullonnn';

//  WORK

export const WorkExperienceInfo = [
    {company: 'Unacast', start: 'Jun 2021', end: 'Present', image: unacastLogo, city: 'Oslo'},
    {company: 'Lodgify', start: 'Sep 2020', end: 'Jun 2021', image: lodgifyLogo, city: 'Barcelona'},
    {company: 'Leadtech', start: 'Aug 2018', end: 'Sep 2020', image: leadtechLogo, city: 'Barcelona'},
    {company: 'SlashMobility', start: 'Jan 2018', end: 'Jun 2018', image: slashmobilityLogo, city: 'Barcelona'}
] 

// EDUCATION 

export const EducationInfo = [
    {institution: 'Universitat Pompeu Fabra', title: 'Enginyeria Informàtica', image: upfLogo}
]

// PROJECTS

export const ProjectsInfo = [
    {type: 'npm', name: 'mgm793', url: 'https://www.npmjs.com/package/mgm793'},
    {type: 'npm', name: 'catalan-hour', url: 'https://www.npmjs.com/package/catalan-hour'},
    {type: 'vsce', name: 'React Functional Snippet', url: 'https://marketplace.visualstudio.com/items?itemName=mgm793.react-functional-snippet'}
]