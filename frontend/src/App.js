import React                                from 'react'
import { connect }                          from 'react-redux'
import { Switch, Route }                    from 'react-router-dom'
import './App.css'
import { retrieveArticles }                 from './redux/actions'
import AdminHomeView                        from "./components/admin-facing/views/AdminHomeView.js"
import CreateArticleView                    from "./components/admin-facing/views/CreateArticleView.js"
import { ReadArticleView }                  from "./components/admin-facing/views/ReadArticleView.js"
import UpdateArticleView                    from "./components/admin-facing/views/UpdateArticleView"
import HomeView                             from "./components/public-facing/views/HomeView.js"
import AboutView                            from "./components/public-facing/views/AboutView.js"
import SubscribeView                        from "./components/public-facing/views/SubscribeView.js"
import ContactView                          from "./components/public-facing/views/ContactView.js"
import ArticleView                          from "./components/public-facing/views/ArticleView.js"



class App extends React.Component {

  componentDidMount() {
    this.props.retrieveArticles()
  }


  render() {
    console.log(this.props)
    return (
      <Switch>
        <Route path="/admin/update-article"><UpdateArticleView /></Route>
        <Route path="/admin/read-article">
          <ReadArticleView articles={this.props.articles} isLoading={this.props.isLaoding}/>
        </Route>
        <Route path="/admin/create-article"><CreateArticleView /></Route>
        <Route path="/admin"><AdminHomeView articles={this.props.articles} /></Route>
        <Route path="/article"><ArticleView /></Route>
        <Route path="/contact"><ContactView /></Route>
        <Route path="/subscribe"><SubscribeView /></Route>
        <Route path="/about"><AboutView /></Route>
        <Route path="/all-articles"><HomeView /></Route>
        <Route path="/"><HomeView /></Route>
      </Switch>
    )
  }
}


const mapStateToProps = totalState => {
  return {
    articles: totalState.totalState.articles,
    isLoading: totalState.totalState.isLoading
  }
}


const mapDispatchToProps = dispatch => {
  return {
      retrieveArticles: () => dispatch(retrieveArticles())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
