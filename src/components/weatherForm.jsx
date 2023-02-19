import React from 'react'


import {BsFillCloudSunFill} from 'react-icons/bs'

export default function WeatherForm() {
  return (
    <nav className='container-fluid p-4' style={{background: 'coral'}}>
        <div className='container'>
            <div className='row'>
                <div className='logo col-auto' style={{color: 'lightskyblue'}}>
                    <h2> <BsFillCloudSunFill style={{color: 'darkblue'}}/>   YSW Weather   </h2>
                   
                </div>
                <div className='d-flex col-md-4'>
                  <input id='id_search_inp' className='form-control me-3' placeholder='Search for town weather' type="text" />
                  <button id='search_btn' className='btn btn-info'>Search</button>
                </div>
            </div>
        </div>
    </nav>
  )
}
