/**
 * This file contains the main view component for the Admin home page.
 * It imports the app shell components: PageWrapper, AdminHeader, etc.
 * It also contains its' own styled subcomponents in a CSS-in-JS fashion.
 * It has two types of state: local (isLoading and error flags)
 *    and global (an array of articles fetched from the Redux store).
*/


import React                    from 'react'
import styled                   from 'styled-components'
import PageWrapper              from '../app_shell/PageWrapper.js'
import AdminHeader              from '../app_shell/AdminHeader.js'
import SidebarNav               from '../app_shell/SidebarNav'
import MainContainer            from '../app_shell/MainContainer.js'



// Styled subcomponents.
const LoadingCmp = styled.div`
`;

const Table = styled.table`
    text-align: center;
    border-collapse: collapse;
    border: 3px solid #ddd;
    width: 90%;
`;

const TBody = styled.tbody`

`;

const THead = styled.thead`
    width: 100%;
`;

const HCell = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    background-color: #4CAF50;
    color: white;
`;

const TRow = styled.tr`
    :nth-child(even){background-color: #f2f2f2;}
    :hover {background-color: #ddd;}
`;

const RCell = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
`;



// Main component
class AdminHomeView extends React.Component {
    constructor(props) {
        super(props);
        // Local state.
        this.state = {
            isLoading: false,
            error: null,       
        };
        this.renderTableData = this.renderTableData.bind(this)
    }
    
    renderTableData() {
        return this.props.articles.map((article, index) => {
            const { id, title, updated_at } = article
            return (
                <TRow key={id}>
                    <RCell>{id}</RCell>
                    <RCell>{title}</RCell>
                    <RCell>{updated_at}</RCell>
                    <RCell><button>Edit</button></RCell>
                    <RCell><button>Delete</button></RCell>
                </TRow>
            )
        })
    }


    render() {
        const { error, isLoading } = this.state
        if (error)
            return <p>{error.message}</p>
        else if (!isLoading)
            return (
                <PageWrapper>
                    <SidebarNav />
                    <AdminHeader />
                    <MainContainer id='main-container'>
                        <Table id='articles-table'>
                            <THead id='table-header'>
                                <HCell>ID</HCell>
                                <HCell>Title</HCell>
                                <HCell>Date Updated</HCell>
                                <HCell>Edit</HCell>
                                <HCell>Delete</HCell>
                            </THead>
                            <TBody id='table-body'>
                                {this.renderTableData()}
                            </TBody>
                        </Table>
                    </MainContainer>
                </PageWrapper>
             );
        return <LoadingCmp>Loading...</LoadingCmp>
    }
}


export default AdminHomeView