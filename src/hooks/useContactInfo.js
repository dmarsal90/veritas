import { useMemo } from 'react';
import { getPhone, getPhoneHref, getEmail, getEmailHref } from '../utils/contactObfuscation';

export function useContactInfo() {
  return useMemo(() => ({
    phone: getPhone(),
    phoneHref: getPhoneHref(),
    email: getEmail(),
    emailHref: getEmailHref(),
  }), []);
}