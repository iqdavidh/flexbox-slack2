import React from 'react';

class Header extends React.Component{

    render(){
        return (

            <header>
                <h1>Where Work Happens</h1>
                <p>When your team needs to kick off a project, hire a new employee, deploy some code, review a sales
                    contract,
                    finalize next year's budget, measure an A/B test, plan your next office opening, and more, Slack has
                    you
                    covered.</p>

                <div className="panContenedorBloqueOnBig">

                    <div className="panInput">
                        <input type="text" placeholder="Email adress"/>
                    </div>
                    <div>
                        <button type="button"
                                className="cmdCallToAction"
                                name="button">GET STARTED
                        </button>
                    </div>

                </div>


                <div className="panTextoSignIn">
                    <p>Already using Slack?
                        <a href="/">Sign in</a>
                    </p>
                </div>


                <div className="contenedorImg">
                    <img src="images/home_talking.png" alt="home_work_happening"/>
                </div>


            </header>);
    }
}

export default Header;