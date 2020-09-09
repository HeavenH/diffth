import { Request, Response } from 'express';

class HelloController {
  static welcome = async (request: Request, response: Response) => response.send('Api is running V.0.1')
}

export default HelloController;
