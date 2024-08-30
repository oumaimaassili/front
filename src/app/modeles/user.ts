export interface register{
    id:string,
    firstName:string,
    lastName:string,
    email:string,
    password:string,
}
export interface AuthenticationResponse {
    accessToken: string;
    refreshToken: string;
  }
  export interface AuthenticationRequest {
    email: string;
    password: string;
  }