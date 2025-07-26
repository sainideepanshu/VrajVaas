package dto

type LoginUserRequestDTO struct {
	Email    string `json:"email" validate:"required,email"`
	Password string `json:"password" validate:"required,min=8"`      // Password must be at least 8 characters long
}

type CreateUserRequestDTO struct {
	Username string `json:"username" validate:"required,min=3,max=20"`      // Username must be between 3 and 20 characters long
	Email    string `json:"email" validate:"required,email"`
	Password string `json:"password" validate:"required,min=8"`           // Password must be at least 8 characters long
}