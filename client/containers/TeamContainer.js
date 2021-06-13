import React from 'react';
import Team from '../components/Team'
import page_brk from '../assets/page_brk.svg'
import TeamSocials from '../components/TeamSocials'

export default function TeamContainer() {
    return (
        <div id="team-container">
            <img src={page_brk} />
            <h2>Developers</h2>
            <Team />
            <TeamSocials />
        </div>
    )

}