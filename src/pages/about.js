import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
class About extends React.Component {
    render() {
        return ( <Layout>
            <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
                <div className="site-About">
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>Airbnb Welcome</h1>
                            <p>Airbnb Welcome offers a range of Airbnb templates and printable for your Airbnb or vacation rental.</p>
                            <p>All of the templates can be easily edited using a FREE online Canva account. They take minutes to edit and print.</p>
                            <p>If you need help at anytime with your template, you can easily get in touch via email at hello@airbnbwelcome.com. </p>                    
                        </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
export default About
