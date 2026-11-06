function isEnquirySubmissionAccepted(response, data) {
  return Boolean(response && response.ok && data && (data.success === true || data.success === 'true'));
}
function buildEnquiryPayload(fields) {
  return {
    email: fields.email.trim(),
    'Service area': fields.service,
    'Target or disease': fields.target,
    'Species': fields.species,
    'Project goals': fields.goals.trim(),
    _replyto: fields.email.trim(),
    _subject: 'Diagnostic Innovation Hub enquiry',
    _template: 'table',
    _url: 'https://saurabhumrao.github.io/diagnostic-innovation-hub/#connect',
    _honey: fields.honeypot || ''
  };
}
function buildEnquiryMailto(payload) {
  const body = [
    'Diagnostic Innovation Hub enquiry', '',
    'Contact email', payload.email, '',
    'Service area', payload['Service area'], '',
    'Target or disease', payload['Target or disease'], '',
    'Species', payload.Species, '',
    'Project goals', payload['Project goals']
  ].join('\n');
  return 'mailto:usaurabh@illinois.edu?subject=' + encodeURIComponent('Diagnostic Innovation Hub enquiry') + '&body=' + encodeURIComponent(body);
}
function initialiseEnquiryForm() {
  const form = document.querySelector('#inquiry-form');
  if (!form) return;
  const target = form.querySelector('#target');
  const species = form.querySelector('#species');
  const targetOther = form.querySelector('#target-other');
  const speciesOther = form.querySelector('#species-other');
  const button = form.querySelector('#send-enquiry');
  const status = form.querySelector('#inquiry-status');
  const fallback = form.querySelector('#inquiry-email-fallback');
  const defaultButton = button.innerHTML;
  let sending = false;
  function syncOther(select, container, input) {
    const other = select.value === 'other';
    container.hidden = !other;
    input.disabled = !other;
    input.required = other;
    if (!other) input.value = '';
  }
  function syncChoices() {
    syncOther(target, form.querySelector('#target-other-field'), targetOther);
    syncOther(species, form.querySelector('#species-other-field'), speciesOther);
  }
  target.addEventListener('change', syncChoices);
  species.addEventListener('change', syncChoices);
  syncChoices();
  function selectionText(select, otherInput) {
    return select.value === 'other' ? otherInput.value.trim() : select.selectedOptions[0].textContent.trim();
  }
  function showStatus(message, state) {
    status.textContent = message;
    status.dataset.state = state;
    status.hidden = false;
    status.focus();
  }
  function currentPayload() {
    return buildEnquiryPayload({
      email: form.querySelector('#contact-email').value.trim(),
      service: form.querySelector('#interest').selectedOptions[0].textContent.trim(),
      target: selectionText(target, targetOther),
      species: selectionText(species, speciesOther),
      goals: form.querySelector('#goals').value,
      honeypot: form.querySelector('#contact-website').value
    });
  }
  function refreshFallback() {
    if (!fallback.hidden) fallback.href = buildEnquiryMailto(currentPayload());
  }
  form.addEventListener('input', refreshFallback);
  form.addEventListener('change', refreshFallback);
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (sending || !form.reportValidity()) return;
    const payload = currentPayload();
    sending = true;
    button.disabled = true;
    button.textContent = 'Sending enquiry…';
    form.setAttribute('aria-busy', 'true');
    status.hidden = true;
    fallback.hidden = true;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch('https://formsubmit.co/ajax/usaurabh@illinois.edu', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify(payload),
        signal: controller.signal
      });
      const data = await response.json();
      if (!isEnquirySubmissionAccepted(response, data)) {
        const activation = data && typeof data.message === 'string' && /activat|confirm.{0,30}email/i.test(data.message);
        throw new Error(activation ? 'activation_required' : 'submission_unconfirmed');
      }
      form.reset();
      syncChoices();
      showStatus('Your enquiry has been submitted. We’ll reply to the email address you provided.', 'success');
    } catch (error) {
      const message = error.message === 'activation_required'
        ? 'Online email delivery is awaiting activation. Please email your enquiry directly to usaurabh@illinois.edu.'
        : 'We could not confirm your submission. Your entries are still here. Please try again later or email usaurabh@illinois.edu directly.';
      showStatus(message, 'error');
      fallback.href = buildEnquiryMailto(currentPayload());
      fallback.hidden = false;
    } finally {
      clearTimeout(timeout);
      sending = false;
      button.disabled = false;
      button.innerHTML = defaultButton;
      form.removeAttribute('aria-busy');
    }
  });
}
initialiseEnquiryForm();
