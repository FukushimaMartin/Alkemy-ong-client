import 'bulma/css/bulma.min.css';
import { Formik, Form, Field } from "formik";
import { PostLogin } from "../../Services/privateApiService"
import {useNavigate} from "react-router-dom";
import { loginSchema } from '../../schemas';


const LoginForm =()=> {
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    const user = await PostLogin(data)
    console.log(user)
    navigate('/')
  }

    return(
        <div>
            
            <Formik 
                    initialValues={{
                        email:"",
                        password:""
                    }}
                    validationSchema={loginSchema}
                    onSubmit={onSubmit}
                    >
                        {({
                            errors, touched
                        }) => (
                            <Form className='box is-shadowless'>
                                <p className='field'>Bienvenido</p>
                                <h6 className='field'>Inicia sesión en tu cuenta!</h6>
                                <Field className="field input" name="email" type="email" placeholder="Email" />
                                {errors.email && touched.email ? <div>{errors.email}</div> : null}
                                <Field className=" field input" name="password" type="password" placeholder="Contraseña" />
                                {errors.password && touched.password ? <div>{errors.password}</div> : null}
                                <div className='has-text-centered'>
                                    <button className='button is-fullwidth' type="submit" style={{"background-color":"#FF0000", color:"white"}}>Inicia sesión</button>
                                </div>
                            </Form>
                        )}
            </Formik>
        </div>
    );
}

export default LoginForm;