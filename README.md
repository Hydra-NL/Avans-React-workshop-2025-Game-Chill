# A Full-Stack Experience with MERNG - Game & Chill
What are we going to create?

### What are you going to learn?
- ⚛️ **React & Next.js** - Modern frontend development
- 🟢 **Node.js & Express** - Backend API development
- 🔄 **CRUD GraphQL** with GraphQL
- 🎨 **UI** Material-UI
- 🗄️ **Database** with MongoDB & Mongoose
- ⚡ **Real-time updates** with GraphQL caching

--- --- --- --- --- ---

## About us & our tech stack

### Frontend (FE) Setup
- General React + MUI
- Project stucture

### Backend (BE) Setup  
- General Node/GraphQL
- Folder stucture

--- --- --- --- --- ---

## Setup Node 24.2.0
Win
- Download: https://github.com/coreybutler/nvm-windows
nvm install 24.2.0
nvm use 24.2.0

Mac
- Install nvm first
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 24.2.0
nvm use 24.2.0

--- --- --- --- --- ---
## Profile Page Development

### 1. Query Data Integration - Demo
**Goal:** Replace hardcoded data with real GraphQL query data
- There is a hardcoded constant ready which has to be replaced with real data
- Pass props to the correct components
- **Files:** `frontend/src/pages/profile/index.page.jsx`, `frontend/src/modules/profile/components`

### 2. Expand Database Fields - Demo/Solo
**Goal:** Retrieve more User fields from the database
- Study the database schema in MongoCompass
- Update mongoose model with missing fields that are present in the database
- Update GraphQL schema and FE query
- Display the new fields in the profile page
- **Bonus**: Add even more fields to the database that weren't present before and retrieve those as well
- **Files:** `user.model.js`, `user.graphql`, `user.fragment.js`

### 3. Update Form Dialog - Demo
**Goal:** Update functionality
- Form submission
- Mutation
- Add field
- **Files:** `user.mutation.js`, `profile_update.form.jsx`

### 4. Update Counter & Debug - Demo
**Goal:** Implement update count with error
- Update counter logic
- Error debugging for max updates
- **Files:** `user.service.js`, `user.fragment.js`

### 5. GraphQL Caching - Demo
**Goal:** GraphQL caching
- Update name in profile, see change in app bar
- Cache invalidation
- Real-time UI updates without page refresh

--- --- --- --- --- ---

# Overview page
### 1. Hardcoded Data to real Query data
**Goal:** Replace hardcoded data with real GraphQL query data
- There is a hardcoded constant ready which has to be replaced with real data
- Create a new query
- Connect the query with the component

### 2. Create your own Card component
**Goal:** Create a new Card component to use in the overview page
- Copy & Paste the basic Card structure from the `/components` folder
- Style the card with Material-UI components
- Add gaming-specific fields (rating, genre, players)  
- **Bonus:** Add a loader to the Overview page (skeleton)
- **Files:** `frontend/src/modules/overview/components/game_event_card.jsx`

### 3. Create Card Form Mutation - **Demo/Solo**
**Goal:** Implement functionality to create new Game Events
- Create a Dialog with a form with inputs for Game Event creation
- GraphQL mutation resolver/schema

### 4. Delete Card with Confirmation - **Solo**
**Goal:** Implement delete-functionality with confirmation
- Confirmation dialog before actual delete
- Create a GraphQL mutation for the DELETE operation
- UI feedback (loading states, success/error messages)
- Cache update after successful delete
- **Bonus:** Undo functionality
- **Files:** `backend/src/graphql/card.mutation.js`, `frontend/src/modules/overview/components/delete_confirmation.dialog.jsx`

--- --- --- --- --- ---

# Detail page - **Completely Solo**
1. Retrieve data
2. Add loading skeletons
3. Add a way to navigate to the previous page
4. Display retrieved data
5. Make the page mobile friendly (responsive)

--- --- --- --- --- ---
## Docs:
- https://mui.com/material-ui/all-components/
- https://mongoosejs.com/docs/guide.html
- https://nextjs.org/docs
- https://www.apollographql.com/docs/graphos/platform
