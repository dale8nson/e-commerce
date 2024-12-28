import { ChangeEventHandler, JSX, ReactElement, useId } from "react"

type Form = {
  ({ children }: { children: FormChildren }): JSX.Element
  Title: Title
  Input: Input
  Button: Button
}

type FormChildren = [ReactElement<string, Title>, ReactElement<string, Button>, ...ReactElement<string, Input>[]]

type Title = ({ children }: { children: string }) => JSX.Element
type Button = ({ children }: { children: string }) => JSX.Element

type InputChildren = [ReactElement<string, Label>?]

interface Input {
  ({ value, onChange, children }: {value:string, onChange?: ChangeEventHandler<HTMLInputElement>, children: InputChildren }): JSX.Element
  Label: Label
  Email: Email
}

type Email = ({value, placeholder, onChange, children }: {value:string, placeholder?: string, onChange: ChangeEventHandler, children?: InputChildren }) => JSX.Element


type Label = ({ children }: { children: string }) => JSX.Element

const Form: Form = ({children}) => {
  const title = children.find(child => child?.type.name === Title.name)
  const inputs = children.filter(child => child?.type.name === Email.name)
  const button = children.find(child => child?.type.name === Button.name)
  return <div className="flex flex-col bg-black leading-8 p-4 m-4 rounded-3xl px-8 gap-10 py-10">
    {title}
    <div className="flex flex-col gap-4">
      {inputs}
      {button}
    </div>
  </div>
}

const Button: Button = ({ children }) => {
  return <button className="bg-white text-black rounded-xl w-full" type="submit">{children}</button>
}

const Title: Title = ({ children }) => {
  return <h1 className="text-[32px] text-white font-black">{children}</h1>
}

const Input: Input = ({ children }) => {
  return <div className="rounded-xl bg-white text-base text-black">
    <input type="text" />
  </div>
} 

const Label: Label = ({ children }) => {
  return <label>{children}</label>
}

Input.Label = Label

const Email: Email = ({ value, placeholder, onChange, children }) => {
  console.log("children: ", children)
  const label = children
  const id = useId()
  return <div className="flex flex-col rounded-xl bg-white text-black text-base">
    {label && <label htmlFor={id}>{label}</label>}
    <div className="flex before:content-[url('/Mail.svg')] before:h-8 before:w-8 before:content-center before:pl-2 before:bg-white before:rounded-xl"><input className="placeholder:text-opacity-40 bg-white text-black text-base rounded-xl p-1 w-full" id={id} value={value} placeholder={placeholder} onChange={onChange} type="email" /></div>
  </div>
}

Input.Email = Email

Form.Title = Title
Form.Button = Button
Form.Input = Input

export { Form }

