


const GalleryOne = (props) => {
    return (
        <figure>
            <img src={props.img} alt="" />
            <figcaption>
                <p>{props.name}</p>
                <p>{props.price}</p>
            </figcaption>
        </figure>

    )
}

export default GalleryOne