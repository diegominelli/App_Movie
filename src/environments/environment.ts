import { ConfiguratioModel } from './interface/configuration.model';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: ConfiguratioModel = {
  production: false,
  apiBase: 'https://api.themoviedb.org/4/',
  token:
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTNkMzUyOWRlODY0OWRlYmE0MmU2MDQxOTliMjAxNyIsInN1YiI6IjYwZTY0ZGE5NmVlM2Q3MDA0NmM0OWQ4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MG6FVXeuox1EqV2jxwoEZfEi-n8pfEhXIXN3DBzm79w',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
