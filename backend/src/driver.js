import neo4j from 'neo4j-driver';

const driver = neo4j.driver(
    `bolt://${process.env.NEO4J_HOST}:7687`,
    neo4j.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD)
);
export default driver;
