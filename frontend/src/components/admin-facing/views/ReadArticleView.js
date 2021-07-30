import React                    from 'react'
import { connect }              from 'react-redux'
import { retrieveArticles }     from '../../../redux/actions/index.js'
import styled                   from 'styled-components'
import axios                    from 'axios'
import PageWrapper              from '../app_shell/PageWrapper.js'
import AdminHeader              from '../app_shell/AdminHeader.js'
import SidebarNav               from '../app_shell/SidebarNav/index.js'
import Article                  from '../../shared/Article'
import MainContainer            from '../app_shell/MainContainer.js'



// Styled subcomponents.
const LoadingCmp = styled.div`
    display: none;
`;



// Main component.
class CreateArticleView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            article: [],
            error: null
        }
        this.renderWhilLoading = this.renderWhileLoading.bind(this)
    }


    componentDidMount() {
        axios
            .get("/api/test")
            .then((res) => {
                this.setState({
                    article: res.data,
                    isLoading: false,
                })
            })
            .catch((err) => console.log(err))
    }


    renderWhileLoading() {
        const { error, isLoading, article } = this.state
        if (error)
            return <p>{error.message}</p>
        else if (!isLoading)
            return <Article article={article[0]} />
        return <LoadingCmp>Loading...</LoadingCmp>
    }


    render() {
        return (
            <PageWrapper>
                <SidebarNav />
                <AdminHeader />
                <MainContainer>{ this.renderWhileLoading() }</MainContainer>
            </PageWrapper>
        );
    }
}


const mapStateToProps = state => ({
    articles: state.data.articles
})


const mapDispatchToProps = dispatch => {
    return {
        submit: (data) => {
            dispatch(retrieveArticles(data))
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateArticleView);