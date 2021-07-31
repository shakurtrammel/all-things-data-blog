import React               from 'react'
import PageWrapper         from '../app_shell/PageWrapper.js'
import AdminHeader         from '../app_shell/AdminHeader.js'
import SidebarNav          from '../app_shell/SidebarNav/index.js'
import Article             from '../../shared/Article'
import MainContainer       from '../app_shell/MainContainer.js'



// Main component.
export const ReadArticleView = (props) => {
    return (
        <PageWrapper>
            <SidebarNav />
            <AdminHeader />
            <MainContainer>
                <Article article={props.articles[0]} />
            </MainContainer>
        </PageWrapper>
    )
}
