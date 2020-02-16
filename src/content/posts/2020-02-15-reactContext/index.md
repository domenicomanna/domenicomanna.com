---
title: "An Introduction to React's Context API"
date: "2020-02-15"
tags: ["React"]
featuredImage: ../../featuredImages/reactIcon.png
---

In this post, we're going to take a look at React's context API and how it can be used to build an application.

The demo and source code can be found at:

- [View Demo](https://domenicomanna.github.io/simpleAppUsingContext/#/)
- [View Source](https://github.com/domenicomanna/simpleAppUsingContext)

## React's Context API

### What is the Context API?

The context API gives us a way to access data from other components without the data having to be passed down as props. Essentially, it gives us a way to have global state.

### Why is it Useful?

It's useful because it prevents us from needing to pass down props across many components. This is especially useful in instances where data from a top-level component is needed by a highly nested component.

Now that we know what the context API is, and why it's useful, let's take a look at how it can be used.

## A Quick Look At How to Use the Context API

### How to Create A Context

When working with the Context API, the first thing we need to do is create a context. To create a context, we use the `createContext` function exported from React. We can pass this function a parameter which represents the default value (more on this below) of the context. In our case though, we have not passed a parameter, which means the default value of our context will be undefined.

```js
import { createContext } from "react"

const myContext = createContext()

console.log(myContext.Provider)
console.log(myContext.Consumer)
```

The `createContext` function returns an object. We can see that this object has properties called `Provider` and `Consumer`. The `Provider` property is a React component. This component has a `value` prop where we specify the data that we want to be available to components that consume, or use, the context. The `Consumer` property gives us one way to access that data in other components. However, in the project that we will create, we will use the `useContext` hook to access the data, so we will not use the `Consumer` property.

### How to Use a Context

To use the data provided to our context, we simply call the `useContext` function exported from React. As a parameter to the `useContext` function, we pass in the context object that was initially created from our `createContext` call.

```jsx
import React, { createContext, useContext } from "react"

export const myContext = createContext()

function RandomJSXComponent() {
  const data = useContext(myContext)
  return <div>hi</div>
}

export default RandomJSXComponent
```

The `useContext` function returns the value provided by the nearest rendered `Provider` for that context type. Since we are calling `useContext` with `myContext` as a parameter, then the provider that will be searched for in the component tree of our app is `myContext.Provider`. However, since `myContext.Provider` is not rendered anywhere in our app, then `myContext.Provider` will not be found. In the case of a provider not being found, `useContext` will return the default value that was specified in the `createContext` call. In our example, since we did not specify a default value, the value returned from our `useContext` call will be undefined.

```jsx
import React, { createContext, useContext } from "react"

export const myContext = createContext()

function RandomJSXComponent() {
  const data = useContext(myContext)
  console.log(data === undefined) // true
  return <div>hi</div>
}

export default RandomJSXComponent
```

Let's look at the same example but this time let's specify a default value:

```jsx
import React, { createContext, useContext } from "react"

export const myContext = createContext(10)

function RandomJSXComponent() {
  const data = useContext(myContext)
  console.log(data) // 10
  return <div>hi</div>
}

export default RandomJSXComponent
```

Now, the default value is 10 instead of undefined.

### Summary

This was a basic explanation of how to use the Context API, but now let's see how these concepts can be used in a real example.

## Building the Project

### Project Description

The project we will create is a simple clothes app where we can favorite and unfavorite clothe items. We will have two different routes. On one of the routes, we will display all of the clothe items, and on the second route, we will display only the clothe items that were favorited. Since the same clothe items are being used in these two routes, we will take advantage of the context API to make this data available without it having to be passed down as props.

### Project Setup

We will be using the create react app with the TypeScript template in this example.

```shell
npx create-react-app clothes-site --template typescript
```

### Creating a Model for Our Clothe Item

Let's first create a model for our clothe item. This model will contain all the properties that all of our clothe items will have. Let's create a folder in our `src` folder and call it `models`. In `src/models`, let's create a file called `IClotheItem.ts`, and add the following code to it:

```ts:title=IClotheItem.ts
export default interface IClotheItem {
  id: number
  description: string
  isFavorited: boolean
}
```

According to this interface, all of our clothe items will have the following properties: an id, a description, and an isFavorited status.

Now that we have the model defined, let's create a fake API client that will return an array of clothe items.

### Creating Fake Data For Our Clothe Items

In our `src` folder, let's create a new folder called `api`. In `src/api` let's add a new file called `ClothesApiClient.ts`, and add the following code to it:

```ts:title=ClothesApiClient.ts
import IClotheItem from "../models/IClotheItem"

export default class ClothesApiClient {
  getClothes(): IClotheItem[] {
    // fake api call...
    return [
      { id: 1, description: "A lovely t-shirt", isFavorited: false },
      { id: 2, description: "A lovely blouse", isFavorited: false },
      { id: 3, description: "A lovely dress", isFavorited: false },
      { id: 4, description: "A lovely suit", isFavorited: false },
      { id: 5, description: "An awesome pair of shoes", isFavorited: false },
      { id: 6, description: "An awesome belt", isFavorited: false },
    ]
  }
}
```

Since we now have some data, let's work on creating the context.

### Creating the Context

In the `src` folder, lets create a new folder called `contexts`. In `src/contexts`, add a new file called `ClothesContext.tsx`. Let's first start with defining which properties we want our context data to contain. We will do this by using an interface. Add the following code in the `ClothesContext.tsx` file:

<div class = "codeTitle">ClothesContext.tsx</div>

```tsx
import IClotheItem from "../models/IClotheItem"

interface IClothesContext {
  clotheItems: IClotheItem[]
  isLoading: boolean
  toggleFavorite: (id: number) => void
}
```

So according to this interface, we want our context to contain an array of type `IClotheItem`. We also want our context to keep track of when the data is loading. Lastly, we defined a function that takes as a parameter an `id`, which will be an `id` of a clothe item, and it returns nothing. This function will be used for toggling the favorite status of the clothe item with the `id` that matches the given `id`.

Now that we have the interface defined, let's actually create the context:

<div class = "codeTitle">ClothesContext.tsx</div>

```tsx
import { createContext } from "react"
import IClotheItem from "../models/IClotheItem"

interface IClothesContext {
  clotheItems: IClotheItem[]
  isLoading: boolean
  toggleFavorite: (id: number) => void
}

export const ClothesContext = createContext<IClothesContext>( {/* highlight-line */}
  {} as IClothesContext                                       {/* highlight-line */}
)                                                             {/* highlight-line */}
```

With this addition, we specified that the context that we are creating will have all of the properties defined in our interface. The `{} as IClothesContext` represents a default value that is given to our context. The `as` keyword just specifies to treat our empty object as if it were a type of IClothesContext. This is added purely to avoid the TypeScript compile errors. In the project that we are creating, the default value will not be used.

Great, so we have our context created, but now we must render the provider component that is a property of our `ClothesContext`.

### Rendering the Provider Component

Let's add the following code to our `ClothesContext.tsx` file, and then we will explain exactly what's happening

<div class = "codeTitle">ClothesContext.tsx</div>

```tsx
import React, {
  createContext,
  useEffect,
  useState,
  FunctionComponent,
} from "react"
import IClotheItem from "../models/IClotheItem"
import ClothesApiClient from "../api/ClothesApiClient"

const clothesApiClient = new ClothesApiClient()

interface IClothesContext {
  clotheItems: IClotheItem[]
  isLoading: boolean
  toggleFavorite: (id: number) => void
}

export const ClothesContext = createContext<IClothesContext>(
  {} as IClothesContext
)

const ClothesContextProvider: FunctionComponent = ({ children }) => {
  const [clotheItems, setClotheItems] = useState<IClotheItem[]>([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    let clotheItems = clothesApiClient.getClothes()
    setClotheItems(clotheItems)
    setLoading(false)
  }, [])

  function toggleFavorite(id: number) {
    let updatedClotheItems = clotheItems.map(c =>
      c.id === id ? { ...c, isFavorited: !c.isFavorited } : c
    )
    setClotheItems(updatedClotheItems)
  }

  return (
    <ClothesContext.Provider
      value={{
        clotheItems: clotheItems,
        toggleFavorite: toggleFavorite,
        isLoading: isLoading,
      }}
    >
      {children}
    </ClothesContext.Provider>
  )
}

export default ClothesContextProvider
```

With this code, we created a JSX component called ClothesContextProvider. In this component, we are managing state through the use of hooks. In our `useEffect` hook, we load our data from our fake API client. In our `toggleFavorite` function, we change the isFavorited status of the `IClotheItem` that has the same `id` as the `id` parameter. So, that's how the state is being managed in this component. Now let's look more closely at what this functional component is returning.

<div class = "codeTitle">ClothesContext.tsx</div>

```tsx
return (
  <ClothesContext.Provider
    value={{
      clotheItems: clotheItems,
      toggleFavorite: toggleFavorite,
      isLoading: isLoading,
    }}
  >
    {children}
  </ClothesContext.Provider>
)
```

What is being returned is the `Provider` component that was created from the `createContext` function call. If you recall from before, the `Provider` is a react component with a `value prop` where we specify the data that we want available to consuming components. In this case, the value we are specifying is an object that contains the `clotheItems`, the `toggleFavorite` function, and the `isLoading` status.

Lastly, in the return statement, we also specify `children`. This will render all of the children passed as props to our `ClothesContextProvider` component. This point is important, because if we call `useContext(ClothesContext)` from any of these child components, then the value returned is going to be the same value that we gave to our `ClothesContext.Provider` component. This is exactly what we want.

Now that we have our context created with the data we want available to consuming components, let's see how we can use the data in other components.

### Using the Context in Other Components

Let's create a new folder in a `src` folder and call it `components`. In `src/components`, add a new file called `ClotheItem.tsx`, and add the following code to it:

<div class = "codeTitle">ClotheItem.tsx</div>

```jsx
import React, { FunctionComponent, useContext } from "react"
import { ClothesContext } from "../contexts/ClothesContext"

interface IProps {
  id: number;
  description: string;
  isFavorited: boolean;
}

const ClotheItem: FunctionComponent<IProps> = ({
  id,
  description,
  isFavorited,
}) => {
  const clothesContext = useContext(ClothesContext)
  return (
    <li className="clotheItem">
      <p>{description}</p>
      <button
        onClick={() => clothesContext.toggleFavorite(id)}
        className="favorite-clothe-item-button"
      >
        {isFavorited ? "Unfavorite" : "Favorite"}
      </button>
    </li>
  )
}

export default ClotheItem
```

We defined the props this component will receive in our interface `IProps`. The most interesting line in this component is the `useContext` call. Let's examine this more closely:

```jsx
const clothesContext = useContext(ClothesContext)
```

Here we are passing in the `ClothesContext` that we created before. So, if we look back in our `ClothesContext.tsx` file:

<div class = "codeTitle">ClothesContext.tsx</div>

```jsx
export const ClothesContext = createContext<IClothesContext>({} as IClothesContext)
```

This `ClothesContext` that we are exporting is exactly what we are passing as a parameter to our `useContext` call. 

Also, it's important to note that since we currently aren't rendering our `ClotheItem` component as a child of our `ClothesContextProvider` component, a provider will not be found when `useContext` is called. This means that the default value of the context, which in our case is an empty object, will be returned. This is obviously not what we want, and we will fix this soon.

In `src/components`, let's add a new file called `ClotheItemList.tsx`, and add the following code to it:

<div class = "codeTitle">ClotheItemList.tsx</div>

```jsx
import React, { useContext } from "react"
import { ClothesContext } from "../contexts/ClothesContext"
import IClotheItem from "../models/IClotheItem"
import ClotheItem from "./ClotheItem"

const ClotheItemsList = () => {
  const context = useContext(ClothesContext)

  return context.isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <ul className="clotheItems">{transformClotheItems(context.clotheItems)}</ul>
  )
}

function transformClotheItems(clotheItems: IClotheItem[]) {
  return clotheItems.map(c => (
    <ClotheItem
      key={c.id}
      id={c.id}
      description={c.description}
      isFavorited={c.isFavorited}
    />
  ))
}

export default ClotheItemsList
```

This component is retrieving the clothe items from our context and rendering them.

In `src/components`, let's add another file called `FavoritedClotheItemsList.tsx`, and add the following code to it:

<div class = "codeTitle">FavoritedClotheItemsList.tsx</div>

```jsx
import React, { useContext } from "react"
import { ClothesContext } from "../contexts/ClothesContext"
import IClotheItem from "../models/IClotheItem"
import ClotheItem from "./ClotheItem"

const FavoritedClotheItemsList = () => {
  const context = useContext(ClothesContext)
  const favoritedClotheItems = context.clotheItems.filter(c => c.isFavorited)

  return favoritedClotheItems.length === 0 ? (
    <h1>You have no favorited clothes :(</h1>
  ) : (
    <ul className="clotheItems">
      {transformClotheItems(favoritedClotheItems)}
    </ul>
  )
}

function transformClotheItems(clotheItems: IClotheItem[]) {
  return clotheItems.map(c => (
    <ClotheItem
      key={c.id}
      id={c.id}
      description={c.description}
      isFavorited={c.isFavorited}
    />
  ))
}

export default FavoritedClotheItemsList
```

This component retrieves only the clothe items that have been favorited, and then renders them.

At this point, our components are all using the context that we created, however we still need to add a few things to make the app work. We need to add our two routes, some basic styling, and most importantly, we need to render these newly created components as children of our provider component.

Let's work on these fixing these issues.

### Resolving our Final Issues

Since we are going to be using routes, let's install `react-router-dom`.

```shell
npm install react-router-dom
```

In `src/components`, add a new file called `Layout.tsx`, and add the following code to it:

```jsx:title=Layout.tsx
import React, { FunctionComponent } from "react"
import { Link } from "react-router-dom"
import "../App.css"

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <nav>
        <div className="container">
          <ul className="navbar">
            <li>
              <Link to="/">All Clothes</Link>
            </li>
            <li>
              <Link to="/favorited-clothes">Favorited Clothes</Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className="container">{children}</main>

      <footer></footer>
    </>
  )
}

export default Layout
```

Let's also add the following styles in `App.css`

```css:title=App.css
body {
  font-size: 1.2rem;
}

.container {
  max-width: 550px;
  margin: auto;
}

.navbar {
  display: flex;
  list-style: none;
  justify-content: center;
  margin-bottom: 2.5rem;
}

.navbar > * {
  margin-right: 0.8rem;
}

.clotheItem {
  display: flex;
  justify-content: space-between;
}

.favorite-clothe-item-button {
  align-self: center;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.favorite-clothe-item-button:hover {
  background: #ccc;
}

.clotheItems > * {
  margin-bottom: 1.5rem;
}

.clotheItems > * {
  border-bottom: 1px solid #ccc;
}

.clotheItems > *:last-child {
  border-bottom: none;
}
```

Finally, let's render our provider component. In the `App.tsx` file, add the following code:

```jsx:title=App.tsx
import React from "react"
import "./App.css"
import Layout from "./components/Layout"
import ClothesContextProvider from "./contexts/ClothesContext"
import ClotheItemsList from "./components/ClotheItemsList"
import { Switch, Route } from "react-router-dom"
import FavoritedClotheItemsList from "./components/FavoritedClotheItemsList"

const App = () => {
  return (
    <Layout>
      <ClothesContextProvider>
        <Switch>
          <Route path="/" component={ClotheItemsList} exact />
          <Route
            path="/favorited-clothes"
            component={FavoritedClotheItemsList}
          />
        </Switch>
      </ClothesContextProvider>
    </Layout>
  )
}

export default App
```

Since we are rendering the `ClotheItemsList` and `FavoritedClotheItemsList` components as children of the `ClothesContextProvider`, then when `useContext` is called from these children components, the value that is returned will be the value we specified in our `ClotheContextProvider`. Let's take a look at that value again:

<div class = "codeTitle">ClotheContextProvider.tsx</div>

```tsx
return (
  <ClothesContext.Provider
    value={{
      clotheItems: clotheItems,
      toggleFavorite: toggleFavorite,
      isLoading: isLoading,
    }}
  >
    {children}
  </ClothesContext.Provider>
)
```

We can see that the value is an object that contains an array of `clotheItems`, the `toggleFavorite` function and the `isLoading` status. So, this is the value that will be returned when `useContext` is called in any child component of the `ClothesContextProvider` component.

Now we just need to make one last change before we can run our app. Since we are using routes, we need to render our app with a router. Let's replace the existing code in the `index.tsx` file with the following code:

```tsx:title=index.tsx
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { HashRouter } from "react-router-dom"

const app = (
  <HashRouter basename="/">
    <App />
  </HashRouter>
)

ReactDOM.render(app, document.getElementById("root"))

serviceWorker.unregister()
```

With this change in place, you should now be able to run the app.

There is one last important detail to mention, and that is, when do components that call `useContext` rerender?

## When Do Consumers of a Context Rerender?

Consumers of a context rerender every time the `value` prop on the `Provider` component changes. React uses the [Object.is algorithm](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) to determine if the `value` has changed. Let's take a look at our `toggleFavorite` function in our context to better understand this.

<div class = "codeTitle">ClothesContext.tsx</div>

```tsx
// rest of code ...

const [clotheItems, setClotheItems] = useState<IClotheItem[]>([])
const [isLoading, setLoading] = useState(false)

function toggleFavorite(id: number) {
  let updatedClotheItems = clotheItems.map(c =>
    c.id === id ? { ...c, isFavorited: !c.isFavorited } : c
  )
  setClotheItems(updatedClotheItems)
}

// ... rest of code
```

We can see that this toggle favorite method is updating our state. Since we update our state, then this component will be rerendered. If we look more closely at our `value` prop, we can see that we are passing it a new object reference on every render.

```jsx:title=ClothesContext.tsx
return (
  <ClothesContext.Provider
    value={{
      clotheItems: clotheItems,
      toggleFavorite: toggleFavorite,
      isLoading: isLoading,
    }}
  >
    {children}
  </ClothesContext.Provider>
)
```

Since we are passing the `value` prop a new object reference, then that means the `value` prop has changed according to the [Object.is algorithm](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is). This will then cause the components that are consuming the context to rerender. In the process of rerendering, when `useContext` is called in these consuming components, the value returned will be the value that triggered the rerender. This ensures that all consuming components are always receiving the most up to date value from the context.

## Conclusion

In this article, we explored React's context API and discussed how a context can be created and consumed. We also created an application to help solidify these concepts. Here are the links again for the demo and source code:

- [View Demo](https://domenicomanna.github.io/simpleAppUsingContext/#/)
- [View Source](https://github.com/domenicomanna/simpleAppUsingContext)

Hopefully, this article was useful to you, and thanks for reading!
