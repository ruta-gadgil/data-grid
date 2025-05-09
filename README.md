# DataGrid

## How to run:
1. Clone repository
2. Navigate to data-grid
3. Run command `npx nx serve frontend` to run the frontend at ‘localhost:4200’
4. Run command `npx nx serve api` to run the api (listens on port 3000)

## How to use: 
1. Click on cell to update its value
2. Only ‘return’ key and click outside to save new cell value
Data contracts for api:
    1. Users:
        1. [{id: (unique num), email: ‘string’, avatar: ‘url’}, {id: (unique num), email: ‘string’, avatar: ‘url’}, …]
    2. Grid:  
        1. column types can be one of (link, tag, num, text, user)
        2. tableData = {
		    columns: [{colId: 0, name: '', type: ''}, {colId: 1, name: '', type: ''}, {colId: 2, name: '', type: ''}, ...]
			data: [[], [], …]}

## Assumptions:
Always assume that the backend will serve type checked values and follow contract for data. No type checking is performed at the default page. Basic type checking always happens only when saving updated values

## Design decision:
1. Usage of zustand for state management of the grid data to make it pluggable
2. Memoize Cell component
3. Column types of link and tags are not editable

## ToDo:
1. Fix error: ‘Each child in a list should have a unique "key" prop’ on TableBody. 
2. Unit testing, e2e testing
3. Implement actual POST request to save data on the backend.
4. Debouncing for on hover of additional users
5. Add cohesive styling, currently the table jumps when switching to num and text editors
6. Create shared libraries for types and data access to be used by frontend and api
7. Add a database to save table data, users etc. to facilitate persisting updates to backend

## Future enhancements:
1. Add pagination along with chunking of data to improve performance of larger datasets
2. Consider virtualization to optimize performance 
3. Add different colors for different tags
4. Add alert component to display alert messages
5. Add other table capabilities like sorting, ordering, adding new rows, deleting rows, moving rows, moving column etc.
6. Unregister renderer/editor when component unmounts
