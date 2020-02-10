---
title: "React context title..."
date: "2020-02-09"
tags: ["React"]
featuredImage: ../../featuredImages/reactIcon.png
---

Intro...

## What is Context in React?

Context gives us a way to access data from other components without the data having to be passed down as props. Essentially, it gives us a way to have global state, so that any component can use that data.

## Why is it useful?

It prevents us from needing to pass down props across many components. This is especially useful in case where the data from a top level component is needed by a highly nested component.

## A Quick Look At How To Use Context

To create a context, we use the createContext method exported from react

```js
import { createContext } from "react"

const myContext = createContext()

console.log(myContext.Provider)
console.log(myContext.Consumer)
```

The returned result from this method is an object. We can see that this object has properties called `Provider` and `Consumer`. The `Provider` property is a React component. This component has a `value` prop where we specify the data that we want to be globally available. The `Consumer` property is one way to access that global data. However, in our example, we will use the `useContext` hook to access the data, so we will not directly use the `Consumer` property.

Enough with theory, let's see how these concepts can be used in a real example.

## Creating the Project

We will be using the create react app with the typescript template in this example. Of course, using typescript is optional.

```shell
npx create-react-app clothes-site --template typescript
```

So, the project we are creating is a simple clothes app where we can favorite and favorite any clothe item. Essentially, we will have two routes. On one of the routes we will display all the clothe items, and on the second route, we will display only the clothe items that were favorited. Since the same clothe items are being used in these two routes, let's take advantage of the context api to make this data available without it having to be passed down as props.

Let's first create a model for our clothe item. This model will contain all the properties that any of our clothe items should have. Let's create a folder in our src folder and call it models. In the models folder, let's create a file called `IClotheItem.ts`. In this file, let's add the following code:

```ts
export default interface IClotheItem {
  id: number
  description: string
  isFavorited: boolean
}
```

So, all of our clothe items will have the following properties: id, description, and isFavorited.

Now that we have our model defined, let's create a fake API client that will return an array of clothe items. In our `src` folder, Let's created a new folder called `api`. In this folder, let's add a new file called `ClothesApiClient.ts`. In this file, let's add the following code:

```ts
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

So all we did was define one method that returns an array of type IClotheItem.

Now that we have our model defined, as well as some data, let's work on creating the context.

## Creating The Context

In our `src` folder, lets create a new folder called `contexts`. In the `contexts` folder, let's add a new file called `ClothesContext.tsx`
Let's first start with creating which properties we want our context data to contain. Just like we created the model for our ClotheItem as an interface, we are going to do the same for our context. Let's add the following code in our `ClothesContext.tsx` file:

<div class = "codeTitle">ClothesContext.tsx</div>

```tsx
import IClotheItem from "../models/IClotheItem"

interface IClothesContext {
  clotheItems: IClotheItem[]
  isLoading: boolean
  toggleFavorite: (id: number) => void
}
```

So according to this interface, we want our context to contain an array of type `IClotheItem`. We also want our context to keep track of when an api call has been made, and the data is loading. Lastly, we defined a function that takes in an `id`, which will be an `id` of a clothe item,and returns void, or nothing. This function will be used for toggling the favorite status of the clothe item that matches the given `id`

So with the interface out of the way, let's actually create the context:

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

With this addition, we specified that the context that we are are creating will have all of the properties defined in our interface. The `{}as IClothesContext` represents a default value that is given to our context. The `as` keyword just specifies to treat our empty object as if it were a type of IClothesContext. This is added purely to avoid the Typescript compile errors. In our example, the default value will not be used.

Great, so we have our context created, but how do we actually starting using it?

Let's add the following code to our `ClothesContext.tsx` file, and then we will explain exactly what's happening

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

So, with this code we created a JSX component called ClothesContextProvider. In this component, we are managing state through the use of hooks. In our `useEffect` hook, we load our data from our fake api client. In our `toggleFavorite` function, we change the isFavorited status of the `IClotheItem` that matches the `id` parameter. We leave all of the `IClotheItems` exactly the same. So, that's how the state is being managed in this component. Now let's look more closely at what this function is returning

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

We are returning the `Provider` property that was created when we used the function `createContext`. If you recall from before, the `Provider` is a react component with a `value prop` where we specify the data that we want globally available. In this case the value we are giving is an object that contains the `clotheItems`, the `toggleFavorite` function, and the `isLoading` status.

Lastly, in the return state, we also specify `children` which will render all of the children passed as props to our `ClothesContextProvider` component.

Now that we have our context created with the data we want available globally, let's see how we can actually use the data in other components.

## Using the Context

Before we use the context, let's create the rest of the components that we will need. Let's create a new folder in a `src` folder and call it `components`. First, let's add a new file called `ClotheItem.tsx`, and let's add the following code in it:

<div class = "codeTitle">ClothesItem.tsx</div>

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

What useContext function does is take the context that was created from our `createContext` call, and it returns the value provided by the nearest provider for that context type. If a provider is not found, then this will return the default value that we specified in our `createContext` call.

So, if we look back in our `ClothesContext.tsx` file:

```jsx
export const ClothesContext = createContext<IClothesContext>({} as IClothesContext)
```

This `ClothesContext` that we are exporting is exactly what we are passing as a parameter to our `useContext` call. Also, in this case, since we currently aren't rendering our `ClothesContextProvider` component, then there actually will not be a provider found when we call `useContext`. In this instance, the default value, which in our case is an empty object, will be returned. This is obviously not what we want, and we will adjust this soon.

Let's add another component to our `components` folder. Let's call it `ClotheItemList.tsx`, and let's add the following code to it:

<div class = "codeTitle">ClothesItem.tsx</div>

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

All this component is doing is retrieving the clothe items from our context, and it renders them all.

Let's add another component and call it `FavoritedClotheItemsList.tsx`, and let's add the following code to it:

<div class = "codeTitle">ClothesItem.tsx</div>

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

This component is retrieving only the clothe items that have been favorited, and then rendering only those.

At this point, let's install `react-router-dom` since we are going to have two different routes.

```shell
npm install react-router-dom
```

Let's create a new component in our `components` folder and call it `Layout.tsx`. Let's add the following code to it:

```jsx
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

Before we finally fix the issue of our default value being returned in our `useContext` call, let's add the following styles in `App.css`

```css
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
}

.clotheItems > * {
  margin-bottom: 1.5rem;
}
```

Finally, we are ready to fix our issue.

In our `App.tsx` file, let's add the following code:

```jsx
import React from "react"
import "./App.css"
import Layout from "./components/Layout"
import ClothesContextProvider from "./contexts/ClothesContext"
import ClotheItemsList from "./components/ClotheItemsList"
import { Switch, Route } from "react-router-dom"
import FavoritedClotheItemsList from "./components/FavoritedClotheItemsList"

const App = () => {
  let x = c

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


Since we are rendering our `ClotheItemsList` and `FavoritedClotheItemsList` components as children of our `ClothesContextProvider`, then when `useContext` is called from these components, the value that is returned will be the value we specified in our `ClotheContextProvider`. Let's take a look at our `ClotheContextProvider` component again:

<div class = "codeTitle">ClotheContextProvider.tsx</div>

```tsx
<ClothesContext.Provider
  value={{
    clotheItems: clotheItems,
    toggleFavorite: toggleFavorite,
    isLoading: isLoading,
  }}
>
  {children}
</ClothesContext.Provider>
```

We can see that the value is an object that contains an array of `clotheItems`, the `toggleFavorite` function and the `isLoading` status. So, this is the value that will be returned when `useContext` is called in any child component of the `ClothesContextProvider` component.

Now we just need to make one last change before we are able to run our app. Since we are using routes, we need to render our app with a router. Let's replace the existing code in the `index.tsx` file with the following code:

```tsx
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(app, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
```

With this change in place, you should now be able to run the app.

There is one last important detail to mention, and that is, when do components that call `useContext` rerender?

## When Do Consumers of a Context Rerender?

Consumers of a context rerender every time the `value` prop on the `Provider` component changes. The algorithm that React uses to determine if the value prop changes is `Object.is` (ADD LINK TO THIS ALGORITHM~~~~~~) Let's take a look at our `toggleFavorite` function in our context to better understand this

<div class = "codeTitle">ClothesContextProvider.tsx</div>

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

We can see that this toggle favorite method is updating our state. Since we update our state, then this component will be rerendered. If we look more closely at our `value` prop, we can see that we are passing it a new object reference.

```jsx
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

Since we are passing the `value` prop a new object reference, then that means the `value` prop has changed, which will cause the components that are consuming the context to rerender. In process of rerendering, then when `useContext` is called, the value returned will of course be the new value that caused the rerender. This ensures that all consuming components are always receiving the most up to date value from the context.

## Conclusion

Sweet, we did it.
