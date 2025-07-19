package router

import (
	"AuthenticationService/controllers"
	"github.com/go-chi/chi/v5"
)

type Router interface {
	Register(r chi.Router)
}

func SetupRouter() *chi.Mux {

	chiRouter := chi.NewRouter() // Create a new Chi router

	chiRouter.Get("/ping", controllers.PingHandler) 

	return chiRouter

}