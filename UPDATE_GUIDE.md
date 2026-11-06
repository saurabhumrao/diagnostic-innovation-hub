# mAb website update

## Upload the update

1. Extract Diagnostic_Innovation_Hub_mAb_Update.zip.
2. Open your diagnostic-innovation-hub repository on GitHub.
3. Choose Add file, then Upload files.
4. Upload the extracted website files to the repository root. Replace matching files. Upload the files themselves rather than the ZIP or an enclosing folder.
5. Commit changes to main.
6. Wait for the Pages deployment to complete, then refresh the public website.

The homepage Antibodies navigation, mAb capability panel and custom-development card now link to mab-services.html.

## Files to upload

- index.html, app.js and styles.css replace the current homepage files.
- mab-services.html is the new detailed mAb service page.
- mab-content.js holds the main editable mAb wording, proposed rate cards, standard scope, milestones, exclusions and agreement links.
- mab-services.js renders the new page and prepares local inquiry briefs.
- mab-services.css provides the new page layout.
- .nojekyll is an empty optional Pages configuration file. If hidden by your file browser, the static HTML still works without it.
- README.md and this guide are optional repository documentation.

## Edit the content later

Open mab-content.js on GitHub and use the pencil icon. Edit text inside quotation marks while preserving JavaScript syntax. Prices appear in the rates array. Standard package details appear in standardScope. Milestone fees appear in milestones. If rates or scope become approved, update the proposal labels and explanatory copy in mab-services.html as well.

Rates are taken from the pricing presentation dated November 5, 2026. All remain proposals pending local cost, capacity and institutional rate review. Development delivery targets depend on successful clone development and productivity.

## Add the approved agreement and signing links

In mab-content.js, the agreements object has documentUrl and signingUrl fields. Both are empty by default. After the responsible University office supplies the approved document and authorized signing route, add their HTTPS addresses. The page will then show the document and signing links automatically. Do not place private or recipient-specific signing tokens in a public repository. Use an approved public intake or reusable signing entry link, or keep project-specific links in private correspondence.

The approved agreement is executed through the external service, not this static website. The page does not collect drawn signatures, record agreement acceptance or claim signing completion. A local brief is not an agreement. Illinois OTM should confirm whether an outgoing MTA or another agreement applies. Commercial licensing and custom-service ownership terms require the applicable institutional process.

## Information still needed

Confirmed service availability and rates, service owner, an operational inquiry destination, any approved TTA or MTA document, and the appropriate signing route. No inquiry is currently sent. No order, payment or signature is processed.

## Verification

JavaScript syntax, local links and HTML IDs were checked. The page was reviewed in a desktop browser. Price-card selection, inquiry generation, homepage navigation and inactive agreement controls were checked. No real contract was opened or signed. Mobile-specific CSS is included, but a separate mobile-device browser check was not performed.

## Official agreement guidance

- https://otm.illinois.edu/researchers-innovators/outgoing-material-transfer-agreements
- https://sponsoredprograms.illinois.edu/research-topics/material-transfer-agreement
