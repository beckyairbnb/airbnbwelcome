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

                        <p>If you need help at any time with your template, you can easily get in touch via email at hello@airbnbwelcome.com.</p>

                        <h2>Our Airbnb&nbsp;Templates are:</h2>

                        <p>✅ &nbsp;Easy to edit in a FREE Canva account<br />
                        ✅ &nbsp;Ready-made template&nbsp;<br />
                        ✅ &nbsp;Fully customizable&nbsp;<br />
                        ✅ &nbsp;No design experience needed&nbsp;<br />
                        ✅ &nbsp;Print in minutes</p>

                        <h3>What are the benefits of using our Airbnb templates and printables?</h3>

                        <p>✅ &nbsp;Save time and money<br />
                        ✅ &nbsp;Looks professional&nbsp;<br />
                        ✅ &nbsp;Gives your customers all the information they need</p>

                        <h4>Looking for other Airbnb Templates &amp; Printables?</h4>

                        <ul>
                        	<li><a href="https://airbnbwelcome.com/airbnb-welcome-guide-template">Airbnb Welcome Guide Template</a></li>
                        	<li><a href="https://airbnbwelcome.com/airbnb-guest-book-template">Airbnb Guest Book Template</a></li>
                        	<li><a href="https://airbnbwelcome.com/airbnb-guidebook-template">Airbnb Guidebook Template</a></li>
                        	<li><a href="https://airbnbwelcome.com/airbnb-house-manual-template">Airbnb House Manual Template</a></li>
                        	<li><a href="https://airbnbwelcome.com/airbnb-thank-you-note-postcard/">Airbnb Thank You Note Postcard</a></li>
                        	<li><a href="https://airbnbwelcome.com/airbnb-welcome-poster">Airbnb Welcome Poster Template</a></li>
                        	<li><a href="https://airbnbwelcome.com/airbnb-wall-art-lets-sleep-in">Airbnb Wall Art Lets Sleep In</a></li>
                        	<li><a href="https://airbnbwelcome.com/airbnb-wall-art-relax-soak-unwind">Airbnb Wall Art: Relax, Soak, Unwind</a></li>
                        	<li><a href="https://airbnbwelcome.com/airbnb-wall-art-be-our-guest">Airbnb Wall Art: Be Our Guest</a></li>
                        	<li><a href="https://airbnbwelcome.com/airbnb-wifi-template">Airbnb Wifi Template Poster</a></li>
                        	<li><a href="https://airbnbwelcome.com/airbnb-check-in-instructions-template">Airbnb Check In Instructions Template</a></li>
                        </ul>
                          </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
export default About
