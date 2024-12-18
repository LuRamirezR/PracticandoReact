import CustomForm from "../../CustomForm/CustomForm";

export const FormZod = () => {
  return (
    <div>
        <h2>Formulario con React y verificacion de datos con Zod</h2>
        <p>Para instalar el formulario react y zod</p>
        <pre>
            <code>
                {`
bun install react-hook-form zod @hookform/resolvers
                `}
            </code>
        </pre>
        <ul>
            <li>react-hook-form: libreria para hacer los formularios</li>
            <li>zod: para hacer validaciones</li>
            <li>@hookform/resolvers: el nexo que va a asociar el zod para las validaciones con react</li>
        </ul>
        <p>
        📂 La estructura del proyecto es la siguiente:
        </p>
        <pre>
            <code>
            {`
/src
└── components
└── CustomForm
├── components
│   ├── CustomInput.tsx      // Componente de entrada personalizado.
│   ├── CustomInput.css      // Estilos CSS para CustomInput.
├── models
│   ├── form.model.ts        // Esquema de validación y modelo de datos para el formulario.
├── CustomForm.tsx           // Componente principal del formulario.
            `}
            </code>
        </pre>
        <p>
            El código que va en el archivo <strong>CustomForm.tsx</strong> es:
            <pre>
                <code>
                {`
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import InputForm from "./components/CustomInput";
import "./components/CustomInput.css";
import { FormValues, schema } from "./models/form.model";

const CustomForm = () => {
    const {control, handleSubmit, formState: { errors }} = useForm<FormValues>({
        resolver: zodResolver(schema),
        mode: "onBlur", // para decir cuando voy a validar los datos del formulario
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputForm name="name" control={control} label="Name" type="text" error={errors.name} />
            <InputForm name="email" control={control} label="Email" type="email" error={errors.email} />
            <InputForm name="password" control={control} label="Password" type="password" error={errors.password} />
            <InputForm name="confirmPassword" control={control} label="Confirm Password" type="password" error={errors.confirmPassword} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default CustomForm;
                `}
                </code>
            </pre>
        </p>
        <p>
            El código que va en el archivo <strong>CustomInput.tsx</strong> es:
            <pre>
                <code>
                    {`
import { Control, Controller, FieldError } from "react-hook-form";
import { FormValues } from "../models/form.model";

interface Props {
    name: keyof FormValues;
    control: Control<FormValues>;
    label: string;
    type?: string;
    error?: FieldError
}

const InputForm = ({name, control, label, type, error}: Props) => {
    return (
        <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <Controller 
                name={name} 
                control={control} 
                render={ ({field}) => 
                    <input id={name} type={type} {...field} className={\`form-control \${error ? "is-invalid" : ""}\`} /> }"
                />
                {error && <p className="error">{error.message}</p>}
        </div>
    )
}

export default InputForm;
                    `}
                </code>
            </pre>
        </p>
        <p>
            Y en el archivo <strong>form.model.ts</strong> está el esquema de validación y el modelo de datos para el formulario:
            <pre>
                <code>
                    {`
import { z } from "zod";

export const schema = z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    email: z.string().email("Correo inválido").min(1, "El correo es obligatorio"),
    password: z.string().min(6, "La contraseña de tener al menos 6 caracteres"),
    confirmPassword: z.string().min(6, "La confirmación debe tener al menos 6 caracteres")
}).refine(data => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"]
})

export type FormValues = z.infer<typeof schema>;
                    `}
                </code>
            </pre>
        </p>
        <p>
            Y finalmente, puede visualizar el formulario en la siguiente sección:
        </p>
        <p>Luego de hacer click en el boton Submit, los datos que carga el formulario se ven en la consola del navegador</p>
        <CustomForm />
    </div>
  )
}

export default FormZod