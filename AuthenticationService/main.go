package main

import (
	"AuthenticationService/app"
)

func main() {

	cfg := app.Config{
		Addr: ":8080",
	}

	app := app.Application{
		Config: cfg,
	}

	app.Run()
}
