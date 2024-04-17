
To run the project

First, you need to clone the repository from GitHub. You can find the clone URL on the repository page on GitHub;
You need to install dependencies run 'npm instal';
## Getting Started

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Project includes:
List View (1st page): • Display a list of starwars heroes. Also in the bottom, you can see butons. When you press it you can move to the next or to the previous page if it exists.

Hero page:
Detailed information about the hero: When clicking on a specific hero, display detailed information in the form of a graph where:
 -The main node is the selected hero.
 -Links from the hero lead to the movies in which they appear.
 -Links from each movie lead to the spacecrafts on which the hero traveled.

 Technical Considerations: 
  - main framework - Next.js;
  - API requesting - Axios;
  - UI libary - Tailwind;
  - graph visualization - React Flow;
  - testing: Jest.

  To run tests:
  ```bash
  npm run test
  # or
  yarn test
  # or
  pnpm test
  # or
  bun test
  ```
- [DEMO LINK](https://starnavi-starwars-task.vercel.app/) 
  
