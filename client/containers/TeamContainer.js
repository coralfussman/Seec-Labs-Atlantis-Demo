import React from 'react';
import Team from '../components/Team'
import TeamSocials from '../components/TeamSocials'

export default function TeamContainer() {
    return (
        <div id="team-container">
            <h2>Developers</h2>
            <Team />
            <TeamSocials />
        </div>
    )

}