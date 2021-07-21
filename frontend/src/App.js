import './App.css'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AdminView from "./components/admin-facing/views/AdminView.js"
import CreateArticleView from "./components/admin-facing/views/CreateArticleView.js"
import ReadArticleView from "./components/admin-facing/views/ReadArticleView.js"
import HomeView from "./components/public-facing/views/HomeView.js"
import AboutView from "./components/public-facing/views/AboutView.js"
import SubscribeView from "./components/public-facing/views/SubscribeView.js"
import ContactView from "./components/public-facing/views/ContactView.js"
import ArticleView from "./components/public-facing/views/ArticleView.js"



class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/admin/read-article"><ReadArticleView /></Route>
          <Route path="/admin/create-article"><CreateArticleView /></Route>
          <Route path="/admin"><AdminView /></Route>
          <Route path="/article"><ArticleView /></Route>
          <Route path="/contact"><ContactView /></Route>
          <Route path="/subscribe"><SubscribeView /></Route>
          <Route path="/about"><AboutView /></Route>
          <Route path="/all-articles"><HomeView /></Route>
          <Route path="/"><HomeView /></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}


export default App;
