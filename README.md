# A Full-Stack Experience with MERNG - Game & Chill
Wat gaan we maken?

### Wat ga je leren?
- ⚛️ **React & Next.js** - Modern frontend development
- 🟢 **Node.js & Express** - Backend API development
- 🔄 **CRUD GraphQL** met GraphQL
- 🎨 **UI** Material-UI
- 🗄️ **Database** met MongoDB & Mongoose
- ⚡ **Real-time updates** met GraphQL caching

--- --- --- --- --- ---

## Over Ons & Onze Tech Stack

### Frontend Setup
- Globaal React + MUI
- Project structuur

### Backend Setup  
- Globaal Node/GraphQL
- Folder structuur

--- --- --- --- --- ---

## Setup Node 24.2.0
Win
- Download van: https://github.com/coreybutler/nvm-windows
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
**Doel:** Vervang hardcoded data met echte GraphQL query data

- Er staat hardcoded constant klaar die vervangen kan worden met echte data
- Props doorgeven aan de juiste components
- **Files:** `frontend/src/pages/profile/index.page.jsx`, `frontend/src/modules/profile/components`

### 2. Database Fields Uitbreiden - Demo/Solo
**Doel:** Haal meer user velden op uit de database

- Onderzoek database schema in Compass
- Update mongoose model met missende velden die wel in database staan
- Update GraphQL schema en FE query
- Toon nieuwe velden op profile page
- **Bonus**: Voeg eventueel hele nieuwe velden toe in je database en haal die ook op
- **Files:** `user.model.js`, `user.graphql`, `user.fragment.js`

### 3. Update Form Dialog - Demo
**Doel:** Update functionaliteit
- Form submission
- Mutation
- veld toevoegen
- **Files:** `user.mutation.js`, `profile_update.form.jsx`

### 4. Update Counter & Debug - Demo
**Doel:** Implement update count met error
- Update counter logica
- Error debugging voor max updates
- **Files:** `user.service.js`, `user.fragment.js`

### 5. GraphQL Caching - Demo
**Doel:** GraphQL caching
- Update naam in profile, zie wijziging in app bar
- Cache invalidation
- Real-time UI updates zonder page refresh

--- --- --- --- --- ---

# Overview page
### 1. Hardcoded Data naar Echte Query
**Doel:** Vervang hardcoded console.log data met werkende GraphQL query
- Er staat een console.log met mock data klaar in de page
- Bouw de echte query op
- Verbind query met component

### 2. Eigen Card Component maken
**Doel:** Bouw een custom card component voor de game lijst
- Copy paste basis card structure uit components folder
- Style de card met Material-UI componenten  
- Voeg gaming-specifieke velden toe (rating, genre, players)
- **Bonus:** Voeg loading effect toe op je overview page
- **Files:** `frontend/src/modules/overview/components/game_event_card.jsx`

**### 3. Create Card Form Mutation - Demo/Solo**
**Doel:** Implementeer functionaliteit om nieuwe game events toe te voegen
- Form dialog voor nieuwe game input
- GraphQL mutation resolver/schema

**### 4. Delete Card met Confirmation - Solo**
**Doel:** Implementeer delete functionaliteit met user confirmation
- Confirmation dialog before delete
- GraphQL mutation voor DELETE operatie  
- UI feedback (loading states, success/error messages)
- Cache update na successful delete
- **Bonus:** Undo functionality
- **Files:** `backend/src/graphql/card.mutation.js`, `frontend/src/modules/overview/components/delete_confirmation.dialog.jsx`

--- --- --- --- --- ---

# Detail pagina helemaal zelf
# 1. Data ophalen
# 2. loading skeleton
# 3. navigation terug
# 4. Data inzichtelijk maken
# 5. Mobile responsive (als tijd over)

# Search?
--- --- --- --- --- ---
## Docs:
- https://mui.com/material-ui/all-components/
- https://mongoosejs.com/docs/guide.html
- https://nextjs.org/docs
- https://www.apollographql.com/docs/graphos/platform
