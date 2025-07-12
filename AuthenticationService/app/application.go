package app

import (
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

func NewConfig(addr string) Config {
	return Config{Addr: addr}
}

func NewApplication(cfg Config) *Application {
	return &Application{Config: cfg}
}

func (app *Application) Run() error { // it is the member function of Application struct

	server := &http.Server{
		Addr:         app.Config.Addr,
		Handler:      nil,              // TODO: Setup a chi router and put it here
		ReadTimeout:  10 * time.Second, // Set read timeout to 10 seconds
		WriteTimeout: 10 * time.Second, // Set write timeout to 10 seconds
	}

	fmt.Println("Starting server on", app.Config.Addr)

	return server.ListenAndServe()
}
