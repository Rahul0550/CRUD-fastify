import { FastifyPluginAsync } from 'fastify'

interface Query {
  greeting?: string
}

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return { hello: 'world' }
  })

  fastify.post<{Querystring: Query}>('/hello', async (req, res) =>{
    // res.status(201).send({ hello: 'world again!' })

    return  { hello: req.query.greeting || 'world again!' }
  })
}

export default root
