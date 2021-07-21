import React            from 'react'
import styled           from 'styled-components';
import { Editor }       from '@tinymce/tinymce-react'
import PageWrapper      from '../app_shell/PageWrapper.js';
import AdminHeader      from '../app_shell/AdminHeader.js'
import MainContainer    from '../app_shell/MainContainer.js';
import SidebarNav       from '../app_shell/SidebarNav/index.js';



// Styled subcomponents.
const StyledForm = styled.form`
    width: 700px;
    padding: 30px 50px;
    margin: 40px auto;
`;

const TitleWrapper = styled.div`
    padding: 30px 30px;
    margin: 30px 0;
    text-align: center;
    & > label {
        margin: 0 10px 30px 0;
    }
    & > input {
        width: 400px;
        border: none;
        border-bottom: 1px solid darkgrey;
        margin: 0 0 30px 0;
    }
`;

const PointWrapper = styled.div`
    padding: 30px 30px;
    border-radius: 10px;
    margin: 30px 0;
    text-align: center;
    & > h3 {
        margin-bottom: 20px;
    }
    & > label {
        margin: 0 10px 30px 0;
    }
    & > input {
        width: 400px;
        border: none;
        border-bottom: 1px solid darkgrey;
        margin: 0 0 30px 0;
    }
`;

const InputSubmit = styled.input`
    padding: 10px;
    border: none;
    border-radius: 10px;
`;


// Main component.
class CreateArticleView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            tldr: '',
            intro: '',
            p1_heading: '',
            p2_heading: '',
            p3_heading: '',
            summary: '',
            intro_value: props.initialValue ?? '',
            p1_value: props.initialValue ?? '',
            p2_value: props.initialValue ?? '',
            p3_value: props.initialValue ?? '',
            summary_value: props.initialValue ?? '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
  
    componentDidUpdate(prevProps) {
      if (this.props.initialValue !== prevProps.initialValue) {
        this.setState({ value: this.props.initialValue ?? '' })
      }
      console.log(this.state);
    }

    handleInputChange (e) {
        switch (e.target.name) {
            case 'title':
                this.setState({title: e.target.value})
                break
            case 'p1_heading':
                this.setState({ p1_heading: e.target.value })
                break
            case 'p2_heading':
                this.setState({ p2_heading: e.target.value })
                break
            case 'p3_heading':
                this.setState({ p3_heading: e.target.value })
                break
            case 'summary':
                this.setState({ summary: e.target.value })
                break
            default:
                console.log('No text saved in state.')
        }
    }
    
    handleEditorChange(editor, value) {
        //console.log(value.id)
        switch (value.id) {
            case 'intro':
                this.setState({ intro_value: editor })
                break
            case 'p1':
                this.setState({ p1_value: editor })
                break
            case 'p2':
                this.setState({ p2_value: editor })
                break
            case 'p3':
                this.setState({ p3_value: editor })
                break
            case 'summary':
                this.setState({ summary_value: editor })
                break
            default:
                console.log('No text saved in state.')
        }
    }

    handleFormSubmit(e) {
        e.preventDefault()
        console.log('Submit input clicked!')
    }
  
    render() {
      return (
        <PageWrapper>
            <SidebarNav />
            <AdminHeader />
            <MainContainer>
                <StyledForm method='POST'>
                    <TitleWrapper>
                        <label htmlFor='title'>Title: </label>
                        <input type='text' name='title' onChange={this.handleInputChange}></input>
                    </TitleWrapper>
                    <PointWrapper id='intro'>
                        <h3>Introduction</h3>
                        <Editor
                            id='intro'
                            apiKey='bbn2g27vv6w704mygy8k29ttnfoh7f907dblbwalmf6rqgn4'
                            initialValue={this.props.initialValue}
                            value={this.state.intro_value}
                            onEditorChange={this.handleEditorChange}
                            init= {{
                                    menubar: false,
                                    plugins: [
                                        'advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount'
                                    ],
                                    toolbar: 'undo redo | formatselect | ' +
                                    'bold italic backcolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                                    force_br_newlines: true,
                                    force_p_newlines: false,
                                    forced_root_block: '',
                                }}
                        />
                    </PointWrapper>
                    <PointWrapper id='point1'>
                        <h3>Point 1</h3>
                        <label htmlFor='p1_heading'>Heading: </label>
                        <input type='text' name='p1_heading' onChange={this.handleInputChange}></input>
                        <Editor
                            id='p1'
                            apiKey='bbn2g27vv6w704mygy8k29ttnfoh7f907dblbwalmf6rqgn4'
                            initialValue={this.props.initialValue}
                            value={this.state.p1_value}
                            onEditorChange={this.handleEditorChange}
                            init= {{
                                    menubar: false,
                                    plugins: [
                                        'advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount'
                                    ],
                                    toolbar: 'undo redo | formatselect | ' +
                                    'bold italic backcolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                                    force_br_newlines: true,
                                    force_p_newlines: false,
                                    forced_root_block: '',
                                }}
                        />
                    </PointWrapper>
                    <PointWrapper id='point2'>
                        <h3>Point 2</h3>
                        <label htmlFor='p2_heading'>Heading: </label>
                        <input type='text' name='p2_heading' onChange={this.handleInputChange}></input>
                        <Editor
                            id='p2'
                            apiKey='bbn2g27vv6w704mygy8k29ttnfoh7f907dblbwalmf6rqgn4'
                            initialValue={this.props.initialValue}
                            value={this.state.p2_value}
                            onEditorChange={this.handleEditorChange}
                            init= {{
                                    menubar: false,
                                    plugins: [
                                        'advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount'
                                    ],
                                    toolbar: 'undo redo | formatselect | ' +
                                    'bold italic backcolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                                    force_br_newlines: true,
                                    force_p_newlines: false,
                                    forced_root_block: '',
                                }}
                        />
                    </PointWrapper>
                    <PointWrapper id='point3'>
                        <h3>Point 3</h3>
                        <label htmlFor='p3_heading'>Heading: </label>
                        <input type='text' name='p3_heading' onChange={this.handleInputChange}></input>
                        <Editor
                            id='p3'
                            apiKey='bbn2g27vv6w704mygy8k29ttnfoh7f907dblbwalmf6rqgn4'
                            initialValue={this.props.initialValue}
                            value={this.state.p3_value}
                            onEditorChange={this.handleEditorChange}
                            init= {{
                                    menubar: false,
                                    plugins: [
                                        'advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount'
                                    ],
                                    toolbar: 'undo redo | formatselect | ' +
                                    'bold italic backcolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                                    force_br_newlines: true,
                                    force_p_newlines: false,
                                    forced_root_block: '',
                                }}
                        />
                    </PointWrapper>
                    <PointWrapper id='summary'>
                        <h3>Summary</h3>
                        <Editor
                            id='summary'
                            apiKey='bbn2g27vv6w704mygy8k29ttnfoh7f907dblbwalmf6rqgn4'
                            initialValue={this.props.initialValue}
                            value={this.state.summary_value}
                            onEditorChange={this.handleEditorChange}
                            init= {{
                                    menubar: false,
                                    plugins: [
                                        'advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount'
                                    ],
                                    toolbar: 'undo redo | formatselect | ' +
                                    'bold italic backcolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                                    force_br_newlines: true,
                                    force_p_newlines: false,
                                    forced_root_block: '',
                                }}
                        />
                    </PointWrapper>
                    <InputSubmit
                        type='submit' 
                        name='input-submit' 
                        value='Create Article'
                        onClick={this.handleFormSubmit}
                    />
                </StyledForm>
            </MainContainer>
        </PageWrapper>
      );
    }
  }
  

export default CreateArticleView;