import Link from 'next/link';

function ComissionBox() {
  return (
    <div className="card mr-5 ml-5 backdrop-blur flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100/[0.3]">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Nome Pessoa e Empresa</span>
          </label>
          <input type="text" placeholder="nome" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Quais serviços você precisa</span>
          </label>
          <input type="text" placeholder="serviços" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
        <Link href="/servicos/feito">
          <button className="btn">Comissione</button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default ComissionBox;
