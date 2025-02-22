import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import books from '././books'
import authors from './authors'
import DB from './db'
import exp from 'constants'
export const runtime = 'edge'

const app = new Hono().basePath('/api')
const routes = app.route('/authors', authors).route('/books', books).route('/db', DB)

export const GET = handle(app)
export const POST = handle(app)
export type AppType = typeof routes