import { Hono } from 'hono'
import { html, raw } from 'hono/html'

const app = new Hono() 

const View = () => {
  return (
    <html>
      <body>
        <h1>Hello Hono!</h1>
      </body>
    </html>
  )
}

app.get('/page', (c) => {
  return c.html(html`<View />`)
})
