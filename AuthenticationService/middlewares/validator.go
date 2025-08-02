package middlewares

import (
	"AuthenticationService/dto"
	"AuthenticationService/utils"
	"context"
	"fmt"
	"net/http"
)

func UserLoginRequestValidator(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		var payload dto.LoginUserRequestDTO  // Define the payload type for login requests

		// Read and decode the JSON body into the payload
		if err := utils.ReadJsonBody(r, &payload); err != nil {
			utils.WriteJsonErrorResponse(w, http.StatusBadRequest, "Invalid request body", err)
			return
		}

		// Validate the payload using the Validator instance
		if err := utils.Validator.Struct(payload); err != nil {
			utils.WriteJsonErrorResponse(w, http.StatusBadRequest, "Validation failed", err)
			return
		}

		fmt.Println("Payload received for login:", payload)

		// we need to create a new context because the request stream is already consumed by ReadJsonBody 

		ctx := context.WithValue(r.Context(), "payload", payload) // Create a new context with the payload , the new context is created from the original request context

		next.ServeHTTP(w, r.WithContext(ctx)) // Call the next handler in the chain using the new context
	})
}

func UserCreateRequestValidator(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		var payload dto.CreateUserRequestDTO

		// Read and decode the JSON body into the payload
		if err := utils.ReadJsonBody(r, &payload); err != nil {
			utils.WriteJsonErrorResponse(w, http.StatusBadRequest, "Invalid request body", err)
			return
		}

		// Validate the payload using the Validator instance
		if err := utils.Validator.Struct(payload); err != nil {
			utils.WriteJsonErrorResponse(w, http.StatusBadRequest, "Validation failed", err)
			return
		}

		ctx := context.WithValue(r.Context(), "payload", payload)

		next.ServeHTTP(w, r.WithContext(ctx)) // Call the next handler in the chain
	})
}

func CreateRoleRequestValidator(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		var payload dto.CreateRoleRequestDTO

		// Read and decode the JSON body into the payload
		if err := utils.ReadJsonBody(r, &payload); err != nil {
			utils.WriteJsonErrorResponse(w, http.StatusBadRequest, "Invalid request body", err)
			return
		}

		// Validate the payload using the Validator instance
		if err := utils.Validator.Struct(payload); err != nil {
			utils.WriteJsonErrorResponse(w, http.StatusBadRequest, "Validation failed", err)
			return
		}

		ctx := context.WithValue(r.Context(), "payload", payload)

		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

func UpdateRoleRequestValidator(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		var payload dto.UpdateRoleRequestDTO

		// Read and decode the JSON body into the payload
		if err := utils.ReadJsonBody(r, &payload); err != nil {
			utils.WriteJsonErrorResponse(w, http.StatusBadRequest, "Invalid request body", err)
			return
		}

		// Validate the payload using the Validator instance
		if err := utils.Validator.Struct(payload); err != nil {
			utils.WriteJsonErrorResponse(w, http.StatusBadRequest, "Validation failed", err)
			return
		}

		ctx := context.WithValue(r.Context(), "payload", payload)

		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

func AssignPermissionRequestValidator(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		var payload dto.AssignPermissionRequestDTO

		// Read and decode the JSON body into the payload
		if err := utils.ReadJsonBody(r, &payload); err != nil {
			utils.WriteJsonErrorResponse(w, http.StatusBadRequest, "Invalid request body", err)
			return
		}

		// Validate the payload using the Validator instance
		if err := utils.Validator.Struct(payload); err != nil {
			utils.WriteJsonErrorResponse(w, http.StatusBadRequest, "Validation failed", err)
			return
		}

		ctx := context.WithValue(r.Context(), "payload", payload)

		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

func RemovePermissionRequestValidator(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		var payload dto.RemovePermissionRequestDTO

		// Read and decode the JSON body into the payload
		if err := utils.ReadJsonBody(r, &payload); err != nil {
			utils.WriteJsonErrorResponse(w, http.StatusBadRequest, "Invalid request body", err)
			return
		}

		// Validate the payload using the Validator instance
		if err := utils.Validator.Struct(payload); err != nil {
			utils.WriteJsonErrorResponse(w, http.StatusBadRequest, "Validation failed", err)
			return
		}

		ctx := context.WithValue(r.Context(), "payload", payload)

		next.ServeHTTP(w, r.WithContext(ctx))
	})
}