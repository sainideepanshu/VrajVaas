package app

import (
	config "AuthenticationService/config/env"
	"AuthenticationService/router"
	"fmt"
	"net/http"
	"time"
)

type Config struct {
	Addr string // PORT
}

type Application struct {
	Config Config
}

// Constructor for Config
func NewConfig() Config {

	port := config.GetString("PORT", ":8080")

	return Config{
		Addr: port,
	}
}

// Constructor for Application
func NewApplication(cfg Config) *Application {
	return &Application{Config: cfg}
}

func (app *Application) Run() error { // it is the member function of Application struct

	server := &http.Server{
		Addr:         app.Config.Addr,
		Handler:      router.SetupRouter(),              
		ReadTimeout:  10 * time.Second, // Set read timeout to 10 seconds
		WriteTimeout: 10 * time.Second, // Set write timeout to 10 seconds
	}

	fmt.Println("Starting server on", app.Config.Addr)

	return server.ListenAndServe()
}
