import { Button } from 'antd';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from '../redux/hooks';
import { setUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';

type TInputs = {
  userId: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<TInputs>({
    defaultValues: {
      userId: 'A-0001',
      password: 'test1234',
    },
  });
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<TInputs> = async (data) => {
    const userInfo = {
      id: data.userId,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();

    const user = verifyToken(res.data.accessToken);

    dispatch(setUser({ user: user, token: res.data.accessToken }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="userId">ID:</label>
        <input {...register('userId')} type="text" id="userId" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input {...register('password')} type="text" id="password" />
      </div>
      <div>
        <Button htmlType="submit">Submit</Button>
      </div>
    </form>
  );
};

export default Login;
