import { Tabs } from "antd";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import { alphabet, consonants, vowels } from "../../constants";
import "./AlphabetPage.scss";

function AlphabetPage(): JSX.Element {
    const renderCards = (LettersArr: string[]): JSX.Element[] => {
        return LettersArr.map(
            (letter: string) => <Card key={letter} text={letter} />
        );
    };

    return (
        <Layout backButton title="Abecedario">
            <div className="AlphabetPage">
                <Tabs defaultActiveKey="1" centered size="small">
                    <Tabs.TabPane tab="Todas" key="1">
                        {renderCards(alphabet)}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Vocales" key="2">
                        {renderCards(vowels)}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Consonantes" key="3">
                        {renderCards(consonants)}
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </Layout>
    );
}

export default AlphabetPage;
