const i=e=>e.map(n=>{const t=(n.content_work??[]).join(`
`);return!n.date.trim()&&!n.work.trim()?t:`${n.date}: ${n.work} (${t})`}).filter(Boolean).join(`
`),r=e=>({fullName:e.fullName,nationality:e.nationality.join(`
`),birthDate:e.birthDate,address:e.address.join(`
`),education:e.education.join(`
`),workExperience:e.workExperience.join(`
`),researchContent:e.researchContent.join(`
`),responsibilities:i(e.responsibilities),achievements:e.achievements.join(`
`),skills:e.skills.join(`
`),certifications:e.certifications.join(`
`),conferencePresentations:e.conferencePresentations.join(`
`),publications:e.publications.join(`
`)}),c=e=>({researchers:e.researchers,researchTitle:e.researchTitle,researchBackground:e.researchBackground.join(`
`),researchObjective:e.researchObjective,researchPlan:e.researchPlan,expectedResults:e.expectedResults});export{c as flattenResearchPlan,r as flattenResumeInfo,i as formatResponsibilities};
