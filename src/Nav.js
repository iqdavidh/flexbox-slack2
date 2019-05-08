import React from 'react';

class Nav extends React.Component{

    render(){
        return (

            <nav className="menuTop">

                <a href="#" className="siDisplayMenu" id="linkHome">
                    <img src="./images/slack-logo.png"
                         className="imglogo"
                         alt="slack_logo"/>
                </a>

                <div className="linkMenuTop noDisplayMenu" id="panMenuTop">
                    <ul>
                        <li>Why Slack?</li>
                        <li>Pricing</li>
                        <li>About Us</li>
                        <li>Your Workspaces</li>
                    </ul>
                </div>

                <button className="cmdMenu siDisplayMenu" id="cmdMenu"

                        onClick="onClickMenu()"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" aria-label=""
                         className="svg-replaced" shape-rendering="geometricPrecision">
                        <path d="M0 0h24v3H0zm0 7h24v3H0zm0 7h24v3H0z" fill-rule="evenodd"></path>
                    </svg>
                </button>

            </nav>);
    }
}

export default Nav;