export default function Error(){
    return(
        <>
        <div id="content" className="site-content">
  <div className="container mx-auto">
    <div className="error-404 not-found text-center">
      <h2>
        <img className="error-image mx-auto" src="images/404-error.png" alt="404"/>
      </h2>
      <h1 className="text-4xl font-bold mb-4">Sorry! Page Not Found!</h1>
      <div className="content-404">
        <p className="mb-4">Oops! The page you are looking for does not exist. Please return to the site homepage.</p>
        <form role="search" method="get" id="search-form" className="search-form mb-4">
          <input type="search" className="search-field border rounded py-2 px-4" placeholder="Search …" name="s"/>
          <button type="submit" className="search-submit bg-blue-500 text-white rounded py-2 px-4 ml-2">
            <i className="flaticon-search"></i>
          </button>
        </form>
        <a className="octf-btn bg-green-500 text-white rounded py-2 px-4 inline-block" href="index.html">Take Me Home</a>
      </div>
    </div>
  </div>
</div>
        </>
    )
}