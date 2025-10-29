import React from 'react'
import {Link} from 'react-router-dom'
import historiaVideo from '../../images/fotosPaginaBoda/videoMometnos1.mp4';
import strory2 from '../../images/story/2.jpg'
import strory3 from '../../images/story/3.jpg'
import strory4 from '../../images/story/4.jpg'
import './style.css'


const Story = () =>{
    return(
        <div id="story" className="story-area section-padding">
            <div className="container">
                <div className="col-l2">
                    <div className="section-title text-center">
                        <h2>Nuestra Historia</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="story clearfix">
                            <div className="story-top"></div>
                            <div className="content-wrapper">
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    {/* Reemplazado img por iframe para video */}
                                                    <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden'}}>
                                                        <iframe
                                                            src={historiaVideo}
                                                            title="Video - Nuestra Historia"
                                                            style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0}}
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                                                            allowFullScreen
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>First time we met</h2>
                                        <span className="date">July 20, 2017</span>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some,</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory2} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Our First Date</h2>
                                        <span className="date">Dec 25, 2017</span>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some,</p>
                                        <div className="story-button">
                                            <Link className="theme-btn" to="/"  title="READ MORE">READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory3} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Our Marriage Proposal</h2>
                                        <span className="date">Jan 10, 2018</span>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some,</p>
                                        <div className="story-button">
                                            <Link className="theme-btn" to="/"  title="READ MORE">READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory4} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Our Engagement</h2>
                                        <span className="date">Jan 22, 2018</span>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some,</p>
                                        <div className="story-button">
                                            <Link className="theme-btn" to="/"  title="READ MORE">READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="story-bottom"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Story;