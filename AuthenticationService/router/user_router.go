package router

import (
	"AuthenticationService/controllers"
	"AuthenticationService/middlewares"

	"github.com/go-chi/chi/v5"
)

type UserRouter struct {
	userController *controllers.UserController
}

func NewUserRouter(_userController *controllers.UserController) Router {
	return &UserRouter{
		userController: _userController,
	}
}

func (ur *UserRouter) Register(r chi.Router) {
	r.With(middlewares.JWTAuthMiddleware).Get("/profile", ur.userController.GetUserById)
	r.With(middlewares.UserCreateRequestValidator).Post("/signup", ur.userController.CreateUser)
	r.With(middlewares.UserLoginRequestValidator).Post("/login", ur.userController.LoginUser)
}