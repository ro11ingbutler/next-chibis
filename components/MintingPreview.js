import Image from "next/image"
import rb from "/public/rb.png"
import eyes1 from "/public/traits/eyes/eyes1.png"
import base from "/public/traits/base/base.png"

export default function MintingPreview(props) {

    const selectedTraits = props.selectedTraits

    return (
        <>

            <Image src={base} layout="fill" objectFit="contain" alt="..." className="absolute"></Image>
            {selectedTraits.eyes && <Image src={selectedTraits.eyes.image} layout="fill" objectFit="contain" alt="..." className="absolute"></Image>}
            {selectedTraits.hair && <Image src={selectedTraits.hair.image} layout="fill" objectFit="contain" alt="..." className="absolute"></Image>}
        </>
    )
}