app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://nss-pinterested.firebaseio.com");
    return $firebaseAuth(ref);
  }
]);