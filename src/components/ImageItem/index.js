import './index.css'

const ImageItem = props => {
  const {itemDetails, isSame} = props
  const {id, imageUrl, thumbnailUrl, category} = itemDetails

  const isMatched = () => {
    isSame(id)
  }

  return (
    <li className="item">
      <button onClick={isMatched}>
        <img
          src={thumbnailUrl}
          className="image"
          alt="thumbnail"
          category={category}
        />
      </button>
    </li>
  )
}

export default ImageItem
