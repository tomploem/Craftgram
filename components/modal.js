import React from 'react'
import Photo from './frame'
import stylesheet from '../styles/modal.scss'

export default class extends React.Component {

  dismiss (e) {
    if (this._shim === e.target ||
       this._photoWrap === e.target || this._shimm === e.target) {
      if (this.props.onDismiss) {
        this.props.onDismiss()
      }
    }
  }

  render () {
    return (
        <div ref={el => (this._shimm = el)} className='shimm'>
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <div ref={el => (this._shim = el)} className='shim' onClick={(e) => this.dismiss(e)}>
        <div ref={el => (this._photoWrap = el)} className='photoframe'>
          <Photo id={this.props.id} />
        </div>
      </div>
        </div>
    )
  }
}
