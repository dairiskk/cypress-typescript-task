# Cypress typescript

1. npm install
2. npm run cypress:open

## Progress
1. Started, too late because of sickness, at least ill try
2. Decided first to check some cypress related things like plugins and support(custom cy funtions)
3. Created project and now will start the setup of environamnt, steps that are mentioned in Appendix
4. Ran in to issue af exetutin npm run migration:run Error: File 'migrations/*.ts' not found.
5. Wrote to Alex Caraba for help but as its sunday may be hell not respond, so Ill try to do the migrations manually
6. Downgradet typescript of the app, looks like error that was befire is gone but now i get new error
error TS6231: Could not resolve the path '/node_modules/.bin/typeorm' with the extensions: '.ts', '.tsx', '.d.ts', '.cts', '.d.cts', '.mts', '.d.mts'.
  The file is in the program because:
    Root file specified for compilation
7. Dont think that typescript version will help because of other project dependancies
8. Issue is solved and now I can start thinking about the case itself

As a user belonging to the application - > no questions
I want to create eleven new articles -> no questions
And ensure that they are correctly displayed -> question: correctly displayed, to general, would be nice to see exactly what should be desplayed but ill assume its correct data only

9. So the tests are finalized, had issues with finding the needed articles in the list, my next thing would be to add funtion that would find article in page by title and it cannot it would go to next page and then validate the data of that topic as not it does not work so good as they are not sorted in the list by creation time, or they were created to fast.