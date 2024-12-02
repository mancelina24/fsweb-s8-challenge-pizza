import { useState } from "react";

const useFormState = () => {
  const [boyut, setBoyut] = useState("");
  const [hamur, setHamur] = useState("");
  const [malzemeler, setMalzemeler] = useState([]);
  const [siparisNotu, setSiparisNotu] = useState("");

  return {
    boyut,
    setBoyut,
    hamur,
    setHamur,
    malzemeler,
    setMalzemeler,
    siparisNotu,
    setSiparisNotu,
  };
};

export default useFormState;
