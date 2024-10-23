import React from 'react'
import Image from 'next/image';
export default function Portfoliomasonry() {

return (
<>
<div id="content" className="site-content">
            <div className="page-header flex items-center justify-center py-8 bg-gray-100">
                <div className="container mx-auto px-2">
                    <div className="inner flex items-center justify-between">
                        <h1 className="page-title text-3xl font-bold">Portfolio Massonry</h1>
                        <ul id="breadcrumbs" className="breadcrumbs flex space-x-2">
                            <li><a href="index.html" className="text-blue-500 hover:underline">Home</a></li>
                            <li className="text-gray-500">Blog Grid</li>
                        </ul>    
                    </div>
                </div>
            </div>

        </div>
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-8">
                        <div className="ot-heading">
                            <span className="text-gray-500"> latest case studies</span>
                            <h2 className="text-3xl font-bold">Introduce Our Projects</h2>
                        </div>
                        <div className="my-5"></div>
                        <p className="text-gray-700">
                            Software development outsourcing is just a tool to achieve business goals. But there is no way
                            <br/>
                            to get worthwhile results without cooperation and trust between a client company.
                        </p>
                    </div>
            
                    <div>
                        <div className="mb-4">
                            <ul className="flex justify-center space-x-6 text-lg">
                                <li><a href="#" data-filter="*" className="text-blue-500 font-semibold">All</a></li>
                                <li><a href="#" data-filter=".design" className="text-gray-600 hover:text-blue-500">Design</a></li>
                                <li><a href="#" data-filter=".development" className="text-gray-600 hover:text-blue-500">Development</a></li>
                                <li><a href="#" data-filter=".ideas" className="text-gray-600 hover:text-blue-500">Ideas</a></li>
                                <li><a href="#" data-filter=".technology" className="text-gray-600 hover:text-blue-500">Technology</a></li>
                            </ul>
                        </div>
            
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           
                            <div className="project-item design ideas">
<div className="projects-box">
                                    <div className="projects-thumbnail">
                                    
                                        <Image src='/images/projects/masonry/project1.jpg' alt="" width={330} height={259} />
            
                                    </div>
                                    <div className="portfolio-info">
                                        <a className="overlay" href="portfolio-details-1.html"></a>
                                        <div className="portfolio-info-inner">
                                            <h5><a href="portfolio-details-1.html" className="text-lg font-semibold">App for Virtual Reality</a></h5>
                                            <p className="portfolio-cates">
                                                <a href="#" className="text-blue-500">Design</a><span>/</span>
                                                <a href="#" className="text-blue-500">Ideas</a>
                                            </p> 
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="project-item technology development">
                                <div className="projects-box">
                                    <div className="projects-thumbnail">
                                        <a href="portfolio-details-2.html">
                                        <Image src='/images/projects/masonry/project2.jpg' alt="" width={330} height={356} />
                                        </a>
                                    </div>
                                    <div className="portfolio-info">
                                        <a className="overlay" href="portfolio-details-2.html"></a>
                                        <div className="portfolio-info-inner">
                                            <h5><a href="portfolio-details-2.html" className="text-lg font-semibold">Mobile Coin View App</a></h5>
                                            <p className="portfolio-cates">
                                                <a href="#" className="text-blue-500">Technology</a><span>/</span>
                                                <a href="#" className="text-blue-500">Development</a>
                                            </p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
       
                            <div className="project-item ideas technology">
                                <div className="projects-box">
                                    <div className="projects-thumbnail">
                                    <Image src='/images/projects/masonry/project1.jpg' alt=""  width={330} height={40} />
                                    </div>
                                    <div className="portfolio-info">
                                        <a className="overlay" href="portfolio-details-3.html"></a>
                                        <div className="portfolio-info-inner">
                                            <h5><a href="portfolio-details-3.html" className="text-lg font-semibold">Analysis of Security</a></h5>
                                            <p className="portfolio-cates">
                                                <a href="#" className="text-blue-500">Ideas</a><span>/</span>
                                                <a href="#" className="text-blue-500">Technology</a>
                                            </p> 
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="project-item design ideas">
                                <div className="projects-box">
                                    <div className="projects-thumbnail">
                                    <Image src='/images/projects/masonry/project1.jpg' alt=""  width={330} height={40} />
                                    </div>
                                    <div className="portfolio-info">
                                        <a className="overlay" href="portfolio-details-1.html"></a>
                                        <div className="portfolio-info-inner">
                                            <h5><a href="portfolio-details-1.html" className="text-lg font-semibold">App for Virtual Reality</a></h5>
                                            <p className="portfolio-cates">
                                                <a href="#" className="text-blue-500">Design</a><span>/</span>
                                                <a href="#" className="text-blue-500">Ideas</a>
                                            </p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-item design development">
                                <div className="projects-box">
                                    <div className="projects-thumbnail">
                                    <Image src='/images/projects/masonry/project1.jpg' alt=""  width={330} height={40} />
                                    </div>
                                    <div className="portfolio-info">
<a className="overlay" href="portfolio-details-1.html"></a>
                                        <div className="portfolio-info-inner">
                                            <h5><a href="portfolio-details-1.html" className="text-lg font-semibold">eCommerce Website</a></h5>
                                            <p className="portfolio-cates">
                                                <a href="#" className="text-blue-500">Design</a><span>/</span>
                                                <a href="#" className="text-blue-500">Development</a>
                                            </p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                      
                            <div className="project-item design ideas">
                                <div className="projects-box">
                                    <div className="projects-thumbnail">
                                    <Image src='/images/projects/masonry/project1.jpg' alt=""  width={330} height={40} />
                                    </div>
                                    <div className="portfolio-info">
                                        <a className="overlay" href="portfolio-details-2.html"></a>
                                        <div className="portfolio-info-inner">
                                            <h5><a href="portfolio-details-2.html" className="text-lg font-semibold">Responsive Design</a></h5>
                                            <p className="portfolio-cates">
                                                <a href="#" className="text-blue-500">Design</a><span>/</span>
                                                <a href="#" className="text-blue-500">Ideas</a>
                                            </p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
          
                        </div>
            
                        <div className="my-16 text-center">
                            <a href="portfolio-masonry.html" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Load More</a>
                        </div>
                    </div>
                </div>
            </section>
</>

);



}