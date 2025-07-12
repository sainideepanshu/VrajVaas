package main

import (
	"AuthenticationService/app"
)

func main() {

	cfg := app.NewConfig(":8080") // Set the port to 8080 or any other desired port

	app := app.NewApplication(cfg)

	app.Run()
}
