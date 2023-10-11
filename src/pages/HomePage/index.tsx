import { Link } from "react-router-dom";
import { Button } from "antd";
import Layout from "../../components/Layout";
import "./HomePage.scss";

function Home(): JSX.Element {
   return (
      <Layout>
         <div className="Home">
            <Link to="abecedario/">
               <Button type="primary" shape="round" size="large">
                  ABC
               </Button>
            </Link>
            <Link to="silabas/">
               <Button type="primary" shape="round" size="large">
                  Silabas
               </Button>
            </Link>
            <Link to="palabras/">
               <Button type="primary" shape="round" size="large">
                  Palabras
               </Button>
            </Link>
         </div>
      </Layout>
   );
}

export default Home;
