type Props = {
    txt: string
}

export function PrimaryButton(props: Props) {
    return <button className="btn btn-primary">
        {props.txt}
    </button>
}