package main

import (
	"AuthenticationService/app"
	config "AuthenticationService/config/env"
)

func main() {

	config.Load()

	cfg := app.NewConfig()

	app := app.NewApplication(cfg)

	app.Run()
}
