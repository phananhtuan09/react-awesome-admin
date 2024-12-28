import { useNavigate } from 'react-router';
import { useCallback } from 'react';
import { ROOT_PATH } from '@/constants/path';
import logo from '@/assets/images/logo.png';

interface HeaderHomeProps {
  className?: string;
  classNameIcon?: string;
  classNameText?: string;
}

const HeaderHome = ({ className = '', classNameIcon = '', classNameText = '' }: HeaderHomeProps) => {
  const navigate = useNavigate();

  const navigateHome = useCallback(() => {
    navigate(ROOT_PATH);
  }, [navigate]);

  return (
    <div className={`flex flex-wrap items-center cursor-pointer ${className}`} onClick={navigateHome}>
      <img src={logo} className={`w-12 h-12 object-cover ${classNameIcon}`} />
      <span className={`ml-2 ${classNameText}`}>Awesome Admin</span>
    </div>
  );
};

export default HeaderHome;
