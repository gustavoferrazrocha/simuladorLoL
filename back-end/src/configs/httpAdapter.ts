import express, { Express } from "express";

export class HttpAdapter {
  private readonly app: Express

  constructor(private readonly port = process.env.PORT || 3000) {
    this.app = express()
  }

  init(callback?: (port: number | string) => void) {
    this.app.listen(this.port, () => {
      callback ? callback(this.port)
               : () => console.log(`[server]: Server is running at http://localhost:${this.port}`)
    })
  }

  getApp() {
    return this.app
  }
}

