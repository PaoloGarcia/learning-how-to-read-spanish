import { Button } from "antd"
import "./Card.scss"

type Props = {
    text: string,
    sound?: string
}

function Card({ text, sound }: Props): JSX.Element {
    return (
        <div className="Card">
            <Button type="primary" shape="round" size="small" ghost>
                {text}
            </Button>
        </div>
    )
}

export default Card
