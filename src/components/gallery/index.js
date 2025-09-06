import React from 'react';
import Sectiontitle from '../section-title'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import './style.css'

import galimg1 from '../../images/gal/1.jpg'
import galimg2 from '../../images/gal/6.jpg'
import galimg3 from '../../images/gal/3.jpg'
import galimg4 from '../../images/gal/4.jpg'
import galimg5 from '../../images/gal/5.jpg'
import galimg6 from '../../images/gal/2.jpg'

const Portfolios = [
  {
    Pimg: galimg1,
  },
  {
    Pimg: galimg2,
  },
  {
    Pimg: galimg3,
  },
  {
    Pimg: galimg4,
  },
  {
    Pimg: galimg6,
  },
  {
    Pimg: galimg5,
  }

]
const Gallery = (props) => {

  const [open, setOpen] = React.useState(false);

  return (
    <div id="gallery" className="Gallery-section section-padding pb-70">
      <Sectiontitle section={'Our Gellary'} />
      <div className="container">
        <div className="row">
          <ResponsiveMasonry columnsCountBreakPoints={{ 575: 1, 750: 3, 900: 3 }}>
            <Masonry gutter="30px">
              {Portfolios.map((image, i) => (
                <div className="gallery-img" onClick={() => setOpen(true)} key={i}>
                  <img src={image.Pimg} alt="" className="img img-responsive" />
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: galimg1 },
          { src: galimg2 },
          { src: galimg3 },
          { src: galimg4 },
          { src: galimg5 },
          { src: galimg6 },
        ]}
      />
    </div>
  );
}

export default Gallery;