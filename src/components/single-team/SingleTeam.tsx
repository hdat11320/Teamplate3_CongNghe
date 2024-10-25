export default function SingleTeam(){
    return(
        <>
        <div id="content" className="site-content">

        <section className="team-about sm:py-10">
  <div className="container mx-auto">
    <div className="steam-info">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex justify-center">
          <div className="team-info-left">
            <div className="team-img">
              <img src="images/single-team1.jpg" alt="" className="rounded shadow-lg"/>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="team-detail">
            <h2 className="text-2xl font-bold mb-2">Robert Cooper</h2>
            <span className="location text-gray-600">CEO of Company</span>
            <ul className="bold member-info list-disc pl-5 mt-4">
              <li><span className="text-dark font-semibold">Department:</span> Web Development</li>
              <li><span className="text-dark font-semibold">Experience:</span> 15 Years</li>
              <li><span className="text-dark font-semibold">Email:</span> r.cooper@mail.com</li>
              <li><span className="text-dark font-semibold">Phone:</span> +1-800-456-478-23</li>
            </ul>
            <div className="otf-social-share clearfix shape-circle mt-4 flex space-x-4">
              <a className="share-facebook text-blue-600" href="facebook.html" target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="share-twitter text-blue-400" href="twitter.html" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="share-pinterest text-red-600" href="pinterest.html" target="_blank">
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a className="share-linkedin text-blue-700" href="linkedin.html" target="_blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="team-skills py-10">
  <div className="container mx-auto">
    <div className="mb-6">
      <h3 className="text-2xl font-bold mb-4">Biography</h3>
      <p className="mb-4">
        A vast majority of the app marketers mainly concentrate on the post-launch app marketing techniques and measures while completely missing on the pre-launch campaign. This prevents the app from creating buzz and hype just around the time when the app is launched. As and when you launch the app, already a considerable number of people should expectantly look forward to your app and this requires long-drawn marketing efforts leading up to the app launch event. To create pre-launch buzz and hype about the app <span className="text-blue-500 font-semibold">a mobile app development company</span> has an array of marketing options like social media campaigns, search engine ads, video ads, email campaigns, etc. Apart from online options, you can also reach out to the wider audience with traditional marketing options like outdoor ads, print ads, media ads, and promotional events.
      </p>
    </div>
    
    <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="text-center">
        <div className="team-profile">
          <h6 className="font-semibold">Onum Company</h6>
          <p>Web Designer, Illustrator</p>
        </div>
        <div className="team-profile">
          <h6 className="font-semibold">Media Group</h6>
          <p>Photographer, UI Designer</p>
        </div>
      </div>
      <div className="text-center">
        <div className="team-profile">
          <h6 className="font-semibold">Onum Company</h6>
          <p>Web Designer, Illustrator</p>
        </div>
        <div className="team-profile">
          <h6 className="font-semibold">Nimkus 2000</h6>
          <p>PHP Developer, Photographer</p>
        </div>
      </div>
      {/* <div className="mb-4 flex flex-col items-center">
        <div className="circle-progress" style={{width: '135px', height: '135px'}}>
          <div className="inner-bar bg-blue-500" style={{height: '10px', width: '50%'}}>
            <span className="text-white text-center">50%</span>
          </div>
          <h4 className="mt-2 text-center">Mobile <br/>Development</h4>
        </div>
      </div>
      <div className="mb-4 flex flex-col items-center">
        <div className="circle-progress" style={{width: '135px', height: '135px'}}>
          <div className="inner-bar bg-blue-500" style={{height: '10px', width: '70%'}}>
            <span className="text-white text-center">70%</span>
          </div>
          <h4 className="mt-2 text-center">Wearable <br/>Development</h4>
        </div>
      </div> */}
    </div>

    <div className="mb-6">
      <h3 className="text-2xl font-bold mb-4">Hard Skills</h3>
      <p className="mb-4">
        Just as a retail business in real life is remembered not just for its product offerings but also because of its services, support, and customer-friendliness, an app that offers a <span className="text-dark font-semibold">helpful customer support system</span> for its valued users enjoys more traction and engagement than other apps. Great brands all over the globe enjoy appreciation and popularity because of their customer-friendly support and services.
      </p>
    </div>
  </div>
</section>

<section className="team-contact py-10">
  <div className="container mx-auto">
    <div className="row">
      <div className="col-md-12">
        <form action="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/engitech/teamcontact.php" method="post" className="wpcf7-form">
          <div className="member-form comment-respond">
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <p className="text-sm mb-4">Your email address will not be published. Required fields are marked *</p>
            <div className="row">
              <div className="col-md-6 mb-4">
                <input type="text" name="name" className="border rounded w-full p-2" placeholder="Your Name *" required/>
              </div>
              <div className="col-md-6 mb-4">
                <input type="email" name="email" className="border rounded w-full p-2" placeholder="Your Email *" required/>
              </div>
            </div>
            <div className="mb-4">
              <input type="text" name="site" className="border rounded w-full p-2" placeholder="Website"/>
            </div>
            <div className="mb-4">
              <textarea name="message" className="border rounded w-full p-2" placeholder="Message..." required></textarea>
            </div>
            <div>
              <button type="submit" className="octf-btn bg-blue-500 text-white rounded py-2 px-4">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
</div>

        </>
    )
}