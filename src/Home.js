import React from "react";
import Bar from "./component/Bar";
import Graph from "./component/Graph";
import Layout from "./component/Layout";
import TableLOTTO from "./component/TableLOTTO";


const Home = () => {

    return (
        <>

            {/* <Bar></Bar>
            <Graph></Graph>
            <TableLOTTO></TableLOTTO> */}

            <Layout>
                <Bar></Bar>
                <Graph></Graph>
                <TableLOTTO></TableLOTTO>
            </Layout>
        </>
    );
};
export default Home;