import { PrimaryButton } from "../Button/PrimaryButton";

export function CardBody() {
    return (
        <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
                <PrimaryButton />
            </div>
        </div>
    )
}