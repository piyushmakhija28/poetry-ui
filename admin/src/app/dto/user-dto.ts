export interface UserDto {

    id: bigint,
    
    firstName: string,
    
    lastName: string,
    
    email: string,
    
    mobileNumber: string,
    
    role: number,
    
    username: string,
    
    emailVerified: boolean,
    
    mobileVerified: boolean,
    
    twoFactorAuthenticationEnabled: boolean,
    
    active: boolean,
    
    deleted: boolean

}
