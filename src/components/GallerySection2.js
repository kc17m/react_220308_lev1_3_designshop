import images from "../data/images2.json"
import GalleryOne from "./GalleryOne"

const GallerySection2 = () => {
    return (
        <section className="galleryTwo"> {
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


export default GallerySection2