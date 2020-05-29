// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyD7_9Us_Nz_yvLJC9h--3pElJJFFApuWP8",
    authDomain: "gstioname.firebaseapp.com",
    databaseURL: "https://gstioname.firebaseio.com/",
    projectId: "gstioname",
    storageBucket: "gstioname.appspot.com",
    messagingSenderId: "709910894475",
    appId: "1:709910894475:web:d882c8be8d09c70197018e"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);