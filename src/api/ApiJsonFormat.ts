import User from "../models/User";
import Pet from "../models/Pet";

export interface BaseResponse<T> {
	statusCode: number,
	data: T,
	message: string
}

export interface TokenUserResponse {
	token: string,
	user: User
}

export interface LoginResponse extends BaseResponse<TokenUserResponse> {

}

export interface RegisterResponse extends BaseResponse<TokenUserResponse> {

}

export interface AllPetsResponse extends BaseResponse<Pet[]> {

}

export interface PetDetailResponse extends BaseResponse<Pet> {

}

export interface UserResponse extends BaseResponse<User> {

}
