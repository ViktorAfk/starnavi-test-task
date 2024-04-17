Test cases:

Testing Hero page:
Test scenarious:
1. Test for correct showing Hero name:
  - Objective: Verify that component render correct hero name that we chose;
  - Input: hero with ID '10';
  - Expected Output: hero name 'Obi-Wan Kenobi';
  - Status: Pass;
2. Test for correct showing Hero planet:
  - Objective: Verify that the component renders the correct Planet name with an ID that exists in a chosen hero data;
  - Input: hero with ID '10' and Planet ID '1';
  - Expected Output: Planet name 'Stewjon';
  - Status: Pass;
3. Test for showing message, if there is no planet:
  - Objective: Verify that the component renders the correct message if there is no planet detected in the database;
  - Input: Unexists Planet ID '150';
  - Expected Output: information 'Sorry, no planet detected';
  - Status: Pass;
4. Test for showing residents on the planet:
  - Objective: Verify that the component renders the correct quantity of the people who live on that planet;
  - Input: Planet ID '1', array of ids resitents [ 1, 2, 4, 6, 7, 8, 9, 43, 11, 62];
  - Expected Output: length of the resident's array should be equal quantity of Link elements that were rendered on the page.
  - Status: Pass;
5. Test for showing message, if there is no residents:
  - Objective: Verify that the component renders the correct message if there is no residents detected in the database or array doesn't have ids of residents;
    Input: Planet ID '3', planets without residents.
  - Expected Output: information 'no information';
  - Status: Pass;
6. Test for correct showing Starship name:
  - Objective: Verify that the component renders the correct Starship name with an ID that exists in a chosen hero data and the movie;
  - Input: Starship ID '12';
  - Expected: Starship name 'X-wing';
  - Status: Pass;
7. Test for correct showing Film's title:
  - Objective: Verify that the component renders the correct Film's name with an ID that exists in a chosen hero data;
  - Input: film ID '1';
  - Expected: Film's name 'A New Hope';
  - Status: Pass;

Testing 'getDetailInformation' function:
Test scenarious:
1. Test for returning correct data:
- Objective: Verify that the function returns correct information about the hero, movies, and starships that are relevant to him;
- Input: Hero ID '10';
- Expected: Object "person"  is equal  object'mockPerson' located in the file getInformation-data.ts, array 'heroMovies' is equal  array 'filmsData.results' located in the file mock-films.ts, and array 'usedStarships' is equal array 'mockStarshipsData' located in the getInformation-data.ts;
- Status: Pass.

2. Test for returning correct data if hero didn't use any starship in the movies.
- Objective: Verify that the function returns correct information if there are no starships that the current hero used in the movie.
- Input: Hero ID '12';
- Expected: Object 'usedStarships' is equal to object 'heroWithoutStarships' located in getInformation-data.ts;
- Status: Pass.

3. Test for throwing an error:
  - Objective: Verify that the function throw an error, if there is no such hero in database;
  - Input: Unexists Hero ID '150';
  - Expexted: Throw an error;
  - Status: Pass.

  Testing function which prepare Flow parameters:
  Test scenarious:
  1. Test for correct flow params:
  - Objective: Verify that the function returns correct flow parameters if ID exists;
  - Input: Hero ID '10';
  - Expected: Object 'initial edges' is equeal to object 'mockEdges' located in the file mock-edges.ts and array of initialNodes ID's is equal to array of mockNodes ID's;
  - Status: Pass.
  2. Test for throwing an error:
   - Objective: Verify that the function throw an error, if there is no such hero in database;
   - Input: Unexists Hero ID '150';
   Expected: Throw an error;
   Status: Pass.
