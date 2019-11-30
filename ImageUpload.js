import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreview_Url: ''
        };

        this.handleImageChange = this.handleImageChange.bind(this);
        this.SaveSubmit = this.SaveSubmit.bind(this);
    }

    SaveSubmit(e) {
        e.preventDefault();
        console.log(this.state.imagePreview_Url);
        //TODO - save > this.state.imagePreview_Url in you DB using your API logic.
    }

    handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreview_Url: reader.result
            });
        }
        reader.readAsDataURL(file)
    }

    render() {
        return (
            <div style={{ paddingTop: 40 }}>
                <div>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>React - Upload Image</title>
                        <meta property="og:type" content="website - tech blog" />
                        <meta name="description" content="This is used for upload the images." />
                        <meta property="og:site_name" content="code sample" />
                        <meta name="twitter:card" content="summary" />
                        <meta name="twitter:domain" content="code-sample.com" />
                        <meta name="twitter:title" property="og:title" itemprop="name" content="react helmet meta tag dynamically." />
                        <meta name="twitter:description" property="og:description" itemprop="description" content="I am trying to explain how to create meta tag from awebsite dynamically using react-helmet" />
                    </Helmet>
                </div>
                <div>
                    <input type="file" onChange={this.handleImageChange} />
                    <button onClick={this.SaveSubmit}>Save/Upload Image in DB</button>
                </div>
                <div>
                    {/* <h4>Uploaded Image Preview</h4> */}
                    <img src={this.state.imagePreview_Url} />
                </div>
            </div>
        )
    }

}

export default ImageUpload;