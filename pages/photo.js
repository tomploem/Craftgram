import React from 'react'
import Photo from '../components/frame'

export default class extends React.Component {

    static async getInitialProps ({ url: { query: { id } } }) {
      return { id }
    }
    constructor (props) {
        super(props)
    }

    render () {
      <div className='permalink'>
        <div className='wrap'>
          <Photo id={id} />
        </div>
      </div>
      }
}

