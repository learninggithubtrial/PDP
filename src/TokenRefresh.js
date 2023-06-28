function refreshToken() {
  var newToken = '...';
  sessionStorage.setItem('token', newToken);

  setTimeout(refreshToken, 10 * 60 * 1000);
}

export default function TokenRefresh() {
  var token = sessionStorage.getItem('token');

  if (token) {
    var lastRefreshTime = sessionStorage.getItem('lastRefreshTime');
    var currentTime = new Date().getTime();

    if (currentTime - lastRefreshTime >= 10 * 60 * 1000) {
      refreshToken();
    }
  } else {
    var initialToken = '...'; //new api call for token
    sessionStorage.setItem('token', initialToken);

    setTimeout(refreshToken, 10 * 60 * 1000);
  }

  sessionStorage.setItem('lastRefreshTime', new Date().getTime());
}
