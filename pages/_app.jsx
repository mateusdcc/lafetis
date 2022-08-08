import '../styles/globals.css'
import Link from "next/link";
import Head from "next/head";

function upBarElements() {
  return (
    <>
      <Link href="/comissao">
        <button className="mt-4 active:bg-primary hover:bg-neutral-focus active:rounded-md transition-all active:text-neutral-content border-b-2 p-2 text-secondary-focus  flex items-left text-md btn-ghost text-md rounded-md">
            <span className='font-bitter border-b-2 border-base-content text-neutral-content'>
              Orçamento
            </span>
        </button>
      </Link>

      <div className="flex justify-end">
        <div className="flex">
          <div className="dropdown dropdown-end">
            <button className="mt-4 active:bg-primary hover:bg-neutral-focus active:rounded-md transition-all active:text-neutral-content border-b-2 p-2 text-secondary-focus  flex items-left text-md btn-ghost text-md rounded-md">
              <span className='font-bitter border-b-2 text-neutral-content border-base-content'>
                Serviços
              </span>
            </button>
            <ul tabIndex="0" className="flex flex-col items-center menu dropdown-content text-secondary-focus w-max shadow bg-base-300/[0.1] rounded-box w-52 mt-4">
              <li>
                <Link href="/servicos/fotografia">
                  <a className="font-bitter text-base-200">Fotografia</a>
                </Link>
              </li>
              <li>
                <Link href="/servicos/imagens">
                  <a className="font-bitter text-base-200">Edição de Imagem</a>
                </Link>
              </li>
              <li>
                <Link href="/servicos/ambiente">
                  <a className="font-bitter text-base-200">Ambientação</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button className="mt-4 active:bg-primary hover:bg-neutral-focus active:rounded-md transition-all active:text-neutral-content border-b-2 p-2 text-secondary-focus  flex items-left text-md btn-ghost text-md rounded-md">
      <Link href="/#portfolio">
        <a className='font-bitter text-neutral-content border-b-2 border-base-content'>
          Portfolio
        </a>
      </Link>
      </button>
    </>
  )
}

function sideBarElements() {
  return (
    <>
    <Link href="/comissao">
      <li className="m-4 mb-0 text-neutral-focus bg-base-300 text-xl">
        <div>
          <span className='border-b-2 border-primary'> Orçamento </span>
        </div>
      </li>
    </Link>
    <Link href="/#portfolio">
      <li className="m-4 mb-0 text-neutral-focus bg-base-300 text-xl">
        <div>
            <span className='border-b-2 border-primary'> Portfolio </span>
        </div>
      </li>
    </Link>
    <Link href="/#services">
      <li className="text-neutral-focus bg-base-300 m-4 mb-0 text-xl">
        <div>
          <span className='border-b-2 border-primary'> Serviços </span>
        </div>
      </li>
    </Link>
    <ul className="menu pl-6 menu-compact bg-base-300 p-2 rounded-box">
      <li>
        <Link href="/servicos/fotografia">
          <a>Fotografia</a>
        </Link>
      </li>
      <li>
        <Link href="/servicos/imagens">
          <a>Edição de Imagem</a>
        </Link>
      </li>
      <li>
        <Link href="/servicos/ambiente">
          <a>Ambientação</a>
        </Link>
      </li>
    </ul>
    </>
  )
}


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lafetis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="drawer">
        <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar bg-neutral">
            <div className="flex-none lg:hidden">
              <label htmlFor="sidebar-drawer" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>
            <Link href="/">
              <button className="flex-1 px-2 mx-2 text-2xl text-neutral-content font-oleo">Lafetis</button>
            </Link>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {upBarElements()}
              </ul>
            </div>
          </div>
            <Component {...pageProps} />

            <footer className="footer p-10 bg-neutral text-neutral-content">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
                  <p>Lafetis CO.<br/>Entregando serviço de qualidade desde 29/02/2022.</p>
                </div>
                <div>
                  <span className="footer-title">Social</span>
                  <div className="grid grid-flow-col gap-4">
                    <a href="https://twitter.com/lafetis_co" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                    <a href="https://github.com/mateusdcc" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>
              </div>
          </footer>
        </div>
        <div className="drawer-side bg-transparent">
          <label htmlFor="sidebar-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-300">
            {sideBarElements()}
          </ul>

        </div>
      </div>
    </>
  );
}

export default MyApp
