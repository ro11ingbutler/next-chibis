import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceMehBlank } from "@fortawesome/free-solid-svg-icons"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { faShirt } from "@fortawesome/free-solid-svg-icons"
import { faImage } from "@fortawesome/free-solid-svg-icons"
import { faUserNinja } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { faHandSparkles } from "@fortawesome/free-solid-svg-icons"

import Divider from './Divider'

export default function MintingSummary(props) {
    const { selectedTraits } = props
    return (
        <>
            <div className="text-white">
                <p className="text-3xl ">Traits</p>
                <Divider></Divider>
                <ul className="p-2">
                    <li className="flex place-items-center gap-3"><FontAwesomeIcon className="h-4" icon={faEye} /> {selectedTraits.eyes ? selectedTraits.eyes.name : "Unequipped"}</li>
                    <li className="flex place-items-center gap-3"><FontAwesomeIcon className="h-4" icon={faFaceMehBlank} /> {selectedTraits.mouth ? selectedTraits.mouth.name : "Unequipped"}</li>
                    <li className="flex place-items-center gap-3"><FontAwesomeIcon className="h-4" icon={faUserNinja} /> {selectedTraits.hair ? selectedTraits.hair.name : "Unequipped"}</li>
                    <li className="flex place-items-center gap-3"><FontAwesomeIcon className="h-4" icon={faShirt} /> {selectedTraits.body ? selectedTraits.body.name : "Unequipped"}</li>
                    <li className="flex place-items-center gap-3"><FontAwesomeIcon className="h-4" icon={faImage} /> {selectedTraits.bg ? selectedTraits.bg.name : "Unequipped"}</li>
                    <li className="flex place-items-center gap-3"><FontAwesomeIcon className="h-4" icon={faImage} /> {selectedTraits.bg ? selectedTraits.bg.name : "Unequipped"}</li>
                    <li className="flex place-items-center gap-3"><FontAwesomeIcon className="h-4" icon={faImage} /> {selectedTraits.bg ? selectedTraits.bg.name : "Unequipped"}</li>
                </ul>
                <Divider></Divider>
                <p className='pl-1 pt-1 flex place-items-center gap-3'><FontAwesomeIcon className="h-4" icon={faStar} /> UNIQUE COMBO</p>
                <p className='pl-1 flex place-items-center gap-3'><FontAwesomeIcon className="h-4" icon={faHandSparkles} /> SPECIAL COMBO</p>
            </div>
        </>
    )
}