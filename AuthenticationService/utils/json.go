package utils

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/go-playground/validator/v10"
)

var Validator *validator.Validate

// first function to be called automatically when the package is imported
// This is useful for initializing the validator or any other package-level setup
// regardless of how many times that package is imported, the init() function will only be called once.

func init() {
	fmt.Println("Initializing utils package")
	Validator = NewValidator()
}

func NewValidator() *validator.Validate {
	return validator.New(validator.WithRequiredStructEnabled())          // It caches information about your struct and validations,
}

func WriteJsonResponse(w http.ResponseWriter, status int, data any) error {
	w.Header().Set("Content-Type", "application/json") // Set the content type to application/json

	w.WriteHeader(status) // Set the HTTP status code

	return json.NewEncoder(w).Encode(data) // Encode the data as JSON and write it to the response
}

func WriteJsonSuccessResponse(w http.ResponseWriter, status int, message string, data any) error {
	response := map[string]any{}

	response["status"] = "success"
	response["message"] = message
	response["data"] = data
	return WriteJsonResponse(w, status, response)
}

func WriteJsonErrorResponse(w http.ResponseWriter, status int, message string, err error) error {
	response := map[string]any{}
	response["status"] = "error"
	response["message"] = message
	response["error"] = err.Error()
	return WriteJsonResponse(w, status, response)
}

func ReadJsonBody(r *http.Request, result any) error {
	decoder := json.NewDecoder(r.Body) // Create a new JSON decoder using the request body
	decoder.DisallowUnknownFields() // Prevent unknown fields from being included in the JSON body
	return decoder.Decode(result)  
}