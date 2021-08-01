import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

class Navbar extends React.Component {
     state = {
          collapsed: true
     }
     toggleNavbar = () =>
     this.setState({
       collapsed: !this.state.collapsed,
     });
     render() {
          const collapsed = this.state.collapsed;
          const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
          const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
          return (
               <nav id='sidebar' class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
                    <a class="navbar-brand" href="/">
                         <span class='d-block d-sm-none'>Todo App</span>
                         <span className="d-none d-sm-block">
                              <img className="img-fluid img-profile mx-auto mb-2" src={`${process.env.PUBLIC_URL}/images/homework.png`} alt="" />
                         </span></a>

                    <button onClick={this.toggleNavbar} class={classTwo} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class={classOne} id="navbarSupportedContent">
                         <ul class="navbar-nav mr-auto  d-flex flex-lg-column">
                              <li class="nav-item">
                                   <Link className="nav-link js-scroll-trigger" to="/">Home</Link>
                              </li>
                              <li class="nav-item">
                                   <Link className="nav-link js-scroll-trigger" to="/class">Class</Link>
                              </li>
                              <li class="nav-item">
                                   <Link className="nav-link js-scroll-trigger" to="/functional">Functional</Link>
                              </li>
                              <li class="nav-item">
                                   <Link className="nav-link js-scroll-trigger" to="/hooks">Hooks</Link>
                              </li>
                              <li class="nav-item">
                                   <Link className="nav-link js-scroll-trigger" to="/customHooks">Custom Hooks</Link>
                              </li>
                              <li class="nav-item">
                                   <Link className="nav-link js-scroll-trigger" to="/hoc">HOC</Link>
                              </li>
                              <li class="nav-item">
                                   <Link className="nav-link js-scroll-trigger" to="/redux">Redux</Link>
                              </li>
                         </ul>

                    </div>
               </nav>
          )
     }

}

export default Navbar;