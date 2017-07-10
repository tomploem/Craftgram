import React from 'react'
import Router from 'next/router'
import 'isomorphic-fetch'

import Modal from '../components/modal'
import Layout from '../components/layout'
import stylesheet from '../styles/index.scss'
import photos from '../data/photos.json'

// https://github.com/zeit/nextgram/blob/master


class IndexPage extends React.Component {
  static async getInitialProps () {

      //const res = await fetch('https://api.github.com/repos/zeit/next.js')
      //const json = await res.json()
    return {
        photos: photos
    }
  }

  constructor (props) {
    super(props)
      console.log(props)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  // handling escape close
  componentDidMount () {
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.onKeyDown)
  }

  onKeyDown (e) {
    if (!this.props.url.query.photoId) return
    if (e.keyCode === 27) {
      this.props.url.back()
    }
  }

  dismissModal () {
    Router.push('/')
  }

  showPhoto (e, id) {
    e.preventDefault()
    Router.push(`/?photoId=${id}`, `/photo?id=${id}`)
  }

  render () {

    const { url, photos } = this.props
    return (
        <Layout>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <div className='list'>
        {
          url.query.photoId &&
            <Modal
              id={url.query.photoId}
              onDismiss={() => this.dismissModal()}
            />
        }
        {
          photos.map((photo) => (
            <div key={photo.id} className='photo'>
              <a
                className='photoLink'
                href={`/photo?id=${photo.id}`}
                onClick={(e) => this.showPhoto(e, photo.id)}
              >
                <img src={photo.url} />
              </a>
            </div>
          ))
        }

      </div>
        </Layout>
    )
  }
}

export default IndexPage