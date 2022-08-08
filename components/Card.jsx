import Link from 'next/link';

function Card({ imgSrc, imageAlt, Title, Description, buttonTitle, buttonLink }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={imgSrc} alt={imageAlt} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{Title}</h2>
        <p>{Description}</p>
        <div className="card-actions">
          <Link href={buttonLink}>
            <button className="btn btn-primary">{buttonTitle}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card;
