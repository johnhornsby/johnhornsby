export const restoreScrollTop = (route) => {
  // @TODO properly store scrollTop in well defined object
  if (window.sessionStorage[route]) {
    document.scrollingElement.scrollTo(0, parseInt(window.sessionStorage[route], 10));
  }
};

export const storeScrollTop = (route) => {
  window.sessionStorage[route] = document.scrollingElement.scrollTop;
};
