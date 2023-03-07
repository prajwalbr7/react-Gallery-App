// Write your code here.
import './index.css'

const Thumbnail = props => {
  const {imagesList, Updateimages, isImage} = props
  const {thumbnailUrl, thumbnailAltText, id} = imagesList
  const CickOnUpdate = () => {
    Updateimages(id)
  }
  const ImageColorChange = isImage ? 'image-opacity' : ''
  return (
    <li className="list-container">
      <button
        className={`button-style ${ImageColorChange}`}
        type="button"
        onClick={CickOnUpdate}
      >
        <img
          src={thumbnailUrl}
          className="img-to-list"
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}
export default Thumbnail
