import { Button } from "antd"
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom"
import "./Layout.scss"

type Props = {
    children: React.ReactNode,
    backButton?: boolean,
    title?: string,
}

function Layout({ children, backButton = false, title = "Menu" }: Props): JSX.Element {
    const history = useHistory()
    return (
        <div className="Layout">
            {backButton && (
                <nav className="back-btn">
                    <Button type="primary" shape="circle" icon={<ArrowLeftOutlined />} onClick={history.goBack} />
                </nav>
            )}
            <header>
                <h1>{title}</h1>
            </header>
            <main>{children}</main>
        </div>
    )
}

export default Layout
