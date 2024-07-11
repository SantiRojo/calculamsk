window.addEventListener('DOMContentLoaded', navigator);
window.addEventListener('hashchange', navigator);

function navigator() {
  console.log({ location });

  if (infiniteScroll) {
    window.removeEventListener('scroll', infiniteScroll, {passive: false});
    infiniteScroll = undefined;
  }

  if (location.hash.startsWith('#trends')) {
    trendsPage();
  } else if (location.hash.startsWith('#search=')) {
    searchPage();
  } else if (location.hash.startsWith('#movie=')) {
    movieDetailsPage();
  } else if (location.hash.startsWith('#category=')) {
    categoriesPage();
  } else {
    homePage();
  }
};

function homePage() {
  
}