//work here 01 07 2025 13:50
export interface ProfileEditableData {
  name: string
  phone: string
}

export interface ProfileData extends ProfileEditableData {
  email: string
}

export interface createProfileData {
  name: string
  email: string
  phone: string
  password: string
  message?: string | null
}
