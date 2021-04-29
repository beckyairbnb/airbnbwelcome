import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPost extends React.Component {
  render() {
    const { data } = this.props
    return (
      <React.Fragment>
        <div className="row product-main">
          {data.data.allProduct.edges.map(item => (
            <div
              className="Catalogue__item col-sm-12 col-md-6 col-lg-4"
              key={item.node.id}
            >
              <Link to={`/${item.node.slug}`}>
                <div className="details_List">
                  {item.node.productImage && item.node.productImage[0] ? (
                    <Img
                      sizes={{
                        src: `https://api.flotiq.com/image/1920x0/${item.node.productImage[0].id}.${item.node.productImage[0].extension}`,
                        aspectRatio: 1.77,
                        sizes: "",
                        srcSet: "",
                      }}
                    />
                  ) : (
                    <div className="no-image">No Image</div>
                  )}

                  <div className="details_inner">
                    <h2>{item.node.name}</h2>
                    <div className="row">
                      <div className="col-sm-4 align-self-center">
                        <span className="price">${item.node.price}</span>
                      </div>
                      <div className="col-sm-8 text-right align-self-center">
                        <a
                          href="/"
                          className="Product snipcart-add-item"
                          data-item-id={item.node.slug}
                          data-item-price={item.node.price}
                          data-item-image={
                            item.node.productImage && item.node.productImage[0]
                              ? `https://api.flotiq.com/image/1920x0/${item.node.productImage[0].id}.${item.node.productImage[0].extension}`
                              : ""
                          }
                          data-item-name={item.node.name}
                          data-item-url={`/`}
                        >
                          <i className="fas fa-shopping-bag" />
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </React.Fragment>
    )
  }
}

const IndexPage = data => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="container">
      <div className="text-center mt-5">
        <h2 className="with-underline">Airbnb Templates & Printables</h2>
        <h3>Get 25% off your whole order. Discount applied at checkout.</h3>
        <p>Welcome to Airbnb Welcome. We make listing and presenting your home as easy as possible with beautiful, easily editable airbnb templates and brochures for your guests.</p>
      </div>
      <IndexPost data={data}></IndexPost>
      <h2>Welcome Airbnb and Vacation Rental Hosts</h2>

<p>You’ve made your Airbnb listing look beautiful, you’ve decorated the rental perfectly, and you’re raring to welcome your next guests. However, don’t forget to consider their experience when they arrive at your rental.&nbsp;</p>

<p>Make sure you give them all the information they need to have a wonderful stay as soon as they enter your rental.&nbsp;</p>

<p>This means creating welcome brochures for your guests that provide information about the nearest shops, your favorite coffee house, the internet code, where your guests should leave the trash, and so on.&nbsp;</p>

<p>This may sound overwhelming but it doesn’t need to be. At Airbnb Welcome, we’ve designed all of the templates you need for your Airbnb or vacation rental. Airbnb Welcome creates beautiful and easy-to-use templates for Airbnb’s and other vacation rentals.&nbsp;</p>

<p>Our products include Airbnb house manual templates, Airbnb posters and signs, Airbnb thank you postcards, and much more. All of our Airbnb products are designed to be edited using a free online Canva account and printed at home or at a local professional printer.&nbsp;</p>

<p>The Airbnb templates offer sleek design so you don’t need to waste time designing or hire cost designers.&nbsp;</p>

<p>Here is some more information about our products.&nbsp;</p>

<h3><a href="https://airbnbwelcome.com/airbnb-welcome-guide-template">Airbnb Welcome Guide Template</a></h3>

<p>A 22-page brochure to welcome your guests. The welcome guide template includes all the sections you need from wifi information to check out rules and where to eat, play, and visit in your local area. We’ve carefully selected many of the images already, so all you need to do is add your copy, save, and print.&nbsp;</p>

<h3><a href="https://airbnbwelcome.com/airbnb-guest-book-template">Airbnb Guest Book Template</a></h3>

<p>Like the Airbnb Welcome Guide Template, this template is a modern brochure to welcome your guests to your Airbnb or vacation rental. The color-scheme is simple gray, beautiful images, and well-thought-out sections of copy. Simply add in the information specific to your rental and you’re ready to print.</p>

<h3><a href="https://airbnbwelcome.com/airbnb-guidebook-template">Airbnb Guidebook Template</a></h3>

<p>Another beautiful Airbnb welcome brochure design in a modern shade of brown. The template can be edited in a free Canva account in minutes. The template includes everything you need to tell your guests upon arrival at your vacation rental. Don’t waste time designing your Airbnb Guidebook, ours saves you time and money, and offers your guests a fantastic first impression.&nbsp;</p>

<h3><a href="https://airbnbwelcome.com/airbnb-house-manual-template">Airbnb House Manual Template</a></h3>

<p>Our most popular design. This Airbnb house manual template is beautiful and easy to use. Simply purchase the template and you will be sent a link to edit the Airbnb template using a free online Canva account. The template is made for non-designers but offers you a professional finish.&nbsp;</p>

<h3><a href="https://airbnbwelcome.com/airbnb-thank-you-note-postcard">Airbnb Thank You Note Postcard</a></h3>

<p>Want to offer a personal touch? These Airbnb thank you note postcards are perfect. Quickly edit via an online free Canva account and use a local printer to print on to the card. Send them in the post to your past guests. By going the extra mile, you can stay top of mind for guests, securing referrals, repeat bookings, and 5-star reviews.&nbsp;</p>

<h3><a href="https://airbnbwelcome.com/airbnb-welcome-poster">Airbnb Welcome Poster</a></h3>

<p>If you’re not able to greet your guests in person, the next best thing is a welcome poster. Make your guest feel at home with this Airbnb welcome poster including a friendly welcome message and wifi details.&nbsp;</p>

<h3>Airbnb Wall Art</h3>

<p>New to hosting or want to glam up your rental? Look no further. We offer different pieces of wall art for your Airbnb. Choose from one of the following designs for a quick and easy way to update your rooms:</p>

<ul>
	<li><a href="https://airbnbwelcome.com/airbnb-wall-art-lets-sleep-in">Let's sleep in</a></li>
	<li><a href="https://airbnbwelcome.com/airbnb-wall-art-relax-soak-unwind">Relax soak unwind</a></li>
	<li><a href="https://airbnbwelcome.com/airbnb-wall-art-be-our-guest">Be our guest</a></li>
</ul>

<h3><a href="https://airbnbwelcome.com/airbnb-wifi-template">Airbnb Wifi Poster Template</a></h3>

<p>Don’t make your guests hunt for the wifi details. Use this poster to display how to get online. Simply edit via a free online Canva account, print and frame.&nbsp;</p>

<h3><a href="https://airbnbwelcome.com/airbnb-check-in-instructions-template">Airbnb Check-In and Check-Out Instructions Template</a></h3>

<p>If your house rules are clearly displayed, your guests are far more likely to adhere to any rules you have. Use our check-in and check out instructions template to quickly and easily create a poster for your Airbnb.&nbsp;</p>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query AboutQuery {
    allProduct(sort: { fields: flotiqInternal___createdAt, order: DESC }) {
      edges {
        node {
          id
          slug
          name
          price
          description
          productImage {
            id
            extension
          }
          productGallery {
            id
            extension
          }
        }
      }
    }
  }
`
