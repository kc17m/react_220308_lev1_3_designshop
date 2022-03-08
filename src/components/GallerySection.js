import images from "../data/images.json"
import GalleryOne from "./GalleryOne"

const GallerySection = () => {
    return (
        <section className="galleryOne"> {
            images.map((image) =>
                <GalleryOne
                    img={image.img}
                    name={image.name}
                    price={image.price}
                />
            )
        }
        </section>
    )
}


export default GallerySection