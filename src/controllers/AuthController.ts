import { CustomRequest, CustomResponse } from '../interfaces';
import AuthService from '../services/AuthService'

export default class UserController {
  async authUser(request: CustomRequest, response: CustomResponse) {
    try {
      const { email, password } = request.body;

      const authService = new AuthService();
      const auth = await authService.execute({
        email,
        password
      });

      response.send(auth);
    } catch(e) {
      response.handleHttpError(e)
    }
  }
}
