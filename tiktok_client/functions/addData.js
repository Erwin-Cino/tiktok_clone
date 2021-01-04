const { createClient } = require("@astrajs/collections")
const utils = require('./utils')

const collection = 'tktkposts'
exports.handler = async function (event, context, callback) {
    console.log("ENV VARIABLE", process.env.ASTRA_DB_ID)
    console.log("ENV VARIABLE", process.env.ASTRA_DB_REGION)
    console.log("ENV VARIABLE", process.env.ASTRA_DB_USERNAME)
    console.log("ENV VARIABLE", process.env.ASTRA_DB_PASSWORD)
    console.log("ENV KEYSPACE", process.env.ASTRA_DB_KEYSPACE)
    const astraClient = await createClient({
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        username: process.env.ASTRA_DB_USERNAME,
        password: process.env.ASTRA_DB_PASSWORD,
    });
    const posts = astraClient.namespace(process.env.ASTRA_DB_KEYSPACE).collection(collection)
    try {
        utils.sampleData.map(async (item, index) => {
            await posts.create(item.id, item)
        })
        return {
            statusCode: 200,
        }
    } catch (error) {
        console.log("ERROR", error)
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }
}
