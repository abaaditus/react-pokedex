/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

export default function Modal() {
    const [open, setOpen] = useState(true)
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`;
    const animatedFrontImgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif`;
    const animatedBackImgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/1.gif`;
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
                <div className="absolute inset-0 overflow-hidden">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <div className="relative w-screen max-w-2xl">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-500"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-500"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                                        <button
                                            type="button"
                                            className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                            onClick={() => setOpen(false)}
                                        >
                                            <span className="sr-only">Close panel</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Transition.Child>
                                {/* start of modal body */}
                                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll rounded-xl">
                                    <div className="relative flex-1">
                                        {/* <div className="bg-green-200 py-6 sm:py-6 rounded-xl ">
                                            <img className="w-36 m-auto object-scale-down rounded-md" src={imgUrl} alt="" />
                                            <h5 className=" font-bold text-gray-500 text-center mt-6">#001</h5>
                                            <h1 className="text-xl font-bold text-gray-700 text-center">Bulbasaur</h1>
                                            <div className="my-4 flex justify-center gap-2">
                                                <span className="text-xs block font-bold py-2 px-4 text-black rounded-md shadow hover:shadow-md transition duration-300" style={{ backgroundColor: '#9bcc50' }}>
                                                    GRASS
                                                </span>
                                                <span className="text-xs block font-bold py-2 px-4 text-black rounded-md shadow hover:shadow-md transition duration-300" style={{ backgroundColor: '#b97fc9' }}>
                                                    POISION
                                                </span>
                                            </div>
                                        </div> */}

                                        <div className="bg-green-300 px-6 pt-6 pb-2 rounded-xl text-white">
                                            <div className="text-4xl font-bold text-left tracking-widest inline-block w-6/12">Bulbasaur</div>
                                            <div className="text-3xl font-bold text-right tracking-widest inline-block w-6/12">#001</div>
                                            <div className="my-4 flex gap-2">
                                                <span className="text-xs block font-bold py-2 px-4 rounded-full shadow hover:shadow-md transition duration-300" style={{ backgroundColor: '#9bcc50' }}>
                                                    GRASS
                                                </span>
                                                <span className="text-xs block font-bold py-2 px-4  rounded-full shadow hover:shadow-md transition duration-300" style={{ backgroundColor: '#b97fc9' }}>
                                                    POISION
                                                </span>
                                            </div>
                                            <img className="m-auto rounded-md" src={imgUrl} alt="" />
                                        </div>

                                        {/* start of grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-5">
                                            <div className="bg-gray-100 rounded-xl p-5 md:col-span-2">
                                                <h5 className="font-bold">ABOUT</h5>
                                                <p>A strange seed was planted on its back at birth.The plant sprouts and grows with this POKéMON</p>
                                            </div>
                                            <div className="bg-green-100 rounded-xl p-5">
                                                <h5 className="font-bold">ABILITIES</h5>
                                                <div className="flex h-full flex-wrap pt-2 pb-5">
                                                    <span className="text-xs py-2 px-3 font-bold rounded-full bg-white text-gray-500 m-auto italic" >
                                                        OVERGROW
                                                    </span>
                                                    <span className="text-xs py-2 px-3 font-bold rounded-full bg-white text-gray-500 m-auto italic" >
                                                        CHLOROPHYLL
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="bg-red-100 rounded-xl p-5">
                                                <h5 className="font-bold">WEAKNESS</h5>
                                                <div className="h-full pt-2 pb-5 flex gap-2 flex-col md:flex-row">
                                                    <img className="m-auto rounded-md" src={process.env.PUBLIC_URL + '/static/images/32px-Pokémon_Fire_Type_Icon.svg.png'} alt="" />
                                                    <img className="m-auto rounded-md" src={process.env.PUBLIC_URL + '/static/images/32px-Pokémon_Flying_Type_Icon.svg.png'} alt="" />
                                                    <img className="m-auto rounded-md" src={process.env.PUBLIC_URL + '/static/images/32px-Pokémon_Ice_Type_Icon.svg.png'} alt="" />
                                                    <img className="m-auto rounded-md" src={process.env.PUBLIC_URL + '/static/images/32px-Pokémon_Psychic_Type_Icon.svg.png'} alt="" />
                                                </div>
                                            </div>
                                            <div className="bg-blue-100 rounded-xl p-5 md:col-span-2">
                                                <h5 className="font-bold">STATS</h5>
                                                <div className="h-full pt-2 pb-5 flex flex-wrap gap-2 flex-col md:flex-row  ">
                                                    <div className="rounded-full bg-gray-50 h-18 m-auto">
                                                        <div className="text-xs h-12 w-12 flex content-center font-bold rounded-full bg-pink-400 text-white items-center justify-center " >
                                                            <span>HP</span>
                                                        </div>
                                                        <span className="block font-semibold text-xs text-center px-2 py-3">
                                                            255
                                                        </span>
                                                    </div>

                                                    <div className="rounded-full bg-gray-50 h-18 m-auto">
                                                        <div className="text-xs h-12 w-12 flex content-center font-bold rounded-full bg-red-400 text-white items-center justify-center " >
                                                            <span>ATK</span>
                                                        </div>
                                                        <div className="block font-semibold text-xs text-center px-2 py-3">
                                                            255
                                                        </div>
                                                    </div>

                                                    <div className="rounded-full bg-gray-50 h-18 m-auto">
                                                        <div className="text-xs h-12 w-12 flex content-center font-bold rounded-full bg-yellow-400 text-white items-center justify-center " >
                                                            <span>DEF</span>
                                                        </div>
                                                        <span className="block font-semibold text-xs text-center px-2 py-3">
                                                            255
                                                        </span>
                                                    </div>

                                                    <div className="rounded-full bg-gray-50 h-18 m-auto">
                                                        <div className="text-xs h-12 w-12 flex content-center font-bold rounded-full bg-blue-400 text-white items-center justify-center " >
                                                            <span>S.ATK</span>
                                                        </div>
                                                        <span className="block font-semibold text-xs text-center px-2 py-3">
                                                            255
                                                        </span>
                                                    </div>

                                                    <div className="rounded-full bg-gray-50 h-18 m-auto">
                                                        <div className="text-xs h-12 w-12 flex content-center font-bold rounded-full bg-green-400 text-white items-center justify-center " >
                                                            <span>S.DEF</span>
                                                        </div>
                                                        <span className="block font-semibold text-xs text-center px-2 py-3">
                                                            255
                                                        </span>
                                                    </div>

                                                    <div className="rounded-full bg-gray-50 h-18 m-auto">
                                                        <div className="text-xs h-12 w-12 flex content-center font-bold rounded-full bg-purple-400 text-white items-center justify-center " >
                                                            <span>SPD</span>
                                                        </div>
                                                        <span className="block font-semibold text-xs text-center px-2 py-3">
                                                            255
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-gray-100 rounded-xl p-5 md:col-span-2" >
                                                <h5 className="font-bold">EVOLUTIONS</h5>
                                                <div className="py-3 grid grid-cols-1 gap-3 md:grid-cols-3 ">
                                                    <div className="inline-flex justify-center flex-col">
                                                        <img className="m-auto rounded-md " src={animatedFrontImgUrl} alt="" />
                                                        <span className="inline-block pt-2 font-semibold text-xs text-center text-gray-600">BULBASAUR</span>
                                                    </div>
                                                    <div className="inline-flex justify-center flex-col">
                                                        <img className="m-auto rounded-md" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif" alt="" />
                                                        <span className="inline-block pt-2 font-semibold text-xs text-center text-gray-600">IVYSAUR</span>
                                                    </div>
                                                    <div className="inline-flex justify-cente flex-col">
                                                        <img className="m-auto rounded-md" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif" alt="" />
                                                        <span className="inline-block pt-2 font-semibold text-xs text-center text-gray-600">VENUSAUR</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end of modal body */}
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog >
        </Transition.Root >
    )
}
