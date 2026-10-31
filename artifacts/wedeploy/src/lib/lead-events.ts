/** Counts actions through the existing GA tag. Never sends form values or link addresses. */
type LeadEvent = 'generate_lead' | 'candidate_registration' | 'profile_request' | 'contact_click';
type EventData = { lead_type?: 'profile_enquiry' | 'vacancy_enquiry'; channel?: 'phone' | 'email' };
function event(name: LeadEvent, data: EventData = {}) {
  if (typeof window === 'undefined') return;
  const analytics = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  // Tracking must never interrupt navigation or turn a successful submission into an error.
  try { analytics?.('event', name, { ...data, form_page: window.location.pathname, transport_type: 'beacon' }); } catch { /* Analytics may be unavailable or blocked. */ }
}
export function trackContactSubmission(role: 'opdrachtgever' | 'kandidaat') {
  if (role === 'kandidaat') event('candidate_registration');
  else event('generate_lead', { lead_type: new URLSearchParams(window.location.search).has('profiel') ? 'profile_enquiry' : 'vacancy_enquiry' });
}
export function installContactClickTracking() {
  document.addEventListener('click', click => {
    const anchor = click.target instanceof Element ? click.target.closest('a[href]') : null;
    if (!anchor) return;
    const href = anchor.getAttribute('href') ?? '';
    if (href.startsWith('tel:')) event('contact_click', { channel: 'phone' });
    else if (href.startsWith('mailto:')) event('contact_click', { channel: 'email' });
    else {
      const target = new URL(href, window.location.origin);
      if (target.origin === window.location.origin && target.pathname === '/contact' && target.searchParams.has('profiel')) event('profile_request');
    }
  });
}
