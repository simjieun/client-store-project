import { Button, Input } from '@headlessui/react';
import { useState } from 'react';
import { useUserStore } from '../store/user.ts';

const LoginPage = () => {
  const { login } = useUserStore();
  const [username, setUsername] = useState<string>('');

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleClickLogin = () => {
    login(username);
  };
  return (
    <div>
      <Input name="username" type="text" data-focus data-hover onChange={handleChangeUsername} value={username} />
      <Button
        onClick={handleClickLogin}
        className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
      >
        로그인
      </Button>
    </div>
  );
};

export default LoginPage;
