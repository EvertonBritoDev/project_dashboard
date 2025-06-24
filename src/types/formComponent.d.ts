// work here 23 06 2025 15:32
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> 

export type MessageProps = {
  msg: string
  type: 'error' | 'success'
}

export interface FormComponentProps {
  inputs: InputProps[]
  buttons: ButtonProps[]
  message?: MessageProps
}
