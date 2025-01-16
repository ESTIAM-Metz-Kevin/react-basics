import { CardBody } from "./CardBody"
import { CardImg } from "./CardImg"

export function Card() {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <CardImg />
            <CardBody
                title="Super Chaussure"
                description="A ta place je ne manquerai pas de l'acheter ;)"
                buttonTxt="Acheter"
            />
        </div>
    )
}