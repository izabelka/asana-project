export const extractFromSearchParams = (argKey) => {
  // look in current search params
  if (typeof window !== 'undefined' && window.location.search) {
    let match = window.location.search.match(`[?&]${argKey}=([^&]+)`);
    if (match) {
      return match[1];
    }
  }
  return '';
}
