import React from 'react';
import GitHubLogo from '../assets/github.svg';
import LinkedInLogo from '../assets/linkedin.svg';

function Team(){
  return (
    <div id="team">
     
            <div className="mate">
                <h3>Coral Fussman</h3>

                    <div className="social-container">
                        <a href="https://github.com/coralfussman"
                            classNameName="github-social" target="_blank">
                                <img id='logo-main' src={GitHubLogo} width="35"></img>
                        </a>
                        <a href="https://www.linkedin.com/in/coral-fussman-21721538/"
                            classNameName="linkedin-social" target="_blank">
                                <img id='logo-main' src={LinkedInLogo} width="35"></img>
                        </a>
                    </div>
            </div>
            <div className="mate">
                <h3>Sett Hein</h3>

                    <div className="social-container">
                        <a href="https://github.com/settnaing199"
                            classNameName="github-social" target="_blank">
                                <img id='logo-main' src={GitHubLogo} width="35"></img>
                        </a>
                        <a href="https://www.linkedin.com/in/sett-hein/"
                            classNameName="linkedin-social" target="_blank">
                                <img id='logo-main' src={LinkedInLogo} width="35"></img>
                        </a>
                    </div>
            </div>
        <div className="mate">
            <h3>Erik Matevosyan</h3>

                <div className="social-container">
                        <a href="https://github.com/erik-matevosyan"
                            classNameName="github-social" target="_blank">
                                <img id='logo-main' src={GitHubLogo} width="35"></img>
                        </a>
                        <a href="https://www.linkedin.com/in/erik-matevosyan/"
                            classNameName="linkedin-social" target="_blank">
                                <img id='logo-main' src={LinkedInLogo} width="35"></img>
                        </a>
                </div>
        </div>
        <div className="mate">
            <h3>Erik J Rogel</h3>

                <div className="social-container">
                        <a href="https://github.com/erikjrogel"
                            classNameName="github-social" target="_blank">
                                <img id='logo-main' src={GitHubLogo} width="35"></img>
                        </a>
                        <a href="https://www.linkedin.com/in/erikjrogel/"
                         classNameName="linkedin-social" target="_blank">
                             <img id='logo-main' src={LinkedInLogo} width="35"></img>
                        </a>
                </div>
        </div>
    
    </div>
  )
}

export default Team;