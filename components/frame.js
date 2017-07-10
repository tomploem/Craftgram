import React from 'react'
import Link from 'next/link'
import photos from '../data/photos.json'

photos[0].tags = ['mobile']

export default ({ id }) => (

  <div className='frame'>

    <img src={ photos[id - 1].url }/>
    <div className='sidebar'>
          <Link><a href='/profile?id=nkzawa'>@nkzawa</a></Link>
          - Great photo!
    </div>
      <style jsx>{`

      .frame {
        width: 900px;
        display: inline-block;
      }

      img{
        max-height: 500px;
        max-width: 600px;
        object-fit: contain;
        float: left;
      }

      .sidebar {
        float:right;
        width: 200px;

        border-radius: 5px;
        background: #fafafa;
        text-align: left;
        box-sizing: border-box;
        font-family: Roboto;
        font-size: 11px;
      }
      
      .sidebarList {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
    `}</style>

  </div>

)
