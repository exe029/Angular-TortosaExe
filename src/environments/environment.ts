// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'angular-corder',
    appId: '1:1067503115606:web:493469a8a5455179d1caf7',
    storageBucket: 'angular-corder.appspot.com',
    apiKey: 'AIzaSyC2x20aivoUtNy2iR_bzPWWHEVpRv_9NI4',
    authDomain: 'angular-corder.firebaseapp.com',
    messagingSenderId: '1067503115606',
    measurementId: 'G-1LW9E5G8GZ',
  },
  firebaseConfig: {
    apiKey: "AIzaSyC2x20aivoUtNy2iR_bzPWWHEVpRv_9NI4",
    authDomain: "angular-corder.firebaseapp.com",
    projectId: "angular-corder",
    storageBucket: "angular-corder.appspot.com",
    messagingSenderId: "1067503115606",
    appId: "1:1067503115606:web:3cd0380f03d306bed1caf7",
    measurementId: "G-0LJGLMMZ6F"
  },
  production: false,
  authApi: 'https://fake-login-api-production.up.railway.app/api/auth/login'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
