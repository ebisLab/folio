import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Home = () =>{

    // var tabTriggerBtns = document.querySelectorAll('.tabs li button');

    // tabTriggerBtns.forEach(function(tabTriggerBtn, index){
    //     tabTriggerBtn.addEventListener('click', function(){
    //         var currentTabData = document.querySelector('.tab-content[data-tab-content="' + this.dataset.tabTrigger + '"]');
    
    //         // remove classess
    //         document.querySelector('.tab-content.is-open').classList.remove('is-open');
    //         document.querySelector('.tabs li button.is-active').classList.remove('is-active');
    //         // add classes
    //         currentTabData.classList.add('is-open');
    //         this.classList.add('is-active');
    //     });
    // });

    const filterthrough = (e)=>{
        e.preventDefault()
        console.log('i just clicked this--->', e.target.dataset.tab)
        // console.log(document.querySelector('[data-tab=illustrations]'))
    }

    return(
        <div>
             <h1>
            This is the home
        </h1>
            <nav>
                <ul>
                    <li data-tab="illustrations" className="something" onClick={filterthrough}>Illustrations</li>
                    <li>Graphs</li>
                    <li>FullStack</li>
                    <li>UI</li>


                </ul>
            </nav>

            <div className="row">
            {/* <a href="/gross"> */}
            <a className="column" href="/gross">

                <div data-tab="illustrations"  >
                {/* <a href="/gross"> */}
                    <span className="variant">
                        <h1>App</h1>
                        <h1>Project Sample Name</h1>
                        {/* <a href="/gross">Bored</a> */}
                        <br/>
                        {/* <Link to="/gross">Project Link</Link> */}

                        </span>
                        {/* </a> */}
                    </div>
                    </a>





                    <div className="column" >Stuff</div>
                
                <div className="column" >Stuff</div>
                <div className="column" data-tab="illustrations" >Stuff Illustration part</div>
            </div>
       
        </div>
    )
}

export default Home