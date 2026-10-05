 import { Parallax } from 'react-parallax';

const Cover = ({image, title}) => {
  return (

    <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={image}
        bgImageAlt="the menu"
        strength={-200}
    >
        <div
  className="hero h-175"
  
>
  <div className="hero-overlay "></div>
  <div className="hero-content text-neutral-content text-center bg-black/40 p-20">
    <div className="max-w-md ">
      <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
    </Parallax>
    
  )
}

export default Cover