import { CardBody } from "./CardBody"
import { CardImg } from "./CardImg"

export function Card() {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <CardImg />
            <CardBody />
        </div>
    )
}