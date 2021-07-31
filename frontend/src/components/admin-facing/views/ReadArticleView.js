import React                    from 'react'
import PageWrapper              from '../app_shell/PageWrapper.js'
import AdminHeader              from '../app_shell/AdminHeader.js'
import SidebarNav               from '../app_shell/SidebarNav/index.js'
import Article                  from '../../shared/Article'
import MainContainer            from '../app_shell/MainContainer.js'



// Main component.
class ReadArticleView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            error: null
        }
        //this.renderWhilLoading = this.renderWhileLoading.bind(this)
    }

    /*
    renderWhileLoading() {
        let { error, isLoading } = this.state
        if (error)
            return <p>{error.message}</p>
        else if (!isLoading)
            return <Article article={this.props.articles[0]} />
        return <LoadingCmp>Loading...</LoadingCmp>
    }
    */


    render() {
        return (
            <PageWrapper>
                <SidebarNav />
                <AdminHeader />
                <MainContainer>
                    <Article article={this.props.articles[0]} />
                </MainContainer>
            </PageWrapper>
        );
    }
}


export default ReadArticleView