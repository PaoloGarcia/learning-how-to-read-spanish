import { Button } from "antd";
import "./Card.scss";

type CardProps = {
    text: string;
    sound?: string;
};

function Card({ text, sound }: CardProps): JSX.Element {
    return (
        <div className="Card">
            <Button type="primary" shape="round" size="small" ghost>
                {text}
            </Button>
        </div>
    );
}

export default Card;
