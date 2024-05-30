import { Component } from 'react'

export default class HomePage extends Component {
  render() {
    return (
      <>
        <div className="homesection px-44 py-5 ">

          {/* hero text */}

          <div className="tickerban bg-[hsl(351,100%,95%)] p-2 rounded-full mb-5 w-1/3">
            <div className="inerp flex">
              <p href="" className="newbtn bg-[#f63d68] font-[600] text-white py-2 px-4 rounded-3xl">New</p>
              <p className="ml-2 py-2 text-[#f63d68] font-[700]">Bermuda triangle series :</p>

            </div>


          </div>

          <div className="hero_text">
            <h1 className="text-white text-6xl font-[600]">Dive into the mystical stories</h1>
            <div className="grp flex space-x-4">
              <h1 className="text-white text-6xl font-[600] pt-5">of the</h1>
              <h1 className="text-[#f53d68] text-6xl font-[600] pt-5">Bermuda triangle</h1>

            </div>

            <p className="mt-8 text-white w-2/3 text-wrap text-xl">Planes vanish with no trace. Ships sink with no wreckage. Communications cut off with no warning. We explore the mysteries of the Bermuda triangle.</p>

          </div>
          {/* end hero text */}

          {/* listen on */}
          <div className="lstnon flex -ml-2 space-x-4">
            <img src="/images/spotifylisten.png" className='mt-4 w-46 h-[85px]' alt="" />
            <img src="/images/apple-podcast.png" className='mt-6 w-46 h-[68px]' alt="" />
          </div>

          {/* latest podcast */}

          <p className="text-white py-10 font-[600] text-xl">Latest articles about Bermuda triangle</p>


        </div>

        {/* episode cards */}

        <div className="px-24 flex space-x-6 pb-7">

          <div className="relative pt-48 h-80 w-56 bg-[url(/images/plane-in-sky.jpg)] bg-cover rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
            <div className="relative p-4">
              <h1 className="text-white font-[600]">The lost black box</h1>
              <p className="text-white text-xs"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, ducimus.</p>
              <p className="pt-2 text-sm text-white">EP 23 | 42 min 23 sec</p>
            </div>
          </div>

          <div className="relative pt-48 h-80 w-56 bg-[url(/images/plane2.jpg)] bg-cover rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
            <div className="relative p-4">
              <h1 className="text-white font-[600]">The lost black box</h1>
              <p className="text-white text-xs"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, ducimus.</p>
              <p className="pt-2 text-sm text-white">EP 23 | 42 min 23 sec</p>
            </div>
          </div>

          <div className="relative pt-48 h-80 w-56 bg-[url(/images/plane3.jpg)] bg-cover rounded-lg bg-center">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
            <div className="relative p-4">
              <h1 className="text-white font-[600]">The lost black box</h1>
              <p className="text-white text-xs"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, ducimus.</p>
              <p className="pt-2 text-sm text-white">EP 23 | 42 min 23 sec</p>
            </div>
          </div>

          <div className="relative pt-48 h-80 w-56 bg-[url(/images/ship1.jpg)] bg-cover rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
            <div className="relative p-4">
              <h1 className="text-white font-[600]">The lost black box</h1>
              <p className="text-white text-xs"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, ducimus.</p>
              <p className="pt-2 text-sm text-white">EP 23 | 42 min 23 sec</p>
            </div>
          </div>

          <div className="relative pt-48 h-80 w-56 bg-[url(/images/ship2.jpg)] bg-cover rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
            <div className="relative p-4">
              <h1 className="text-white font-[600]">The lost black box</h1>
              <p className="text-white text-xs"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, ducimus.</p>
              <p className="pt-2 text-sm text-white">EP 23 | 42 min 23 sec</p>
              <button className="absolute bottom-4 right-4 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 3v18l15-9L5 3z" />
                </svg>
              </button>
            </div>
          </div>









        </div>
        {/*end latest podcasts  */}

        {/* other podcasts */}


        <div className="px-36 py-5 ">
        <p className="text-white py-10 font-[600] text-xl">Trending article on <b className='text-[#f53d68]'> Around the campfire </b></p>
        </div>

        {/* episode cards */}
        <div className="px-24 flex space-x-6 pb-7">

          <div className="relative pt-48 h-80 w-56 bg-[url(/images/plane-in-sky.jpg)] bg-cover rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
            <div className="relative p-4">
              <h1 className="text-white font-[600]">The lost black box</h1>
              <p className="text-white text-xs"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, ducimus.</p>
              <p className="pt-2 text-sm text-white">EP 23 | 42 min 23 sec</p>
            </div>
          </div>

          <div className="relative pt-48 h-80 w-56 bg-[url(/images/plane2.jpg)] bg-cover rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
            <div className="relative p-4">
              <h1 className="text-white font-[600]">The lost black box</h1>
              <p className="text-white text-xs"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, ducimus.</p>
              <p className="pt-2 text-sm text-white">EP 23 | 42 min 23 sec</p>
            </div>
          </div>

          <div className="relative pt-48 h-80 w-56 bg-[url(/images/plane3.jpg)] bg-cover rounded-lg bg-center">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
            <div className="relative p-4">
              <h1 className="text-white font-[600]">The lost black box</h1>
              <p className="text-white text-xs"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, ducimus.</p>
              <p className="pt-2 text-sm text-white">EP 23 | 42 min 23 sec</p>
            </div>
          </div>

          <div className="relative pt-48 h-80 w-56 bg-[url(/images/ship1.jpg)] bg-cover rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
            <div className="relative p-4">
              <h1 className="text-white font-[600]">The lost black box</h1>
              <p className="text-white text-xs"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, ducimus.</p>
              <p className="pt-2 text-sm text-white">EP 23 | 42 min 23 sec</p>
            </div>
          </div>

          <div className="relative pt-48 h-80 w-56 bg-[url(/images/ship2.jpg)] bg-cover rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
            <div className="relative p-4">
              <h1 className="text-white font-[600]">The lost black box</h1>
              <p className="text-white text-xs"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, ducimus.</p>
              <p className="pt-2 text-sm text-white">EP 23 | 42 min 23 sec</p>
              <button className="absolute bottom-4 right-4 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 3v18l15-9L5 3z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        






      </>
    )
  }
}
