import { Button, Input, Field, Label } from '@headlessui/react';
import { useState } from 'react';
import { useUserStore } from '../store/user.ts';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useUserStore();
  const [username, setUsername] = useState<string>('');

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handleClickLogin = () => {
    login(username);
    navigate('/');
  };
  return (
    <div className="flex flex-col justify-center items-center flex-grow gap-4 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
      <Field>
        <Label className="text-sm text-black dark:text-white">이름</Label>
        <Input
          name="username"
          type="text"
          data-focus
          data-hover
          onChange={handleChangeUsername}
          value={username}
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
      </Field>
      <Button
        onClick={handleClickLogin}
        className="w-full rounded bg-red-600 py-2 px-4 text-sm text-white hover:bg-red-500 active:bg-red-700 transition"
      >
        로그인
      </Button>
    </div>
  );
};

export default LoginPage;
