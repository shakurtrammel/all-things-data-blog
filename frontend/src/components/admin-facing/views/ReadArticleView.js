import React            from 'react'
import styled           from 'styled-components'
import axios            from 'axios'
import PageWrapper      from '../app_shell/PageWrapper.js'
import AdminHeader      from '../app_shell/AdminHeader.js'
import SidebarNav       from '../app_shell/SidebarNav/index.js'
import Article          from '../../shared/Article'
import MainContainer    from '../app_shell/MainContainer.js'



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
            article: [null],
            error: null
        }
        this.renderIfLoading = this.renderIfLoading.bind(this)
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


    renderIfLoading() {
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
                <MainContainer>{ this.renderIfLoading() }</MainContainer>
            </PageWrapper>
        );
    }
  }


export default CreateArticleView;