// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  Card,
  Heading,
  Para,
  ErrorMsg,
  Input,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState(
    'Your Password must be at least 8 characters',
  )
  const onChangePassword = event => {
    const {value} = event.target
    setPassword(value)
    if (value.length < 8) {
      setErrorMsg('Your Password must be at least 8 characters')
    } else {
      setErrorMsg('')
    }
  }
  return (
    <MainContainer>
      <Card>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <Input type="password" value={password} onChange={onChangePassword} />

        {errorMsg.length > 0 && <ErrorMsg>{errorMsg}</ErrorMsg>}
      </Card>
    </MainContainer>
  )
}

export default PasswordValidator
