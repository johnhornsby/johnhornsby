export const gtmPageView = (url) => {
  const pageEvent = {
    event: 'pageview',
    page: url,
  };

  if (typeof window !== 'undefined') {
    window && window.dataLayer && window.dataLayer.push(pageEvent);
  }

  return pageEvent;
};
