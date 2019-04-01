import React , {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './Home.css'
 class Home extends Component{
    review(){
        console.log("hello")
        return(
            <h1>hello</h1>
        )
    }
    render(){
        return(
            <div>
                <div className="row">
                    <div className="leftcolumn">
                        <div className="card">
                            <h2>Blog 1</h2>
                            <h4>Title Dec 7, 2017</h4>
                            <h5>description</h5>
                            <div className="imageBlock" style={{height:'200px'}}>Image</div>
                            <p>Some text..</p>
                            <p>Blog write here.......</p>
                            <button>Like</button>
                            <button>Unlike</button>
                            {/* <NavLink to="/home/review" style={{color:'white'}}><button style={{float:'right'}}>Review</button></NavLink> */}
                            <button style={{float:'right'}} onClick={this.review.bind(this)}>Review</button>
                        </div>
                        <div className="card">
                            <h2>Blog 2</h2>
                            <h4>Title Dec 7, 2017</h4>
                            <h5>description</h5>
                            <div className="imageBlock" style={{height:'200px'}}>Image</div>
                        <p>Some text..</p>
                            <p>Blog write here.......</p>
                            <button>Like</button>
                            <button>Unlike</button>
                            <NavLink to="/home/review" style={{color:'white'}}><button style={{float:'right'}}>Review</button></NavLink>
                        </div>
                        <div className="card">
                            <h2>Blog 3</h2>
                            <h4>Title Dec 7, 2017</h4>
                            <h5>description</h5>
                            <div className="imageBlock" style={{height:'200px'}}>Image</div>
                            <p>Some text..</p>
                            <p>Blog write here.......</p>
                            <button>Like</button>
                            <button>Unlike</button>
                            <NavLink to="/home/review" style={{color:'white'}}><button style={{float:'right'}}>Review</button></NavLink>
                        </div>
                        <div className="card">
                                <h2>Blog 4</h2>
                                <h4>Title Dec 7, 2017</h4>
                                <h5>description</h5>
                                <div className="imageBlock" style={{height:'200px'}}>Image</div>
                                <p>Some text..</p>
                                <p>Blog write here.......</p>
                                <button>Like</button>
                                <button>Unlike</button>
                                <NavLink to="/home/review" style={{color:'white'}}><button style={{float:'right'}}>Review</button></NavLink>
                            </div>
                    </div>
                    <div className="rightcolumn">
                        <div className="card">
                            <h2>About Me</h2>
                            <p>Blog website is a free and open-source content management system (CMS) for publishing web c  ontent.</p>
                        </div>
                        <div className="card">
                            <h3>Popular Post</h3>
                            <div className="imageBlock"><p>I have no special talent. I am only passionately curious.-Albert Einstein</p></div><br/>
                            <div className="imageBlock"><p>If you judge people, you have no time to love them.-Mother Teresa </p></div><br/>
                            <div className="imageBlock"><p>Stay hungry, stay foolish.-Steve Jobs</p></div><br/>
                        </div>
                        <div className="card">
                            <h3>Follow Authors</h3>
                            <p>Amit Agarwal</p>
                            <p>Shardha Sharma</p>
                            <p>Harsh Agrawal</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;