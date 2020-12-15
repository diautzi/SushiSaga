# Getting Started with Create React App

Welcome to Sushi Saga, where your journey to sushi is only just beginning!


## Available Scripts

In the project directory, first start json-server:
### `yarn start-db`

Runs the app in the development mode.\
Open [http://localhost:3000/sushis](http://localhost:3000/sushis) to view the json data in the browser.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view react app in the browser.

## Deliverables
- Sushi list is properly received from the server
- Only 4 sushi are rendered at a time
- Clicking the "More Sushi!" button shows the next set of 4 sushi in the list. For this assignment, you don't have to be concerned about what happens when you reach the end of the sushi list.
- Clicking a sushi on a plate will eat the sushi, causing it to be removed from its plate and an empty plate to appear on the table.
- We need to make money! Whenever a sushi is eaten, customers should be automatically charged! Based on a budget decided by you, the developer, the amount of money remaining should go down by the cost of the sushi that was eaten. There is a spot to display this number in the Table component
- No free meals! Customers cannot eat any sushi that exceeds the amount of money remaining in their balance
