// AISPL - GP HOMES. Reuse the existing base pixel; do not initialize it here.
export const META_PIXEL_ID = "1581247209293701";
const sentLeads = new Set();
const productionHosts = new Set(["gphomes.in", "www.gphomes.in"]);

function canTrack(marketingConsent) {
  return typeof window !== "undefined" &&
    process.env.REACT_APP_META_TRACKING_ENABLED === "true" &&
    productionHosts.has(window.location.hostname) &&
    marketingConsent === true && typeof window.fbq === "function";
}

// Invoke only after the API confirms a saved enquiry. Use a non-personal ID.
// Reuse this event ID for a matching server-side Lead event if CAPI is added.
export function trackSuccessfulEnquiry({ submissionId, marketingConsent } = {}) {
  if (!canTrack(marketingConsent) || !submissionId) return false;
  const eventId = String(submissionId);
  if (sentLeads.has(eventId)) return false;
  window.fbq("trackSingle", META_PIXEL_ID, "Lead", {}, { eventID: eventId });
  sentLeads.add(eventId);
  return true;
}

// A contact click is intent, not proof of a saved enquiry.
export function trackContactClick({ channel, marketingConsent } = {}) {
  if (!canTrack(marketingConsent) || !["phone", "whatsapp"].includes(channel)) {
    return false;
  }
  window.fbq("trackSingleCustom", META_PIXEL_ID, "ContactClick", { channel });
  return true;
}
