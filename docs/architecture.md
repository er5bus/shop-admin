# Architecture

```
src
|
|___ assets
|___ components
|___ constants
|   |___ index.js
|
|___ modules
|   |___ feature-module-1
|   |   |___ common
|   |   |   |___ components
|   |   |   |___ ...containers.js
|   |   |___ feature-module-container-1   
|   |   |   |___ ...containers.js
|   |   |   |___ components
|   |   |___ actions
|   |   |___ constants
|   |   |___ reducers
|   |   |___ routes
|   |___ ...
|   |___ common
|       |___ components
|       |___ ...containers.js
|       |___ hooks
|       |___ ...
|
|___ locales
|   |___ ar
|       |___ translation.json
|
|___ midleware
|   |___ api.js
|   |___ storage.js
|   
|___ routes
|   |___ feature-module-1
|   |    |___ feature-module-container
|   |___ index.js
|   
|___ helpers
|   |___ index.js
|   |___ ...
|___ reducers
|   |___ index.js
|   |___ ...
|___ i18n
|   |___ index.js
|   |___ ...
|___ configureStore.js
|___ index.js
```

## 1. Styles `src/assets`

Contains:
- All scss styles, fonts, images ...

## 2. UI `src/components`

Contains:
- All global and dumb components like buttons, card, inputs

## 3. Styles `src/constants`

Contains:
- All global constants, config varibles


## 4. Features modules `src/modules`

Contains:
- Contains all features modules
- Every feature have it's own folders:
    - Containers modules
    - Actions
    - Reducers
    - Routes
    - constants
- Contains common folder for common store actions, components, auth, Layouts .. 

**PS:** 
- Keep it simple, no more then four nested forders.
- Try to apply React.lazy() when possible -- Check react code-splitting section.
**Notes**
- Hooks are functions that let us hook into the React state and lifecycle features from function components.
- Actions are payloads of information that send data from your application to your store. They are the only source of information for the store.
- Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.

|-----------------|---------------------------------------|--------------------------------------------------|
|                 | Components (Presentationl Components  | Container (Presentationl Components)             |
| Purpose         | How things look \(markup, styles\)    | How things work \(data fetching, state updates\) |
| Aware of Redux  | No	                                  | Yes                                              |
| To read data	  | Read data from props	                | Subscribe to Redux state                         |
| To change data	| Invoke callbacks from props	          | Dispatch Redux actions                           |
 

## 5. Translation `src/locales`

Contains:
- All translations files fr, ar, ...

## 5. Middleware `src/middleware`

Contains:
- All middlewares

**Notes**
- Middleware provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.
- We can use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more.

## 6. Routes: `src/routes`

Contains:
- All app routes declarations

## 7. Helpers : `src/helpers`

Contains:
- All Functions that you will use

## 10. Reducers `src/reducers`

Contains:
- combined reducers

## 9. Translation loader `src/i18n`

Contains:
- the translation config

## 8. Store `src/configureStore.js`

Contains:
- the store creation with dynamic reducers

**Notes**
- A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.
- A store is not a class. It's just an object with a few methods on it. To create it, pass your root reducing function to createStore.

## 10. Main file `src/index.js`

Contains:
- the app config of layouts, styles, ....