"use client";

import { useEffect, useState } from "react";
import localization from "../../actions/localizationText";
import useTextData from "../../hooks/use-getText";
import useLogin from "../../hooks/use-auth";

const GetText = ({ children }) => {
  const { setTextData } = useTextData();
  const users = useLogin();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const getText = async () => {
      const textData = await localization(users?.user);
      setTextData(textData);
    };
    getText();
  }, [users.user, setTextData]);

  if (!isMounted) {
    return null;
  }

  return <div>{children}</div>;
};

export default GetText;
