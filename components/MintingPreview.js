import Image from "next/image"
import rb from "/public/rb.png"
import eyes1 from "/public/traits/eyes/eyes1.png"
import base from "/public/traits/base/base.png"

export default function MintingPreview(props) {

    const selectedTraits = props.selectedTraits

    return (
        <>

            {selectedTraits.bg && <Image src={selectedTraits.bg.image} layout="fill" objectFit="contain" alt="..." className="absolute"></Image>}
            <Image src={base} layout="fill" objectFit="contain" alt="..." className="absolute"></Image>
            {selectedTraits.eyes && <Image src={selectedTraits.eyes.image} layout="fill" objectFit="contain" alt="..." className="absolute"></Image>}
            {selectedTraits.hair && <Image src={selectedTraits.hair.image} layout="fill" objectFit="contain" alt="..." className="absolute"></Image>}
            {selectedTraits.mouth && <Image src={selectedTraits.mouth.image} layout="fill" objectFit="contain" alt="..." className="absolute"></Image>}
            {selectedTraits.body && <Image src={selectedTraits.body.image} layout="fill" objectFit="contain" alt="..." className="absolute"></Image>}
        </>
    )
}