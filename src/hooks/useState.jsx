import { useState } from "react";

const useFormState = () => {
  const [boyut, setBoyut] = useState("");
  const [hamur, setHamur] = useState("");
  const [malzemeler, setMalzemeler] = useState([]);
  const [siparisNotu, setSiparisNotu] = useState("");
  const [urunSayisi, setUrunSayisi] = useState(1);

  return {
    boyut,
    setBoyut,
    hamur,
    setHamur,
    malzemeler,
    setMalzemeler,
    siparisNotu,
    setSiparisNotu,
    urunSayisi,
    setUrunSayisi,
  };
};

export default useFormState;
