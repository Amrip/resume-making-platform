import React from 'react';
import { useNavigate } from 'react-router';
import { shell } from 'electron';
function Source() {
  const navigate = useNavigate();
  shell.openExternal('https://github.com/Amrip/resume-making-platform');
  React.useEffect(() => {
    navigate('/');
  });
  return <></>;
}
export default Source;
