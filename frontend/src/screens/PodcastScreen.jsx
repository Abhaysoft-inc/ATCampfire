import React from 'react'
import { Slider } from '@mui/material'
import { ImNext, ImPlay2, ImPrevious } from "react-icons/im";
export default function PodcastScreen() {
    return (
        <>

            <div className="podcast-screen mt-16 lg:flex">


                <div className="left-sectn ">
                    <div className="img-sectn flex justify-center">
                        <img src="/images/plane2.jpg" alt="" className="w-60 h-60  rounded-md object-cover shadow-lg shadow-slate-800" />
                    </div>
                    <div className="other text-white mt-6 mx-10">
                        <p className=" text-3xl font-[500] overflow-hidden whitespace-nowrap shadow-sm ">The Lost Black Box in Bermuda</p>
                        <p className="text-slate-500 font-[500] mt-.5">The Bermuda Mysteries</p>


                    </div>
                    <div className="podcast-player mx-10 mt-10">

                        <div className="flex space-x-6 justify-center text-white">
                            <ImPrevious size={40} />
                            <ImPlay2 size={40} />
                            <ImNext size={40} />


                        </div>
                        <Slider defaultValue={0} aria-label='' valueLabelDisplay='off' className='mt-2' />



                    </div>

                </div>

                <div className="subtitlesectn">


                </div>

            </div>

        </>
    )
}
