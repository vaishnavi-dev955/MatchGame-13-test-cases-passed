import {Component} from 'react'
import './index.css'

class ImageItem extends Component {
  render() {
    const {ImageItemDetails, onClickImage} = this.props
    const {thumbnailUrl, id} = ImageItemDetails
    const onClickImgBtn = () => {
      onClickImage(id)
    }
    return (
      <li>
        <button className="Image-button" type="button" onClick={onClickImgBtn}>
          <img src={thumbnailUrl} className="Image-style1" alt="thumbnail" />
        </button>
      </li>
    )
  }
}

export default ImageItem
