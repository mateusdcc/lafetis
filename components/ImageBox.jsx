function ImageBox({ imgSrc, imageAlt, Title, Description }) {
  return (
    <div className="group relative w-96">
        <img className="w-full object-cover" src={imgSrc} alt={imageAlt} />
        <button
            className="absolute hover:cursor-default bg-neutral-focus text-neutral-content top-0 left-0 h-full w-full justify-center items-center opacity-0 focus:opacity-100 group-hover:opacity-100 duration-500 text-center">
            <h1 className="text-xl text-white p-6">{Title}</h1>
            <h4 className="text text-white p-6">{Description}</h4>
        </button>
    </div>
  )
}

export default ImageBox;
