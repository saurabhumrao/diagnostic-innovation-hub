/* Edit wording, proposed rates and approved agreement links here. */
window.MAB_CONTENT = {
  title: 'Monoclonal antibodies for your diagnostic question.',
  introduction: 'Explore a custom development project, discuss production from an existing hybridoma, or define the evidence needed for your assay.',
  rates: [
    {name: 'Academic development', amount: '$11,000', basis: 'Starting fee per antigen', audience: 'External academic clients', scope: 'One suitable customer-supplied protein antigen and the standard development scope.', code: 'academic'},
    {name: 'Industry development', amount: '$14,000', basis: 'Starting fee per antigen', audience: 'Industry clients', scope: 'The same proposed standard technical scope, subject to institutional external rates.', code: 'industry'},
    {name: 'Development with characterization', amount: '$12,000–$15,000', basis: 'Indicative project range', audience: 'Scope agreed by quotation', scope: 'Standard development plus a defined application-validation or binding-characterization plan.', code: 'characterization'},
    {name: 'Existing hybridoma production', amount: '$1,500–$2,000', basis: 'Indicative fee per batch', audience: 'A suitable hybridoma already exists', scope: 'Culture, purification and basic QC, targeting 5–10 mg subject to clone productivity.', code: 'production'}
  ],
  standardScope: [
    ['Starting material', 'One suitable customer-supplied protein antigen and an agreed ELISA screening plan.'],
    ['Development campaign', 'One standard mouse immunization campaign and one fusion.'],
    ['Clone selection', 'ELISA screening within agreed limits and subcloning of up to two selected positive clones.'],
    ['Delivery target', 'Cryopreserved stocks of selected clones and 5 mg total purified antibody from one selected clone.'],
    ['Quality assessment', 'Binding ELISA, concentration and SDS-PAGE purity assessment, with a project report.']
  ],
  milestones: [
    ['Immunization & serum screening', null, 'Review antigen suitability and the immune response.'],
    ['Fusion & primary screening', null, 'Review screening results and select positive candidates.'],
    ['Subcloning & cell banking', null, 'Confirm selected clones and document banking.'],
    ['Initial production & QC', null, 'Complete the agreed antibody delivery and report.']
  ],
  exclusions: ['Antigen production or preparation', 'Repeat campaigns or additional fusions', 'Conjugation and antibody sequencing', 'Affinity measurements or extensive cross-reactivity studies', 'Sandwich-pair development and application validation', 'Larger-scale production and special formulations'],
  agreements: {
    guidanceUrl: 'https://otm.illinois.edu/researchers-innovators/outgoing-material-transfer-agreements',
    requestUrl: 'https://forms.illinois.edu/sec/21814733',
    licensingUrl: 'https://otm.illinois.edu/',
    documentUrl: '',
    signingUrl: ''
  }
};
