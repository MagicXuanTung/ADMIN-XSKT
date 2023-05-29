import React from "react";
import Bar from "./component/Bar";
import Graph from "./component/Graph";
import Layout from "./component/Layout";

const Home = () => {

    return (
        <>
            <Layout>
                <Bar></Bar>
                <Graph></Graph>
            </Layout>
            {/* <Bar></Bar>
            <Graph></Graph> */}
        </>
    );
};
export default Home;