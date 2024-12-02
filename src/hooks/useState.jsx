import { useState } from "react";
import data from "../assets/data";

const useFormState = () => {
  const [boyut, setBoyut] = useState("");
  const [hamur, setHamur] = useState("");
  const [malzemeler, setMalzemeler] = useState([]);
  const [siparisNotu, setSiparisNotu] = useState("");
  const [urunSayisi, setUrunSayisi] = useState(1);
  const [toplamTutar, setToplamTutar] = useState(85.5);

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
    toplamTutar,
    setToplamTutar,
  };
};

export default useFormState;
