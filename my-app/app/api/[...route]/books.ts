import { Hono } from 'hono'
const app = new Hono()
    .get('/home', (c) => c.json({
        Judul: 'Cinderella',
        Tahun_Terbit: 2012,
        Pengarang: 'Endang',
        Penerbit: 'Gramedia'
    }))

export default app