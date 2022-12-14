import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShuffle } from "@fortawesome/free-solid-svg-icons"
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons"
import { faMagicWandSparkles } from "@fortawesome/free-solid-svg-icons"

import Image from "next/image"
import TraitDropdown from "./TraitDropdown"
import MintingPreview from "./MintingPreview"
import MintingSummary from "./MintingSummary"
import Button from "./Button"

import eyes1 from "/public/traits/eyes/eyes1.png"
import eyes2 from "/public/traits/eyes/eyes2.png"

import hair1 from "/public/traits/hair/hair1.png"
import hair2 from "/public/traits/hair/hair2.png"
import hair3 from "/public/traits/hair/hair3.png"

import bg1 from "/public/traits/bg/bg1.png"
import bg2 from "/public/traits/bg/bg2.png"

import body1 from "/public/traits/body/body1.png"
import body2 from "/public/traits/body/body2.png"

import mouth1 from "/public/traits/mouth/mouth1.png"
import mouth2 from "/public/traits/mouth/mouth2.png"


export default function MintingGrid() {

    const [traits, setTraits] = useState({
        eyes: [{ id: "eyes1", name: "Jester Eyes", image: eyes1 }, { id: "eyes2", name: "Tiger Eyes", image: eyes2 }],
        body: [{ id: "body1", name: "Body 1", image: body1 }, { id: "body2", name: "Body 2", image: body2 }],
        mouth: [{ id: "mouth1", name: "Mouth 1", image: mouth1 }, { id: "mouth2", name: "Mouth 2", image: mouth2 }],
        hair: [{ id: "hair1", name: "Hair 1", image: hair1 }, { id: "hair2", name: "Hair 2", image: hair2 }, { id: "hair3", name: "Hair 3", image: hair3 }],
        bg: [{ id: "bg1", name: "BG 1", image: bg1 }, { id: "bg2", name: "BG 2", image: bg2 }],
    })

    const defaultTraits = {
        eyes: null,
        body: null,
        mouth: null,
        hair: null,
        bg: null,
    }

    const [selectedTraits, setSelectedTraits] = useState(defaultTraits)

    function handleTraitChange(event, type) {
        const newTrait = {}

        if (!event.target.value) {
            newTrait[type] = null
            setSelectedTraits({ ...selectedTraits, ...newTrait })
        } else {
            newTrait[type] = traits[type].find(item => item.id === event.target.value)

            setSelectedTraits({ ...selectedTraits, ...newTrait })
        }
    }

    function handleMintClick(event) {

    }

    function handleRandomiseClick(event) {
        const newTrait = defaultTraits

        newTrait.eyes = traits.eyes[Math.floor(Math.random() * traits.eyes.length)]
        newTrait.body = traits.body[Math.floor(Math.random() * traits.body.length)]
        newTrait.mouth = traits.mouth[Math.floor(Math.random() * traits.mouth.length)]
        newTrait.hair = traits.hair[Math.floor(Math.random() * traits.hair.length)]
        newTrait.bg = traits.bg[Math.floor(Math.random() * traits.bg.length)]

        setSelectedTraits({ ...selectedTraits, ...newTrait })
    }

    function handleRedoClick() {
        setSelectedTraits({ ...selectedTraits, ...defaultTraits })
    }

    return (
        <>
            <div className="grid grid-flow-col h-4/6 columns-3 container mx-auto my-12 relative bg-gradient-to-br from-blue-900/20 via-transparent to-blue-900/20
            ">
                <div className="flex flex-col justify-center col-span-1">
                    <div className="p-2 place-content-center bg-blue-900/10">
                        <TraitDropdown traits={traits.eyes} selectedTrait={selectedTraits.eyes} type="eyes" onTraitChange={handleTraitChange}></TraitDropdown>
                    </div>
                    <div className="p-2 place-content-center ">
                        <TraitDropdown traits={traits.mouth} selectedTrait={selectedTraits.mouth} type="mouth" onTraitChange={handleTraitChange}></TraitDropdown>
                    </div>
                    <div className="p-2 place-content-center bg-blue-900/10">
                        <TraitDropdown traits={traits.hair} selectedTrait={selectedTraits.hair} type="hair" onTraitChange={handleTraitChange}></TraitDropdown>
                    </div>
                    <div className="p-2 place-content-center">
                        <TraitDropdown traits={traits.body} selectedTrait={selectedTraits.body} type="body" onTraitChange={handleTraitChange}></TraitDropdown>
                    </div>
                    <div className="p-2 place-content-center bg-blue-900/10">
                        <TraitDropdown traits={traits.bg} selectedTrait={selectedTraits.bg} type="bg" onTraitChange={handleTraitChange}></TraitDropdown>
                    </div>
                    <div className="p-2 place-content-center">
                        <TraitDropdown traits={traits.bg} selectedTrait={selectedTraits.bg} type="bg" onTraitChange={handleTraitChange}></TraitDropdown>
                    </div>
                    {/* <div className="p-2 place-content-center bg-blue-900/10">
                        <TraitDropdown traits={traits.bg} selectedTrait={selectedTraits.bg} type="bg" onTraitChange={handleTraitChange}></TraitDropdown>
                    </div> */}
                </div>
                <div className="h-full flex place-content-center col-span-6 p-4">
                    <div className="relative h-full w-full">
                        <MintingPreview selectedTraits={selectedTraits}></MintingPreview>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="h-full grid grid-flow-row p-4 bg-blue-900/10">
                        <MintingSummary selectedTraits={selectedTraits}></MintingSummary>
                        <div className="flex flex-col gap-4 place-self-end justify-self-stretch">
                            <Button outline onClick={handleRedoClick} className="flex place-items-center gap-3"><FontAwesomeIcon icon={faRotateLeft} className="h-4"></FontAwesomeIcon>Redo</Button>
                            <Button outline onClick={handleRandomiseClick} className="flex place-items-center gap-3"><FontAwesomeIcon icon={faShuffle} className="h-4"></FontAwesomeIcon> Randomise</Button>
                            <Button outline onClick={handleMintClick} className="flex place-items-center gap-3"><FontAwesomeIcon icon={faMagicWandSparkles} className="h-4"></FontAwesomeIcon>Mint</Button>
                        </div>
                    </div>
                </div>

                <div className="absolute -inset-x-24 bottom-0 h-px bg-blue-300/40 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -inset-y-8 left-0 w-px bg-blue-300/40 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -inset-y-24 right-0 w-px bg-blue-300/40 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -inset-x-24 top-0 h-px bg-blue-300/40 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            </div>
            {/* <div className="lg:h-4/6 lg:w-4/6 container mx-auto my-12 grid grid-cols-4 relative bg-gradient-to-br from-blue-900/20 via-transparent to-blue-900/20 p-10">

                <div className="grid grid-flow-col p-2 gap-4 place-content-center bg-blue-900/10">
                    <TraitDropdown traits={traits.eyes} selectedTrait={selectedTraits.eyes} type="eyes" onTraitChange={handleTraitChange}></TraitDropdown>
                </div>
                <div className="col-start-2 col-span-2 row-span-4 relative m-6">
                    <MintingPreview selectedTraits={selectedTraits}></MintingPreview>
                </div>
                <div className="grid grid-flow-col p-2 gap-4 place-content-center bg-blue-900/10">
                    <TraitDropdown traits={traits.hair} selectedTrait={selectedTraits.hair} type="hair" onTraitChange={handleTraitChange}></TraitDropdown>
                </div>
                <div className="grid grid-flow-col p-2 gap-4 place-content-center ">
                    <TraitDropdown traits={traits.mouth} selectedTrait={selectedTraits.mouth} type="mouth" onTraitChange={handleTraitChange}></TraitDropdown>
                </div>
                <div className="grid grid-flow-col p-2 gap-4 place-content-center">
                    <TraitDropdown traits={traits.body} selectedTrait={selectedTraits.body} type="body" onTraitChange={handleTraitChange}></TraitDropdown>
                </div>
                <div className="grid grid-flow-col p-2 gap-4 place-content-center bg-blue-900/10">
                    <TraitDropdown traits={traits.bg} selectedTrait={selectedTraits.bg} type="bg" onTraitChange={handleTraitChange}></TraitDropdown>
                </div>
                <div className="grid grid-flow-row gap-4 row-span-3 p-6 bg-blue-900/10">
                    <MintingSummary selectedTraits={selectedTraits}></MintingSummary>
                    <Button outline onClick={handleMintClick} className="flex place-items-center gap-3"><FontAwesomeIcon icon={faMagicWandSparkles} className="h-4"></FontAwesomeIcon>Mint</Button>
                </div>
                <div className="grid grid-flow-col p-2 gap-4 place-content-center">
                    <TraitDropdown traits={traits.bg} selectedTrait={selectedTraits.bg} type="bg" onTraitChange={handleTraitChange}></TraitDropdown>
                </div>
                <div className="grid grid-flow-col p-2 gap-4 place-content-center bg-blue-900/10">
                    <TraitDropdown traits={traits.bg} selectedTrait={selectedTraits.bg} type="bg" onTraitChange={handleTraitChange}></TraitDropdown>
                </div>

                <div className="col-span-2 grid gap-4 grid-flow-col place-content-center">
                    <Button outline onClick={handleRedoClick} className="flex place-items-center gap-3"><FontAwesomeIcon icon={faRotateLeft} className="h-4"></FontAwesomeIcon>Redo</Button>
                    <Button outline onClick={handleRandomiseClick} className="flex place-items-center gap-3"><FontAwesomeIcon icon={faShuffle} className="h-4"></FontAwesomeIcon> Randomise</Button>
                </div>

                <div className="absolute -inset-x-24 bottom-0 h-px bg-blue-300/40 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -inset-y-8 left-0 w-px bg-blue-300/40 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -inset-y-24 right-0 w-px bg-blue-300/40 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -inset-x-24 top-0 h-px bg-blue-300/40 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            </div> */}
        </>
    )
}