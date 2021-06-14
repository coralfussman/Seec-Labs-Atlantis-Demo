import React from 'react';
import GitHubLogo from '../assets/github.svg';
import LinkedInLogo from '../assets/linkedin.svg';

function Team(){
  return (
    <div id="team">
        
       
     
            <div>

                    <div class="social-container">
                        <h3>Coral Fussman</h3>
                        <a href="https://github.com/coralfussman"
                            className="github-social" target="_blank">
                                <img id='logo-main' src={GitHubLogo} width="35"></img>
                        </a>
                        <a href="https://www.linkedin.com/in/coral-fussman-21721538/"
                            className="linkedin-social" target="_blank">
                                <img id='logo-main' src={LinkedInLogo} width="35"></img>
                        </a>
                    </div>
            </div>
            <div>

                    <div class="social-container">
                        <h3>Sett Hein</h3>
                        <a href="https://github.com/settnaing199"
                            className="github-social" target="_blank">
                                <img id='logo-main' src={GitHubLogo} width="35"></img>
                        </a>
                        <a href="https://www.linkedin.com/in/sett-hein/"
                            className="linkedin-social" target="_blank">
                                <img id='logo-main' src={LinkedInLogo} width="35"></img>
                        </a>
                    </div>
            </div>
        <div>

                <div class="social-container">
                    <h3>Erik Matevosyan</h3>
                        <a href="https://github.com/erik-matevosyan"
                            className="github-social" target="_blank">
                                <img id='logo-main' src={GitHubLogo} width="35"></img>
                        </a>
                        <a href="https://www.linkedin.com/in/erik-matevosyan/"
                            className="linkedin-social" target="_blank">
                                <img id='logo-main' src={LinkedInLogo} width="35"></img>
                        </a>
                </div>
        </div>
        <div>

                <div class="social-container">
                    <h3>Erik J Rogel</h3>
                        <a href="https://github.com/erikjrogel"
                            className="github-social" target="_blank">
                                <img id='logo-main' src={GitHubLogo} width="35"></img>
                        </a>
                        <a href="https://www.linkedin.com/in/erikjrogel/"
                         className="linkedin-social" target="_blank">
                             <img id='logo-main' src={LinkedInLogo} width="35"></img>
                        </a>
                </div>
        </div>
    
    </div>
  )
}

export default Team;