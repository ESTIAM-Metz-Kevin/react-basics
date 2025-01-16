import { PrimaryButton } from "../Button/PrimaryButton"
import { CardImg } from "./CardImg"

type Props = {
    title: string
    description: string
    buttonTxt: string
}

export function Card(props: Props) {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <CardImg />
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.description}</p>
                <div className="card-actions justify-end">
                    <PrimaryButton txt={props.buttonTxt} />
                </div>
            </div>
        </div>
    )
}