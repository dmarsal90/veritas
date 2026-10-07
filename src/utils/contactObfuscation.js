const encodedPhone = 'MjM5LTIyNy0wNjI0';
const encodedEmail = 'YXJ0aHVyQHZlcml0YXNlcnZpY2VzbGxjLmNvbQ==';
const encodedPhoneHref = 'dGVsOisxMjM5MjI3MDYyNA==';
const encodedEmailHref = 'bWFpbHRvOmFydGh1ckB2ZXJpdGFzZXJ2aWNlc2xsYy5jb20=';

function decodeBase64(str) {
  try {
    return atob(str);
  } catch {
    return '';
  }
}

export function getPhone() {
  return decodeBase64(encodedPhone);
}

export function getPhoneHref() {
  return decodeBase64(encodedPhoneHref);
}

export function getEmail() {
  return decodeBase64(encodedEmail);
}

export function getEmailHref() {
  return decodeBase64(encodedEmailHref);
}

export function getContactInfo() {
  return {
    phone: getPhone(),
    phoneHref: getPhoneHref(),
    email: getEmail(),
    emailHref: getEmailHref(),
  };
}

export function renderPhoneLink(className = '', ariaLabel = '') {
  const info = getContactInfo();
  const link = document.createElement('a');
  link.href = info.phoneHref;
  link.className = className;
  link.setAttribute('aria-label', ariaLabel || `Call ${info.phone}`);
  link.textContent = info.phone;
  return link;
}

export function renderEmailLink(className = '', ariaLabel = '') {
  const info = getContactInfo();
  const link = document.createElement('a');
  link.href = info.emailHref;
  link.className = className;
  link.setAttribute('aria-label', ariaLabel || `Email ${info.email}`);
  link.textContent = info.email;
  return link;
}