//work here 23 06 2025 15:34
import styled from 'styled-components'
import { FormComponentProps } from '@/types'
import { StyledButton, StyledInput, StyledP } from '@/components'
import { pxToRem } from '@/utils'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: ${pxToRem(16)};
`

function FormComponent(props: FormComponentProps) {
  const { inputs, buttons, message } = props
  return (
    <StyledForm>
      {inputs.map((inputProps, index) => (
        <StyledInput key={index} {...inputProps} />
      ))}
      {buttons.map((buttonProps, index) => (
        <StyledButton key={index} {...buttonProps} />
      ))}
      {message && ( //&& if exists message to execute all below
        <StyledP className={message.type === 'error' ? 'error' : 'success'}>
          {message.msg}
        </StyledP>
      )}
    </StyledForm>
  )
}

export default FormComponent
