import React from 'react';

import { Cloudinary } from 'cloudinary-core';

const transforms = {
  default: { width: 400, crop: 'pad', fetch_format: 'auto' },
};

const widths = [100, 200, 300, 500, 700, 1000, 1400, 1920];

function imgStr(id, transform = transforms.default) {
  var cl = new Cloudinary({ cloud_name: 'john-hornsby-me', secure: true });
  return cl.url(`johnhornsby/${id}.jpg`, transform);
}

function getSrcset(id, width) {
  return `${imgStr(id, { ...transforms.default, width })} ${width}w`;
}

// const project = data.allProjects[0];
// console.log(project.posterImage.image);
// console.log(imgStr(project.posterImage.image.id));
// //res.cloudinary.com/john-hornsby-me/image/upload/c_pad,w_400/5f06260a0d6ca41e4e6ea659.jpg
// //https://res.cloudinary.com/john-hornsby-me/image/upload/v1596149033/johnhornsby/5f234d299d859c1ad2f1d1db.jpg

// //https://res.cloudinary.com/john-hornsby-me/image/upload/c_limit,w_120/v1/johnhornsby/5f06260a0d6ca41e4e6ea659.jpg

const Image = ({ alt, className, id }) => {
  const sizes = [
    '(min-width: 768px) calc(.5 * 100vw)',
    '(min-width: 1440px) calc(.333 * 100vw)',
    '100vw',
  ];
  const srcset = widths.map((w) => getSrcset(id, w));

  return (
    <img
      alt={alt}
      aria-label={alt}
      className={className}
      loading="lazy"
      sizes={sizes.join(', ')}
      src={imgStr(id)}
      srcSet={srcset.join(', ')}
      title={alt}
    />
  );
};

export default Image;
