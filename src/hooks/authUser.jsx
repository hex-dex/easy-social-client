import Cookies from 'js-cookie';
import { useEffect, useMemo, useState } from 'react';
import { decodeToken, isExpired } from 'react-jwt';
import { useNavigate } from 'react-router-dom';

const authUser = () => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(Cookies.get('access-token'));
  const [user, expired] = useMemo(() => {
    let user = decodeToken(accessToken);
    let expired = isExpired(accessToken);
    return [user, expired];
  }, [accessToken]);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      Cookies.remove('access-token');
    }
  }, [user, expired]);
  return user;
};

export default authUser;
