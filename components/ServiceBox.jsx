import ComissionBox from './ComissionBox';

function ServiceBox({title, description }) {
  return (
        <div className="hero bg-gradient-to-b from-neutral to-base-100 min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">{description}</p>
          </div>
          <ComissionBox />
        </div>
      </div>
  );
}

export default ServiceBox;
