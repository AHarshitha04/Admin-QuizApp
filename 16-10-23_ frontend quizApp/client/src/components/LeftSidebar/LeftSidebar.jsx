import React from 'react'
import { Link } from 'react-router-dom'
import './LeftSidebar.css'


const LeftSidebar = () => {


    return (
        <div className='left-sidebar-div'>
            <ul className='leftsidebar-contents'>
                <li><span class="material-symbols-outlined">
                    home
                </span><Link > Home</Link ></li>
                <li><span class="material-symbols-outlined">
                    grid_view
                </span><Link>Exams</Link></li>
                <li><span class="material-symbols-outlined">
                    layers
                </span><Link>Subscriptions</Link></li>
                <li><span class="material-symbols-outlined">
                    forum
                </span><Link>Ask Doubts</Link></li>
                <li><span class="material-symbols-outlined">
                    description
                </span><Link>Sample Paper</Link></li>
            </ul>
        </div>
    )
}

export default LeftSidebar





