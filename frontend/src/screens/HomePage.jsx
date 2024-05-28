import { Component } from 'react'

export default class HomePage extends Component {
  render() {
    return (
      <>
        <div className="homesection px-44 py-5 ">

          <div className="tickerban bg-[hsl(351,100%,95%)] p-2 rounded-full mb-5 w-1/3">
            <div className="inerp flex">
              <p href="" className="newbtn bg-[#f63d68] font-[600] text-white py-2 px-4 rounded-3xl">New</p>
              <p className="ml-2 py-2 text-[#f63d68] font-[700]">Bermuda triangle series :</p>

            </div>


          </div>

          <div className="hero_text">
            <h1 className="text-white text-6xl font-[600]">Listen to the mystical stories</h1>
            <div className="grp flex space-x-4">
              <h1 className="text-white text-6xl font-[600] pt-5">of the</h1>
              <h1 className="text-[#f53d68] text-6xl font-[600] pt-5">Bermuda triangle</h1>

            </div>

            <p className="mt-8 text-white w-2/3 text-wrap"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi enim, dolor facilis accusamus maxime, fugit laudantium itaque earum, rem incidunt temporibus praesentium quae esse tempore autem dolorum quibusdam neque aperiam similique nulla architecto. Ratione soluta unde nulla quod? Et libero vel asperiores quam, eveniet est odio dicta .</p>

          </div>
          <div className="lstnon flex -ml-2 space-x-4">
            <img src="/images/spotifylisten.png" className='mt-4 w-46 h-[85px]' alt="" />
            <img src="/images/apple-podcast.png" className='mt-6 w-46 h-[68px]' alt="" />
            {/* <img src="/images/applepodcast.png" className='w-20 h-10 scale-1' alt="" /> */}
          </div>


        </div>


      </>
    )
  }
}
